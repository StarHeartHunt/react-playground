import { useEffect, useRef, useState } from "react";

import { Editor, useMonaco } from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import { createHighlighter } from "shiki";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import { rollup } from "@rollup/browser";
import typescript, {
  JsxEmit,
  ModuleDetectionKind,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget,
} from "typescript";
import React from "react";
import ReactDomClient from "react-dom/client";
import ReactJSXRuntime from "react/jsx-runtime";
import ReactDom from "react-dom";

import prettier from "prettier/standalone";
import parserTypeScript from "prettier/plugins/typescript";
import parseBabel from "prettier/plugins/babel";
import parseHtml from "prettier/plugins/html";
import parseEsTree from "prettier/plugins/estree";
import parseMd from "prettier/plugins/markdown";
import parseCss from "prettier/plugins/postcss";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

import "./App.css";

loader.config({ monaco });

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

// Create the highlighter, it can be reused
const highlighter = await createHighlighter({
  themes: ["dark-plus", "light-plus"],
  langs: ["javascript", "typescript", "jsx", "tsx"],
});

const defaultCode = `import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div></div>;
}

createRoot(document.getElementById("preview-root")!).render(<App />);`;

export default function App() {
  const monaco = useMonaco();
  const [inputCode, setInputCode] = useState(defaultCode);
  const domId = useRef(Math.random());

  useEffect(() => {
    if (!inputCode) return;

    domId.current = Math.random();

    const modules: Record<string, string> = {
      "/main.tsx": typescript.transpile(inputCode, {
        module: ModuleKind.ESNext,
        target: ScriptTarget.ESNext,
        moduleResolution: ModuleResolutionKind.Bundler,
        allowImportingTsExtensions: true,
        verbatimModuleSyntax: true,
        moduleDetection: ModuleDetectionKind.Force,
        noEmit: true,
        jsx: JsxEmit.ReactJSX,
      }),
    };

    rollup({
      input: "/main.tsx",
      jsx: "react-jsx",
      external: (id) => !id.startsWith("."),
      plugins: [
        {
          name: "loader",
          resolveId(source) {
            if (Object.prototype.hasOwnProperty.call(modules, source)) {
              return source;
            }
          },
          load(id) {
            if (Object.prototype.hasOwnProperty.call(modules, id)) {
              return modules[id];
            }
          },
        },
      ],
    })
      .then((bundle) =>
        bundle.generate({
          format: "iife",
          name: "createModule",
          globals: (id) => `deps["${id}"]`,
        })
      )
      .then(({ output }) => {
        new Function("deps", output[0].code)({
          react: React,
          "react-dom/client": ReactDomClient,
          "react-dom": ReactDom,
          "react/jsx-runtime": ReactJSXRuntime,
        });
      });
  }, [inputCode]);

  useEffect(() => {
    if (!monaco) return;

    // Register the languageIds first. Only registered languages will be highlighted.
    monaco.languages.register({ id: "tsx" });
    monaco.languages.register({ id: "jsx" });
    monaco.languages.register({ id: "typescript" });
    monaco.languages.register({ id: "javascript" });

    shikiToMonaco(highlighter, monaco);

    monaco.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
      enableSchemaRequest: true,
      trailingCommas: "ignore",
    });

    monaco.typescript.typescriptDefaults.setCompilerOptions({
      allowJs: true,
      target: monaco.typescript.ScriptTarget.ESNext,
      module: monaco.typescript.ModuleKind.ESNext,
      allowNonTsExtensions: true,
      moduleResolution: monaco.typescript.ModuleResolutionKind.NodeJs,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.typescript.JsxEmit.React,
    });

    // monaco.typescript.typescriptDefaults.setDiagnosticsOptions({
    //   noSemanticValidation: true,
    //   noSyntaxValidation: true,
    //   noSuggestionDiagnostics: true,
    // });

    // 这里需要注意一下同样的language会覆盖掉对应的格式化代码的规则
    monaco.languages.registerDocumentFormattingEditProvider("typescript", {
      provideDocumentFormattingEdits(model) {
        const code = model.getValue();
        prettier
          .format(code, {
            parser: "typescript", // 格式化react
            jsxSingleQuote: true,
            plugins: [
              parseBabel,
              parseEsTree,
              parseCss,
              parserTypeScript,
              parseMd,
              parseHtml,
            ],

            tabWidth: 2,
            useTabs: false,
            endOfLine: "lf",
            arrowParens: "always",
            singleQuote: false,
            trailingComma: "es5",
            semi: true,
          })
          .then((res) => {
            model.setValue(res);
          });
        return [];
      },
    });

    fetch("https://unpkg.com/@types/react@19.2.7/index.d.ts")
      .then((res) => res.text())
      .then((reactTypes) => {
        monaco.typescript.typescriptDefaults.addExtraLib(
          reactTypes,
          "file:///node_modules/@types/react/index.d.ts"
        );
      });
    fetch("https://unpkg.com/@types/react-dom@19.2.3/client.d.ts")
      .then((res) => res.text())
      .then((reactTypes) => {
        monaco.typescript.typescriptDefaults.addExtraLib(
          reactTypes,
          "file:///node_modules/@types/react-dom/client.d.ts"
        );
      });
  }, [monaco]);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Editor
          height="100%"
          theme="dark-plus"
          defaultPath="index.tsx"
          defaultLanguage="typescript"
          defaultValue={defaultCode}
          onChange={(value) => setInputCode(value!)}
        />
      </div>
      <div className="preview w-1/2">
        <div id="preview-root" key={domId.current}></div>
      </div>
    </div>
  );
}
