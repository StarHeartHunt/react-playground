var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name6 in all)
    __defProp(target, name6, { get: all[name6], enumerable: true });
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/tmLangs/TypeScriptReact.tmLanguage.js
var TypeScriptReact_tmLanguage_exports = {};
__export(TypeScriptReact_tmLanguage_exports, {
  default: () => TypeScript_tmLanguage,
  name: () => name,
  patterns: () => patterns,
  repository: () => repository,
  scopeName: () => scopeName,
  version: () => version
});
var version, name, scopeName, patterns, repository, TypeScript_tmLanguage;
var init_TypeScriptReact_tmLanguage = __esm({
  "src/tmLangs/TypeScriptReact.tmLanguage.js"() {
    "use strict";
    version = "https://github.com/microsoft/TypeScript-TmLanguage/commit/6e50c6caaf0ef68a275480bc45db3e97952cd959";
    name = "TypeScript";
    scopeName = "source.tsx";
    patterns = [
      {
        include: "#directives"
      },
      {
        include: "#statements"
      },
      {
        include: "#shebang"
      }
    ];
    repository = {
      shebang: {
        name: "comment.line.shebang.tsx",
        match: "\\A(#!).*(?=$)",
        captures: {
          1: {
            name: "punctuation.definition.comment.tsx"
          }
        }
      },
      statements: {
        patterns: [
          {
            include: "#declaration"
          },
          {
            include: "#control-statement"
          },
          {
            include: "#after-operator-block-as-object-literal"
          },
          {
            include: "#decl-block"
          },
          {
            include: "#label"
          },
          {
            include: "#expression"
          },
          {
            include: "#punctuation-semicolon"
          },
          {
            include: "#string"
          },
          {
            include: "#comment"
          }
        ]
      },
      declaration: {
        patterns: [
          {
            include: "#decorator"
          },
          {
            include: "#var-expr"
          },
          {
            include: "#function-declaration"
          },
          {
            include: "#class-declaration"
          },
          {
            include: "#interface-declaration"
          },
          {
            include: "#enum-declaration"
          },
          {
            include: "#namespace-declaration"
          },
          {
            include: "#type-alias-declaration"
          },
          {
            include: "#import-equals-declaration"
          },
          {
            include: "#import-declaration"
          },
          {
            include: "#export-declaration"
          },
          {
            name: "storage.modifier.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "control-statement": {
        patterns: [
          {
            include: "#switch-statement"
          },
          {
            include: "#for-loop"
          },
          {
            name: "keyword.control.trycatch.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.control.loop.tsx"
              },
              2: {
                name: "entity.name.label.tsx"
              }
            }
          },
          {
            name: "keyword.control.loop.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              0: {
                name: "keyword.control.flow.tsx"
              }
            },
            end: "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "keyword.control.switch.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#if-statement"
          },
          {
            name: "keyword.control.conditional.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.control.with.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.control.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.other.debugger.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      label: {
        patterns: [
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)",
            beginCaptures: {
              1: {
                name: "entity.name.label.tsx"
              },
              2: {
                name: "punctuation.separator.label.tsx"
              }
            },
            end: "(?<=\\})",
            patterns: [
              {
                include: "#decl-block"
              }
            ]
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)",
            captures: {
              1: {
                name: "entity.name.label.tsx"
              },
              2: {
                name: "punctuation.separator.label.tsx"
              }
            }
          }
        ]
      },
      expression: {
        patterns: [
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            include: "#identifiers"
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      expressionWithoutIdentifiers: {
        patterns: [
          {
            include: "#jsx"
          },
          {
            include: "#string"
          },
          {
            include: "#regex"
          },
          {
            include: "#comment"
          },
          {
            include: "#function-expression"
          },
          {
            include: "#class-expression"
          },
          {
            include: "#arrow-function"
          },
          {
            include: "#paren-expression-possibly-arrow"
          },
          {
            include: "#cast"
          },
          {
            include: "#ternary-expression"
          },
          {
            include: "#new-expr"
          },
          {
            include: "#instanceof-expr"
          },
          {
            include: "#object-literal"
          },
          {
            include: "#expression-operators"
          },
          {
            include: "#function-call"
          },
          {
            include: "#literal"
          },
          {
            include: "#support-objects"
          },
          {
            include: "#paren-expression"
          }
        ]
      },
      expressionPunctuations: {
        patterns: [
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-accessor"
          }
        ]
      },
      decorator: {
        name: "meta.decorator.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        beginCaptures: {
          0: {
            name: "punctuation.decorator.tsx"
          }
        },
        end: "(?=\\s)",
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "var-expr": {
        patterns: [
          {
            name: "meta.var.expr.tsx",
            begin: "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            end: "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))",
            patterns: [
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: {
                    name: "keyword.control.export.tsx"
                  },
                  2: {
                    name: "storage.modifier.tsx"
                  },
                  3: {
                    name: "storage.type.tsx"
                  }
                },
                end: "(?=\\S)"
              },
              {
                include: "#destructuring-variable"
              },
              {
                include: "#var-single-variable"
              },
              {
                include: "#variable-initializer"
              },
              {
                include: "#comment"
              },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.comma.tsx"
                  }
                },
                end: "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  {
                    include: "#single-line-comment-consuming-line-ending"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#destructuring-variable"
                  },
                  {
                    include: "#var-single-variable"
                  },
                  {
                    include: "#punctuation-comma"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          },
          {
            name: "meta.var.expr.tsx",
            begin: "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "storage.type.tsx"
              }
            },
            end: "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))",
            patterns: [
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: {
                    name: "keyword.control.export.tsx"
                  },
                  2: {
                    name: "storage.modifier.tsx"
                  },
                  3: {
                    name: "storage.type.tsx"
                  }
                },
                end: "(?=\\S)"
              },
              {
                include: "#destructuring-const"
              },
              {
                include: "#var-single-const"
              },
              {
                include: "#variable-initializer"
              },
              {
                include: "#comment"
              },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.comma.tsx"
                  }
                },
                end: "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  {
                    include: "#single-line-comment-consuming-line-ending"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#destructuring-const"
                  },
                  {
                    include: "#var-single-const"
                  },
                  {
                    include: "#punctuation-comma"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          },
          {
            name: "meta.var.expr.tsx",
            begin: "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "storage.type.tsx"
              }
            },
            end: "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^using|[^\\._$[:alnum:]]using|^await\\s+using|[^\\._$[:alnum:]]await\\s+using)(?=\\s*$)))",
            patterns: [
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: {
                    name: "keyword.control.export.tsx"
                  },
                  2: {
                    name: "storage.modifier.tsx"
                  },
                  3: {
                    name: "storage.type.tsx"
                  }
                },
                end: "(?=\\S)"
              },
              {
                include: "#var-single-const"
              },
              {
                include: "#variable-initializer"
              },
              {
                include: "#comment"
              },
              {
                begin: "(,)\\s*((?!\\S)|(?=\\/\\/))",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.comma.tsx"
                  }
                },
                end: "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  {
                    include: "#single-line-comment-consuming-line-ending"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#var-single-const"
                  },
                  {
                    include: "#punctuation-comma"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "var-single-variable": {
        patterns: [
          {
            name: "meta.var-single-variable.expr.tsx",
            begin: "(?x)([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.tsx entity.name.function.tsx"
              },
              2: {
                name: "keyword.operator.definiteassignment.tsx"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.tsx",
            begin: "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.tsx variable.other.constant.tsx"
              },
              2: {
                name: "keyword.operator.definiteassignment.tsx"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.tsx",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.tsx variable.other.readwrite.tsx"
              },
              2: {
                name: "keyword.operator.definiteassignment.tsx"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-const": {
        patterns: [
          {
            name: "meta.var-single-variable.expr.tsx",
            begin: "(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.tsx variable.other.constant.tsx entity.name.function.tsx"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.tsx",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.tsx variable.other.constant.tsx"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-variable-type-annotation": {
        patterns: [
          {
            include: "#type-annotation"
          },
          {
            include: "#string"
          },
          {
            include: "#comment"
          }
        ]
      },
      "destructuring-variable": {
        patterns: [
          {
            name: "meta.object-binding-pattern-variable.tsx",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#object-binding-pattern"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          },
          {
            name: "meta.array-binding-pattern-variable.tsx",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#array-binding-pattern"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          }
        ]
      },
      "destructuring-const": {
        patterns: [
          {
            name: "meta.object-binding-pattern-variable.tsx",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#object-binding-pattern-const"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          },
          {
            name: "meta.array-binding-pattern-variable.tsx",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#array-binding-pattern-const"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          }
        ]
      },
      "object-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#binding-element"
              }
            ]
          },
          {
            include: "#object-binding-pattern"
          },
          {
            include: "#destructuring-variable-rest"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-const": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#binding-element-const"
              }
            ]
          },
          {
            include: "#object-binding-pattern-const"
          },
          {
            include: "#destructuring-variable-rest-const"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-propertyName": {
        begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
        end: "(:)",
        endCaptures: {
          0: {
            name: "punctuation.destructuring.tsx"
          }
        },
        patterns: [
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            name: "variable.object.property.tsx",
            match: "([_$[:alpha:]][_$[:alnum:]]*)"
          }
        ]
      },
      "binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#object-binding-pattern"
          },
          {
            include: "#array-binding-pattern"
          },
          {
            include: "#destructuring-variable-rest"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "binding-element-const": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#object-binding-pattern-const"
          },
          {
            include: "#array-binding-pattern-const"
          },
          {
            include: "#destructuring-variable-rest-const"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "destructuring-variable-rest": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "meta.definition.variable.tsx variable.other.readwrite.tsx"
          }
        }
      },
      "destructuring-variable-rest-const": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "meta.definition.variable.tsx variable.other.constant.tsx"
          }
        }
      },
      "object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        patterns: [
          {
            include: "#object-binding-element"
          }
        ]
      },
      "object-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        patterns: [
          {
            include: "#object-binding-element-const"
          }
        ]
      },
      "array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        patterns: [
          {
            include: "#binding-element"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "array-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        patterns: [
          {
            include: "#binding-element-const"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "parameter-name": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "entity.name.function.tsx variable.language.this.tsx"
              },
              4: {
                name: "entity.name.function.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "variable.parameter.tsx variable.language.this.tsx"
              },
              4: {
                name: "variable.parameter.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          }
        ]
      },
      "destructuring-parameter": {
        patterns: [
          {
            name: "meta.parameter.object-binding-pattern.tsx",
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",
            beginCaptures: {
              1: {
                name: "keyword.operator.rest.tsx"
              },
              2: {
                name: "punctuation.definition.binding-pattern.object.tsx"
              }
            },
            end: "\\}",
            endCaptures: {
              0: {
                name: "punctuation.definition.binding-pattern.object.tsx"
              }
            },
            patterns: [
              {
                include: "#parameter-object-binding-element"
              }
            ]
          },
          {
            name: "meta.paramter.array-binding-pattern.tsx",
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",
            beginCaptures: {
              1: {
                name: "keyword.operator.rest.tsx"
              },
              2: {
                name: "punctuation.definition.binding-pattern.array.tsx"
              }
            },
            end: "\\]",
            endCaptures: {
              0: {
                name: "punctuation.definition.binding-pattern.array.tsx"
              }
            },
            patterns: [
              {
                include: "#parameter-binding-element"
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "parameter-object-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#parameter-binding-element"
              },
              {
                include: "#paren-expression"
              }
            ]
          },
          {
            include: "#parameter-object-binding-pattern"
          },
          {
            include: "#destructuring-parameter-rest"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "parameter-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#parameter-object-binding-pattern"
          },
          {
            include: "#parameter-array-binding-pattern"
          },
          {
            include: "#destructuring-parameter-rest"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "destructuring-parameter-rest": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "variable.parameter.tsx"
          }
        }
      },
      "parameter-object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.tsx"
          }
        },
        patterns: [
          {
            include: "#parameter-object-binding-element"
          }
        ]
      },
      "parameter-array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.tsx"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.tsx"
          }
        },
        patterns: [
          {
            include: "#parameter-binding-element"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "field-declaration": {
        name: "meta.field.declaration.tsx",
        begin: "(?x)(?<!\\()(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))",
        beginCaptures: {
          1: {
            name: "storage.modifier.tsx"
          }
        },
        end: "(?x)(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        patterns: [
          {
            include: "#variable-initializer"
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#comment"
          },
          {
            match: "(?x)(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "meta.definition.property.tsx entity.name.function.tsx"
              },
              2: {
                name: "keyword.operator.optional.tsx"
              },
              3: {
                name: "keyword.operator.definiteassignment.tsx"
              }
            }
          },
          {
            name: "meta.definition.property.tsx variable.object.property.tsx",
            match: "\\#?[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            name: "keyword.operator.optional.tsx",
            match: "\\?"
          },
          {
            name: "keyword.operator.definiteassignment.tsx",
            match: "\\!"
          }
        ]
      },
      "variable-initializer": {
        patterns: [
          {
            begin: "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.tsx"
              }
            },
            end: "(?=$|^|[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            begin: "(?<!=|!)(=)(?!=)",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.tsx"
              }
            },
            end: "(?=[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)",
            patterns: [
              {
                include: "#expression"
              }
            ]
          }
        ]
      },
      "function-declaration": {
        name: "meta.function.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.modifier.async.tsx"
          },
          4: {
            name: "storage.type.function.tsx"
          },
          5: {
            name: "keyword.generator.asterisk.tsx"
          },
          6: {
            name: "meta.definition.function.tsx entity.name.function.tsx"
          }
        },
        end: "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|(?<=\\})",
        patterns: [
          {
            include: "#function-name"
          },
          {
            include: "#function-body"
          }
        ]
      },
      "function-expression": {
        name: "meta.function.expression.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        beginCaptures: {
          1: {
            name: "storage.modifier.async.tsx"
          },
          2: {
            name: "storage.type.function.tsx"
          },
          3: {
            name: "keyword.generator.asterisk.tsx"
          },
          4: {
            name: "meta.definition.function.tsx entity.name.function.tsx"
          }
        },
        end: "(?=;)|(?<=\\})",
        patterns: [
          {
            include: "#function-name"
          },
          {
            include: "#single-line-comment-consuming-line-ending"
          },
          {
            include: "#function-body"
          }
        ]
      },
      "function-name": {
        name: "meta.definition.function.tsx entity.name.function.tsx",
        match: "[_$[:alpha:]][_$[:alnum:]]*"
      },
      "function-body": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#function-parameters"
          },
          {
            include: "#return-type"
          },
          {
            include: "#type-function-return-type"
          },
          {
            include: "#decl-block"
          },
          {
            name: "keyword.generator.asterisk.tsx",
            match: "\\*"
          }
        ]
      },
      "method-declaration": {
        patterns: [
          {
            name: "meta.method.declaration.tsx",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "storage.modifier.tsx"
              },
              4: {
                name: "storage.modifier.async.tsx"
              },
              5: {
                name: "storage.type.tsx"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.method.declaration.tsx",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "storage.modifier.tsx"
              },
              4: {
                name: "storage.modifier.async.tsx"
              },
              5: {
                name: "keyword.operator.new.tsx"
              },
              6: {
                name: "keyword.generator.asterisk.tsx"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.method.declaration.tsx",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "storage.modifier.tsx"
              },
              4: {
                name: "storage.modifier.async.tsx"
              },
              5: {
                name: "storage.type.property.tsx"
              },
              6: {
                name: "keyword.generator.asterisk.tsx"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          }
        ]
      },
      "object-literal-method-declaration": {
        name: "meta.method.declaration.tsx",
        begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
        beginCaptures: {
          1: {
            name: "storage.modifier.async.tsx"
          },
          2: {
            name: "storage.type.property.tsx"
          },
          3: {
            name: "keyword.generator.asterisk.tsx"
          }
        },
        end: "(?=\\}|;|,)|(?<=\\})",
        patterns: [
          {
            include: "#method-declaration-name"
          },
          {
            include: "#function-body"
          },
          {
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.tsx"
              },
              2: {
                name: "storage.type.property.tsx"
              },
              3: {
                name: "keyword.generator.asterisk.tsx"
              }
            },
            end: "(?=\\(|\\<)",
            patterns: [
              {
                include: "#method-declaration-name"
              }
            ]
          }
        ]
      },
      "method-declaration-name": {
        begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
        end: "(?=\\(|\\<)",
        patterns: [
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            name: "meta.definition.method.tsx entity.name.function.tsx",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            name: "keyword.operator.optional.tsx",
            match: "\\?"
          }
        ]
      },
      "arrow-function": {
        patterns: [
          {
            name: "meta.arrow.tsx",
            match: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",
            captures: {
              1: {
                name: "storage.modifier.async.tsx"
              },
              2: {
                name: "variable.parameter.tsx"
              }
            }
          },
          {
            name: "meta.arrow.tsx",
            begin: "(?x) (?:\n  (?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\n)? ((?<![})!\\]])\\s*\n  (?=\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  )\n)",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.tsx"
              }
            },
            end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-parameters"
              },
              {
                include: "#function-parameters"
              },
              {
                include: "#arrow-return-type"
              },
              {
                include: "#possibly-arrow-return-type"
              }
            ]
          },
          {
            name: "meta.arrow.tsx",
            begin: "=>",
            beginCaptures: {
              0: {
                name: "storage.type.function.arrow.tsx"
              }
            },
            end: "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            patterns: [
              {
                include: "#single-line-comment-consuming-line-ending"
              },
              {
                include: "#decl-block"
              },
              {
                include: "#expression"
              }
            ]
          }
        ]
      },
      "indexer-declaration": {
        name: "meta.indexer.declaration.tsx",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)",
        beginCaptures: {
          1: {
            name: "storage.modifier.tsx"
          },
          2: {
            name: "meta.brace.square.tsx"
          },
          3: {
            name: "variable.parameter.tsx"
          }
        },
        end: "(\\])\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: {
            name: "meta.brace.square.tsx"
          },
          2: {
            name: "keyword.operator.optional.tsx"
          }
        },
        patterns: [
          {
            include: "#type-annotation"
          }
        ]
      },
      "indexer-mapped-type-declaration": {
        name: "meta.indexer.mappedtype.declaration.tsx",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+",
        beginCaptures: {
          1: {
            name: "keyword.operator.type.modifier.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "meta.brace.square.tsx"
          },
          4: {
            name: "entity.name.type.tsx"
          },
          5: {
            name: "keyword.operator.expression.in.tsx"
          }
        },
        end: "(\\])([+-])?\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: {
            name: "meta.brace.square.tsx"
          },
          2: {
            name: "keyword.operator.type.modifier.tsx"
          },
          3: {
            name: "keyword.operator.optional.tsx"
          }
        },
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
            captures: {
              1: {
                name: "keyword.control.as.tsx"
              }
            }
          },
          {
            include: "#type"
          }
        ]
      },
      "function-parameters": {
        name: "meta.parameters.tsx",
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "punctuation.definition.parameters.begin.tsx"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "punctuation.definition.parameters.end.tsx"
          }
        },
        patterns: [
          {
            include: "#function-parameters-body"
          }
        ]
      },
      "function-parameters-body": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#decorator"
          },
          {
            include: "#destructuring-parameter"
          },
          {
            include: "#parameter-name"
          },
          {
            include: "#parameter-type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            name: "punctuation.separator.parameter.tsx",
            match: ","
          }
        ]
      },
      "class-declaration": {
        name: "meta.class.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.modifier.tsx"
          },
          4: {
            name: "storage.type.class.tsx"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-expression": {
        name: "meta.class.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",
        beginCaptures: {
          1: {
            name: "storage.modifier.tsx"
          },
          2: {
            name: "storage.type.class.tsx"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-declaration-or-expression-patterns": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            match: "[_$[:alpha:]][_$[:alnum:]]*",
            captures: {
              0: {
                name: "entity.name.type.class.tsx"
              }
            }
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#class-or-interface-body"
          }
        ]
      },
      "interface-declaration": {
        name: "meta.interface.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.modifier.tsx"
          },
          4: {
            name: "storage.type.interface.tsx"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            match: "[_$[:alpha:]][_$[:alnum:]]*",
            captures: {
              0: {
                name: "entity.name.type.interface.tsx"
              }
            }
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#class-or-interface-body"
          }
        ]
      },
      "class-or-interface-heritage": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "storage.modifier.tsx"
          }
        },
        end: "(?=\\{)",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)",
            captures: {
              1: {
                name: "entity.name.type.module.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              }
            }
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "entity.other.inherited-class.tsx"
              }
            }
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      "class-or-interface-body": {
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#decorator"
          },
          {
            begin: "(?<=:)\\s*",
            end: "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            include: "#method-declaration"
          },
          {
            include: "#indexer-declaration"
          },
          {
            include: "#field-declaration"
          },
          {
            include: "#string"
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#access-modifier"
          },
          {
            include: "#property-accessor"
          },
          {
            include: "#async-modifier"
          },
          {
            include: "#after-operator-block-as-object-literal"
          },
          {
            include: "#decl-block"
          },
          {
            include: "#expression"
          },
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-semicolon"
          }
        ]
      },
      "access-modifier": {
        name: "storage.modifier.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "property-accessor": {
        name: "storage.type.property.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "async-modifier": {
        name: "storage.modifier.async.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "enum-declaration": {
        name: "meta.enum.declaration.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.modifier.tsx"
          },
          4: {
            name: "storage.type.enum.tsx"
          },
          5: {
            name: "entity.name.type.enum.tsx"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "\\{",
            beginCaptures: {
              0: {
                name: "punctuation.definition.block.tsx"
              }
            },
            end: "\\}",
            endCaptures: {
              0: {
                name: "punctuation.definition.block.tsx"
              }
            },
            patterns: [
              {
                include: "#comment"
              },
              {
                begin: "([_$[:alpha:]][_$[:alnum:]]*)",
                beginCaptures: {
                  0: {
                    name: "variable.other.enummember.tsx"
                  }
                },
                end: "(?=,|\\}|$)",
                patterns: [
                  {
                    include: "#comment"
                  },
                  {
                    include: "#variable-initializer"
                  }
                ]
              },
              {
                begin: "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",
                end: "(?=,|\\}|$)",
                patterns: [
                  {
                    include: "#string"
                  },
                  {
                    include: "#array-literal"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#variable-initializer"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "namespace-declaration": {
        name: "meta.namespace.declaration.tsx",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]\"'`]))",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.type.namespace.tsx"
          }
        },
        end: "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            name: "entity.name.type.module.tsx",
            match: "([_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            include: "#punctuation-accessor"
          },
          {
            include: "#decl-block"
          }
        ]
      },
      "type-alias-declaration": {
        name: "meta.type.declaration.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "storage.type.type.tsx"
          },
          4: {
            name: "entity.name.type.alias.tsx"
          }
        },
        end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-parameters"
          },
          {
            begin: "(=)\\s*(intrinsic)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.tsx"
              },
              2: {
                name: "keyword.control.intrinsic.tsx"
              }
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            begin: "(=)\\s*",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.tsx"
              }
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "import-equals-declaration": {
        patterns: [
          {
            name: "meta.import-equals.external.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "keyword.control.import.tsx"
              },
              4: {
                name: "keyword.control.type.tsx"
              },
              5: {
                name: "variable.other.readwrite.alias.tsx"
              },
              6: {
                name: "keyword.operator.assignment.tsx"
              },
              7: {
                name: "keyword.control.require.tsx"
              },
              8: {
                name: "meta.brace.round.tsx"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#string"
              }
            ]
          },
          {
            name: "meta.import-equals.internal.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              },
              3: {
                name: "keyword.control.import.tsx"
              },
              4: {
                name: "keyword.control.type.tsx"
              },
              5: {
                name: "variable.other.readwrite.alias.tsx"
              },
              6: {
                name: "keyword.operator.assignment.tsx"
              }
            },
            end: "(?=;|$|^)",
            patterns: [
              {
                include: "#single-line-comment-consuming-line-ending"
              },
              {
                include: "#comment"
              },
              {
                match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
                captures: {
                  1: {
                    name: "entity.name.type.module.tsx"
                  },
                  2: {
                    name: "punctuation.accessor.tsx"
                  },
                  3: {
                    name: "punctuation.accessor.optional.tsx"
                  }
                }
              },
              {
                name: "variable.other.readwrite.tsx",
                match: "([_$[:alpha:]][_$[:alnum:]]*)"
              }
            ]
          }
        ]
      },
      "import-declaration": {
        name: "meta.import.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.control.export.tsx"
          },
          2: {
            name: "storage.modifier.tsx"
          },
          3: {
            name: "keyword.control.import.tsx"
          },
          4: {
            name: "keyword.control.type.tsx"
          }
        },
        end: "(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)",
        patterns: [
          {
            include: "#single-line-comment-consuming-line-ending"
          },
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            begin: `(?<=^import|[^\\._$[:alnum:]]import)(?!\\s*["'])`,
            end: "\\bfrom\\b",
            endCaptures: {
              0: {
                name: "keyword.control.from.tsx"
              }
            },
            patterns: [
              {
                include: "#import-export-declaration"
              }
            ]
          },
          {
            include: "#import-export-declaration"
          }
        ]
      },
      "export-declaration": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "keyword.control.as.tsx"
              },
              3: {
                name: "storage.type.namespace.tsx"
              },
              4: {
                name: "entity.name.type.module.tsx"
              }
            }
          },
          {
            name: "meta.export.default.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "keyword.control.type.tsx"
              },
              3: {
                name: "keyword.operator.assignment.tsx"
              },
              4: {
                name: "keyword.control.default.tsx"
              }
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#interface-declaration"
              },
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.export.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.tsx"
              },
              2: {
                name: "keyword.control.type.tsx"
              }
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            patterns: [
              {
                include: "#import-export-declaration"
              }
            ]
          }
        ]
      },
      "import-export-declaration": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#import-export-block"
          },
          {
            name: "keyword.control.from.tsx",
            match: "\\bfrom\\b"
          },
          {
            include: "#import-export-assert-clause"
          },
          {
            include: "#import-export-clause"
          }
        ]
      },
      "import-export-assert-clause": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.control.with.tsx"
          },
          2: {
            name: "keyword.control.assert.tsx"
          },
          3: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            name: "meta.object-literal.key.tsx",
            match: "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)"
          },
          {
            name: "punctuation.separator.key-value.tsx",
            match: ":"
          }
        ]
      },
      "import-export-block": {
        name: "meta.block.tsx",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#import-export-clause"
          }
        ]
      },
      "import-export-clause": {
        patterns: [
          {
            include: "#comment"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*))",
            captures: {
              1: {
                name: "keyword.control.type.tsx"
              },
              2: {
                name: "keyword.control.default.tsx"
              },
              3: {
                name: "constant.language.import-export-all.tsx"
              },
              4: {
                name: "variable.other.readwrite.tsx"
              },
              5: {
                name: "keyword.control.as.tsx"
              },
              6: {
                name: "keyword.control.default.tsx"
              },
              7: {
                name: "variable.other.readwrite.alias.tsx"
              }
            }
          },
          {
            include: "#punctuation-comma"
          },
          {
            name: "constant.language.import-export-all.tsx",
            match: "\\*"
          },
          {
            name: "keyword.control.default.tsx",
            match: "\\b(default)\\b"
          },
          {
            match: "(?:(\\btype)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "keyword.control.type.tsx"
              },
              2: {
                name: "variable.other.readwrite.alias.tsx"
              }
            }
          }
        ]
      },
      "switch-statement": {
        name: "switch-statement.expr.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "switch-expression.expr.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            beginCaptures: {
              1: {
                name: "keyword.control.switch.tsx"
              },
              2: {
                name: "meta.brace.round.tsx"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "switch-block.expr.tsx",
            begin: "\\{",
            beginCaptures: {
              0: {
                name: "punctuation.definition.block.tsx"
              }
            },
            end: "(?=\\})",
            patterns: [
              {
                name: "case-clause.expr.tsx",
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
                beginCaptures: {
                  1: {
                    name: "keyword.control.switch.tsx"
                  }
                },
                end: "(?=:)",
                patterns: [
                  {
                    include: "#expression"
                  }
                ]
              },
              {
                begin: "(:)\\s*(\\{)",
                beginCaptures: {
                  1: {
                    name: "case-clause.expr.tsx punctuation.definition.section.case-statement.tsx"
                  },
                  2: {
                    name: "meta.block.tsx punctuation.definition.block.tsx"
                  }
                },
                end: "\\}",
                endCaptures: {
                  0: {
                    name: "meta.block.tsx punctuation.definition.block.tsx"
                  }
                },
                contentName: "meta.block.tsx",
                patterns: [
                  {
                    include: "#statements"
                  }
                ]
              },
              {
                match: "(:)",
                captures: {
                  0: {
                    name: "case-clause.expr.tsx punctuation.definition.section.case-statement.tsx"
                  }
                }
              },
              {
                include: "#statements"
              }
            ]
          }
        ]
      },
      "for-loop": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        beginCaptures: {
          0: {
            name: "keyword.control.loop.tsx"
          }
        },
        end: "(?<=\\))",
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "keyword.control.loop.tsx",
            match: "await"
          },
          {
            begin: "\\(",
            beginCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            patterns: [
              {
                include: "#var-expr"
              },
              {
                include: "#expression"
              },
              {
                include: "#punctuation-semicolon"
              }
            ]
          }
        ]
      },
      "if-statement": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",
            end: "(?=;|$|\\})",
            patterns: [
              {
                include: "#comment"
              },
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",
                beginCaptures: {
                  1: {
                    name: "keyword.control.conditional.tsx"
                  },
                  2: {
                    name: "meta.brace.round.tsx"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.tsx"
                  }
                },
                patterns: [
                  {
                    include: "#expression"
                  }
                ]
              },
              {
                name: "string.regexp.tsx",
                begin: "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.tsx"
                  }
                },
                end: "(/)([dgimsuy]*)",
                endCaptures: {
                  1: {
                    name: "punctuation.definition.string.end.tsx"
                  },
                  2: {
                    name: "keyword.other.tsx"
                  }
                },
                patterns: [
                  {
                    include: "#regexp"
                  }
                ]
              },
              {
                include: "#statements"
              }
            ]
          }
        ]
      },
      "decl-block": {
        name: "meta.block.tsx",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#statements"
          }
        ]
      },
      "after-operator-block-as-object-literal": {
        name: "meta.objectliteral.tsx",
        begin: "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#object-member"
          }
        ]
      },
      "object-literal": {
        name: "meta.objectliteral.tsx",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#object-member"
          }
        ]
      },
      "object-member": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#object-literal-method-declaration"
          },
          {
            name: "meta.object.member.tsx meta.object-literal.key.tsx",
            begin: "(?=\\[)",
            end: "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#array-literal"
              }
            ]
          },
          {
            name: "meta.object.member.tsx meta.object-literal.key.tsx",
            begin: "(?=[\\'\\\"\\`])",
            end: "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#string"
              }
            ]
          },
          {
            name: "meta.object.member.tsx meta.object-literal.key.tsx",
            begin: "(?x)(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)))",
            end: "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#numeric-literal"
              }
            ]
          },
          {
            name: "meta.method.declaration.tsx",
            begin: "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",
            end: "(?=\\}|;|,)|(?<=\\})",
            patterns: [
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.object.member.tsx",
            match: "(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            captures: {
              0: {
                name: "meta.object-literal.key.tsx"
              },
              1: {
                name: "constant.numeric.decimal.tsx"
              }
            }
          },
          {
            name: "meta.object.member.tsx",
            match: "(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              0: {
                name: "meta.object-literal.key.tsx"
              },
              1: {
                name: "entity.name.function.tsx"
              }
            }
          },
          {
            name: "meta.object.member.tsx",
            match: "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            captures: {
              0: {
                name: "meta.object-literal.key.tsx"
              }
            }
          },
          {
            name: "meta.object.member.tsx",
            begin: "\\.\\.\\.",
            beginCaptures: {
              0: {
                name: "keyword.operator.spread.tsx"
              }
            },
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.object.member.tsx",
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            captures: {
              1: {
                name: "variable.other.readwrite.tsx"
              }
            }
          },
          {
            name: "meta.object.member.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            captures: {
              1: {
                name: "keyword.control.as.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              }
            }
          },
          {
            name: "meta.object.member.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: {
                name: "keyword.control.as.tsx"
              },
              2: {
                name: "keyword.control.satisfies.tsx"
              }
            },
            end: "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "meta.object.member.tsx",
            begin: "(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)",
            end: "(?=,|\\}|$|\\/\\/|\\/\\*)",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.object.member.tsx",
            begin: ":",
            beginCaptures: {
              0: {
                name: "meta.object-literal.key.tsx punctuation.separator.key-value.tsx"
              }
            },
            end: "(?=,|\\})",
            patterns: [
              {
                begin: "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.tsx"
                  }
                },
                end: "(?<=\\))",
                patterns: [
                  {
                    include: "#type-parameters"
                  },
                  {
                    begin: "\\(",
                    beginCaptures: {
                      0: {
                        name: "meta.brace.round.tsx"
                      }
                    },
                    end: "\\)",
                    endCaptures: {
                      0: {
                        name: "meta.brace.round.tsx"
                      }
                    },
                    patterns: [
                      {
                        include: "#expression-inside-possibly-arrow-parens"
                      }
                    ]
                  }
                ]
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.tsx"
                  },
                  2: {
                    name: "meta.brace.round.tsx"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.tsx"
                  }
                },
                patterns: [
                  {
                    include: "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.tsx"
                  }
                },
                end: "(?<=\\>)",
                patterns: [
                  {
                    include: "#type-parameters"
                  }
                ]
              },
              {
                begin: "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "meta.brace.round.tsx"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.tsx"
                  }
                },
                patterns: [
                  {
                    include: "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                include: "#possibly-arrow-return-type"
              },
              {
                include: "#expression"
              }
            ]
          },
          {
            include: "#punctuation-comma"
          },
          {
            include: "#decl-block"
          }
        ]
      },
      "ternary-expression": {
        begin: "(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)",
        beginCaptures: {
          1: {
            name: "keyword.operator.ternary.tsx"
          }
        },
        end: "\\s*(:)",
        endCaptures: {
          1: {
            name: "keyword.operator.ternary.tsx"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "function-call": {
        patterns: [
          {
            begin: "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            end: "(?<=\\))(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            patterns: [
              {
                name: "meta.function-call.tsx",
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
                patterns: [
                  {
                    include: "#function-call-target"
                  }
                ]
              },
              {
                include: "#comment"
              },
              {
                include: "#function-call-optionals"
              },
              {
                include: "#type-arguments"
              },
              {
                include: "#paren-expression"
              }
            ]
          },
          {
            begin: "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            end: "(?<=\\>)(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            patterns: [
              {
                name: "meta.function-call.tsx",
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=(<\\s*[\\{\\[\\(]\\s*$))",
                patterns: [
                  {
                    include: "#function-call-target"
                  }
                ]
              },
              {
                include: "#comment"
              },
              {
                include: "#function-call-optionals"
              },
              {
                include: "#type-arguments"
              }
            ]
          }
        ]
      },
      "function-call-target": {
        patterns: [
          {
            include: "#support-function-call-identifiers"
          },
          {
            name: "entity.name.function.tsx",
            match: "(\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          }
        ]
      },
      "function-call-optionals": {
        patterns: [
          {
            name: "meta.function-call.tsx punctuation.accessor.optional.tsx",
            match: "\\?\\."
          },
          {
            name: "meta.function-call.tsx keyword.operator.definiteassignment.tsx",
            match: "\\!"
          }
        ]
      },
      "support-function-call-identifiers": {
        patterns: [
          {
            include: "#literal"
          },
          {
            include: "#support-objects"
          },
          {
            include: "#object-identifiers"
          },
          {
            include: "#punctuation-accessor"
          },
          {
            name: "keyword.operator.expression.import.tsx",
            match: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))"
          }
        ]
      },
      "new-expr": {
        name: "new.expr.tsx",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.operator.new.tsx"
          }
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "instanceof-expr": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.operator.expression.instanceof.tsx"
          }
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s+instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        patterns: [
          {
            include: "#type"
          }
        ]
      },
      "paren-expression-possibly-arrow": {
        patterns: [
          {
            begin: "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.tsx"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            begin: "(?<=[(=,]|=>|^return|[^\\._$[:alnum:]]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.tsx"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            include: "#possibly-arrow-return-type"
          }
        ]
      },
      "paren-expression-possibly-arrow-with-typeparameters": {
        patterns: [
          {
            include: "#type-parameters"
          },
          {
            begin: "\\(",
            beginCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.tsx"
              }
            },
            patterns: [
              {
                include: "#expression-inside-possibly-arrow-parens"
              }
            ]
          }
        ]
      },
      "expression-inside-possibly-arrow-parens": {
        patterns: [
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#decorator"
          },
          {
            include: "#destructuring-parameter"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "entity.name.function.tsx variable.language.this.tsx"
              },
              4: {
                name: "entity.name.function.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "variable.parameter.tsx variable.language.this.tsx"
              },
              4: {
                name: "variable.parameter.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            name: "punctuation.separator.parameter.tsx",
            match: ","
          },
          {
            include: "#identifiers"
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      "paren-expression": {
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "meta.brace.round.tsx"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "meta.brace.round.tsx"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      cast: {
        patterns: [
          {
            include: "#jsx"
          }
        ]
      },
      "expression-operators": {
        patterns: [
          {
            name: "keyword.control.flow.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            beginCaptures: {
              1: {
                name: "keyword.control.flow.tsx"
              }
            },
            end: "\\*",
            endCaptures: {
              0: {
                name: "keyword.generator.asterisk.tsx"
              }
            },
            patterns: [
              {
                include: "#comment"
              }
            ]
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?",
            captures: {
              1: {
                name: "keyword.control.flow.tsx"
              },
              2: {
                name: "keyword.generator.asterisk.tsx"
              }
            }
          },
          {
            name: "keyword.operator.expression.delete.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.expression.in.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()"
          },
          {
            name: "keyword.operator.expression.of.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()"
          },
          {
            name: "keyword.operator.expression.instanceof.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.new.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#typeof-operator"
          },
          {
            name: "keyword.operator.expression.void.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))",
            captures: {
              1: {
                name: "keyword.control.as.tsx"
              },
              2: {
                name: "storage.modifier.tsx"
              }
            }
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: {
                name: "keyword.control.as.tsx"
              },
              2: {
                name: "keyword.control.satisfies.tsx"
              }
            },
            end: "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "keyword.operator.spread.tsx",
            match: "\\.\\.\\."
          },
          {
            name: "keyword.operator.assignment.compound.tsx",
            match: "\\*=|(?<!\\()/=|%=|\\+=|\\-="
          },
          {
            name: "keyword.operator.assignment.compound.bitwise.tsx",
            match: "\\&=|\\^=|<<=|>>=|>>>=|\\|="
          },
          {
            name: "keyword.operator.bitwise.shift.tsx",
            match: "<<|>>>|>>"
          },
          {
            name: "keyword.operator.comparison.tsx",
            match: "===|!==|==|!="
          },
          {
            name: "keyword.operator.relational.tsx",
            match: "<=|>=|<>|<|>"
          },
          {
            match: "(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))",
            captures: {
              1: {
                name: "keyword.operator.logical.tsx"
              },
              2: {
                name: "keyword.operator.assignment.compound.tsx"
              },
              3: {
                name: "keyword.operator.arithmetic.tsx"
              }
            }
          },
          {
            name: "keyword.operator.logical.tsx",
            match: "\\!|&&|\\|\\||\\?\\?"
          },
          {
            name: "keyword.operator.bitwise.tsx",
            match: "\\&|~|\\^|\\|"
          },
          {
            name: "keyword.operator.assignment.tsx",
            match: "\\="
          },
          {
            name: "keyword.operator.decrement.tsx",
            match: "--"
          },
          {
            name: "keyword.operator.increment.tsx",
            match: "\\+\\+"
          },
          {
            name: "keyword.operator.arithmetic.tsx",
            match: "%|\\*|/|-|\\+"
          },
          {
            begin: "(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            end: "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            endCaptures: {
              1: {
                name: "keyword.operator.assignment.compound.tsx"
              },
              2: {
                name: "keyword.operator.arithmetic.tsx"
              }
            },
            patterns: [
              {
                include: "#comment"
              }
            ]
          },
          {
            match: "(?<=[_$[:alnum:])\\]])\\s*(?:(/=)|(?:(/)(?![/*])))",
            captures: {
              1: {
                name: "keyword.operator.assignment.compound.tsx"
              },
              2: {
                name: "keyword.operator.arithmetic.tsx"
              }
            }
          }
        ]
      },
      "typeof-operator": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          0: {
            name: "keyword.operator.expression.typeof.tsx"
          }
        },
        end: "(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        patterns: [
          {
            include: "#type-arguments"
          },
          {
            include: "#expression"
          }
        ]
      },
      literal: {
        patterns: [
          {
            include: "#numeric-literal"
          },
          {
            include: "#boolean-literal"
          },
          {
            include: "#null-literal"
          },
          {
            include: "#undefined-literal"
          },
          {
            include: "#numericConstant-literal"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#this-literal"
          },
          {
            include: "#super-literal"
          }
        ]
      },
      "array-literal": {
        name: "meta.array.literal.tsx",
        begin: "\\s*(\\[)",
        beginCaptures: {
          1: {
            name: "meta.brace.square.tsx"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "meta.brace.square.tsx"
          }
        },
        patterns: [
          {
            include: "#expression"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "numeric-literal": {
        patterns: [
          {
            name: "constant.numeric.hex.tsx",
            match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.tsx"
              }
            }
          },
          {
            name: "constant.numeric.binary.tsx",
            match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.tsx"
              }
            }
          },
          {
            name: "constant.numeric.octal.tsx",
            match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.tsx"
              }
            }
          },
          {
            match: "(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)",
            captures: {
              0: {
                name: "constant.numeric.decimal.tsx"
              },
              1: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              2: {
                name: "storage.type.numeric.bigint.tsx"
              },
              3: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              4: {
                name: "storage.type.numeric.bigint.tsx"
              },
              5: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              6: {
                name: "storage.type.numeric.bigint.tsx"
              },
              7: {
                name: "storage.type.numeric.bigint.tsx"
              },
              8: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              9: {
                name: "storage.type.numeric.bigint.tsx"
              },
              10: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              11: {
                name: "storage.type.numeric.bigint.tsx"
              },
              12: {
                name: "meta.delimiter.decimal.period.tsx"
              },
              13: {
                name: "storage.type.numeric.bigint.tsx"
              },
              14: {
                name: "storage.type.numeric.bigint.tsx"
              }
            }
          }
        ]
      },
      "boolean-literal": {
        patterns: [
          {
            name: "constant.language.boolean.true.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "constant.language.boolean.false.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "null-literal": {
        name: "constant.language.null.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "this-literal": {
        name: "variable.language.this.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)"
      },
      "super-literal": {
        name: "variable.language.super.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)"
      },
      "undefined-literal": {
        name: "constant.language.undefined.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "numericConstant-literal": {
        patterns: [
          {
            name: "constant.language.nan.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "constant.language.infinity.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "support-objects": {
        patterns: [
          {
            name: "variable.language.arguments.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)"
          },
          {
            name: "support.class.builtin.tsx",
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Array|ArrayBuffer|Atomics|BigInt|BigInt64Array|BigUint64Array|Boolean|DataView|Date|Float32Array\n  |Float64Array|Function|Generator|GeneratorFunction|Int8Array|Int16Array|Int32Array|Intl|Map|Number|Object|Proxy\n  |Reflect|RegExp|Set|SharedArrayBuffer|SIMD|String|Symbol|TypedArray\n  |Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|WeakMap|WeakSet)\\b(?!\\$)"
          },
          {
            name: "support.class.error.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))((Eval|Internal|Range|Reference|Syntax|Type|URI)?Error)\\b(?!\\$)"
          },
          {
            name: "support.class.promise.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)"
          },
          {
            name: "support.function.tsx",
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(clear(Interval|Timeout)|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|\n  isFinite|isNaN|parseFloat|parseInt|require|set(Interval|Timeout)|super|unescape|uneval)(?=\\s*\\()"
          },
          {
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Math)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:\n  (abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|\n  expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|\n  round|sign|sin|sinh|sqrt|tan|tanh|trunc)\n  |\n  (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)))?\\b(?!\\$)",
            captures: {
              1: {
                name: "support.constant.math.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.function.math.tsx"
              },
              5: {
                name: "support.constant.property.math.tsx"
              }
            }
          },
          {
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(console)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\n  assert|clear|count|debug|dir|error|group|groupCollapsed|groupEnd|info|log\n  |profile|profileEnd|table|time|timeEnd|timeStamp|trace|warn))?\\b(?!\\$)",
            captures: {
              1: {
                name: "support.class.console.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.function.console.tsx"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(JSON)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(parse|stringify))?\\b(?!\\$)",
            captures: {
              1: {
                name: "support.constant.json.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.function.json.tsx"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)",
            captures: {
              1: {
                name: "keyword.control.import.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.variable.property.importmeta.tsx"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)",
            captures: {
              1: {
                name: "keyword.operator.new.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.variable.property.target.tsx"
              }
            }
          },
          {
            match: "(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:\n  (?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())\n  |\n  (?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "support.variable.property.tsx"
              },
              4: {
                name: "support.constant.tsx"
              }
            }
          },
          {
            match: "(?x) (?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.)) \\b (?:\n  (document|event|navigator|performance|screen|window)\n  |\n  (AnalyserNode|ArrayBufferView|Attr|AudioBuffer|AudioBufferSourceNode|AudioContext|AudioDestinationNode|AudioListener\n  |AudioNode|AudioParam|BatteryManager|BeforeUnloadEvent|BiquadFilterNode|Blob|BufferSource|ByteString|CSS|CSSConditionRule\n  |CSSCounterStyleRule|CSSGroupingRule|CSSMatrix|CSSMediaRule|CSSPageRule|CSSPrimitiveValue|CSSRule|CSSRuleList|CSSStyleDeclaration\n  |CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSValue|CSSValueList|CanvasGradient|CanvasImageSource|CanvasPattern\n  |CanvasRenderingContext2D|ChannelMergerNode|ChannelSplitterNode|CharacterData|ChromeWorker|CloseEvent|Comment|CompositionEvent\n  |Console|ConvolverNode|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|CustomEvent|DOMError|DOMException\n  |DOMHighResTimeStamp|DOMImplementation|DOMString|DOMStringList|DOMStringMap|DOMTimeStamp|DOMTokenList|DataTransfer\n  |DataTransferItem|DataTransferItemList|DedicatedWorkerGlobalScope|DelayNode|DeviceProximityEvent|DirectoryEntry\n  |DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|Document|DocumentFragment|DocumentTouch|DocumentType|DragEvent\n  |DynamicsCompressorNode|Element|Entry|EntrySync|ErrorEvent|Event|EventListener|EventSource|EventTarget|FederatedCredential\n  |FetchEvent|File|FileEntry|FileEntrySync|FileException|FileList|FileReader|FileReaderSync|FileSystem|FileSystemSync\n  |FontFace|FormData|GainNode|Gamepad|GamepadButton|GamepadEvent|Geolocation|GlobalEventHandlers|HTMLAnchorElement\n  |HTMLAreaElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement\n  |HTMLCollection|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDialogElement|HTMLDivElement\n  |HTMLDocument|HTMLElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormControlsCollection|HTMLFormElement\n  |HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement\n  |HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMediaElement\n  |HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement\n  |HTMLOptionsCollection|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement\n  |HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement\n  |HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement\n  |HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement\n  |HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|HashChangeEvent|History|IDBCursor|IDBCursorWithValue|IDBDatabase\n  |IDBEnvironment|IDBFactory|IDBIndex|IDBKeyRange|IDBMutableFile|IDBObjectStore|IDBOpenDBRequest|IDBRequest|IDBTransaction\n  |IDBVersionChangeEvent|IIRFilterNode|IdentityManager|ImageBitmap|ImageBitmapFactories|ImageData|Index|InputDeviceCapabilities\n  |InputEvent|InstallEvent|InstallTrigger|KeyboardEvent|LinkStyle|LocalFileSystem|LocalFileSystemSync|Location|MIDIAccess\n  |MIDIConnectionEvent|MIDIInput|MIDIInputMap|MIDIOutputMap|MediaElementAudioSourceNode|MediaError|MediaKeyMessageEvent\n  |MediaKeySession|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeySystemConfiguration|MediaKeys|MediaRecorder|MediaStream\n  |MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessageChannel|MessageEvent|MessagePort|MouseEvent\n  |MutationObserver|MutationRecord|NamedNodeMap|Navigator|NavigatorConcurrentHardware|NavigatorGeolocation|NavigatorID\n  |NavigatorLanguage|NavigatorOnLine|Node|NodeFilter|NodeIterator|NodeList|NonDocumentTypeChildNode|Notification\n  |OfflineAudioCompletionEvent|OfflineAudioContext|OscillatorNode|PageTransitionEvent|PannerNode|ParentNode|PasswordCredential\n  |Path2D|PaymentAddress|PaymentRequest|PaymentResponse|Performance|PerformanceEntry|PerformanceFrameTiming|PerformanceMark\n  |PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList\n  |PerformanceResourceTiming|PerformanceTiming|PeriodicSyncEvent|PeriodicWave|Plugin|Point|PointerEvent|PopStateEvent\n  |PortCollection|Position|PositionError|PositionOptions|PresentationConnectionClosedEvent|PresentationConnectionList\n  |PresentationReceiver|ProcessingInstruction|ProgressEvent|PromiseRejectionEvent|PushEvent|PushRegistrationManager\n  |RTCCertificate|RTCConfiguration|RTCPeerConnection|RTCSessionDescriptionCallback|RTCStatsReport|RadioNodeList|RandomSource\n  |Range|ReadableByteStream|RenderingContext|SVGAElement|SVGAngle|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement\n  |SVGAnimateTransformElement|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength\n  |SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPoints|SVGAnimatedPreserveAspectRatio\n  |SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGAnimationElement|SVGCircleElement|SVGClipPathElement\n  |SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGEvent|SVGFilterElement|SVGFontElement\n  |SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement\n  |SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGradientElement|SVGHKernElement|SVGImageElement|SVGLength\n  |SVGLengthList|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMaskElement|SVGMatrix|SVGMissingGlyphElement\n  |SVGNumber|SVGNumberList|SVGPathElement|SVGPatternElement|SVGPoint|SVGPolygonElement|SVGPolylineElement|SVGPreserveAspectRatio\n  |SVGRadialGradientElement|SVGRect|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStringList\n  |SVGStylable|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTests|SVGTextElement\n  |SVGTextPositioningElement|SVGTitleElement|SVGTransform|SVGTransformList|SVGTransformable|SVGUseElement|SVGVKernElement\n  |SVGViewElement|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|ServiceWorkerState\n  |ShadowRoot|SharedWorker|SharedWorkerGlobalScope|SourceBufferList|StereoPannerNode|Storage|StorageEvent|StyleSheet\n  |StyleSheetList|SubtleCrypto|SyncEvent|Text|TextMetrics|TimeEvent|TimeRanges|Touch|TouchEvent|TouchList|Transferable\n  |TreeWalker|UIEvent|USVString|VRDisplayCapabilities|ValidityState|WaveShaperNode|WebGL|WebGLActiveInfo|WebGLBuffer\n  |WebGLContextEvent|WebGLFramebuffer|WebGLProgram|WebGLRenderbuffer|WebGLRenderingContext|WebGLShader|WebGLShaderPrecisionFormat\n  |WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES\n  |WebSocket|WebSockets|WebVTT|WheelEvent|Window|WindowBase64|WindowEventHandlers|WindowTimers|Worker|WorkerGlobalScope\n  |WorkerLocation|WorkerNavigator|XMLHttpRequest|XMLHttpRequestEventTarget|XMLSerializer|XPathExpression|XPathResult\n  |XSLTProcessor))\\b(?!\\$)",
            captures: {
              1: {
                name: "support.variable.dom.tsx"
              },
              2: {
                name: "support.class.dom.tsx"
              }
            }
          },
          {
            match: "(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:\n  (ATTRIBUTE_NODE|CDATA_SECTION_NODE|COMMENT_NODE|DOCUMENT_FRAGMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE\n  |DOMSTRING_SIZE_ERR|ELEMENT_NODE|ENTITY_NODE|ENTITY_REFERENCE_NODE|HIERARCHY_REQUEST_ERR|INDEX_SIZE_ERR\n  |INUSE_ATTRIBUTE_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR\n  |NOT_SUPPORTED_ERR|NOTATION_NODE|PROCESSING_INSTRUCTION_NODE|TEXT_NODE|WRONG_DOCUMENT_ERR)\n  |\n  (_content|[xyz]|abbr|above|accept|acceptCharset|accessKey|action|align|[av]Link(?:color)?|all|alt|anchors|appCodeName\n  |appCore|applets|appMinorVersion|appName|appVersion|archive|areas|arguments|attributes|availHeight|availLeft|availTop\n  |availWidth|axis|background|backgroundColor|backgroundImage|below|bgColor|body|border|borderBottomWidth|borderColor\n  |borderLeftWidth|borderRightWidth|borderStyle|borderTopWidth|borderWidth|bottom|bufferDepth|callee|caller|caption\n  |cellPadding|cells|cellSpacing|ch|characterSet|charset|checked|childNodes|chOff|cite|classes|className|clear\n  |clientInformation|clip|clipBoardData|closed|code|codeBase|codeType|color|colorDepth|cols|colSpan|compact|complete\n  |components|content|controllers|cookie|cookieEnabled|cords|cpuClass|crypto|current|data|dateTime|declare|defaultCharset\n  |defaultChecked|defaultSelected|defaultStatus|defaultValue|defaultView|defer|description|dialogArguments|dialogHeight\n  |dialogLeft|dialogTop|dialogWidth|dir|directories|disabled|display|docmain|doctype|documentElement|elements|embeds\n  |enabledPlugin|encoding|enctype|entities|event|expando|external|face|fgColor|filename|firstChild|fontFamily|fontSize\n  |fontWeight|form|formName|forms|frame|frameBorder|frameElement|frames|hasFocus|hash|headers|height|history|host\n  |hostname|href|hreflang|hspace|htmlFor|httpEquiv|id|ids|ignoreCase|images|implementation|index|innerHeight|innerWidth\n  |input|isMap|label|lang|language|lastChild|lastIndex|lastMatch|lastModified|lastParen|layer[sXY]|left|leftContext\n  |lineHeight|link|linkColor|links|listStyleType|localName|location|locationbar|longDesc|lowsrc|lowSrc|marginBottom\n  |marginHeight|marginLeft|marginRight|marginTop|marginWidth|maxLength|media|menubar|method|mimeTypes|multiline|multiple\n  |name|nameProp|namespaces|namespaceURI|next|nextSibling|nodeName|nodeType|nodeValue|noHref|noResize|noShade|notationName\n  |notations|noWrap|object|offscreenBuffering|onLine|onreadystatechange|opener|opsProfile|options|oscpu|outerHeight\n  |outerWidth|ownerDocument|paddingBottom|paddingLeft|paddingRight|paddingTop|page[XY]|page[XY]Offset|parent|parentLayer\n  |parentNode|parentWindow|pathname|personalbar|pixelDepth|pkcs11|platform|plugins|port|prefix|previous|previousDibling\n  |product|productSub|profile|profileend|prompt|prompter|protocol|publicId|readOnly|readyState|referrer|rel|responseText\n  |responseXML|rev|right|rightContext|rowIndex|rows|rowSpan|rules|scheme|scope|screen[XY]|screenLeft|screenTop|scripts\n  |scrollbars|scrolling|sectionRowIndex|security|securityPolicy|selected|selectedIndex|selection|self|shape|siblingAbove\n  |siblingBelow|size|source|specified|standby|start|status|statusbar|statusText|style|styleSheets|suffixes|summary\n  |systemId|systemLanguage|tagName|tags|target|tBodies|text|textAlign|textDecoration|textIndent|textTransform|tFoot|tHead\n  |title|toolbar|top|type|undefined|uniqueID|updateInterval|URL|URLUnencoded|useMap|userAgent|userLanguage|userProfile\n  |vAlign|value|valueType|vendor|vendorSub|version|visibility|vspace|whiteSpace|width|X[MS]LDocument|zIndex))\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\()",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "support.constant.dom.tsx"
              },
              4: {
                name: "support.variable.property.dom.tsx"
              }
            }
          },
          {
            name: "support.class.node.tsx",
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Buffer|EventEmitter|Server|Pipe|Socket|REPLServer|ReadStream|WriteStream|Stream\n  |Inflate|Deflate|InflateRaw|DeflateRaw|GZip|GUnzip|Unzip|Zip)\\b(?!\\$)"
          },
          {
            match: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(process)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?:\n  (arch|argv|config|connected|env|execArgv|execPath|exitCode|mainModule|pid|platform|release|stderr|stdin|stdout|title|version|versions)\n  |\n  (abort|chdir|cwd|disconnect|exit|[sg]ete?[gu]id|send|[sg]etgroups|initgroups|kill|memoryUsage|nextTick|umask|uptime|hrtime)\n))?\\b(?!\\$)",
            captures: {
              1: {
                name: "support.variable.object.process.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "support.variable.property.process.tsx"
              },
              5: {
                name: "support.function.process.tsx"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)",
            captures: {
              1: {
                name: "support.type.object.module.tsx"
              },
              2: {
                name: "support.type.object.module.tsx"
              },
              3: {
                name: "punctuation.accessor.tsx"
              },
              4: {
                name: "punctuation.accessor.optional.tsx"
              },
              5: {
                name: "support.type.object.module.tsx"
              }
            }
          },
          {
            name: "support.variable.object.node.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(global|GLOBAL|root|__dirname|__filename)\\b(?!\\$)"
          },
          {
            match: "(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s*\n(?:\n (on(?:Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\n   Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\n   Before(?:cut|deactivate|unload|update|paste|print|editfocus|activate)|\n   Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\n   Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\n   Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\n   Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\n   Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\n ) |\n (shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\n   scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|\n   sup|sub|substr|substring|splice|split|send|set(?:Milliseconds|Seconds|Minutes|Hours|\n   Month|Year|FullYear|Date|UTC(?:Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\n   Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|\n   savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|\n   contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|\n   createEventObject|to(?:GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\n   test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\n   untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|\n   print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|\n   fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|\n   forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|\n   abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|\n   releaseCapture|releaseEvents|go|get(?:Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\n   Time|Date|TimezoneOffset|UTC(?:Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\n   Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|\n   moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back\n ) |\n (acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|\n   appendChild|appendData|before|blur|canPlayType|captureStream|\n   caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|\n   cloneContents|cloneNode|cloneRange|close|closest|collapse|\n   compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|\n   convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|\n   createAttributeNS|createCaption|createCDATASection|createComment|\n   createContextualFragment|createDocument|createDocumentFragment|\n   createDocumentType|createElement|createElementNS|createEntityReference|\n   createEvent|createExpression|createHTMLDocument|createNodeIterator|\n   createNSResolver|createProcessingInstruction|createRange|createShadowRoot|\n   createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|\n   deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|\n   deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|\n   enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|\n   exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|\n   getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|\n   getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|\n   getClientRects|getContext|getDestinationInsertionPoints|getElementById|\n   getElementsByClassName|getElementsByName|getElementsByTagName|\n   getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|\n   getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|\n   hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|\n   insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|\n   insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|\n   isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|\n   lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|\n   moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|\n   parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|\n   previousSibling|probablySupportsContext|queryCommandEnabled|\n   queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|\n   querySelector|querySelectorAll|registerContentHandler|registerElement|\n   registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|\n   removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|\n   removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|\n   requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|\n   scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|\n   setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|\n   setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|\n   setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|\n   slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|\n   submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|\n   toDataURL|toggle|toString|values|write|writeln\n ) |\n (all|catch|finally|race|reject|resolve|then\n )\n)(?=\\s*\\()",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "support.function.event-handler.tsx"
              },
              4: {
                name: "support.function.tsx"
              },
              5: {
                name: "support.function.dom.tsx"
              },
              6: {
                name: "support.function.promise.tsx"
              }
            }
          }
        ]
      },
      identifiers: {
        patterns: [
          {
            include: "#object-identifiers"
          },
          {
            match: "(?x)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n))",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "entity.name.function.tsx"
              }
            }
          },
          {
            match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "variable.other.constant.property.tsx"
              }
            }
          },
          {
            match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "variable.other.property.tsx"
              }
            }
          },
          {
            name: "variable.other.constant.tsx",
            match: "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
          },
          {
            name: "variable.other.readwrite.tsx",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          }
        ]
      },
      "object-identifiers": {
        patterns: [
          {
            name: "support.class.tsx",
            match: "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))"
          },
          {
            match: "(?x)(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:\n  (\\#?[[:upper:]][_$[:digit:][:upper:]]*) |\n  (\\#?[_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "punctuation.accessor.tsx"
              },
              2: {
                name: "punctuation.accessor.optional.tsx"
              },
              3: {
                name: "variable.other.constant.object.property.tsx"
              },
              4: {
                name: "variable.other.object.property.tsx"
              }
            }
          },
          {
            match: "(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "variable.other.constant.object.tsx"
              },
              2: {
                name: "variable.other.object.tsx"
              }
            }
          }
        ]
      },
      "type-annotation": {
        patterns: [
          {
            name: "meta.type.annotation.tsx",
            begin: "(:)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.tsx"
              }
            },
            end: "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "meta.type.annotation.tsx",
            begin: "(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.tsx"
              }
            },
            end: "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "parameter-type-annotation": {
        patterns: [
          {
            name: "meta.type.annotation.tsx",
            begin: "(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.tsx"
              }
            },
            end: "(?=[,)])|(?==[^>])",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "return-type": {
        patterns: [
          {
            name: "meta.return.type.tsx",
            begin: "(?<=\\))\\s*(:)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.tsx"
              }
            },
            end: "(?<![:|&])(?=$|^|[{};,]|//)",
            patterns: [
              {
                include: "#return-type-core"
              }
            ]
          },
          {
            name: "meta.return.type.tsx",
            begin: "(?<=\\))\\s*(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.tsx"
              }
            },
            end: "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            patterns: [
              {
                include: "#return-type-core"
              }
            ]
          }
        ]
      },
      "return-type-core": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?<=[:|&])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "arrow-return-type": {
        name: "meta.return.type.arrow.tsx",
        begin: "(?<=\\))\\s*(:)",
        beginCaptures: {
          1: {
            name: "keyword.operator.type.annotation.tsx"
          }
        },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        patterns: [
          {
            include: "#arrow-return-type-body"
          }
        ]
      },
      "possibly-arrow-return-type": {
        begin: "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",
        beginCaptures: {
          1: {
            name: "meta.arrow.tsx meta.return.type.arrow.tsx keyword.operator.type.annotation.tsx"
          }
        },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        contentName: "meta.arrow.tsx meta.return.type.arrow.tsx",
        patterns: [
          {
            include: "#arrow-return-type-body"
          }
        ]
      },
      "arrow-return-type-body": {
        patterns: [
          {
            begin: "(?<=[:])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-parameters": {
        name: "meta.type.parameters.tsx",
        begin: "(<)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.typeparameters.begin.tsx"
          }
        },
        end: "(>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.typeparameters.end.tsx"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "storage.modifier.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          },
          {
            name: "keyword.operator.assignment.tsx",
            match: "(=)(?!>)"
          }
        ]
      },
      "type-arguments": {
        name: "meta.type.parameters.tsx",
        begin: "\\<",
        beginCaptures: {
          0: {
            name: "punctuation.definition.typeparameters.begin.tsx"
          }
        },
        end: "\\>",
        endCaptures: {
          0: {
            name: "punctuation.definition.typeparameters.end.tsx"
          }
        },
        patterns: [
          {
            include: "#type-arguments-body"
          }
        ]
      },
      "type-arguments-body": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              0: {
                name: "keyword.operator.type.tsx"
              }
            }
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      type: {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#type-primitive"
          },
          {
            include: "#type-builtin-literals"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#type-tuple"
          },
          {
            include: "#type-object"
          },
          {
            include: "#type-operators"
          },
          {
            include: "#type-conditional"
          },
          {
            include: "#type-fn-type-parameters"
          },
          {
            include: "#type-paren-or-function-parameters"
          },
          {
            include: "#type-function-return-type"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              }
            }
          },
          {
            include: "#type-name"
          }
        ]
      },
      "type-primitive": {
        name: "support.type.primitive.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "type-builtin-literals": {
        name: "support.type.builtin.tsx",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "type-tuple": {
        name: "meta.type.tuple.tsx",
        begin: "\\[",
        beginCaptures: {
          0: {
            name: "meta.brace.square.tsx"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "meta.brace.square.tsx"
          }
        },
        patterns: [
          {
            name: "keyword.operator.rest.tsx",
            match: "\\.\\.\\."
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\?)?\\s*(:)",
            captures: {
              1: {
                name: "entity.name.label.tsx"
              },
              2: {
                name: "keyword.operator.optional.tsx"
              },
              3: {
                name: "punctuation.separator.label.tsx"
              }
            }
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "type-object": {
        name: "meta.object.type.tsx",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.tsx"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#method-declaration"
          },
          {
            include: "#indexer-declaration"
          },
          {
            include: "#indexer-mapped-type-declaration"
          },
          {
            include: "#field-declaration"
          },
          {
            include: "#type-annotation"
          },
          {
            begin: "\\.\\.\\.",
            beginCaptures: {
              0: {
                name: "keyword.operator.spread.tsx"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-semicolon"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-conditional": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            beginCaptures: {
              1: {
                name: "storage.modifier.tsx"
              }
            },
            end: "(?<=:)",
            patterns: [
              {
                begin: "\\?",
                beginCaptures: {
                  0: {
                    name: "keyword.operator.ternary.tsx"
                  }
                },
                end: ":",
                endCaptures: {
                  0: {
                    name: "keyword.operator.ternary.tsx"
                  }
                },
                patterns: [
                  {
                    include: "#type"
                  }
                ]
              },
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "type-paren-or-function-parameters": {
        name: "meta.type.paren.cover.tsx",
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "meta.brace.round.tsx"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "meta.brace.round.tsx"
          }
        },
        patterns: [
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "entity.name.function.tsx variable.language.this.tsx"
              },
              4: {
                name: "entity.name.function.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)",
            captures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.operator.rest.tsx"
              },
              3: {
                name: "variable.parameter.tsx variable.language.this.tsx"
              },
              4: {
                name: "variable.parameter.tsx"
              },
              5: {
                name: "keyword.operator.optional.tsx"
              }
            }
          },
          {
            include: "#type-annotation"
          },
          {
            name: "punctuation.separator.parameter.tsx",
            match: ","
          },
          {
            include: "#type"
          }
        ]
      },
      "type-fn-type-parameters": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",
            beginCaptures: {
              1: {
                name: "meta.type.constructor.tsx storage.modifier.tsx"
              },
              2: {
                name: "meta.type.constructor.tsx keyword.control.new.tsx"
              }
            },
            end: "(?<=>)",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-parameters"
              }
            ]
          },
          {
            name: "meta.type.constructor.tsx",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",
            beginCaptures: {
              1: {
                name: "storage.modifier.tsx"
              },
              2: {
                name: "keyword.control.new.tsx"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#function-parameters"
              }
            ]
          },
          {
            name: "meta.type.function.tsx",
            begin: "(?x)(\n  (?=\n    [(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )\n  )\n)",
            end: "(?<=\\))",
            patterns: [
              {
                include: "#function-parameters"
              }
            ]
          }
        ]
      },
      "type-function-return-type": {
        patterns: [
          {
            name: "meta.type.function.return.tsx",
            begin: "(=>)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "storage.type.function.arrow.tsx"
              }
            },
            end: "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            patterns: [
              {
                include: "#type-function-return-type-core"
              }
            ]
          },
          {
            name: "meta.type.function.return.tsx",
            begin: "=>",
            beginCaptures: {
              0: {
                name: "storage.type.function.arrow.tsx"
              }
            },
            end: "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            patterns: [
              {
                include: "#type-function-return-type-core"
              }
            ]
          }
        ]
      },
      "type-function-return-type-core": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?<==>)(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-operators": {
        patterns: [
          {
            include: "#typeof-operator"
          },
          {
            include: "#type-infer"
          },
          {
            begin: "([&|])(?=\\s*\\{)",
            beginCaptures: {
              0: {
                name: "keyword.operator.type.tsx"
              }
            },
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            begin: "[&|]",
            beginCaptures: {
              0: {
                name: "keyword.operator.type.tsx"
              }
            },
            end: "(?=\\S)"
          },
          {
            name: "keyword.operator.expression.keyof.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.ternary.tsx",
            match: "(\\?|\\:)"
          },
          {
            name: "keyword.operator.expression.import.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()"
          }
        ]
      },
      "type-infer": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))?",
            name: "meta.type.infer.tsx",
            captures: {
              1: {
                name: "keyword.operator.expression.infer.tsx"
              },
              2: {
                name: "entity.name.type.tsx"
              },
              3: {
                name: "keyword.operator.expression.extends.tsx"
              }
            }
          }
        ]
      },
      "type-predicate-operator": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.operator.type.asserts.tsx"
              },
              2: {
                name: "variable.parameter.tsx variable.language.this.tsx"
              },
              3: {
                name: "variable.parameter.tsx"
              },
              4: {
                name: "keyword.operator.expression.is.tsx"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.operator.type.asserts.tsx"
              },
              2: {
                name: "variable.parameter.tsx variable.language.this.tsx"
              },
              3: {
                name: "variable.parameter.tsx"
              }
            }
          },
          {
            name: "keyword.operator.type.asserts.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.expression.is.tsx",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "type-name": {
        patterns: [
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)",
            captures: {
              1: {
                name: "entity.name.type.module.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              },
              4: {
                name: "meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx"
              }
            },
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx"
              }
            },
            contentName: "meta.type.parameters.tsx",
            patterns: [
              {
                include: "#type-arguments-body"
              }
            ]
          },
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(<)",
            beginCaptures: {
              1: {
                name: "entity.name.type.tsx"
              },
              2: {
                name: "meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx"
              }
            },
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx"
              }
            },
            contentName: "meta.type.parameters.tsx",
            patterns: [
              {
                include: "#type-arguments-body"
              }
            ]
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
            captures: {
              1: {
                name: "entity.name.type.module.tsx"
              },
              2: {
                name: "punctuation.accessor.tsx"
              },
              3: {
                name: "punctuation.accessor.optional.tsx"
              }
            }
          },
          {
            name: "entity.name.type.tsx",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          }
        ]
      },
      "punctuation-comma": {
        name: "punctuation.separator.comma.tsx",
        match: ","
      },
      "punctuation-semicolon": {
        name: "punctuation.terminator.statement.tsx",
        match: ";"
      },
      "punctuation-accessor": {
        match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
        captures: {
          1: {
            name: "punctuation.accessor.tsx"
          },
          2: {
            name: "punctuation.accessor.optional.tsx"
          }
        }
      },
      string: {
        patterns: [
          {
            include: "#qstring-single"
          },
          {
            include: "#qstring-double"
          },
          {
            include: "#template"
          }
        ]
      },
      "qstring-double": {
        name: "string.quoted.double.tsx",
        begin: '"',
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.tsx"
          }
        },
        end: '(")|((?:[^\\\\\\n])$)',
        endCaptures: {
          1: {
            name: "punctuation.definition.string.end.tsx"
          },
          2: {
            name: "invalid.illegal.newline.tsx"
          }
        },
        patterns: [
          {
            include: "#string-character-escape"
          }
        ]
      },
      "qstring-single": {
        name: "string.quoted.single.tsx",
        begin: "'",
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.tsx"
          }
        },
        end: "(\\')|((?:[^\\\\\\n])$)",
        endCaptures: {
          1: {
            name: "punctuation.definition.string.end.tsx"
          },
          2: {
            name: "invalid.illegal.newline.tsx"
          }
        },
        patterns: [
          {
            include: "#string-character-escape"
          }
        ]
      },
      "string-character-escape": {
        name: "constant.character.escape.tsx",
        match: "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)"
      },
      template: {
        patterns: [
          {
            include: "#template-call"
          },
          {
            contentName: "string.template.tsx",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.tsx"
              },
              2: {
                name: "string.template.tsx punctuation.definition.string.template.begin.tsx"
              }
            },
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.tsx punctuation.definition.string.template.end.tsx"
              }
            },
            patterns: [
              {
                include: "#template-substitution-element"
              },
              {
                include: "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-call": {
        patterns: [
          {
            begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
            end: "(?=`)",
            patterns: [
              {
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
                patterns: [
                  {
                    include: "#support-function-call-identifiers"
                  },
                  {
                    name: "entity.name.function.tagged-template.tsx",
                    match: "([_$[:alpha:]][_$[:alnum:]]*)"
                  }
                ]
              },
              {
                include: "#type-arguments"
              }
            ]
          },
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.tsx"
              }
            },
            end: "(?=`)",
            patterns: [
              {
                include: "#type-arguments"
              }
            ]
          }
        ]
      },
      "template-substitution-element": {
        name: "meta.template.expression.tsx",
        begin: "\\$\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.template-expression.begin.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.template-expression.end.tsx"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ],
        contentName: "meta.embedded.line.tsx"
      },
      "type-string": {
        patterns: [
          {
            include: "#qstring-single"
          },
          {
            include: "#qstring-double"
          },
          {
            include: "#template-type"
          }
        ]
      },
      "template-type": {
        patterns: [
          {
            include: "#template-call"
          },
          {
            contentName: "string.template.tsx",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.tsx"
              },
              2: {
                name: "string.template.tsx punctuation.definition.string.template.begin.tsx"
              }
            },
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.tsx punctuation.definition.string.template.end.tsx"
              }
            },
            patterns: [
              {
                include: "#template-type-substitution-element"
              },
              {
                include: "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-type-substitution-element": {
        name: "meta.template.expression.tsx",
        begin: "\\$\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.template-expression.begin.tsx"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.template-expression.end.tsx"
          }
        },
        patterns: [
          {
            include: "#type"
          }
        ],
        contentName: "meta.embedded.line.tsx"
      },
      regex: {
        patterns: [
          {
            name: "string.regexp.tsx",
            begin: "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              1: {
                name: "punctuation.definition.string.begin.tsx"
              }
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.tsx"
              },
              2: {
                name: "keyword.other.tsx"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "string.regexp.tsx",
            begin: "((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              0: {
                name: "punctuation.definition.string.begin.tsx"
              }
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.tsx"
              },
              2: {
                name: "keyword.other.tsx"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          }
        ]
      },
      regexp: {
        patterns: [
          {
            name: "keyword.control.anchor.regexp",
            match: "\\\\[bB]|\\^|\\$"
          },
          {
            match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>",
            captures: {
              0: {
                name: "keyword.other.back-reference.regexp"
              },
              1: {
                name: "variable.other.regexp"
              }
            }
          },
          {
            name: "keyword.operator.quantifier.regexp",
            match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??"
          },
          {
            name: "keyword.operator.or.regexp",
            match: "\\|"
          },
          {
            name: "meta.group.assertion.regexp",
            begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            beginCaptures: {
              1: {
                name: "punctuation.definition.group.regexp"
              },
              2: {
                name: "punctuation.definition.group.assertion.regexp"
              },
              3: {
                name: "meta.assertion.look-ahead.regexp"
              },
              4: {
                name: "meta.assertion.negative-look-ahead.regexp"
              },
              5: {
                name: "meta.assertion.look-behind.regexp"
              },
              6: {
                name: "meta.assertion.negative-look-behind.regexp"
              }
            },
            end: "(\\))",
            endCaptures: {
              1: {
                name: "punctuation.definition.group.regexp"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "meta.group.regexp",
            begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
            beginCaptures: {
              0: {
                name: "punctuation.definition.group.regexp"
              },
              1: {
                name: "punctuation.definition.group.no-capture.regexp"
              },
              2: {
                name: "variable.other.regexp"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.definition.group.regexp"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "constant.other.character-class.set.regexp",
            begin: "(\\[)(\\^)?",
            beginCaptures: {
              1: {
                name: "punctuation.definition.character-class.regexp"
              },
              2: {
                name: "keyword.operator.negation.regexp"
              }
            },
            end: "(\\])",
            endCaptures: {
              1: {
                name: "punctuation.definition.character-class.regexp"
              }
            },
            patterns: [
              {
                name: "constant.other.character-class.range.regexp",
                match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                captures: {
                  1: {
                    name: "constant.character.numeric.regexp"
                  },
                  2: {
                    name: "constant.character.control.regexp"
                  },
                  3: {
                    name: "constant.character.escape.backslash.regexp"
                  },
                  4: {
                    name: "constant.character.numeric.regexp"
                  },
                  5: {
                    name: "constant.character.control.regexp"
                  },
                  6: {
                    name: "constant.character.escape.backslash.regexp"
                  }
                }
              },
              {
                include: "#regex-character-class"
              }
            ]
          },
          {
            include: "#regex-character-class"
          }
        ]
      },
      "regex-character-class": {
        patterns: [
          {
            name: "constant.other.character-class.regexp",
            match: "\\\\[wWsSdDtrnvf]|\\."
          },
          {
            name: "constant.character.numeric.regexp",
            match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})"
          },
          {
            name: "constant.character.control.regexp",
            match: "\\\\c[A-Z]"
          },
          {
            name: "constant.character.escape.backslash.regexp",
            match: "\\\\."
          }
        ]
      },
      comment: {
        patterns: [
          {
            name: "comment.block.documentation.tsx",
            begin: "/\\*\\*(?!/)",
            beginCaptures: {
              0: {
                name: "punctuation.definition.comment.tsx"
              }
            },
            end: "\\*/",
            endCaptures: {
              0: {
                name: "punctuation.definition.comment.tsx"
              }
            },
            patterns: [
              {
                include: "#docblock"
              }
            ]
          },
          {
            name: "comment.block.tsx",
            begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
            beginCaptures: {
              1: {
                name: "punctuation.definition.comment.tsx"
              },
              2: {
                name: "storage.type.internaldeclaration.tsx"
              },
              3: {
                name: "punctuation.decorator.internaldeclaration.tsx"
              }
            },
            end: "\\*/",
            endCaptures: {
              0: {
                name: "punctuation.definition.comment.tsx"
              }
            }
          },
          {
            begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            beginCaptures: {
              1: {
                name: "punctuation.whitespace.comment.leading.tsx"
              },
              2: {
                name: "comment.line.double-slash.tsx"
              },
              3: {
                name: "punctuation.definition.comment.tsx"
              },
              4: {
                name: "storage.type.internaldeclaration.tsx"
              },
              5: {
                name: "punctuation.decorator.internaldeclaration.tsx"
              }
            },
            end: "(?=$)",
            contentName: "comment.line.double-slash.tsx"
          }
        ]
      },
      "single-line-comment-consuming-line-ending": {
        begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        beginCaptures: {
          1: {
            name: "punctuation.whitespace.comment.leading.tsx"
          },
          2: {
            name: "comment.line.double-slash.tsx"
          },
          3: {
            name: "punctuation.definition.comment.tsx"
          },
          4: {
            name: "storage.type.internaldeclaration.tsx"
          },
          5: {
            name: "punctuation.decorator.internaldeclaration.tsx"
          }
        },
        end: "(?=^)",
        contentName: "comment.line.double-slash.tsx"
      },
      directives: {
        name: "comment.line.triple-slash.directive.tsx",
        begin: "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.comment.tsx"
          }
        },
        end: "(?=$)",
        patterns: [
          {
            name: "meta.tag.tsx",
            begin: "(<)(reference|amd-dependency|amd-module)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.directive.tsx"
              },
              2: {
                name: "entity.name.tag.directive.tsx"
              }
            },
            end: "/>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.directive.tsx"
              }
            },
            patterns: [
              {
                name: "entity.other.attribute-name.directive.tsx",
                match: "path|types|no-default-lib|lib|name|resolution-mode"
              },
              {
                name: "keyword.operator.assignment.tsx",
                match: "="
              },
              {
                include: "#string"
              }
            ]
          }
        ]
      },
      docblock: {
        patterns: [
          {
            match: "(?x)\n((@)(?:access|api))\n\\s+\n(private|protected|public)\n\\b",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "constant.language.access-type.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              },
              4: {
                name: "punctuation.definition.bracket.angle.begin.jsdoc"
              },
              5: {
                name: "constant.other.email.link.underline.jsdoc"
              },
              6: {
                name: "punctuation.definition.bracket.angle.end.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)borrows) \\s+\n((?:[^@\\s*/]|\\*[^/])+)    # <that namepath>\n\\s+ (as) \\s+              # as\n((?:[^@\\s*/]|\\*[^/])+)    # <this namepath>",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              },
              4: {
                name: "keyword.operator.control.jsdoc"
              },
              5: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            name: "meta.example.jsdoc",
            begin: "((@)example)\\s+",
            end: "(?=@|\\*/)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            patterns: [
              {
                match: "^\\s\\*\\s+"
              },
              {
                contentName: "constant.other.description.jsdoc",
                begin: "\\G(<)caption(>)",
                beginCaptures: {
                  0: {
                    name: "entity.name.tag.inline.jsdoc"
                  },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  2: {
                    name: "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                },
                end: "(</)caption(>)|(?=\\*/)",
                endCaptures: {
                  0: {
                    name: "entity.name.tag.inline.jsdoc"
                  },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  2: {
                    name: "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                }
              },
              {
                match: "[^\\s@*](?:[^*]|\\*[^/])*",
                captures: {
                  0: {
                    name: "source.embedded.tsx"
                  }
                }
              }
            ]
          },
          {
            match: "(?x) ((@)kind) \\s+ (class|constant|event|external|file|function|member|mixin|module|namespace|typedef) \\b",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "constant.language.symbol-type.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)see)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n  |\n  # JSDoc namepath\n  (\n    (?!\n      # Avoid matching bare URIs (also acceptable as links)\n      https?://\n      |\n      # Avoid matching {@inline tags}; we match those below\n      (?:\\[[^\\[\\]]*\\])? # Possible description [preceding]{@tag}\n      {@(?:link|linkcode|linkplain|tutorial)\\b\n    )\n    # Matched namepath\n    (?:[^@\\s*/]|\\*[^/])+\n  )\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.link.underline.jsdoc"
              },
              4: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)template)\n\\s+\n# One or more valid identifiers\n(\n  [A-Za-z_$]         # First character: non-numeric word character\n  [\\w$.\\[\\]]*        # Rest of identifier\n  (?:                # Possible list of additional identifiers\n    \\s* , \\s*\n    [A-Za-z_$]\n    [\\w$.\\[\\]]*\n  )*\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            begin: "(?x)((@)template)\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "variable.other.jsdoc",
                match: "([A-Za-z_$][\\w$.\\[\\]]*)"
              }
            ]
          },
          {
            match: "(?x)\n(\n  (@)\n  (?:arg|argument|const|constant|member|namespace|param|var)\n)\n\\s+\n(\n  [A-Za-z_$]\n  [\\w$.\\[\\]]*\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            begin: "((@)typedef)\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "entity.name.type.instance.jsdoc",
                match: "(?:[^@\\s*/]|\\*[^/])+"
              }
            ]
          },
          {
            begin: "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "variable.other.jsdoc",
                match: "([A-Za-z_$][\\w$.\\[\\]]*)"
              },
              {
                name: "variable.other.jsdoc",
                match: `(?x)
(\\[)\\s*
[\\w$]+
(?:
  (?:\\[\\])?                                        # Foo[ ].bar properties within an array
  \\.                                                # Foo.Bar namespaced parameter
  [\\w$]+
)*
(?:
  \\s*
  (=)                                                # [foo=bar] Default parameter value
  \\s*
  (
    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes
    (?>
      "(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |                      # [foo="bar"] Double-quoted
      '(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?' |                      # [foo='bar'] Single-quoted
      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |                                # [foo=[1,2]] Array literal
      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*   # Everything else
    )*
  )
)?
\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))`,
                captures: {
                  1: {
                    name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc"
                  },
                  2: {
                    name: "keyword.operator.assignment.jsdoc"
                  },
                  3: {
                    name: "source.embedded.tsx"
                  },
                  4: {
                    name: "punctuation.definition.optional-value.end.bracket.square.jsdoc"
                  },
                  5: {
                    name: "invalid.illegal.syntax.jsdoc"
                  }
                }
              }
            ]
          },
          {
            begin: "(?x)\n(\n  (@)\n  (?:define|enum|exception|export|extends|lends|implements|modifies\n  |namespace|private|protected|returns?|satisfies|suppress|this|throws|type\n  |yields?)\n)\n\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              }
            ]
          },
          {
            match: "(?x)\n(\n  (@)\n  (?:alias|augments|callback|constructs|emits|event|fires|exports?\n  |extends|external|function|func|host|lends|listens|interface|memberof!?\n  |method|module|mixes|mixin|name|requires|see|this|typedef|uses)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            contentName: "variable.other.jsdoc",
            begin: `((@)(?:default(?:value)?|license|version))\\s+(([''"]))`,
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              },
              4: {
                name: "punctuation.definition.string.begin.jsdoc"
              }
            },
            end: "(\\3)|(?=$|\\*/)",
            endCaptures: {
              0: {
                name: "variable.other.jsdoc"
              },
              1: {
                name: "punctuation.definition.string.end.jsdoc"
              }
            }
          },
          {
            match: "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            name: "storage.type.class.jsdoc",
            match: "(?x) (@) (?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles |callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright |default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception |exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func |function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc |inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method |mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects |override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected |public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary |suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation |version|virtual|writeOnce|yields?) \\b",
            captures: {
              1: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            }
          },
          {
            include: "#inline-tags"
          },
          {
            match: "((@)(?:[_$[:alpha:]][_$[:alnum:]]*))(?=\\s+)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            }
          }
        ]
      },
      brackets: {
        patterns: [
          {
            begin: "{",
            end: "}|(?=\\*/)",
            patterns: [
              {
                include: "#brackets"
              }
            ]
          },
          {
            begin: "\\[",
            end: "\\]|(?=\\*/)",
            patterns: [
              {
                include: "#brackets"
              }
            ]
          }
        ]
      },
      "inline-tags": {
        patterns: [
          {
            name: "constant.other.description.jsdoc",
            match: "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
            captures: {
              1: {
                name: "punctuation.definition.bracket.square.begin.jsdoc"
              },
              2: {
                name: "punctuation.definition.bracket.square.end.jsdoc"
              }
            }
          },
          {
            name: "entity.name.type.instance.jsdoc",
            begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
            beginCaptures: {
              1: {
                name: "punctuation.definition.bracket.curly.begin.jsdoc"
              },
              2: {
                name: "storage.type.class.jsdoc"
              },
              3: {
                name: "punctuation.definition.inline.tag.jsdoc"
              }
            },
            end: "}|(?=\\*/)",
            endCaptures: {
              0: {
                name: "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            patterns: [
              {
                match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?",
                captures: {
                  1: {
                    name: "variable.other.link.underline.jsdoc"
                  },
                  2: {
                    name: "punctuation.separator.pipe.jsdoc"
                  }
                }
              },
              {
                match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?",
                captures: {
                  1: {
                    name: "variable.other.description.jsdoc"
                  },
                  2: {
                    name: "punctuation.separator.pipe.jsdoc"
                  }
                }
              }
            ]
          }
        ]
      },
      jsdoctype: {
        patterns: [
          {
            name: "invalid.illegal.type.jsdoc",
            match: "\\G{(?:[^}*]|\\*[^/}])+$"
          },
          {
            contentName: "entity.name.type.instance.jsdoc",
            begin: "\\G({)",
            beginCaptures: {
              0: {
                name: "entity.name.type.instance.jsdoc"
              },
              1: {
                name: "punctuation.definition.bracket.curly.begin.jsdoc"
              }
            },
            end: "((}))\\s*|(?=\\*/)",
            endCaptures: {
              1: {
                name: "entity.name.type.instance.jsdoc"
              },
              2: {
                name: "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            patterns: [
              {
                include: "#brackets"
              }
            ]
          }
        ]
      },
      jsx: {
        patterns: [
          {
            include: "#jsx-tag-without-attributes-in-expression"
          },
          {
            include: "#jsx-tag-in-expression"
          }
        ]
      },
      "jsx-tag-without-attributes-in-expression": {
        begin: "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        end: "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        patterns: [
          {
            include: "#jsx-tag-without-attributes"
          }
        ]
      },
      "jsx-tag-without-attributes": {
        name: "meta.tag.without-attributes.tsx",
        begin: "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        end: "(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.tsx"
          },
          2: {
            name: "entity.name.tag.namespace.tsx"
          },
          3: {
            name: "punctuation.separator.namespace.tsx"
          },
          4: {
            name: "entity.name.tag.tsx"
          },
          5: {
            name: "support.class.component.tsx"
          },
          6: {
            name: "punctuation.definition.tag.end.tsx"
          }
        },
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.tsx"
          },
          2: {
            name: "entity.name.tag.namespace.tsx"
          },
          3: {
            name: "punctuation.separator.namespace.tsx"
          },
          4: {
            name: "entity.name.tag.tsx"
          },
          5: {
            name: "support.class.component.tsx"
          },
          6: {
            name: "punctuation.definition.tag.end.tsx"
          }
        },
        contentName: "meta.jsx.children.tsx",
        patterns: [
          {
            include: "#jsx-children"
          }
        ]
      },
      "jsx-tag-in-expression": {
        begin: "(?x)\n  (?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*\n  (?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,)) # look ahead is not type parameter of arrow\n  (?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        patterns: [
          {
            include: "#jsx-tag"
          }
        ]
      },
      "jsx-tag": {
        name: "meta.tag.tsx",
        begin: "(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(/>)|(?:(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.tsx"
          },
          2: {
            name: "punctuation.definition.tag.begin.tsx"
          },
          3: {
            name: "entity.name.tag.namespace.tsx"
          },
          4: {
            name: "punctuation.separator.namespace.tsx"
          },
          5: {
            name: "entity.name.tag.tsx"
          },
          6: {
            name: "support.class.component.tsx"
          },
          7: {
            name: "punctuation.definition.tag.end.tsx"
          }
        },
        patterns: [
          {
            begin: "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.tsx"
              },
              2: {
                name: "entity.name.tag.namespace.tsx"
              },
              3: {
                name: "punctuation.separator.namespace.tsx"
              },
              4: {
                name: "entity.name.tag.tsx"
              },
              5: {
                name: "support.class.component.tsx"
              }
            },
            end: "(?=[/]?>)",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-arguments"
              },
              {
                include: "#jsx-tag-attributes"
              }
            ]
          },
          {
            begin: "(>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.end.tsx"
              }
            },
            end: "(?=</)",
            contentName: "meta.jsx.children.tsx",
            patterns: [
              {
                include: "#jsx-children"
              }
            ]
          }
        ]
      },
      "jsx-children": {
        patterns: [
          {
            include: "#jsx-tag-without-attributes"
          },
          {
            include: "#jsx-tag"
          },
          {
            include: "#jsx-evaluated-code"
          },
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-evaluated-code": {
        contentName: "meta.embedded.expression.tsx",
        begin: "\\{",
        end: "\\}",
        beginCaptures: {
          0: {
            name: "punctuation.section.embedded.begin.tsx"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.section.embedded.end.tsx"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "jsx-entities": {
        patterns: [
          {
            name: "constant.character.entity.tsx",
            match: "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
            captures: {
              1: {
                name: "punctuation.definition.entity.tsx"
              },
              3: {
                name: "punctuation.definition.entity.tsx"
              }
            }
          }
        ]
      },
      "jsx-tag-attributes": {
        name: "meta.tag.attributes.tsx",
        begin: "\\s+",
        end: "(?=[/]?>)",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#jsx-tag-attribute-name"
          },
          {
            include: "#jsx-tag-attribute-assignment"
          },
          {
            include: "#jsx-string-double-quoted"
          },
          {
            include: "#jsx-string-single-quoted"
          },
          {
            include: "#jsx-evaluated-code"
          },
          {
            include: "#jsx-tag-attributes-illegal"
          }
        ]
      },
      "jsx-tag-attribute-name": {
        match: "(?x)\n  \\s*\n  (?:([_$[:alpha:]][-_$[:alnum:].]*)(:))?\n  ([_$[:alpha:]][-_$[:alnum:]]*)\n  (?=\\s|=|/?>|/\\*|//)",
        captures: {
          1: {
            name: "entity.other.attribute-name.namespace.tsx"
          },
          2: {
            name: "punctuation.separator.namespace.tsx"
          },
          3: {
            name: "entity.other.attribute-name.tsx"
          }
        }
      },
      "jsx-tag-attribute-assignment": {
        name: "keyword.operator.assignment.tsx",
        match: `=(?=\\s*(?:'|"|{|/\\*|//|\\n))`
      },
      "jsx-string-double-quoted": {
        name: "string.quoted.double.tsx",
        begin: '"',
        end: '"',
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.tsx"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.definition.string.end.tsx"
          }
        },
        patterns: [
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-string-single-quoted": {
        name: "string.quoted.single.tsx",
        begin: "'",
        end: "'",
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.tsx"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.definition.string.end.tsx"
          }
        },
        patterns: [
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-tag-attributes-illegal": {
        name: "invalid.illegal.attribute.tsx",
        match: "\\S+"
      }
    };
    TypeScript_tmLanguage = {
      version,
      name,
      scopeName,
      patterns,
      repository
    };
  }
});

// src/tmLangs/vue.tmLanguage.js
var vue_tmLanguage_exports = {};
__export(vue_tmLanguage_exports, {
  default: () => vue_tmLanguage,
  name: () => name2,
  patterns: () => patterns2,
  repository: () => repository2,
  scopeName: () => scopeName2,
  version: () => version2
});
var version2, name2, scopeName2, patterns2, repository2, vue_tmLanguage;
var init_vue_tmLanguage = __esm({
  "src/tmLangs/vue.tmLanguage.js"() {
    "use strict";
    version2 = "https://github.com/johnsoncodehk/volar/commit/2ddb2fa78e317fee86a90c76ad78746ff35ef86e";
    name2 = "vue";
    scopeName2 = "source.vue";
    patterns2 = [
      {
        include: "text.html.basic#comment"
      },
      {
        include: "#self-closing-tag"
      },
      {
        begin: "(<)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.html.vue"
          }
        },
        end: "(>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.html.vue"
          }
        },
        patterns: [
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]md['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "text.html.markdown",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "text.html.markdown"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]html['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "text.html.derivative",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "#html-stuff"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]pug['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "text.pug",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "text.pug"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]stylus['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.stylus",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.stylus"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]postcss['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.postcss",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.postcss"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]sass['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.sass",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.sass"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]css['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.css",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.css"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]scss['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.css.scss",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.css.scss"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]less['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.css.less",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.css.less"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]js['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.js",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.js"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]ts['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.ts",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.ts"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]jsx['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.js.jsx",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.js.jsx"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]tsx['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.tsx",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.tsx"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]json['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.json",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.json"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]jsonc['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.json.comments",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.json.comments"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]yaml['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.yaml",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.yaml"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"]toml['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.toml",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.toml"
              }
            ]
          },
          {
            begin: `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*['"](gql|graphql)['"])`,
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.graphql",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.graphql"
              }
            ]
          },
          {
            begin: "(template)\\b",
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "text.html.derivative",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "#html-stuff"
              }
            ]
          },
          {
            begin: "(script)\\b",
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.js",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.js"
              }
            ]
          },
          {
            begin: "(style)\\b",
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "source.css",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "source.css"
              }
            ]
          },
          {
            begin: "([a-zA-Z0-9:-]+)",
            beginCaptures: {
              1: {
                name: "entity.name.tag.$1.html.vue"
              }
            },
            end: "(</)(\\1)\\s*(?=>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              2: {
                name: "entity.name.tag.$2.html.vue"
              }
            },
            name: "text",
            patterns: [
              {
                include: "#tag-stuff"
              }
            ]
          }
        ]
      }
    ];
    repository2 = {
      "self-closing-tag": {
        begin: "(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.html.vue"
          },
          2: {
            name: "entity.name.tag.$2.html.vue"
          }
        },
        end: "(?<=/>)",
        patterns: [
          {
            include: "#tag-stuff"
          }
        ]
      },
      "template-tag": {
        patterns: [
          {
            include: "#template-tag-1"
          },
          {
            include: "#template-tag-2"
          }
        ]
      },
      "template-tag-1": {
        begin: "(<)(template)\\b(>)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.html.vue"
          },
          2: {
            name: "entity.name.tag.$2.html.vue"
          },
          3: {
            name: "punctuation.definition.tag.end.html.vue"
          }
        },
        end: "(/?>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.html.vue"
          }
        },
        name: "meta.template-tag.start",
        patterns: [
          {
            begin: "\\G",
            end: "(?=/>)|((</)(template)\\b)",
            endCaptures: {
              2: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              3: {
                name: "entity.name.tag.$3.html.vue"
              }
            },
            name: "meta.template-tag.end",
            patterns: [
              {
                include: "#html-stuff"
              }
            ]
          }
        ]
      },
      "template-tag-2": {
        begin: "(<)(template)\\b",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.html.vue"
          },
          2: {
            name: "entity.name.tag.$2.html.vue"
          }
        },
        end: "(/?>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.html.vue"
          }
        },
        name: "meta.template-tag.start",
        patterns: [
          {
            begin: "\\G",
            end: "(?=/>)|((</)(template)\\b)",
            endCaptures: {
              2: {
                name: "punctuation.definition.tag.begin.html.vue"
              },
              3: {
                name: "entity.name.tag.$3.html.vue"
              }
            },
            name: "meta.template-tag.end",
            patterns: [
              {
                include: "#tag-stuff"
              },
              {
                include: "#html-stuff"
              }
            ]
          }
        ]
      },
      "html-stuff": {
        patterns: [
          {
            include: "#template-tag"
          },
          {
            include: "text.html.basic"
          }
        ]
      },
      "tag-stuff": {
        begin: "\\G",
        end: "(?=/>)|(>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.html.vue"
          }
        },
        name: "meta.tag-stuff",
        patterns: [
          {
            include: "#vue-directives"
          },
          {
            include: "text.html.basic#attribute"
          }
        ]
      },
      "vue-directives": {
        patterns: [
          {
            include: "#vue-directives-control"
          },
          {
            include: "#vue-directives-style-attr"
          },
          {
            include: "#vue-directives-original"
          }
        ]
      },
      "vue-directives-original": {
        begin: "(?:\\b(v-)|(:|@|#))(\\[?)([a-zA-Z0-9\\-_]*)(\\]?)(\\:([a-zA-Z0-9\\-_]+))?(?:\\.([a-zA-Z0-9\\-_]+))*\\s*(=)",
        captures: {
          1: {
            name: "entity.other.attribute-name.html.vue"
          },
          2: {
            name: "punctuation.separator.key-value.html.vue"
          },
          3: {
            name: "punctuation.separator.key-value.html.vue"
          },
          4: {
            name: "entity.other.attribute-name.html.vue"
          },
          5: {
            name: "punctuation.separator.key-value.html.vue"
          },
          6: {
            name: "entity.other.attribute-name.html.vue"
          },
          7: {
            name: "entity.other.attribute-name.html.vue"
          },
          8: {
            name: "entity.other.attribute-name.html.vue"
          },
          "9`": {
            name: "punctuation.separator.key-value.html.vue"
          }
        },
        end: `(?<='|")`,
        name: "meta.directive.vue",
        patterns: [
          {
            begin: `('|")`,
            beginCaptures: {
              1: {
                name: "punctuation.definition.string.begin.html.vue"
              }
            },
            end: "(\\1)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.html.vue"
              }
            },
            name: "source.ts.embedded.html.vue",
            patterns: [
              {
                include: "source.ts"
              }
            ]
          }
        ]
      },
      "vue-directives-control": {
        begin: "(v-for)|(v-if|v-else-if|v-else)(?![\\w:-])",
        captures: {
          0: {
            name: "keyword.control.loop.vue"
          },
          1: {
            name: "keyword.control.conditional.vue"
          }
        },
        end: "(?=\\s*+[^=\\s])",
        name: "meta.directive.vue",
        patterns: [
          {
            begin: "=",
            beginCaptures: {
              0: {
                name: "punctuation.separator.key-value.html.vue"
              }
            },
            end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
            patterns: [
              {
                begin: `('|")`,
                beginCaptures: {
                  1: {
                    name: "punctuation.definition.string.begin.html.vue"
                  }
                },
                end: "(\\1)",
                endCaptures: {
                  1: {
                    name: "punctuation.definition.string.end.html.vue"
                  }
                },
                name: "source.ts.embedded.html.vue",
                patterns: [
                  {
                    include: "source.ts"
                  }
                ]
              }
            ]
          }
        ]
      },
      "vue-directives-style-attr": {
        begin: "\\b(style)\\s*(=)",
        captures: {
          1: {
            name: "entity.other.attribute-name.html.vue"
          },
          2: {
            name: "punctuation.separator.key-value.html.vue"
          }
        },
        end: `(?<='|")`,
        name: "meta.directive.vue",
        patterns: [
          {
            comment: "Copy from source.css#rule-list-innards",
            begin: `('|")`,
            beginCaptures: {
              1: {
                name: "punctuation.definition.string.begin.html.vue"
              }
            },
            end: "(\\1)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.html.vue"
              }
            },
            name: "source.css.embedded.html.vue",
            patterns: [
              {
                include: "source.css#comment-block"
              },
              {
                include: "source.css#escapes"
              },
              {
                include: "source.css#font-features"
              },
              {
                match: "(?x) (?<![\\w-])\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
                name: "variable.css"
              },
              {
                begin: "(?<![-a-zA-Z])(?=[-a-zA-Z])",
                end: "$|(?![-a-zA-Z])",
                name: "meta.property-name.css",
                patterns: [
                  {
                    include: "source.css#property-names"
                  }
                ]
              },
              {
                comment: "Modify end to fix #199. TODO: handle ' character.",
                begin: "(:)\\s*",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.key-value.css"
                  }
                },
                end: `\\s*(;)|\\s*(?='|")`,
                endCaptures: {
                  1: {
                    name: "punctuation.terminator.rule.css"
                  }
                },
                contentName: "meta.property-value.css",
                patterns: [
                  {
                    include: "source.css#comment-block"
                  },
                  {
                    include: "source.css#property-values"
                  }
                ]
              },
              {
                match: ";",
                name: "punctuation.terminator.rule.css"
              }
            ]
          }
        ]
      },
      "vue-interpolations": {
        patterns: [
          {
            begin: "\\{\\{",
            beginCaptures: [
              {
                name: "punctuation.definition.tag.begin.html.vue"
              }
            ],
            end: "\\}\\}",
            endCaptures: [
              {
                name: "punctuation.definition.tag.end.html.vue"
              }
            ],
            name: "expression.embbeded.vue",
            patterns: [
              {
                begin: "\\G",
                end: "(?=\\}\\})",
                name: "source.ts.embedded.html.vue",
                patterns: [
                  {
                    include: "source.ts"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    vue_tmLanguage = {
      version: version2,
      name: name2,
      scopeName: scopeName2,
      patterns: patterns2,
      repository: repository2
    };
  }
});

// src/tmLangs/JavaScript.tmLanguage.js
var JavaScript_tmLanguage_exports = {};
__export(JavaScript_tmLanguage_exports, {
  default: () => JavaScript_tmLanguage,
  name: () => name3,
  patterns: () => patterns3,
  repository: () => repository3,
  scopeName: () => scopeName3,
  version: () => version3
});
var version3, name3, scopeName3, patterns3, repository3, JavaScript_tmLanguage;
var init_JavaScript_tmLanguage = __esm({
  "src/tmLangs/JavaScript.tmLanguage.js"() {
    "use strict";
    version3 = "https://github.com/microsoft/TypeScript-TmLanguage/commit/56b7270f094b036256774702e3b7f96490981190";
    name3 = "JavaScript (with React support)";
    scopeName3 = "source.js";
    patterns3 = [
      {
        include: "#directives"
      },
      {
        include: "#statements"
      },
      {
        include: "#shebang"
      }
    ];
    repository3 = {
      shebang: {
        name: "comment.line.shebang.js",
        match: "\\A(#!).*(?=$)",
        captures: {
          1: {
            name: "punctuation.definition.comment.js"
          }
        }
      },
      statements: {
        patterns: [
          {
            include: "#declaration"
          },
          {
            include: "#control-statement"
          },
          {
            include: "#after-operator-block-as-object-literal"
          },
          {
            include: "#decl-block"
          },
          {
            include: "#label"
          },
          {
            include: "#expression"
          },
          {
            include: "#punctuation-semicolon"
          },
          {
            include: "#string"
          },
          {
            include: "#comment"
          }
        ]
      },
      declaration: {
        patterns: [
          {
            include: "#decorator"
          },
          {
            include: "#var-expr"
          },
          {
            include: "#function-declaration"
          },
          {
            include: "#class-declaration"
          },
          {
            include: "#interface-declaration"
          },
          {
            include: "#enum-declaration"
          },
          {
            include: "#namespace-declaration"
          },
          {
            include: "#type-alias-declaration"
          },
          {
            include: "#import-equals-declaration"
          },
          {
            include: "#import-declaration"
          },
          {
            include: "#export-declaration"
          },
          {
            name: "storage.modifier.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "control-statement": {
        patterns: [
          {
            include: "#switch-statement"
          },
          {
            include: "#for-loop"
          },
          {
            name: "keyword.control.trycatch.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.control.loop.js"
              },
              2: {
                name: "entity.name.label.js"
              }
            }
          },
          {
            name: "keyword.control.loop.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              0: {
                name: "keyword.control.flow.js"
              }
            },
            end: "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "keyword.control.switch.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#if-statement"
          },
          {
            name: "keyword.control.conditional.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.control.with.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.control.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.other.debugger.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      label: {
        patterns: [
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)",
            beginCaptures: {
              1: {
                name: "entity.name.label.js"
              },
              2: {
                name: "punctuation.separator.label.js"
              }
            },
            end: "(?<=\\})",
            patterns: [
              {
                include: "#decl-block"
              }
            ]
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)",
            captures: {
              1: {
                name: "entity.name.label.js"
              },
              2: {
                name: "punctuation.separator.label.js"
              }
            }
          }
        ]
      },
      expression: {
        patterns: [
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            include: "#identifiers"
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      expressionWithoutIdentifiers: {
        patterns: [
          {
            include: "#jsx"
          },
          {
            include: "#string"
          },
          {
            include: "#regex"
          },
          {
            include: "#comment"
          },
          {
            include: "#function-expression"
          },
          {
            include: "#class-expression"
          },
          {
            include: "#arrow-function"
          },
          {
            include: "#paren-expression-possibly-arrow"
          },
          {
            include: "#cast"
          },
          {
            include: "#ternary-expression"
          },
          {
            include: "#new-expr"
          },
          {
            include: "#instanceof-expr"
          },
          {
            include: "#object-literal"
          },
          {
            include: "#expression-operators"
          },
          {
            include: "#function-call"
          },
          {
            include: "#literal"
          },
          {
            include: "#support-objects"
          },
          {
            include: "#paren-expression"
          }
        ]
      },
      expressionPunctuations: {
        patterns: [
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-accessor"
          }
        ]
      },
      decorator: {
        name: "meta.decorator.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        beginCaptures: {
          0: {
            name: "punctuation.decorator.js"
          }
        },
        end: "(?=\\s)",
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "var-expr": {
        patterns: [
          {
            name: "meta.var.expr.js",
            begin: "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            end: "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))",
            patterns: [
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: {
                    name: "keyword.control.export.js"
                  },
                  2: {
                    name: "storage.modifier.js"
                  },
                  3: {
                    name: "storage.type.js"
                  }
                },
                end: "(?=\\S)"
              },
              {
                include: "#destructuring-variable"
              },
              {
                include: "#var-single-variable"
              },
              {
                include: "#variable-initializer"
              },
              {
                include: "#comment"
              },
              {
                begin: "(,)\\s*((?!\\S)|(?=\\/\\/))",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.comma.js"
                  }
                },
                end: "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  {
                    include: "#single-line-comment-consuming-line-ending"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#destructuring-variable"
                  },
                  {
                    include: "#var-single-variable"
                  },
                  {
                    include: "#punctuation-comma"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          },
          {
            name: "meta.var.expr.js",
            begin: "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "storage.type.js"
              }
            },
            end: "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))",
            patterns: [
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: {
                    name: "keyword.control.export.js"
                  },
                  2: {
                    name: "storage.modifier.js"
                  },
                  3: {
                    name: "storage.type.js"
                  }
                },
                end: "(?=\\S)"
              },
              {
                include: "#destructuring-const"
              },
              {
                include: "#var-single-const"
              },
              {
                include: "#variable-initializer"
              },
              {
                include: "#comment"
              },
              {
                begin: "(,)\\s*((?!\\S)|(?=\\/\\/))",
                beginCaptures: {
                  1: {
                    name: "punctuation.separator.comma.js"
                  }
                },
                end: "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  {
                    include: "#single-line-comment-consuming-line-ending"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#destructuring-const"
                  },
                  {
                    include: "#var-single-const"
                  },
                  {
                    include: "#punctuation-comma"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "var-single-variable": {
        patterns: [
          {
            name: "meta.var-single-variable.expr.js",
            begin: "(?x)([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js entity.name.function.js"
              },
              2: {
                name: "keyword.operator.definiteassignment.js"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.js",
            begin: "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js"
              },
              2: {
                name: "keyword.operator.definiteassignment.js"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.js",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.readwrite.js"
              },
              2: {
                name: "keyword.operator.definiteassignment.js"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-const": {
        patterns: [
          {
            name: "meta.var-single-variable.expr.js",
            begin: "(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js entity.name.function.js"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            name: "meta.var-single-variable.expr.js",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js"
              }
            },
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-variable-type-annotation": {
        patterns: [
          {
            include: "#type-annotation"
          },
          {
            include: "#string"
          },
          {
            include: "#comment"
          }
        ]
      },
      "destructuring-variable": {
        patterns: [
          {
            name: "meta.object-binding-pattern-variable.js",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#object-binding-pattern"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          },
          {
            name: "meta.array-binding-pattern-variable.js",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#array-binding-pattern"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          }
        ]
      },
      "destructuring-const": {
        patterns: [
          {
            name: "meta.object-binding-pattern-variable.js",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#object-binding-pattern-const"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          },
          {
            name: "meta.array-binding-pattern-variable.js",
            begin: "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#array-binding-pattern-const"
              },
              {
                include: "#type-annotation"
              },
              {
                include: "#comment"
              }
            ]
          }
        ]
      },
      "object-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#binding-element"
              }
            ]
          },
          {
            include: "#object-binding-pattern"
          },
          {
            include: "#destructuring-variable-rest"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-const": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#binding-element-const"
              }
            ]
          },
          {
            include: "#object-binding-pattern-const"
          },
          {
            include: "#destructuring-variable-rest-const"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-propertyName": {
        begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
        end: "(:)",
        endCaptures: {
          0: {
            name: "punctuation.destructuring.js"
          }
        },
        patterns: [
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            name: "variable.object.property.js",
            match: "([_$[:alpha:]][_$[:alnum:]]*)"
          }
        ]
      },
      "binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#object-binding-pattern"
          },
          {
            include: "#array-binding-pattern"
          },
          {
            include: "#destructuring-variable-rest"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "binding-element-const": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#object-binding-pattern-const"
          },
          {
            include: "#array-binding-pattern-const"
          },
          {
            include: "#destructuring-variable-rest-const"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "destructuring-variable-rest": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "meta.definition.variable.js variable.other.readwrite.js"
          }
        }
      },
      "destructuring-variable-rest-const": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "meta.definition.variable.js variable.other.constant.js"
          }
        }
      },
      "object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        patterns: [
          {
            include: "#object-binding-element"
          }
        ]
      },
      "object-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        patterns: [
          {
            include: "#object-binding-element-const"
          }
        ]
      },
      "array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        patterns: [
          {
            include: "#binding-element"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "array-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        patterns: [
          {
            include: "#binding-element-const"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "parameter-name": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
            captures: {
              1: {
                name: "storage.modifier.js"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "entity.name.function.js variable.language.this.js"
              },
              4: {
                name: "entity.name.function.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "variable.parameter.js variable.language.this.js"
              },
              4: {
                name: "variable.parameter.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          }
        ]
      },
      "destructuring-parameter": {
        patterns: [
          {
            name: "meta.parameter.object-binding-pattern.js",
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",
            beginCaptures: {
              1: {
                name: "keyword.operator.rest.js"
              },
              2: {
                name: "punctuation.definition.binding-pattern.object.js"
              }
            },
            end: "\\}",
            endCaptures: {
              0: {
                name: "punctuation.definition.binding-pattern.object.js"
              }
            },
            patterns: [
              {
                include: "#parameter-object-binding-element"
              }
            ]
          },
          {
            name: "meta.paramter.array-binding-pattern.js",
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",
            beginCaptures: {
              1: {
                name: "keyword.operator.rest.js"
              },
              2: {
                name: "punctuation.definition.binding-pattern.array.js"
              }
            },
            end: "\\]",
            endCaptures: {
              0: {
                name: "punctuation.definition.binding-pattern.array.js"
              }
            },
            patterns: [
              {
                include: "#parameter-binding-element"
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "parameter-object-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#object-binding-element-propertyName"
              },
              {
                include: "#parameter-binding-element"
              }
            ]
          },
          {
            include: "#parameter-object-binding-pattern"
          },
          {
            include: "#destructuring-parameter-rest"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "parameter-binding-element": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#regex"
          },
          {
            include: "#parameter-object-binding-pattern"
          },
          {
            include: "#parameter-array-binding-pattern"
          },
          {
            include: "#destructuring-parameter-rest"
          },
          {
            include: "#variable-initializer"
          }
        ]
      },
      "destructuring-parameter-rest": {
        match: "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
        captures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "variable.parameter.js"
          }
        }
      },
      "parameter-object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.object.js"
          }
        },
        patterns: [
          {
            include: "#parameter-object-binding-element"
          }
        ]
      },
      "parameter-array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: {
            name: "keyword.operator.rest.js"
          },
          2: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "punctuation.definition.binding-pattern.array.js"
          }
        },
        patterns: [
          {
            include: "#parameter-binding-element"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "field-declaration": {
        name: "meta.field.declaration.js",
        begin: "(?x)(?<!\\()(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))",
        beginCaptures: {
          1: {
            name: "storage.modifier.js"
          }
        },
        end: "(?x)(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        patterns: [
          {
            include: "#variable-initializer"
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#comment"
          },
          {
            match: "(?x)(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "meta.definition.property.js entity.name.function.js"
              },
              2: {
                name: "keyword.operator.optional.js"
              },
              3: {
                name: "keyword.operator.definiteassignment.js"
              }
            }
          },
          {
            name: "meta.definition.property.js variable.object.property.js",
            match: "\\#?[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            name: "keyword.operator.optional.js",
            match: "\\?"
          },
          {
            name: "keyword.operator.definiteassignment.js",
            match: "\\!"
          }
        ]
      },
      "variable-initializer": {
        patterns: [
          {
            begin: "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.js"
              }
            },
            end: "(?=$|^|[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            begin: "(?<!=|!)(=)(?!=)",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.js"
              }
            },
            end: "(?=[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<=\\S)(?<!=)(?=\\s*$)",
            patterns: [
              {
                include: "#expression"
              }
            ]
          }
        ]
      },
      "function-declaration": {
        name: "meta.function.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.modifier.async.js"
          },
          4: {
            name: "storage.type.function.js"
          },
          5: {
            name: "keyword.generator.asterisk.js"
          },
          6: {
            name: "meta.definition.function.js entity.name.function.js"
          }
        },
        end: "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))|(?<=\\})",
        patterns: [
          {
            include: "#function-name"
          },
          {
            include: "#function-body"
          }
        ]
      },
      "function-expression": {
        name: "meta.function.expression.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        beginCaptures: {
          1: {
            name: "storage.modifier.async.js"
          },
          2: {
            name: "storage.type.function.js"
          },
          3: {
            name: "keyword.generator.asterisk.js"
          },
          4: {
            name: "meta.definition.function.js entity.name.function.js"
          }
        },
        end: "(?=;)|(?<=\\})",
        patterns: [
          {
            include: "#function-name"
          },
          {
            include: "#single-line-comment-consuming-line-ending"
          },
          {
            include: "#function-body"
          }
        ]
      },
      "function-name": {
        name: "meta.definition.function.js entity.name.function.js",
        match: "[_$[:alpha:]][_$[:alnum:]]*"
      },
      "function-body": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#function-parameters"
          },
          {
            include: "#return-type"
          },
          {
            include: "#type-function-return-type"
          },
          {
            include: "#decl-block"
          },
          {
            name: "keyword.generator.asterisk.js",
            match: "\\*"
          }
        ]
      },
      "method-declaration": {
        patterns: [
          {
            name: "meta.method.declaration.js",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "storage.modifier.js"
              },
              4: {
                name: "storage.modifier.async.js"
              },
              5: {
                name: "storage.type.js"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.method.declaration.js",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "storage.modifier.js"
              },
              4: {
                name: "storage.modifier.async.js"
              },
              5: {
                name: "keyword.operator.new.js"
              },
              6: {
                name: "keyword.generator.asterisk.js"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.method.declaration.js",
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "storage.modifier.js"
              },
              4: {
                name: "storage.modifier.async.js"
              },
              5: {
                name: "storage.type.property.js"
              },
              6: {
                name: "keyword.generator.asterisk.js"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#method-declaration-name"
              },
              {
                include: "#function-body"
              }
            ]
          }
        ]
      },
      "object-literal-method-declaration": {
        name: "meta.method.declaration.js",
        begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
        beginCaptures: {
          1: {
            name: "storage.modifier.async.js"
          },
          2: {
            name: "storage.type.property.js"
          },
          3: {
            name: "keyword.generator.asterisk.js"
          }
        },
        end: "(?=\\}|;|,)|(?<=\\})",
        patterns: [
          {
            include: "#method-declaration-name"
          },
          {
            include: "#function-body"
          },
          {
            begin: "(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.js"
              },
              2: {
                name: "storage.type.property.js"
              },
              3: {
                name: "keyword.generator.asterisk.js"
              }
            },
            end: "(?=\\(|\\<)",
            patterns: [
              {
                include: "#method-declaration-name"
              }
            ]
          }
        ]
      },
      "method-declaration-name": {
        begin: "(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
        end: "(?=\\(|\\<)",
        patterns: [
          {
            include: "#string"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#numeric-literal"
          },
          {
            name: "meta.definition.method.js entity.name.function.js",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            name: "keyword.operator.optional.js",
            match: "\\?"
          }
        ]
      },
      "arrow-function": {
        patterns: [
          {
            name: "meta.arrow.js",
            match: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",
            captures: {
              1: {
                name: "storage.modifier.async.js"
              },
              2: {
                name: "variable.parameter.js"
              }
            }
          },
          {
            name: "meta.arrow.js",
            begin: "(?x) (?:\n  (?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\n)? ((?<![})!\\]])\\s*\n  (?=\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  )\n)",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.js"
              }
            },
            end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-parameters"
              },
              {
                include: "#function-parameters"
              },
              {
                include: "#arrow-return-type"
              },
              {
                include: "#possibly-arrow-return-type"
              }
            ]
          },
          {
            name: "meta.arrow.js",
            begin: "=>",
            beginCaptures: {
              0: {
                name: "storage.type.function.arrow.js"
              }
            },
            end: "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            patterns: [
              {
                include: "#single-line-comment-consuming-line-ending"
              },
              {
                include: "#decl-block"
              },
              {
                include: "#expression"
              }
            ]
          }
        ]
      },
      "indexer-declaration": {
        name: "meta.indexer.declaration.js",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)",
        beginCaptures: {
          1: {
            name: "storage.modifier.js"
          },
          2: {
            name: "meta.brace.square.js"
          },
          3: {
            name: "variable.parameter.js"
          }
        },
        end: "(\\])\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: {
            name: "meta.brace.square.js"
          },
          2: {
            name: "keyword.operator.optional.js"
          }
        },
        patterns: [
          {
            include: "#type-annotation"
          }
        ]
      },
      "indexer-mapped-type-declaration": {
        name: "meta.indexer.mappedtype.declaration.js",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+",
        beginCaptures: {
          1: {
            name: "keyword.operator.type.modifier.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "meta.brace.square.js"
          },
          4: {
            name: "entity.name.type.js"
          },
          5: {
            name: "keyword.operator.expression.in.js"
          }
        },
        end: "(\\])([+-])?\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: {
            name: "meta.brace.square.js"
          },
          2: {
            name: "keyword.operator.type.modifier.js"
          },
          3: {
            name: "keyword.operator.optional.js"
          }
        },
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
            captures: {
              1: {
                name: "keyword.control.as.js"
              }
            }
          },
          {
            include: "#type"
          }
        ]
      },
      "function-parameters": {
        name: "meta.parameters.js",
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "punctuation.definition.parameters.begin.js"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "punctuation.definition.parameters.end.js"
          }
        },
        patterns: [
          {
            include: "#function-parameters-body"
          }
        ]
      },
      "function-parameters-body": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#decorator"
          },
          {
            include: "#destructuring-parameter"
          },
          {
            include: "#parameter-name"
          },
          {
            include: "#parameter-type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            name: "punctuation.separator.parameter.js",
            match: ","
          }
        ]
      },
      "class-declaration": {
        name: "meta.class.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.modifier.js"
          },
          4: {
            name: "storage.type.class.js"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-expression": {
        name: "meta.class.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",
        beginCaptures: {
          1: {
            name: "storage.modifier.js"
          },
          2: {
            name: "storage.type.class.js"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-declaration-or-expression-patterns": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            match: "[_$[:alpha:]][_$[:alnum:]]*",
            captures: {
              0: {
                name: "entity.name.type.class.js"
              }
            }
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#class-or-interface-body"
          }
        ]
      },
      "interface-declaration": {
        name: "meta.interface.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.modifier.js"
          },
          4: {
            name: "storage.type.interface.js"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            match: "[_$[:alpha:]][_$[:alnum:]]*",
            captures: {
              0: {
                name: "entity.name.type.interface.js"
              }
            }
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#class-or-interface-body"
          }
        ]
      },
      "class-or-interface-heritage": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "storage.modifier.js"
          }
        },
        end: "(?=\\{)",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#class-or-interface-heritage"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)",
            captures: {
              1: {
                name: "entity.name.type.module.js"
              },
              2: {
                name: "punctuation.accessor.js"
              },
              3: {
                name: "punctuation.accessor.optional.js"
              }
            }
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "entity.other.inherited-class.js"
              }
            }
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      "class-or-interface-body": {
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#decorator"
          },
          {
            begin: "(?<=:)\\s*",
            end: "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            include: "#method-declaration"
          },
          {
            include: "#indexer-declaration"
          },
          {
            include: "#field-declaration"
          },
          {
            include: "#string"
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            include: "#access-modifier"
          },
          {
            include: "#property-accessor"
          },
          {
            include: "#async-modifier"
          },
          {
            include: "#after-operator-block-as-object-literal"
          },
          {
            include: "#decl-block"
          },
          {
            include: "#expression"
          },
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-semicolon"
          }
        ]
      },
      "access-modifier": {
        name: "storage.modifier.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "property-accessor": {
        name: "storage.type.property.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "async-modifier": {
        name: "storage.modifier.async.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "enum-declaration": {
        name: "meta.enum.declaration.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.modifier.js"
          },
          4: {
            name: "storage.type.enum.js"
          },
          5: {
            name: "entity.name.type.enum.js"
          }
        },
        end: "(?<=\\})",
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "\\{",
            beginCaptures: {
              0: {
                name: "punctuation.definition.block.js"
              }
            },
            end: "\\}",
            endCaptures: {
              0: {
                name: "punctuation.definition.block.js"
              }
            },
            patterns: [
              {
                include: "#comment"
              },
              {
                begin: "([_$[:alpha:]][_$[:alnum:]]*)",
                beginCaptures: {
                  0: {
                    name: "variable.other.enummember.js"
                  }
                },
                end: "(?=,|\\}|$)",
                patterns: [
                  {
                    include: "#comment"
                  },
                  {
                    include: "#variable-initializer"
                  }
                ]
              },
              {
                begin: "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",
                end: "(?=,|\\}|$)",
                patterns: [
                  {
                    include: "#string"
                  },
                  {
                    include: "#array-literal"
                  },
                  {
                    include: "#comment"
                  },
                  {
                    include: "#variable-initializer"
                  }
                ]
              },
              {
                include: "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "namespace-declaration": {
        name: "meta.namespace.declaration.js",
        begin: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]\"'`]))",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.type.namespace.js"
          }
        },
        end: "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            name: "entity.name.type.module.js",
            match: "([_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            include: "#punctuation-accessor"
          },
          {
            include: "#decl-block"
          }
        ]
      },
      "type-alias-declaration": {
        name: "meta.type.declaration.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "storage.type.type.js"
          },
          4: {
            name: "entity.name.type.alias.js"
          }
        },
        end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-parameters"
          },
          {
            begin: "(=)\\s*(intrinsic)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.js"
              },
              2: {
                name: "keyword.control.intrinsic.js"
              }
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            begin: "(=)\\s*",
            beginCaptures: {
              1: {
                name: "keyword.operator.assignment.js"
              }
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "import-equals-declaration": {
        patterns: [
          {
            name: "meta.import-equals.external.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()",
            beginCaptures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "keyword.control.import.js"
              },
              4: {
                name: "keyword.control.type.js"
              },
              5: {
                name: "variable.other.readwrite.alias.js"
              },
              6: {
                name: "keyword.operator.assignment.js"
              },
              7: {
                name: "keyword.control.require.js"
              },
              8: {
                name: "meta.brace.round.js"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#string"
              }
            ]
          },
          {
            name: "meta.import-equals.internal.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)",
            beginCaptures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "storage.modifier.js"
              },
              3: {
                name: "keyword.control.import.js"
              },
              4: {
                name: "keyword.control.type.js"
              },
              5: {
                name: "variable.other.readwrite.alias.js"
              },
              6: {
                name: "keyword.operator.assignment.js"
              }
            },
            end: "(?=;|$|^)",
            patterns: [
              {
                include: "#single-line-comment-consuming-line-ending"
              },
              {
                include: "#comment"
              },
              {
                match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
                captures: {
                  1: {
                    name: "entity.name.type.module.js"
                  },
                  2: {
                    name: "punctuation.accessor.js"
                  },
                  3: {
                    name: "punctuation.accessor.optional.js"
                  }
                }
              },
              {
                name: "variable.other.readwrite.js",
                match: "([_$[:alpha:]][_$[:alnum:]]*)"
              }
            ]
          }
        ]
      },
      "import-declaration": {
        name: "meta.import.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.control.export.js"
          },
          2: {
            name: "storage.modifier.js"
          },
          3: {
            name: "keyword.control.import.js"
          },
          4: {
            name: "keyword.control.type.js"
          }
        },
        end: "(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)",
        patterns: [
          {
            include: "#single-line-comment-consuming-line-ending"
          },
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            begin: `(?<=^import|[^\\._$[:alnum:]]import)(?!\\s*["'])`,
            end: "\\bfrom\\b",
            endCaptures: {
              0: {
                name: "keyword.control.from.js"
              }
            },
            patterns: [
              {
                include: "#import-export-declaration"
              }
            ]
          },
          {
            include: "#import-export-declaration"
          }
        ]
      },
      "export-declaration": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "keyword.control.as.js"
              },
              3: {
                name: "storage.type.namespace.js"
              },
              4: {
                name: "entity.name.type.module.js"
              }
            }
          },
          {
            name: "meta.export.default.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "keyword.control.type.js"
              },
              3: {
                name: "keyword.operator.assignment.js"
              },
              4: {
                name: "keyword.control.default.js"
              }
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#interface-declaration"
              },
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.export.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s|,))(?!\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b)))",
            beginCaptures: {
              1: {
                name: "keyword.control.export.js"
              },
              2: {
                name: "keyword.control.type.js"
              }
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
            patterns: [
              {
                include: "#import-export-declaration"
              }
            ]
          }
        ]
      },
      "import-export-declaration": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#import-export-block"
          },
          {
            name: "keyword.control.from.js",
            match: "\\bfrom\\b"
          },
          {
            include: "#import-export-clause"
          }
        ]
      },
      "import-export-block": {
        name: "meta.block.js",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#import-export-clause"
          }
        ]
      },
      "import-export-clause": {
        patterns: [
          {
            include: "#comment"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*))",
            captures: {
              1: {
                name: "keyword.control.type.js"
              },
              2: {
                name: "keyword.control.default.js"
              },
              3: {
                name: "constant.language.import-export-all.js"
              },
              4: {
                name: "variable.other.readwrite.js"
              },
              5: {
                name: "keyword.control.as.js"
              },
              6: {
                name: "keyword.control.default.js"
              },
              7: {
                name: "variable.other.readwrite.alias.js"
              }
            }
          },
          {
            include: "#punctuation-comma"
          },
          {
            name: "constant.language.import-export-all.js",
            match: "\\*"
          },
          {
            name: "keyword.control.default.js",
            match: "\\b(default)\\b"
          },
          {
            match: "(?:(\\btype)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "keyword.control.type.js"
              },
              2: {
                name: "variable.other.readwrite.alias.js"
              }
            }
          }
        ]
      },
      "switch-statement": {
        name: "switch-statement.expr.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "switch-expression.expr.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            beginCaptures: {
              1: {
                name: "keyword.control.switch.js"
              },
              2: {
                name: "meta.brace.round.js"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "switch-block.expr.js",
            begin: "\\{",
            beginCaptures: {
              0: {
                name: "punctuation.definition.block.js"
              }
            },
            end: "(?=\\})",
            patterns: [
              {
                name: "case-clause.expr.js",
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
                beginCaptures: {
                  1: {
                    name: "keyword.control.switch.js"
                  }
                },
                end: "(?=:)",
                patterns: [
                  {
                    include: "#expression"
                  }
                ]
              },
              {
                begin: "(:)\\s*(\\{)",
                beginCaptures: {
                  1: {
                    name: "case-clause.expr.js punctuation.definition.section.case-statement.js"
                  },
                  2: {
                    name: "meta.block.js punctuation.definition.block.js"
                  }
                },
                end: "\\}",
                endCaptures: {
                  0: {
                    name: "meta.block.js punctuation.definition.block.js"
                  }
                },
                contentName: "meta.block.js",
                patterns: [
                  {
                    include: "#statements"
                  }
                ]
              },
              {
                match: "(:)",
                captures: {
                  0: {
                    name: "case-clause.expr.js punctuation.definition.section.case-statement.js"
                  }
                }
              },
              {
                include: "#statements"
              }
            ]
          }
        ]
      },
      "for-loop": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        beginCaptures: {
          0: {
            name: "keyword.control.loop.js"
          }
        },
        end: "(?<=\\))",
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "keyword.control.loop.js",
            match: "await"
          },
          {
            begin: "\\(",
            beginCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            patterns: [
              {
                include: "#var-expr"
              },
              {
                include: "#expression"
              },
              {
                include: "#punctuation-semicolon"
              }
            ]
          }
        ]
      },
      "if-statement": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",
            end: "(?=;|$|\\})",
            patterns: [
              {
                include: "#comment"
              },
              {
                begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",
                beginCaptures: {
                  1: {
                    name: "keyword.control.conditional.js"
                  },
                  2: {
                    name: "meta.brace.round.js"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.js"
                  }
                },
                patterns: [
                  {
                    include: "#expression"
                  }
                ]
              },
              {
                name: "string.regexp.js",
                begin: "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.js"
                  }
                },
                end: "(/)([dgimsuy]*)",
                endCaptures: {
                  1: {
                    name: "punctuation.definition.string.end.js"
                  },
                  2: {
                    name: "keyword.other.js"
                  }
                },
                patterns: [
                  {
                    include: "#regexp"
                  }
                ]
              },
              {
                include: "#statements"
              }
            ]
          }
        ]
      },
      "decl-block": {
        name: "meta.block.js",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#statements"
          }
        ]
      },
      "after-operator-block-as-object-literal": {
        name: "meta.objectliteral.js",
        begin: "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#object-member"
          }
        ]
      },
      "object-literal": {
        name: "meta.objectliteral.js",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#object-member"
          }
        ]
      },
      "object-member": {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#object-literal-method-declaration"
          },
          {
            name: "meta.object.member.js meta.object-literal.key.js",
            begin: "(?=\\[)",
            end: "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#array-literal"
              }
            ]
          },
          {
            name: "meta.object.member.js meta.object-literal.key.js",
            begin: "(?=[\\'\\\"\\`])",
            end: "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as)\\s+))))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#string"
              }
            ]
          },
          {
            name: "meta.object.member.js meta.object-literal.key.js",
            begin: "(?x)(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)))",
            end: "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as\\s+))",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#numeric-literal"
              }
            ]
          },
          {
            name: "meta.method.declaration.js",
            begin: "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",
            end: "(?=\\}|;|,)|(?<=\\})",
            patterns: [
              {
                include: "#function-body"
              }
            ]
          },
          {
            name: "meta.object.member.js",
            match: "(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            captures: {
              0: {
                name: "meta.object-literal.key.js"
              },
              1: {
                name: "constant.numeric.decimal.js"
              }
            }
          },
          {
            name: "meta.object.member.js",
            match: "(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              0: {
                name: "meta.object-literal.key.js"
              },
              1: {
                name: "entity.name.function.js"
              }
            }
          },
          {
            name: "meta.object.member.js",
            match: "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            captures: {
              0: {
                name: "meta.object-literal.key.js"
              }
            }
          },
          {
            name: "meta.object.member.js",
            begin: "\\.\\.\\.",
            beginCaptures: {
              0: {
                name: "keyword.operator.spread.js"
              }
            },
            end: "(?=,|\\})",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.object.member.js",
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            captures: {
              1: {
                name: "variable.other.readwrite.js"
              }
            }
          },
          {
            name: "meta.object.member.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            captures: {
              1: {
                name: "keyword.control.as.js"
              },
              2: {
                name: "storage.modifier.js"
              }
            }
          },
          {
            name: "meta.object.member.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
            beginCaptures: {
              1: {
                name: "keyword.control.as.js"
              }
            },
            end: "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "meta.object.member.js",
            begin: "(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)",
            end: "(?=,|\\}|$|\\/\\/|\\/\\*)",
            patterns: [
              {
                include: "#expression"
              }
            ]
          },
          {
            name: "meta.object.member.js",
            begin: ":",
            beginCaptures: {
              0: {
                name: "meta.object-literal.key.js punctuation.separator.key-value.js"
              }
            },
            end: "(?=,|\\})",
            patterns: [
              {
                begin: "(?<=:)\\s*(async)?(?=\\s*(<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.js"
                  }
                },
                end: "(?<=\\))",
                patterns: [
                  {
                    include: "#type-parameters"
                  },
                  {
                    begin: "\\(",
                    beginCaptures: {
                      0: {
                        name: "meta.brace.round.js"
                      }
                    },
                    end: "\\)",
                    endCaptures: {
                      0: {
                        name: "meta.brace.round.js"
                      }
                    },
                    patterns: [
                      {
                        include: "#expression-inside-possibly-arrow-parens"
                      }
                    ]
                  }
                ]
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.js"
                  },
                  2: {
                    name: "meta.brace.round.js"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.js"
                  }
                },
                patterns: [
                  {
                    include: "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",
                beginCaptures: {
                  1: {
                    name: "storage.modifier.async.js"
                  }
                },
                end: "(?<=\\>)",
                patterns: [
                  {
                    include: "#type-parameters"
                  }
                ]
              },
              {
                begin: "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: {
                    name: "meta.brace.round.js"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "meta.brace.round.js"
                  }
                },
                patterns: [
                  {
                    include: "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                include: "#possibly-arrow-return-type"
              },
              {
                include: "#expression"
              }
            ]
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "ternary-expression": {
        begin: "(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)",
        beginCaptures: {
          1: {
            name: "keyword.operator.ternary.js"
          }
        },
        end: "\\s*(:)",
        endCaptures: {
          1: {
            name: "keyword.operator.ternary.js"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "function-call": {
        patterns: [
          {
            begin: "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            end: "(?<=\\))(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            patterns: [
              {
                name: "meta.function-call.js",
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
                patterns: [
                  {
                    include: "#function-call-target"
                  }
                ]
              },
              {
                include: "#comment"
              },
              {
                include: "#function-call-optionals"
              },
              {
                include: "#type-arguments"
              },
              {
                include: "#paren-expression"
              }
            ]
          },
          {
            begin: "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            end: "(?<=\\>)(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            patterns: [
              {
                name: "meta.function-call.js",
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=(<\\s*[\\{\\[\\(]\\s*$))",
                patterns: [
                  {
                    include: "#function-call-target"
                  }
                ]
              },
              {
                include: "#comment"
              },
              {
                include: "#function-call-optionals"
              },
              {
                include: "#type-arguments"
              }
            ]
          }
        ]
      },
      "function-call-target": {
        patterns: [
          {
            include: "#support-function-call-identifiers"
          },
          {
            name: "entity.name.function.js",
            match: "(\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          }
        ]
      },
      "function-call-optionals": {
        patterns: [
          {
            name: "meta.function-call.js punctuation.accessor.optional.js",
            match: "\\?\\."
          },
          {
            name: "meta.function-call.js keyword.operator.definiteassignment.js",
            match: "\\!"
          }
        ]
      },
      "support-function-call-identifiers": {
        patterns: [
          {
            include: "#literal"
          },
          {
            include: "#support-objects"
          },
          {
            include: "#object-identifiers"
          },
          {
            include: "#punctuation-accessor"
          },
          {
            name: "keyword.operator.expression.import.js",
            match: "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))"
          }
        ]
      },
      "new-expr": {
        name: "new.expr.js",
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.operator.new.js"
          }
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "instanceof-expr": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: {
            name: "keyword.operator.expression.instanceof.js"
          }
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(([\\&\\~\\^\\|]\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s+instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        patterns: [
          {
            include: "#type"
          }
        ]
      },
      "paren-expression-possibly-arrow": {
        patterns: [
          {
            begin: "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.js"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            begin: "(?<=[(=,]|=>|^return|[^\\._$[:alnum:]]return)\\s*(async)?(?=\\s*((((<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<))\\s*$)",
            beginCaptures: {
              1: {
                name: "storage.modifier.async.js"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            include: "#possibly-arrow-return-type"
          }
        ]
      },
      "paren-expression-possibly-arrow-with-typeparameters": {
        patterns: [
          {
            include: "#type-parameters"
          },
          {
            begin: "\\(",
            beginCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "meta.brace.round.js"
              }
            },
            patterns: [
              {
                include: "#expression-inside-possibly-arrow-parens"
              }
            ]
          }
        ]
      },
      "expression-inside-possibly-arrow-parens": {
        patterns: [
          {
            include: "#expressionWithoutIdentifiers"
          },
          {
            include: "#comment"
          },
          {
            include: "#string"
          },
          {
            include: "#decorator"
          },
          {
            include: "#destructuring-parameter"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
            captures: {
              1: {
                name: "storage.modifier.js"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "entity.name.function.js variable.language.this.js"
              },
              4: {
                name: "entity.name.function.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "variable.parameter.js variable.language.this.js"
              },
              4: {
                name: "variable.parameter.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          },
          {
            include: "#type-annotation"
          },
          {
            include: "#variable-initializer"
          },
          {
            name: "punctuation.separator.parameter.js",
            match: ","
          },
          {
            include: "#identifiers"
          },
          {
            include: "#expressionPunctuations"
          }
        ]
      },
      "paren-expression": {
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "meta.brace.round.js"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "meta.brace.round.js"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      cast: {
        patterns: [
          {
            include: "#jsx"
          }
        ]
      },
      "expression-operators": {
        patterns: [
          {
            name: "keyword.control.flow.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            beginCaptures: {
              1: {
                name: "keyword.control.flow.js"
              }
            },
            end: "\\*",
            endCaptures: {
              0: {
                name: "keyword.generator.asterisk.js"
              }
            },
            patterns: [
              {
                include: "#comment"
              }
            ]
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?",
            captures: {
              1: {
                name: "keyword.control.flow.js"
              },
              2: {
                name: "keyword.generator.asterisk.js"
              }
            }
          },
          {
            name: "keyword.operator.expression.delete.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.expression.in.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()"
          },
          {
            name: "keyword.operator.expression.of.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()"
          },
          {
            name: "keyword.operator.expression.instanceof.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.new.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#typeof-operator"
          },
          {
            name: "keyword.operator.expression.void.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))",
            captures: {
              1: {
                name: "keyword.control.as.js"
              },
              2: {
                name: "storage.modifier.js"
              }
            }
          },
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
            beginCaptures: {
              1: {
                name: "keyword.control.as.js"
              }
            },
            end: "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+)|(\\s+\\<))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "keyword.operator.spread.js",
            match: "\\.\\.\\."
          },
          {
            name: "keyword.operator.assignment.compound.js",
            match: "\\*=|(?<!\\()/=|%=|\\+=|\\-="
          },
          {
            name: "keyword.operator.assignment.compound.bitwise.js",
            match: "\\&=|\\^=|<<=|>>=|>>>=|\\|="
          },
          {
            name: "keyword.operator.bitwise.shift.js",
            match: "<<|>>>|>>"
          },
          {
            name: "keyword.operator.comparison.js",
            match: "===|!==|==|!="
          },
          {
            name: "keyword.operator.relational.js",
            match: "<=|>=|<>|<|>"
          },
          {
            match: "(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))",
            captures: {
              1: {
                name: "keyword.operator.logical.js"
              },
              2: {
                name: "keyword.operator.assignment.compound.js"
              },
              3: {
                name: "keyword.operator.arithmetic.js"
              }
            }
          },
          {
            name: "keyword.operator.logical.js",
            match: "\\!|&&|\\|\\||\\?\\?"
          },
          {
            name: "keyword.operator.bitwise.js",
            match: "\\&|~|\\^|\\|"
          },
          {
            name: "keyword.operator.assignment.js",
            match: "\\="
          },
          {
            name: "keyword.operator.decrement.js",
            match: "--"
          },
          {
            name: "keyword.operator.increment.js",
            match: "\\+\\+"
          },
          {
            name: "keyword.operator.arithmetic.js",
            match: "%|\\*|/|-|\\+"
          },
          {
            begin: "(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            end: "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            endCaptures: {
              1: {
                name: "keyword.operator.assignment.compound.js"
              },
              2: {
                name: "keyword.operator.arithmetic.js"
              }
            },
            patterns: [
              {
                include: "#comment"
              }
            ]
          },
          {
            match: "(?<=[_$[:alnum:])\\]])\\s*(?:(/=)|(?:(/)(?![/*])))",
            captures: {
              1: {
                name: "keyword.operator.assignment.compound.js"
              },
              2: {
                name: "keyword.operator.arithmetic.js"
              }
            }
          }
        ]
      },
      "typeof-operator": {
        begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          0: {
            name: "keyword.operator.expression.typeof.js"
          }
        },
        end: "(?=[,);}\\]=>:&|{\\?]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|class|const|declare|enum|export|function|import|interface|let|module|namespace|return|type|var)\\b))",
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      literal: {
        patterns: [
          {
            include: "#numeric-literal"
          },
          {
            include: "#boolean-literal"
          },
          {
            include: "#null-literal"
          },
          {
            include: "#undefined-literal"
          },
          {
            include: "#numericConstant-literal"
          },
          {
            include: "#array-literal"
          },
          {
            include: "#this-literal"
          },
          {
            include: "#super-literal"
          }
        ]
      },
      "array-literal": {
        name: "meta.array.literal.js",
        begin: "\\s*(\\[)",
        beginCaptures: {
          1: {
            name: "meta.brace.square.js"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "meta.brace.square.js"
          }
        },
        patterns: [
          {
            include: "#expression"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "numeric-literal": {
        patterns: [
          {
            name: "constant.numeric.hex.js",
            match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.js"
              }
            }
          },
          {
            name: "constant.numeric.binary.js",
            match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.js"
              }
            }
          },
          {
            name: "constant.numeric.octal.js",
            match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            captures: {
              1: {
                name: "storage.type.numeric.bigint.js"
              }
            }
          },
          {
            match: "(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)",
            captures: {
              0: {
                name: "constant.numeric.decimal.js"
              },
              1: {
                name: "meta.delimiter.decimal.period.js"
              },
              2: {
                name: "storage.type.numeric.bigint.js"
              },
              3: {
                name: "meta.delimiter.decimal.period.js"
              },
              4: {
                name: "storage.type.numeric.bigint.js"
              },
              5: {
                name: "meta.delimiter.decimal.period.js"
              },
              6: {
                name: "storage.type.numeric.bigint.js"
              },
              7: {
                name: "storage.type.numeric.bigint.js"
              },
              8: {
                name: "meta.delimiter.decimal.period.js"
              },
              9: {
                name: "storage.type.numeric.bigint.js"
              },
              10: {
                name: "meta.delimiter.decimal.period.js"
              },
              11: {
                name: "storage.type.numeric.bigint.js"
              },
              12: {
                name: "meta.delimiter.decimal.period.js"
              },
              13: {
                name: "storage.type.numeric.bigint.js"
              },
              14: {
                name: "storage.type.numeric.bigint.js"
              }
            }
          }
        ]
      },
      "boolean-literal": {
        patterns: [
          {
            name: "constant.language.boolean.true.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "constant.language.boolean.false.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "null-literal": {
        name: "constant.language.null.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "this-literal": {
        name: "variable.language.this.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)"
      },
      "super-literal": {
        name: "variable.language.super.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)"
      },
      "undefined-literal": {
        name: "constant.language.undefined.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "numericConstant-literal": {
        patterns: [
          {
            name: "constant.language.nan.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "constant.language.infinity.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "support-objects": {
        patterns: [
          {
            name: "variable.language.arguments.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)"
          },
          {
            name: "support.class.promise.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)",
            captures: {
              1: {
                name: "keyword.control.import.js"
              },
              2: {
                name: "punctuation.accessor.js"
              },
              3: {
                name: "punctuation.accessor.optional.js"
              },
              4: {
                name: "support.variable.property.importmeta.js"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)",
            captures: {
              1: {
                name: "keyword.operator.new.js"
              },
              2: {
                name: "punctuation.accessor.js"
              },
              3: {
                name: "punctuation.accessor.optional.js"
              },
              4: {
                name: "support.variable.property.target.js"
              }
            }
          },
          {
            match: "(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:\n  (?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())\n  |\n  (?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))",
            captures: {
              1: {
                name: "punctuation.accessor.js"
              },
              2: {
                name: "punctuation.accessor.optional.js"
              },
              3: {
                name: "support.variable.property.js"
              },
              4: {
                name: "support.constant.js"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)",
            captures: {
              1: {
                name: "support.type.object.module.js"
              },
              2: {
                name: "support.type.object.module.js"
              },
              3: {
                name: "punctuation.accessor.js"
              },
              4: {
                name: "punctuation.accessor.optional.js"
              },
              5: {
                name: "support.type.object.module.js"
              }
            }
          }
        ]
      },
      identifiers: {
        patterns: [
          {
            include: "#object-identifiers"
          },
          {
            match: "(?x)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n))",
            captures: {
              1: {
                name: "punctuation.accessor.js"
              },
              2: {
                name: "punctuation.accessor.optional.js"
              },
              3: {
                name: "entity.name.function.js"
              }
            }
          },
          {
            match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
            captures: {
              1: {
                name: "punctuation.accessor.js"
              },
              2: {
                name: "punctuation.accessor.optional.js"
              },
              3: {
                name: "variable.other.constant.property.js"
              }
            }
          },
          {
            match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "punctuation.accessor.js"
              },
              2: {
                name: "punctuation.accessor.optional.js"
              },
              3: {
                name: "variable.other.property.js"
              }
            }
          },
          {
            name: "variable.other.constant.js",
            match: "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
          },
          {
            name: "variable.other.readwrite.js",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          }
        ]
      },
      "object-identifiers": {
        patterns: [
          {
            name: "support.class.js",
            match: "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))"
          },
          {
            match: "(?x)(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:\n  (\\#?[[:upper:]][_$[:digit:][:upper:]]*) |\n  (\\#?[_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "punctuation.accessor.js"
              },
              2: {
                name: "punctuation.accessor.optional.js"
              },
              3: {
                name: "variable.other.constant.object.property.js"
              },
              4: {
                name: "variable.other.object.property.js"
              }
            }
          },
          {
            match: "(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            captures: {
              1: {
                name: "variable.other.constant.object.js"
              },
              2: {
                name: "variable.other.object.js"
              }
            }
          }
        ]
      },
      "type-annotation": {
        patterns: [
          {
            name: "meta.type.annotation.js",
            begin: "(:)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.js"
              }
            },
            end: "(?<![:|&])((?=$|^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            name: "meta.type.annotation.js",
            begin: "(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.js"
              }
            },
            end: "(?<![:|&])((?=[,);\\}\\]]|//)|(?==[^>])|(?=^\\s*$)|((?<=\\S)(?=\\s*$))|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "parameter-type-annotation": {
        patterns: [
          {
            name: "meta.type.annotation.js",
            begin: "(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.js"
              }
            },
            end: "(?=[,)])|(?==[^>])",
            patterns: [
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "return-type": {
        patterns: [
          {
            name: "meta.return.type.js",
            begin: "(?<=\\))\\s*(:)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.js"
              }
            },
            end: "(?<![:|&])(?=$|^|[{};,]|//)",
            patterns: [
              {
                include: "#return-type-core"
              }
            ]
          },
          {
            name: "meta.return.type.js",
            begin: "(?<=\\))\\s*(:)",
            beginCaptures: {
              1: {
                name: "keyword.operator.type.annotation.js"
              }
            },
            end: "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            patterns: [
              {
                include: "#return-type-core"
              }
            ]
          }
        ]
      },
      "return-type-core": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?<=[:|&])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "arrow-return-type": {
        name: "meta.return.type.arrow.js",
        begin: "(?<=\\))\\s*(:)",
        beginCaptures: {
          1: {
            name: "keyword.operator.type.annotation.js"
          }
        },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        patterns: [
          {
            include: "#arrow-return-type-body"
          }
        ]
      },
      "possibly-arrow-return-type": {
        begin: "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",
        beginCaptures: {
          1: {
            name: "meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js"
          }
        },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        contentName: "meta.arrow.js meta.return.type.arrow.js",
        patterns: [
          {
            include: "#arrow-return-type-body"
          }
        ]
      },
      "arrow-return-type-body": {
        patterns: [
          {
            begin: "(?<=[:])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-parameters": {
        name: "meta.type.parameters.js",
        begin: "(<)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.typeparameters.begin.js"
          }
        },
        end: "(>)",
        endCaptures: {
          1: {
            name: "punctuation.definition.typeparameters.end.js"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            name: "storage.modifier.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          },
          {
            name: "keyword.operator.assignment.js",
            match: "(=)(?!>)"
          }
        ]
      },
      "type-arguments": {
        name: "meta.type.parameters.js",
        begin: "\\<",
        beginCaptures: {
          0: {
            name: "punctuation.definition.typeparameters.begin.js"
          }
        },
        end: "\\>",
        endCaptures: {
          0: {
            name: "punctuation.definition.typeparameters.end.js"
          }
        },
        patterns: [
          {
            include: "#type-arguments-body"
          }
        ]
      },
      "type-arguments-body": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              0: {
                name: "keyword.operator.type.js"
              }
            }
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      type: {
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#type-string"
          },
          {
            include: "#numeric-literal"
          },
          {
            include: "#type-primitive"
          },
          {
            include: "#type-builtin-literals"
          },
          {
            include: "#type-parameters"
          },
          {
            include: "#type-tuple"
          },
          {
            include: "#type-object"
          },
          {
            include: "#type-conditional"
          },
          {
            include: "#type-operators"
          },
          {
            include: "#type-fn-type-parameters"
          },
          {
            include: "#type-paren-or-function-parameters"
          },
          {
            include: "#type-function-return-type"
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
            captures: {
              1: {
                name: "storage.modifier.js"
              }
            }
          },
          {
            include: "#type-name"
          }
        ]
      },
      "type-primitive": {
        name: "support.type.primitive.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "type-builtin-literals": {
        name: "support.type.builtin.js",
        match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
      },
      "type-tuple": {
        name: "meta.type.tuple.js",
        begin: "\\[",
        beginCaptures: {
          0: {
            name: "meta.brace.square.js"
          }
        },
        end: "\\]",
        endCaptures: {
          0: {
            name: "meta.brace.square.js"
          }
        },
        patterns: [
          {
            name: "keyword.operator.rest.js",
            match: "\\.\\.\\."
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\?)?\\s*(:)",
            captures: {
              1: {
                name: "entity.name.label.js"
              },
              2: {
                name: "keyword.operator.optional.js"
              },
              3: {
                name: "punctuation.separator.label.js"
              }
            }
          },
          {
            include: "#type"
          },
          {
            include: "#punctuation-comma"
          }
        ]
      },
      "type-object": {
        name: "meta.object.type.js",
        begin: "\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.js"
          }
        },
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#method-declaration"
          },
          {
            include: "#indexer-declaration"
          },
          {
            include: "#indexer-mapped-type-declaration"
          },
          {
            include: "#field-declaration"
          },
          {
            include: "#type-annotation"
          },
          {
            begin: "\\.\\.\\.",
            beginCaptures: {
              0: {
                name: "keyword.operator.spread.js"
              }
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [
              {
                include: "#type"
              }
            ]
          },
          {
            include: "#punctuation-comma"
          },
          {
            include: "#punctuation-semicolon"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-conditional": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            beginCaptures: {
              1: {
                name: "storage.modifier.js"
              }
            },
            end: "(?<=:)",
            patterns: [
              {
                begin: "\\?",
                beginCaptures: {
                  0: {
                    name: "keyword.operator.ternary.js"
                  }
                },
                end: ":",
                endCaptures: {
                  0: {
                    name: "keyword.operator.ternary.js"
                  }
                },
                patterns: [
                  {
                    include: "#type"
                  }
                ]
              },
              {
                include: "#type"
              }
            ]
          }
        ]
      },
      "type-paren-or-function-parameters": {
        name: "meta.type.paren.cover.js",
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "meta.brace.round.js"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "meta.brace.round.js"
          }
        },
        patterns: [
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "entity.name.function.js variable.language.this.js"
              },
              4: {
                name: "entity.name.function.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          },
          {
            match: "(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)",
            captures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.operator.rest.js"
              },
              3: {
                name: "variable.parameter.js variable.language.this.js"
              },
              4: {
                name: "variable.parameter.js"
              },
              5: {
                name: "keyword.operator.optional.js"
              }
            }
          },
          {
            include: "#type-annotation"
          },
          {
            name: "punctuation.separator.parameter.js",
            match: ","
          },
          {
            include: "#type"
          }
        ]
      },
      "type-fn-type-parameters": {
        patterns: [
          {
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",
            beginCaptures: {
              1: {
                name: "meta.type.constructor.js storage.modifier.js"
              },
              2: {
                name: "meta.type.constructor.js keyword.control.new.js"
              }
            },
            end: "(?<=>)",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-parameters"
              }
            ]
          },
          {
            name: "meta.type.constructor.js",
            begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",
            beginCaptures: {
              1: {
                name: "storage.modifier.js"
              },
              2: {
                name: "keyword.control.new.js"
              }
            },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#function-parameters"
              }
            ]
          },
          {
            name: "meta.type.function.js",
            begin: "(?x)(\n  (?=\n    [(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )\n  )\n)",
            end: "(?<=\\))",
            patterns: [
              {
                include: "#function-parameters"
              }
            ]
          }
        ]
      },
      "type-function-return-type": {
        patterns: [
          {
            name: "meta.type.function.return.js",
            begin: "(=>)(?=\\s*\\S)",
            beginCaptures: {
              1: {
                name: "storage.type.function.arrow.js"
              }
            },
            end: "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            patterns: [
              {
                include: "#type-function-return-type-core"
              }
            ]
          },
          {
            name: "meta.type.function.return.js",
            begin: "=>",
            beginCaptures: {
              0: {
                name: "storage.type.function.arrow.js"
              }
            },
            end: "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            patterns: [
              {
                include: "#type-function-return-type-core"
              }
            ]
          }
        ]
      },
      "type-function-return-type-core": {
        patterns: [
          {
            include: "#comment"
          },
          {
            begin: "(?<==>)(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            include: "#type-predicate-operator"
          },
          {
            include: "#type"
          }
        ]
      },
      "type-operators": {
        patterns: [
          {
            include: "#typeof-operator"
          },
          {
            begin: "([&|])(?=\\s*\\{)",
            beginCaptures: {
              0: {
                name: "keyword.operator.type.js"
              }
            },
            end: "(?<=\\})",
            patterns: [
              {
                include: "#type-object"
              }
            ]
          },
          {
            begin: "[&|]",
            beginCaptures: {
              0: {
                name: "keyword.operator.type.js"
              }
            },
            end: "(?=\\S)"
          },
          {
            name: "keyword.operator.expression.keyof.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.ternary.js",
            match: "(\\?|\\:)"
          },
          {
            name: "keyword.operator.expression.infer.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))infer(?=\\s+[_$[:alpha:]])"
          },
          {
            name: "keyword.operator.expression.import.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()"
          }
        ]
      },
      "type-predicate-operator": {
        patterns: [
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.operator.type.asserts.js"
              },
              2: {
                name: "variable.parameter.js variable.language.this.js"
              },
              3: {
                name: "variable.parameter.js"
              },
              4: {
                name: "keyword.operator.expression.is.js"
              }
            }
          },
          {
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            captures: {
              1: {
                name: "keyword.operator.type.asserts.js"
              },
              2: {
                name: "variable.parameter.js variable.language.this.js"
              },
              3: {
                name: "variable.parameter.js"
              }
            }
          },
          {
            name: "keyword.operator.type.asserts.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            name: "keyword.operator.expression.is.js",
            match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          }
        ]
      },
      "type-name": {
        patterns: [
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)",
            captures: {
              1: {
                name: "entity.name.type.module.js"
              },
              2: {
                name: "punctuation.accessor.js"
              },
              3: {
                name: "punctuation.accessor.optional.js"
              },
              4: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js"
              }
            },
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js"
              }
            },
            contentName: "meta.type.parameters.js",
            patterns: [
              {
                include: "#type-arguments-body"
              }
            ]
          },
          {
            begin: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(<)",
            beginCaptures: {
              1: {
                name: "entity.name.type.js"
              },
              2: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js"
              }
            },
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js"
              }
            },
            contentName: "meta.type.parameters.js",
            patterns: [
              {
                include: "#type-arguments-body"
              }
            ]
          },
          {
            match: "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
            captures: {
              1: {
                name: "entity.name.type.module.js"
              },
              2: {
                name: "punctuation.accessor.js"
              },
              3: {
                name: "punctuation.accessor.optional.js"
              }
            }
          },
          {
            name: "entity.name.type.js",
            match: "[_$[:alpha:]][_$[:alnum:]]*"
          }
        ]
      },
      "punctuation-comma": {
        name: "punctuation.separator.comma.js",
        match: ","
      },
      "punctuation-semicolon": {
        name: "punctuation.terminator.statement.js",
        match: ";"
      },
      "punctuation-accessor": {
        match: "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))",
        captures: {
          1: {
            name: "punctuation.accessor.js"
          },
          2: {
            name: "punctuation.accessor.optional.js"
          }
        }
      },
      string: {
        patterns: [
          {
            include: "#qstring-single"
          },
          {
            include: "#qstring-double"
          },
          {
            include: "#template"
          }
        ]
      },
      "qstring-double": {
        name: "string.quoted.double.js",
        begin: '"',
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.js"
          }
        },
        end: '(")|((?:[^\\\\\\n])$)',
        endCaptures: {
          1: {
            name: "punctuation.definition.string.end.js"
          },
          2: {
            name: "invalid.illegal.newline.js"
          }
        },
        patterns: [
          {
            include: "#string-character-escape"
          }
        ]
      },
      "qstring-single": {
        name: "string.quoted.single.js",
        begin: "'",
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.js"
          }
        },
        end: "(\\')|((?:[^\\\\\\n])$)",
        endCaptures: {
          1: {
            name: "punctuation.definition.string.end.js"
          },
          2: {
            name: "invalid.illegal.newline.js"
          }
        },
        patterns: [
          {
            include: "#string-character-escape"
          }
        ]
      },
      "string-character-escape": {
        name: "constant.character.escape.js",
        match: "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)"
      },
      template: {
        patterns: [
          {
            include: "#template-call"
          },
          {
            name: "string.template.js",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.js"
              },
              2: {
                name: "punctuation.definition.string.template.begin.js"
              }
            },
            end: "`",
            endCaptures: {
              0: {
                name: "punctuation.definition.string.template.end.js"
              }
            },
            patterns: [
              {
                include: "#template-substitution-element"
              },
              {
                include: "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-call": {
        patterns: [
          {
            name: "string.template.js",
            begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
            end: "(?=`)",
            patterns: [
              {
                begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*))",
                end: "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
                patterns: [
                  {
                    include: "#support-function-call-identifiers"
                  },
                  {
                    name: "entity.name.function.tagged-template.js",
                    match: "([_$[:alpha:]][_$[:alnum:]]*)"
                  }
                ]
              },
              {
                include: "#type-arguments"
              }
            ]
          },
          {
            name: "string.template.js",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.js"
              }
            },
            end: "(?=`)",
            patterns: [
              {
                include: "#type-arguments"
              }
            ]
          }
        ]
      },
      "template-substitution-element": {
        name: "meta.template.expression.js",
        begin: "\\$\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.template-expression.begin.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.template-expression.end.js"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ],
        contentName: "meta.embedded.line.js"
      },
      "type-string": {
        patterns: [
          {
            include: "#qstring-single"
          },
          {
            include: "#qstring-double"
          },
          {
            include: "#template-type"
          }
        ]
      },
      "template-type": {
        patterns: [
          {
            include: "#template-call"
          },
          {
            name: "string.template.js",
            begin: "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            beginCaptures: {
              1: {
                name: "entity.name.function.tagged-template.js"
              },
              2: {
                name: "punctuation.definition.string.template.begin.js"
              }
            },
            end: "`",
            endCaptures: {
              0: {
                name: "punctuation.definition.string.template.end.js"
              }
            },
            patterns: [
              {
                include: "#template-type-substitution-element"
              },
              {
                include: "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-type-substitution-element": {
        name: "meta.template.expression.js",
        begin: "\\$\\{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.template-expression.begin.js"
          }
        },
        end: "\\}",
        endCaptures: {
          0: {
            name: "punctuation.definition.template-expression.end.js"
          }
        },
        patterns: [
          {
            include: "#type"
          }
        ],
        contentName: "meta.embedded.line.js"
      },
      regex: {
        patterns: [
          {
            name: "string.regexp.js",
            begin: "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              1: {
                name: "punctuation.definition.string.begin.js"
              }
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.js"
              },
              2: {
                name: "keyword.other.js"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "string.regexp.js",
            begin: "((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              0: {
                name: "punctuation.definition.string.begin.js"
              }
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: {
                name: "punctuation.definition.string.end.js"
              },
              2: {
                name: "keyword.other.js"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          }
        ]
      },
      regexp: {
        patterns: [
          {
            name: "keyword.control.anchor.regexp",
            match: "\\\\[bB]|\\^|\\$"
          },
          {
            match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>",
            captures: {
              0: {
                name: "keyword.other.back-reference.regexp"
              },
              1: {
                name: "variable.other.regexp"
              }
            }
          },
          {
            name: "keyword.operator.quantifier.regexp",
            match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??"
          },
          {
            name: "keyword.operator.or.regexp",
            match: "\\|"
          },
          {
            name: "meta.group.assertion.regexp",
            begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            beginCaptures: {
              1: {
                name: "punctuation.definition.group.regexp"
              },
              2: {
                name: "punctuation.definition.group.assertion.regexp"
              },
              3: {
                name: "meta.assertion.look-ahead.regexp"
              },
              4: {
                name: "meta.assertion.negative-look-ahead.regexp"
              },
              5: {
                name: "meta.assertion.look-behind.regexp"
              },
              6: {
                name: "meta.assertion.negative-look-behind.regexp"
              }
            },
            end: "(\\))",
            endCaptures: {
              1: {
                name: "punctuation.definition.group.regexp"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "meta.group.regexp",
            begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
            beginCaptures: {
              0: {
                name: "punctuation.definition.group.regexp"
              },
              1: {
                name: "punctuation.definition.group.no-capture.regexp"
              },
              2: {
                name: "variable.other.regexp"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.definition.group.regexp"
              }
            },
            patterns: [
              {
                include: "#regexp"
              }
            ]
          },
          {
            name: "constant.other.character-class.set.regexp",
            begin: "(\\[)(\\^)?",
            beginCaptures: {
              1: {
                name: "punctuation.definition.character-class.regexp"
              },
              2: {
                name: "keyword.operator.negation.regexp"
              }
            },
            end: "(\\])",
            endCaptures: {
              1: {
                name: "punctuation.definition.character-class.regexp"
              }
            },
            patterns: [
              {
                name: "constant.other.character-class.range.regexp",
                match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                captures: {
                  1: {
                    name: "constant.character.numeric.regexp"
                  },
                  2: {
                    name: "constant.character.control.regexp"
                  },
                  3: {
                    name: "constant.character.escape.backslash.regexp"
                  },
                  4: {
                    name: "constant.character.numeric.regexp"
                  },
                  5: {
                    name: "constant.character.control.regexp"
                  },
                  6: {
                    name: "constant.character.escape.backslash.regexp"
                  }
                }
              },
              {
                include: "#regex-character-class"
              }
            ]
          },
          {
            include: "#regex-character-class"
          }
        ]
      },
      "regex-character-class": {
        patterns: [
          {
            name: "constant.other.character-class.regexp",
            match: "\\\\[wWsSdDtrnvf]|\\."
          },
          {
            name: "constant.character.numeric.regexp",
            match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})"
          },
          {
            name: "constant.character.control.regexp",
            match: "\\\\c[A-Z]"
          },
          {
            name: "constant.character.escape.backslash.regexp",
            match: "\\\\."
          }
        ]
      },
      comment: {
        patterns: [
          {
            name: "comment.block.documentation.js",
            begin: "/\\*\\*(?!/)",
            beginCaptures: {
              0: {
                name: "punctuation.definition.comment.js"
              }
            },
            end: "\\*/",
            endCaptures: {
              0: {
                name: "punctuation.definition.comment.js"
              }
            },
            patterns: [
              {
                include: "#docblock"
              }
            ]
          },
          {
            name: "comment.block.js",
            begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
            beginCaptures: {
              1: {
                name: "punctuation.definition.comment.js"
              },
              2: {
                name: "storage.type.internaldeclaration.js"
              },
              3: {
                name: "punctuation.decorator.internaldeclaration.js"
              }
            },
            end: "\\*/",
            endCaptures: {
              0: {
                name: "punctuation.definition.comment.js"
              }
            }
          },
          {
            begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            beginCaptures: {
              1: {
                name: "punctuation.whitespace.comment.leading.js"
              },
              2: {
                name: "comment.line.double-slash.js"
              },
              3: {
                name: "punctuation.definition.comment.js"
              },
              4: {
                name: "storage.type.internaldeclaration.js"
              },
              5: {
                name: "punctuation.decorator.internaldeclaration.js"
              }
            },
            end: "(?=$)",
            contentName: "comment.line.double-slash.js"
          }
        ]
      },
      "single-line-comment-consuming-line-ending": {
        begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        beginCaptures: {
          1: {
            name: "punctuation.whitespace.comment.leading.js"
          },
          2: {
            name: "comment.line.double-slash.js"
          },
          3: {
            name: "punctuation.definition.comment.js"
          },
          4: {
            name: "storage.type.internaldeclaration.js"
          },
          5: {
            name: "punctuation.decorator.internaldeclaration.js"
          }
        },
        end: "(?=^)",
        contentName: "comment.line.double-slash.js"
      },
      directives: {
        name: "comment.line.triple-slash.directive.js",
        begin: "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.comment.js"
          }
        },
        end: "(?=$)",
        patterns: [
          {
            name: "meta.tag.js",
            begin: "(<)(reference|amd-dependency|amd-module)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.directive.js"
              },
              2: {
                name: "entity.name.tag.directive.js"
              }
            },
            end: "/>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.directive.js"
              }
            },
            patterns: [
              {
                name: "entity.other.attribute-name.directive.js",
                match: "path|types|no-default-lib|lib|name"
              },
              {
                name: "keyword.operator.assignment.js",
                match: "="
              },
              {
                include: "#string"
              }
            ]
          }
        ]
      },
      docblock: {
        patterns: [
          {
            match: "(?x)\n((@)(?:access|api))\n\\s+\n(private|protected|public)\n\\b",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "constant.language.access-type.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              },
              4: {
                name: "punctuation.definition.bracket.angle.begin.jsdoc"
              },
              5: {
                name: "constant.other.email.link.underline.jsdoc"
              },
              6: {
                name: "punctuation.definition.bracket.angle.end.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)borrows) \\s+\n((?:[^@\\s*/]|\\*[^/])+)    # <that namepath>\n\\s+ (as) \\s+              # as\n((?:[^@\\s*/]|\\*[^/])+)    # <this namepath>",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              },
              4: {
                name: "keyword.operator.control.jsdoc"
              },
              5: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            name: "meta.example.jsdoc",
            begin: "((@)example)\\s+",
            end: "(?=@|\\*/)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            patterns: [
              {
                match: "^\\s\\*\\s+"
              },
              {
                contentName: "constant.other.description.jsdoc",
                begin: "\\G(<)caption(>)",
                beginCaptures: {
                  0: {
                    name: "entity.name.tag.inline.jsdoc"
                  },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  2: {
                    name: "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                },
                end: "(</)caption(>)|(?=\\*/)",
                endCaptures: {
                  0: {
                    name: "entity.name.tag.inline.jsdoc"
                  },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  2: {
                    name: "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                }
              },
              {
                match: "[^\\s@*](?:[^*]|\\*[^/])*",
                captures: {
                  0: {
                    name: "source.embedded.js"
                  }
                }
              }
            ]
          },
          {
            match: "(?x) ((@)kind) \\s+ (class|constant|event|external|file|function|member|mixin|module|namespace|typedef) \\b",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "constant.language.symbol-type.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)see)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n  |\n  # JSDoc namepath\n  (\n    (?!\n      # Avoid matching bare URIs (also acceptable as links)\n      https?://\n      |\n      # Avoid matching {@inline tags}; we match those below\n      (?:\\[[^\\[\\]]*\\])? # Possible description [preceding]{@tag}\n      {@(?:link|linkcode|linkplain|tutorial)\\b\n    )\n    # Matched namepath\n    (?:[^@\\s*/]|\\*[^/])+\n  )\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.link.underline.jsdoc"
              },
              4: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            match: "(?x)\n((@)template)\n\\s+\n# One or more valid identifiers\n(\n  [A-Za-z_$]         # First character: non-numeric word character\n  [\\w$.\\[\\]]*        # Rest of identifier\n  (?:                # Possible list of additional identifiers\n    \\s* , \\s*\n    [A-Za-z_$]\n    [\\w$.\\[\\]]*\n  )*\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            begin: "(?x)((@)template)\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "variable.other.jsdoc",
                match: "([A-Za-z_$][\\w$.\\[\\]]*)"
              }
            ]
          },
          {
            match: "(?x)\n(\n  (@)\n  (?:arg|argument|const|constant|member|namespace|param|var)\n)\n\\s+\n(\n  [A-Za-z_$]\n  [\\w$.\\[\\]]*\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            begin: "((@)typedef)\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "entity.name.type.instance.jsdoc",
                match: "(?:[^@\\s*/]|\\*[^/])+"
              }
            ]
          },
          {
            begin: "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              },
              {
                name: "variable.other.jsdoc",
                match: "([A-Za-z_$][\\w$.\\[\\]]*)"
              },
              {
                name: "variable.other.jsdoc",
                match: `(?x)
(\\[)\\s*
[\\w$]+
(?:
  (?:\\[\\])?                                        # Foo[ ].bar properties within an array
  \\.                                                # Foo.Bar namespaced parameter
  [\\w$]+
)*
(?:
  \\s*
  (=)                                                # [foo=bar] Default parameter value
  \\s*
  (
    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes
    (?>
      "(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |                      # [foo="bar"] Double-quoted
      '(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?' |                      # [foo='bar'] Single-quoted
      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |                                # [foo=[1,2]] Array literal
      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*   # Everything else
    )*
  )
)?
\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))`,
                captures: {
                  1: {
                    name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc"
                  },
                  2: {
                    name: "keyword.operator.assignment.jsdoc"
                  },
                  3: {
                    name: "source.embedded.js"
                  },
                  4: {
                    name: "punctuation.definition.optional-value.end.bracket.square.jsdoc"
                  },
                  5: {
                    name: "invalid.illegal.syntax.jsdoc"
                  }
                }
              }
            ]
          },
          {
            begin: "(?x)\n(\n  (@)\n  (?:define|enum|exception|export|extends|lends|implements|modifies\n  |namespace|private|protected|returns?|suppress|this|throws|type\n  |yields?)\n)\n\\s+(?={)",
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              {
                include: "#jsdoctype"
              }
            ]
          },
          {
            match: "(?x)\n(\n  (@)\n  (?:alias|augments|callback|constructs|emits|event|fires|exports?\n  |extends|external|function|func|host|lends|listens|interface|memberof!?\n  |method|module|mixes|mixin|name|requires|see|this|typedef|uses)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "entity.name.type.instance.jsdoc"
              }
            }
          },
          {
            contentName: "variable.other.jsdoc",
            begin: `((@)(?:default(?:value)?|license|version))\\s+(([''"]))`,
            beginCaptures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              },
              4: {
                name: "punctuation.definition.string.begin.jsdoc"
              }
            },
            end: "(\\3)|(?=$|\\*/)",
            endCaptures: {
              0: {
                name: "variable.other.jsdoc"
              },
              1: {
                name: "punctuation.definition.string.end.jsdoc"
              }
            }
          },
          {
            match: "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              },
              3: {
                name: "variable.other.jsdoc"
              }
            }
          },
          {
            name: "storage.type.class.jsdoc",
            match: "(?x) (@) (?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles |callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright |default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception |exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func |function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc |inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method |mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects |override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected |public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary |suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation |version|virtual|writeOnce|yields?) \\b",
            captures: {
              1: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            }
          },
          {
            include: "#inline-tags"
          },
          {
            match: "((@)(?:[_$[:alpha:]][_$[:alnum:]]*))(?=\\s+)",
            captures: {
              1: {
                name: "storage.type.class.jsdoc"
              },
              2: {
                name: "punctuation.definition.block.tag.jsdoc"
              }
            }
          }
        ]
      },
      brackets: {
        patterns: [
          {
            begin: "{",
            end: "}|(?=\\*/)",
            patterns: [
              {
                include: "#brackets"
              }
            ]
          },
          {
            begin: "\\[",
            end: "\\]|(?=\\*/)",
            patterns: [
              {
                include: "#brackets"
              }
            ]
          }
        ]
      },
      "inline-tags": {
        patterns: [
          {
            name: "constant.other.description.jsdoc",
            match: "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
            captures: {
              1: {
                name: "punctuation.definition.bracket.square.begin.jsdoc"
              },
              2: {
                name: "punctuation.definition.bracket.square.end.jsdoc"
              }
            }
          },
          {
            name: "entity.name.type.instance.jsdoc",
            begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
            beginCaptures: {
              1: {
                name: "punctuation.definition.bracket.curly.begin.jsdoc"
              },
              2: {
                name: "storage.type.class.jsdoc"
              },
              3: {
                name: "punctuation.definition.inline.tag.jsdoc"
              }
            },
            end: "}|(?=\\*/)",
            endCaptures: {
              0: {
                name: "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            patterns: [
              {
                match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?",
                captures: {
                  1: {
                    name: "variable.other.link.underline.jsdoc"
                  },
                  2: {
                    name: "punctuation.separator.pipe.jsdoc"
                  }
                }
              },
              {
                match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?",
                captures: {
                  1: {
                    name: "variable.other.description.jsdoc"
                  },
                  2: {
                    name: "punctuation.separator.pipe.jsdoc"
                  }
                }
              }
            ]
          }
        ]
      },
      jsdoctype: {
        patterns: [
          {
            contentName: "entity.name.type.instance.jsdoc",
            begin: "\\G({)",
            beginCaptures: {
              0: {
                name: "entity.name.type.instance.jsdoc"
              },
              1: {
                name: "punctuation.definition.bracket.curly.begin.jsdoc"
              }
            },
            end: "((}))\\s*|(?=\\*/)",
            endCaptures: {
              1: {
                name: "entity.name.type.instance.jsdoc"
              },
              2: {
                name: "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            patterns: [
              {
                include: "#brackets"
              }
            ]
          }
        ]
      },
      jsx: {
        patterns: [
          {
            include: "#jsx-tag-without-attributes-in-expression"
          },
          {
            include: "#jsx-tag-in-expression"
          }
        ]
      },
      "jsx-tag-without-attributes-in-expression": {
        begin: "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        end: "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        patterns: [
          {
            include: "#jsx-tag-without-attributes"
          }
        ]
      },
      "jsx-tag-without-attributes": {
        name: "meta.tag.without-attributes.js",
        begin: "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        end: "(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        beginCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.js"
          },
          2: {
            name: "entity.name.tag.namespace.js"
          },
          3: {
            name: "punctuation.separator.namespace.js"
          },
          4: {
            name: "entity.name.tag.js"
          },
          5: {
            name: "support.class.component.js"
          },
          6: {
            name: "punctuation.definition.tag.end.js"
          }
        },
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.begin.js"
          },
          2: {
            name: "entity.name.tag.namespace.js"
          },
          3: {
            name: "punctuation.separator.namespace.js"
          },
          4: {
            name: "entity.name.tag.js"
          },
          5: {
            name: "support.class.component.js"
          },
          6: {
            name: "punctuation.definition.tag.end.js"
          }
        },
        contentName: "meta.jsx.children.js",
        patterns: [
          {
            include: "#jsx-children"
          }
        ]
      },
      "jsx-tag-in-expression": {
        begin: "(?x)\n  (?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*\n  (?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,)) # look ahead is not type parameter of arrow\n  (?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        patterns: [
          {
            include: "#jsx-tag"
          }
        ]
      },
      "jsx-tag": {
        name: "meta.tag.js",
        begin: "(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(/>)|(?:(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        endCaptures: {
          1: {
            name: "punctuation.definition.tag.end.js"
          },
          2: {
            name: "punctuation.definition.tag.begin.js"
          },
          3: {
            name: "entity.name.tag.namespace.js"
          },
          4: {
            name: "punctuation.separator.namespace.js"
          },
          5: {
            name: "entity.name.tag.js"
          },
          6: {
            name: "support.class.component.js"
          },
          7: {
            name: "punctuation.definition.tag.end.js"
          }
        },
        patterns: [
          {
            begin: "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.js"
              },
              2: {
                name: "entity.name.tag.namespace.js"
              },
              3: {
                name: "punctuation.separator.namespace.js"
              },
              4: {
                name: "entity.name.tag.js"
              },
              5: {
                name: "support.class.component.js"
              }
            },
            end: "(?=[/]?>)",
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#type-arguments"
              },
              {
                include: "#jsx-tag-attributes"
              }
            ]
          },
          {
            begin: "(>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.end.js"
              }
            },
            end: "(?=</)",
            contentName: "meta.jsx.children.js",
            patterns: [
              {
                include: "#jsx-children"
              }
            ]
          }
        ]
      },
      "jsx-children": {
        patterns: [
          {
            include: "#jsx-tag-without-attributes"
          },
          {
            include: "#jsx-tag"
          },
          {
            include: "#jsx-evaluated-code"
          },
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-evaluated-code": {
        contentName: "meta.embedded.expression.js",
        begin: "\\{",
        end: "\\}",
        beginCaptures: {
          0: {
            name: "punctuation.section.embedded.begin.js"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.section.embedded.end.js"
          }
        },
        patterns: [
          {
            include: "#expression"
          }
        ]
      },
      "jsx-entities": {
        patterns: [
          {
            name: "constant.character.entity.js",
            match: "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
            captures: {
              1: {
                name: "punctuation.definition.entity.js"
              },
              3: {
                name: "punctuation.definition.entity.js"
              }
            }
          },
          {
            name: "invalid.illegal.bad-ampersand.js",
            match: "&"
          }
        ]
      },
      "jsx-tag-attributes": {
        name: "meta.tag.attributes.js",
        begin: "\\s+",
        end: "(?=[/]?>)",
        patterns: [
          {
            include: "#comment"
          },
          {
            include: "#jsx-tag-attribute-name"
          },
          {
            include: "#jsx-tag-attribute-assignment"
          },
          {
            include: "#jsx-string-double-quoted"
          },
          {
            include: "#jsx-string-single-quoted"
          },
          {
            include: "#jsx-evaluated-code"
          },
          {
            include: "#jsx-tag-attributes-illegal"
          }
        ]
      },
      "jsx-tag-attribute-name": {
        match: "(?x)\n  \\s*\n  (?:([_$[:alpha:]][-_$[:alnum:].]*)(:))?\n  ([_$[:alpha:]][-_$[:alnum:]]*)\n  (?=\\s|=|/?>|/\\*|//)",
        captures: {
          1: {
            name: "entity.other.attribute-name.namespace.js"
          },
          2: {
            name: "punctuation.separator.namespace.js"
          },
          3: {
            name: "entity.other.attribute-name.js"
          }
        }
      },
      "jsx-tag-attribute-assignment": {
        name: "keyword.operator.assignment.js",
        match: `=(?=\\s*(?:'|"|{|/\\*|//|\\n))`
      },
      "jsx-string-double-quoted": {
        name: "string.quoted.double.js",
        begin: '"',
        end: '"',
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.js"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.definition.string.end.js"
          }
        },
        patterns: [
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-string-single-quoted": {
        name: "string.quoted.single.js",
        begin: "'",
        end: "'",
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.js"
          }
        },
        endCaptures: {
          0: {
            name: "punctuation.definition.string.end.js"
          }
        },
        patterns: [
          {
            include: "#jsx-entities"
          }
        ]
      },
      "jsx-tag-attributes-illegal": {
        name: "invalid.illegal.attribute.js",
        match: "\\S+"
      }
    };
    JavaScript_tmLanguage = {
      version: version3,
      name: name3,
      scopeName: scopeName3,
      patterns: patterns3,
      repository: repository3
    };
  }
});

// src/tmLangs/html.tmLanguage.js
var html_tmLanguage_exports = {};
__export(html_tmLanguage_exports, {
  default: () => html_tmLanguage,
  injections: () => injections,
  name: () => name4,
  patterns: () => patterns4,
  repository: () => repository4,
  scopeName: () => scopeName4,
  version: () => version4
});
var version4, name4, scopeName4, injections, patterns4, repository4, html_tmLanguage;
var init_html_tmLanguage = __esm({
  "src/tmLangs/html.tmLanguage.js"() {
    "use strict";
    version4 = "https://github.com/textmate/html.tmbundle/commit/0c3d5ee54de3a993f747f54186b73a4d2d3c44a2";
    name4 = "HTML";
    scopeName4 = "text.html.basic";
    injections = {
      "R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)": {
        comment: "Uses R: to ensure this matches after any other injections.",
        patterns: [
          {
            match: "<",
            name: "invalid.illegal.bad-angle-bracket.html"
          }
        ]
      }
    };
    patterns4 = [
      {
        include: "#xml-processing"
      },
      {
        include: "#comment"
      },
      {
        include: "#doctype"
      },
      {
        include: "#cdata"
      },
      {
        include: "#tags-valid"
      },
      {
        include: "#tags-invalid"
      },
      {
        include: "#entities"
      }
    ];
    repository4 = {
      attribute: {
        patterns: [
          {
            begin: "(s(hape|cope|t(ep|art)|ize(s)?|p(ellcheck|an)|elected|lot|andbox|rc(set|doc|lang)?)|h(ttp-equiv|i(dden|gh)|e(ight|aders)|ref(lang)?)|n(o(nce|validate|module)|ame)|c(h(ecked|arset)|ite|o(nt(ent(editable)?|rols)|ords|l(s(pan)?|or))|lass|rossorigin)|t(ype(mustmatch)?|itle|a(rget|bindex)|ranslate)|i(s(map)?|n(tegrity|putmode)|tem(scope|type|id|prop|ref)|d)|op(timum|en)|d(i(sabled|r(name)?)|ownload|e(coding|f(er|ault))|at(etime|a)|raggable)|usemap|p(ing|oster|la(ysinline|ceholder)|attern|reload)|enctype|value|kind|for(m(novalidate|target|enctype|action|method)?)?|w(idth|rap)|l(ist|o(op|w)|a(ng|bel))|a(s(ync)?|c(ce(sskey|pt(-charset)?)|tion)|uto(c(omplete|apitalize)|play|focus)|l(t|low(usermedia|paymentrequest|fullscreen))|bbr)|r(ows(pan)?|e(versed|quired|ferrerpolicy|l|adonly))|m(in(length)?|u(ted|ltiple)|e(thod|dia)|a(nifest|x(length)?)))(?![\\w:-])",
            beginCaptures: {
              0: {
                name: "entity.other.attribute-name.html"
              }
            },
            comment: "HTML5 attributes, not event handlers",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.$1.html",
            patterns: [
              {
                include: "#attribute-interior"
              }
            ]
          },
          {
            begin: "style(?![\\w:-])",
            beginCaptures: {
              0: {
                name: "entity.other.attribute-name.html"
              }
            },
            comment: "HTML5 style attribute",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.style.html",
            patterns: [
              {
                begin: "=",
                beginCaptures: {
                  0: {
                    name: "punctuation.separator.key-value.html"
                  }
                },
                end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                patterns: [
                  {
                    begin: "(?=[^\\s=<>`/]|/(?!>))",
                    end: "(?!\\G)",
                    name: "meta.embedded.line.css",
                    patterns: [
                      {
                        captures: {
                          0: {
                            name: "source.css"
                          }
                        },
                        match: "([^\\s\"'=<>`/]|/(?!>))+",
                        name: "string.unquoted.html"
                      },
                      {
                        begin: '"',
                        beginCaptures: {
                          0: {
                            name: "punctuation.definition.string.begin.html"
                          }
                        },
                        contentName: "source.css",
                        end: '(")',
                        endCaptures: {
                          0: {
                            name: "punctuation.definition.string.end.html"
                          },
                          1: {
                            name: "source.css-ignored-vscode"
                          }
                        },
                        name: "string.quoted.double.html",
                        patterns: [
                          {
                            include: "#entities"
                          }
                        ]
                      },
                      {
                        begin: "'",
                        beginCaptures: {
                          0: {
                            name: "punctuation.definition.string.begin.html"
                          }
                        },
                        contentName: "source.css",
                        end: "(')",
                        endCaptures: {
                          0: {
                            name: "punctuation.definition.string.end.html"
                          },
                          1: {
                            name: "source.css-ignored-vscode"
                          }
                        },
                        name: "string.quoted.single.html",
                        patterns: [
                          {
                            include: "#entities"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    match: "=",
                    name: "invalid.illegal.unexpected-equals-sign.html"
                  }
                ]
              }
            ]
          },
          {
            begin: "on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![\\w:-])",
            beginCaptures: {
              0: {
                name: "entity.other.attribute-name.html"
              }
            },
            comment: "HTML5 attributes, event handlers",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.event-handler.$1.html",
            patterns: [
              {
                begin: "=",
                beginCaptures: {
                  0: {
                    name: "punctuation.separator.key-value.html"
                  }
                },
                end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                patterns: [
                  {
                    begin: "(?=[^\\s=<>`/]|/(?!>))",
                    end: "(?!\\G)",
                    name: "meta.embedded.line.js",
                    patterns: [
                      {
                        captures: {
                          0: {
                            name: "source.js"
                          },
                          1: {
                            patterns: [
                              {
                                include: "source.js"
                              }
                            ]
                          }
                        },
                        match: "(([^\\s\"'=<>`/]|/(?!>))+)",
                        name: "string.unquoted.html"
                      },
                      {
                        begin: '"',
                        beginCaptures: {
                          0: {
                            name: "punctuation.definition.string.begin.html"
                          }
                        },
                        contentName: "source.js",
                        end: '(")',
                        endCaptures: {
                          0: {
                            name: "punctuation.definition.string.end.html"
                          },
                          1: {
                            name: "source.js-ignored-vscode"
                          }
                        },
                        name: "string.quoted.double.html",
                        patterns: [
                          {
                            captures: {
                              0: {
                                patterns: [
                                  {
                                    include: "source.js"
                                  }
                                ]
                              }
                            },
                            match: '([^\\n"/]|/(?![/*]))+'
                          },
                          {
                            begin: "//",
                            beginCaptures: {
                              0: {
                                name: "punctuation.definition.comment.js"
                              }
                            },
                            end: '(?=")|\\n',
                            name: "comment.line.double-slash.js"
                          },
                          {
                            begin: "/\\*",
                            beginCaptures: {
                              0: {
                                name: "punctuation.definition.comment.begin.js"
                              }
                            },
                            end: '(?=")|\\*/',
                            endCaptures: {
                              0: {
                                name: "punctuation.definition.comment.end.js"
                              }
                            },
                            name: "comment.block.js"
                          }
                        ]
                      },
                      {
                        begin: "'",
                        beginCaptures: {
                          0: {
                            name: "punctuation.definition.string.begin.html"
                          }
                        },
                        contentName: "source.js",
                        end: "(')",
                        endCaptures: {
                          0: {
                            name: "punctuation.definition.string.end.html"
                          },
                          1: {
                            name: "source.js-ignored-vscode"
                          }
                        },
                        name: "string.quoted.single.html",
                        patterns: [
                          {
                            captures: {
                              0: {
                                patterns: [
                                  {
                                    include: "source.js"
                                  }
                                ]
                              }
                            },
                            match: "([^\\n'/]|/(?![/*]))+"
                          },
                          {
                            begin: "//",
                            beginCaptures: {
                              0: {
                                name: "punctuation.definition.comment.js"
                              }
                            },
                            end: "(?=')|\\n",
                            name: "comment.line.double-slash.js"
                          },
                          {
                            begin: "/\\*",
                            beginCaptures: {
                              0: {
                                name: "punctuation.definition.comment.begin.js"
                              }
                            },
                            end: "(?=')|\\*/",
                            endCaptures: {
                              0: {
                                name: "punctuation.definition.comment.end.js"
                              }
                            },
                            name: "comment.block.js"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    match: "=",
                    name: "invalid.illegal.unexpected-equals-sign.html"
                  }
                ]
              }
            ]
          },
          {
            begin: "(data-[a-z\\-]+)(?![\\w:-])",
            beginCaptures: {
              0: {
                name: "entity.other.attribute-name.html"
              }
            },
            comment: "HTML5 attributes, data-*",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.data-x.$1.html",
            patterns: [
              {
                include: "#attribute-interior"
              }
            ]
          },
          {
            begin: "(align|bgcolor|border)(?![\\w:-])",
            beginCaptures: {
              0: {
                name: "invalid.deprecated.entity.other.attribute-name.html"
              }
            },
            comment: "HTML attributes, deprecated",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.$1.html",
            patterns: [
              {
                include: "#attribute-interior"
              }
            ]
          },
          {
            begin: `([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,
            beginCaptures: {
              0: {
                name: "entity.other.attribute-name.html"
              }
            },
            comment: "Anything else that is valid",
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.unrecognized.$1.html",
            patterns: [
              {
                include: "#attribute-interior"
              }
            ]
          },
          {
            match: "[^\\s>]+",
            name: "invalid.illegal.character-not-allowed-here.html"
          }
        ]
      },
      "attribute-interior": {
        patterns: [
          {
            begin: "=",
            beginCaptures: {
              0: {
                name: "punctuation.separator.key-value.html"
              }
            },
            end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
            patterns: [
              {
                match: "([^\\s\"'=<>`/]|/(?!>))+",
                name: "string.unquoted.html"
              },
              {
                begin: '"',
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.html"
                  }
                },
                end: '"',
                endCaptures: {
                  0: {
                    name: "punctuation.definition.string.end.html"
                  }
                },
                name: "string.quoted.double.html",
                patterns: [
                  {
                    include: "#entities"
                  }
                ]
              },
              {
                begin: "'",
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.html"
                  }
                },
                end: "'",
                endCaptures: {
                  0: {
                    name: "punctuation.definition.string.end.html"
                  }
                },
                name: "string.quoted.single.html",
                patterns: [
                  {
                    include: "#entities"
                  }
                ]
              },
              {
                match: "=",
                name: "invalid.illegal.unexpected-equals-sign.html"
              }
            ]
          }
        ]
      },
      cdata: {
        begin: "<!\\[CDATA\\[",
        beginCaptures: {
          0: {
            name: "punctuation.definition.tag.begin.html"
          }
        },
        contentName: "string.other.inline-data.html",
        end: "]]>",
        endCaptures: {
          0: {
            name: "punctuation.definition.tag.end.html"
          }
        },
        name: "meta.tag.metadata.cdata.html"
      },
      comment: {
        begin: "<!--",
        captures: {
          0: {
            name: "punctuation.definition.comment.html"
          }
        },
        end: "-->",
        name: "comment.block.html",
        patterns: [
          {
            match: "\\G-?>",
            name: "invalid.illegal.characters-not-allowed-here.html"
          },
          {
            match: "<!--(?!>)|<!-(?=-->)",
            name: "invalid.illegal.characters-not-allowed-here.html"
          },
          {
            match: "--!>",
            name: "invalid.illegal.characters-not-allowed-here.html"
          }
        ]
      },
      "core-minus-invalid": {
        comment: "This should be the root pattern array includes minus #tags-invalid",
        patterns: [
          {
            include: "#xml-processing"
          },
          {
            include: "#comment"
          },
          {
            include: "#doctype"
          },
          {
            include: "#cdata"
          },
          {
            include: "#tags-valid"
          },
          {
            include: "#entities"
          }
        ]
      },
      doctype: {
        begin: "<!(?=(?i:DOCTYPE\\s))",
        beginCaptures: {
          0: {
            name: "punctuation.definition.tag.begin.html"
          }
        },
        end: ">",
        endCaptures: {
          0: {
            name: "punctuation.definition.tag.end.html"
          }
        },
        name: "meta.tag.metadata.doctype.html",
        patterns: [
          {
            match: "\\G(?i:DOCTYPE)",
            name: "entity.name.tag.html"
          },
          {
            begin: '"',
            end: '"',
            name: "string.quoted.double.html"
          },
          {
            match: "[^\\s>]+",
            name: "entity.other.attribute-name.html"
          }
        ]
      },
      entities: {
        patterns: [
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.html"
              },
              912: {
                name: "punctuation.definition.entity.html"
              }
            },
            comment: "Yes this is a bit ridiculous, there are quite a lot of these",
            match: "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
            name: "constant.character.entity.named.$2.html"
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.html"
              },
              3: {
                name: "punctuation.definition.entity.html"
              }
            },
            match: "(&)#[0-9]+(;)",
            name: "constant.character.entity.numeric.decimal.html"
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.html"
              },
              3: {
                name: "punctuation.definition.entity.html"
              }
            },
            match: "(&)#[xX][0-9a-fA-F]+(;)",
            name: "constant.character.entity.numeric.hexadecimal.html"
          },
          {
            match: "&(?=[a-zA-Z0-9]+;)",
            name: "invalid.illegal.ambiguous-ampersand.html"
          }
        ]
      },
      math: {
        patterns: [
          {
            begin: `(?i)(<)(math)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
            beginCaptures: {
              0: {
                name: "meta.tag.structure.$2.start.html"
              },
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                patterns: [
                  {
                    include: "#attribute"
                  }
                ]
              },
              5: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            end: "(?i)(</)(\\2)\\s*(>)",
            endCaptures: {
              0: {
                name: "meta.tag.structure.$2.end.html"
              },
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.element.structure.$2.html",
            patterns: [
              {
                begin: "(?<!>)\\G",
                end: ">",
                endCaptures: {
                  0: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.tag.structure.start.html",
                patterns: [
                  {
                    include: "#attribute"
                  }
                ]
              },
              {
                include: "#tags"
              }
            ]
          }
        ],
        repository: {
          attribute: {
            patterns: [
              {
                begin: "(s(hift|ymmetric|cript(sizemultiplier|level|minsize)|t(ackalign|retchy)|ide|u(pscriptshift|bscriptshift)|e(parator(s)?|lection)|rc)|h(eight|ref)|n(otation|umalign)|c(haralign|olumn(spa(n|cing)|width|lines|align)|lose|rossout)|i(n(dent(shift(first|last)?|target|align(first|last)?)|fixlinebreakstyle)|d)|o(pen|verflow)|d(i(splay(style)?|r)|e(nomalign|cimalpoint|pth))|position|e(dge|qual(columns|rows))|voffset|f(orm|ence|rame(spacing)?)|width|l(space|ine(thickness|leading|break(style|multchar)?)|o(ngdivstyle|cation)|ength|quote|argeop)|a(c(cent(under)?|tiontype)|l(t(text|img(-(height|valign|width))?)|ign(mentscope)?))|r(space|ow(spa(n|cing)|lines|align)|quote)|groupalign|x(link:href|mlns)|m(in(size|labelspacing)|ovablelimits|a(th(size|color|variant|background)|xsize))|bevelled)(?![\\w:-])",
                beginCaptures: {
                  0: {
                    name: "entity.other.attribute-name.html"
                  }
                },
                end: "(?=\\s*+[^=\\s])",
                name: "meta.attribute.$1.html",
                patterns: [
                  {
                    include: "#attribute-interior"
                  }
                ]
              },
              {
                begin: `([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,
                beginCaptures: {
                  0: {
                    name: "entity.other.attribute-name.html"
                  }
                },
                comment: "Anything else that is valid",
                end: "(?=\\s*+[^=\\s])",
                name: "meta.attribute.unrecognized.$1.html",
                patterns: [
                  {
                    include: "#attribute-interior"
                  }
                ]
              },
              {
                match: "[^\\s>]+",
                name: "invalid.illegal.character-not-allowed-here.html"
              }
            ]
          },
          tags: {
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#cdata"
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.structure.math.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.structure.math.$2.html"
              },
              {
                begin: `(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.structure.math.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.structure.math.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.structure.math.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.structure.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.inline.math.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.inline.math.$2.html"
              },
              {
                begin: `(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.inline.math.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.inline.math.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.inline.math.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.inline.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.object.math.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.object.math.$2.html"
              },
              {
                begin: `(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.object.math.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.object.math.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.object.math.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.object.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.other.invalid.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.other.invalid.html"
              },
              {
                begin: `(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.other.invalid.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.other.invalid.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.other.invalid.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.other.invalid.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                include: "#tags-invalid"
              }
            ]
          }
        }
      },
      svg: {
        patterns: [
          {
            begin: `(?i)(<)(svg)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
            beginCaptures: {
              0: {
                name: "meta.tag.structure.$2.start.html"
              },
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                patterns: [
                  {
                    include: "#attribute"
                  }
                ]
              },
              5: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            end: "(?i)(</)(\\2)\\s*(>)",
            endCaptures: {
              0: {
                name: "meta.tag.structure.$2.end.html"
              },
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.element.structure.$2.html",
            patterns: [
              {
                begin: "(?<!>)\\G",
                end: ">",
                endCaptures: {
                  0: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.tag.structure.start.html",
                patterns: [
                  {
                    include: "#attribute"
                  }
                ]
              },
              {
                include: "#tags"
              }
            ]
          }
        ],
        repository: {
          attribute: {
            patterns: [
              {
                begin: "(s(hape-rendering|ystemLanguage|cale|t(yle|itchTiles|op-(color|opacity)|dDeviation|em(h|v)|artOffset|r(i(ng|kethrough-(thickness|position))|oke(-(opacity|dash(offset|array)|width|line(cap|join)|miterlimit))?))|urfaceScale|p(e(cular(Constant|Exponent)|ed)|acing|readMethod)|eed|lope)|h(oriz-(origin-x|adv-x)|eight|anging|ref(lang)?)|y(1|2|ChannelSelector)?|n(umOctaves|ame)|c(y|o(ntentS(criptType|tyleType)|lor(-(interpolation(-filters)?|profile|rendering))?)|ursor|l(ip(-(path|rule)|PathUnits)?|ass)|a(p-height|lcMode)|x)|t(ype|o|ext(-(decoration|anchor|rendering)|Length)|a(rget(X|Y)?|b(index|leValues))|ransform)|i(n(tercept|2)?|d(eographic)?|mage-rendering)|z(oomAndPan)?|o(p(erator|acity)|ver(flow|line-(thickness|position))|ffset|r(i(ent(ation)?|gin)|der))|d(y|i(splay|visor|ffuseConstant|rection)|ominant-baseline|ur|e(scent|celerate)|x)?|u(1|n(i(code(-(range|bidi))?|ts-per-em)|derline-(thickness|position))|2)|p(ing|oint(s(At(X|Y|Z))?|er-events)|a(nose-1|t(h(Length)?|tern(ContentUnits|Transform|Units))|int-order)|r(imitiveUnits|eserveA(spectRatio|lpha)))|e(n(d|able-background)|dgeMode|levation|x(ternalResourcesRequired|ponent))|v(i(sibility|ew(Box|Target))|-(hanging|ideographic|alphabetic|mathematical)|e(ctor-effect|r(sion|t-(origin-(y|x)|adv-y)))|alues)|k(1|2|3|e(y(Splines|Times|Points)|rn(ing|el(Matrix|UnitLength)))|4)?|f(y|il(ter(Res|Units)?|l(-(opacity|rule))?)|o(nt-(s(t(yle|retch)|ize(-adjust)?)|variant|family|weight)|rmat)|lood-(color|opacity)|r(om)?|x)|w(idth(s)?|ord-spacing|riting-mode)|l(i(ghting-color|mitingConeAngle)|ocal|e(ngthAdjust|tter-spacing)|ang)|a(scent|cc(umulate|ent-height)|ttribute(Name|Type)|zimuth|dditive|utoReverse|l(ignment-baseline|phabetic|lowReorder)|rabic-form|mplitude)|r(y|otate|e(s(tart|ult)|ndering-intent|peat(Count|Dur)|quired(Extensions|Features)|f(X|Y|errerPolicy)|l)|adius|x)?|g(1|2|lyph(Ref|-(name|orientation-(horizontal|vertical)))|radient(Transform|Units))|x(1|2|ChannelSelector|-height|link:(show|href|t(ype|itle)|a(ctuate|rcrole)|role)|ml:(space|lang|base))?|m(in|ode|e(thod|dia)|a(sk(ContentUnits|Units)?|thematical|rker(Height|-(start|end|mid)|Units|Width)|x))|b(y|ias|egin|ase(Profile|line-shift|Frequency)|box))(?![\\w:-])",
                beginCaptures: {
                  0: {
                    name: "entity.other.attribute-name.html"
                  }
                },
                end: "(?=\\s*+[^=\\s])",
                name: "meta.attribute.$1.html",
                patterns: [
                  {
                    include: "#attribute-interior"
                  }
                ]
              },
              {
                begin: `([^\\x{0020}"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)`,
                beginCaptures: {
                  0: {
                    name: "entity.other.attribute-name.html"
                  }
                },
                comment: "Anything else that is valid",
                end: "(?=\\s*+[^=\\s])",
                name: "meta.attribute.unrecognized.$1.html",
                patterns: [
                  {
                    include: "#attribute-interior"
                  }
                ]
              },
              {
                match: "[^\\s>]+",
                name: "invalid.illegal.character-not-allowed-here.html"
              }
            ]
          },
          tags: {
            patterns: [
              {
                include: "#comment"
              },
              {
                include: "#cdata"
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.metadata.svg.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.metadata.svg.$2.html"
              },
              {
                begin: `(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.metadata.svg.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.metadata.svg.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.metadata.svg.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.metadata.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.structure.svg.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.structure.svg.$2.html"
              },
              {
                begin: `(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.structure.svg.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.structure.svg.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.structure.svg.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.structure.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.inline.svg.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.inline.svg.$2.html"
              },
              {
                begin: `(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.inline.svg.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.inline.svg.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.inline.svg.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.inline.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.object.svg.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.object.svg.$2.html"
              },
              {
                begin: `(?i)(<)(a|circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.object.svg.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.object.svg.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.object.svg.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.object.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.other.svg.$2.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.deprecated.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.other.svg.$2.html"
              },
              {
                begin: `(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.other.svg.$2.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.deprecated.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.other.svg.$2.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.deprecated.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.other.svg.$2.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.other.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                captures: {
                  0: {
                    name: "meta.tag.other.invalid.void.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                match: `(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(/>))`,
                name: "meta.element.other.invalid.html"
              },
              {
                begin: `(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^"'>]|"[^"]*"|'[^']*')*)(>))?`,
                beginCaptures: {
                  0: {
                    name: "meta.tag.other.invalid.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  6: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                end: "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                endCaptures: {
                  0: {
                    name: "meta.tag.other.invalid.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "invalid.illegal.unrecognized-tag.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  },
                  5: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.element.other.invalid.html",
                patterns: [
                  {
                    begin: "(?<!>)\\G",
                    end: "(?=/>)|>",
                    endCaptures: {
                      0: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    name: "meta.tag.other.invalid.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    include: "#tags"
                  }
                ]
              },
              {
                include: "#tags-invalid"
              }
            ]
          }
        }
      },
      "tags-invalid": {
        patterns: [
          {
            begin: "(</?)((\\w[^\\s>]*))(?<!/)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.illegal.unrecognized-tag.html"
              }
            },
            end: "((?: ?/)?>)",
            endCaptures: {
              1: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.other.$2.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          }
        ]
      },
      "tags-valid": {
        patterns: [
          {
            begin: "(^[ \\t]+)?(?=<(?i:style)\\b(?!-))",
            beginCaptures: {
              1: {
                name: "punctuation.whitespace.embedded.leading.html"
              }
            },
            end: "(?!\\G)([ \\t]*$\\n?)?",
            endCaptures: {
              1: {
                name: "punctuation.whitespace.embedded.trailing.html"
              }
            },
            patterns: [
              {
                begin: "(?i)(<)(style)(?=\\s|/?>)",
                beginCaptures: {
                  0: {
                    name: "meta.tag.metadata.style.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  }
                },
                end: "(?i)((<)/)(style)\\s*(>)",
                endCaptures: {
                  0: {
                    name: "meta.tag.metadata.style.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "source.css-ignored-vscode"
                  },
                  3: {
                    name: "entity.name.tag.html"
                  },
                  4: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.embedded.block.html",
                patterns: [
                  {
                    begin: "\\G",
                    captures: {
                      1: {
                        name: "punctuation.definition.tag.end.html"
                      }
                    },
                    end: "(>)",
                    name: "meta.tag.metadata.style.start.html",
                    patterns: [
                      {
                        include: "#attribute"
                      }
                    ]
                  },
                  {
                    begin: "(?!\\G)",
                    end: "(?=</(?i:style))",
                    name: "source.css",
                    patterns: [
                      {
                        include: "source.css"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            begin: "(^[ \\t]+)?(?=<(?i:script)\\b(?!-))",
            beginCaptures: {
              1: {
                name: "punctuation.whitespace.embedded.leading.html"
              }
            },
            end: "(?!\\G)([ \\t]*$\\n?)?",
            endCaptures: {
              1: {
                name: "punctuation.whitespace.embedded.trailing.html"
              }
            },
            patterns: [
              {
                begin: "(<)((?i:script))\\b",
                beginCaptures: {
                  0: {
                    name: "meta.tag.metadata.script.start.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  }
                },
                end: "(/)((?i:script))(>)",
                endCaptures: {
                  0: {
                    name: "meta.tag.metadata.script.end.html"
                  },
                  1: {
                    name: "punctuation.definition.tag.begin.html"
                  },
                  2: {
                    name: "entity.name.tag.html"
                  },
                  3: {
                    name: "punctuation.definition.tag.end.html"
                  }
                },
                name: "meta.embedded.block.html",
                patterns: [
                  {
                    begin: "\\G",
                    end: "(?=/)",
                    patterns: [
                      {
                        begin: "(>)",
                        beginCaptures: {
                          0: {
                            name: "meta.tag.metadata.script.start.html"
                          },
                          1: {
                            name: "punctuation.definition.tag.end.html"
                          }
                        },
                        end: "((<))(?=/(?i:script))",
                        endCaptures: {
                          0: {
                            name: "meta.tag.metadata.script.end.html"
                          },
                          1: {
                            name: "punctuation.definition.tag.begin.html"
                          },
                          2: {
                            name: "source.js-ignored-vscode"
                          }
                        },
                        patterns: [
                          {
                            begin: "\\G",
                            end: "(?=</(?i:script))",
                            name: "source.js",
                            patterns: [
                              {
                                begin: "(^[ \\t]+)?(?=//)",
                                beginCaptures: {
                                  1: {
                                    name: "punctuation.whitespace.comment.leading.js"
                                  }
                                },
                                end: "(?!\\G)",
                                patterns: [
                                  {
                                    begin: "//",
                                    beginCaptures: {
                                      0: {
                                        name: "punctuation.definition.comment.js"
                                      }
                                    },
                                    end: "(?=</script)|\\n",
                                    name: "comment.line.double-slash.js"
                                  }
                                ]
                              },
                              {
                                begin: "/\\*",
                                captures: {
                                  0: {
                                    name: "punctuation.definition.comment.js"
                                  }
                                },
                                end: "\\*/|(?=</script)",
                                name: "comment.block.js"
                              },
                              {
                                include: "source.js"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        begin: "\\G",
                        end: `(?ix:
												(?=>											# Tag without type attribute
												  | type(?=[\\s=])
												  	(?!\\s*=\\s*
														(
															''								# Empty
														  | ""									#   Values
														  | ('|"|)
															(
																text/							# Text mime-types
																(
																	javascript(1\\.[0-5])?
																  | x-javascript
																  | jscript
																  | livescript
																  | (x-)?ecmascript
																  | babel						# Javascript variant currently
																  								#   recognized as such
															  	)
															  | application/					# Application mime-types
															  	(
																	(x-)?javascript
																  | (x-)?ecmascript
																)
															  | module
														  	)
															[\\s"'>]
														)
													)
												)
											)`,
                        name: "meta.tag.metadata.script.start.html",
                        patterns: [
                          {
                            include: "#attribute"
                          }
                        ]
                      },
                      {
                        begin: `(?ix:
												(?=
													type\\s*=\\s*
													('|"|)
													text/
													(
														x-handlebars
													  | (x-(handlebars-)?|ng-)?template
													  | html
													)
													[\\s"'>]
												)
											)`,
                        end: "((<))(?=/(?i:script))",
                        endCaptures: {
                          0: {
                            name: "meta.tag.metadata.script.end.html"
                          },
                          1: {
                            name: "punctuation.definition.tag.begin.html"
                          },
                          2: {
                            name: "text.html.basic"
                          }
                        },
                        patterns: [
                          {
                            begin: "\\G",
                            end: "(>)",
                            endCaptures: {
                              1: {
                                name: "punctuation.definition.tag.end.html"
                              }
                            },
                            name: "meta.tag.metadata.script.start.html",
                            patterns: [
                              {
                                include: "#attribute"
                              }
                            ]
                          },
                          {
                            begin: "(?!\\G)",
                            end: "(?=</(?i:script))",
                            name: "text.html.basic",
                            patterns: [
                              {
                                include: "text.html.basic"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        begin: "(?=(?i:type))",
                        end: "(<)(?=/(?i:script))",
                        endCaptures: {
                          0: {
                            name: "meta.tag.metadata.script.end.html"
                          },
                          1: {
                            name: "punctuation.definition.tag.begin.html"
                          }
                        },
                        patterns: [
                          {
                            begin: "\\G",
                            end: "(>)",
                            endCaptures: {
                              1: {
                                name: "punctuation.definition.tag.end.html"
                              }
                            },
                            name: "meta.tag.metadata.script.start.html",
                            patterns: [
                              {
                                include: "#attribute"
                              }
                            ]
                          },
                          {
                            begin: "(?!\\G)",
                            end: "(?=</(?i:script))",
                            name: "source.unknown"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            begin: "(?i)(<)(base|link|meta)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.metadata.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(noscript|title)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.metadata.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)(noscript|title)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.metadata.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(col|hr|input)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.structure.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.structure.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.structure.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(area|br|wbr)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.inline.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.inline.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.inline.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(embed|img|param|source|track)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((basefont|isindex))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.metadata.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((center|frameset|noembed|noframes))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.structure.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)((center|frameset|noembed|noframes))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.structure.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.inline.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.inline.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((frame))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.void.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((applet))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)((applet))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.deprecated.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.object.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(<)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.illegal.no-longer-supported.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.other.$2.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(?i)(</)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              },
              3: {
                name: "invalid.illegal.no-longer-supported.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.other.$2.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            include: "#math"
          },
          {
            include: "#svg"
          },
          {
            begin: "(<)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: "/?>",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.custom.start.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          },
          {
            begin: "(</)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",
            beginCaptures: {
              1: {
                name: "punctuation.definition.tag.begin.html"
              },
              2: {
                name: "entity.name.tag.html"
              }
            },
            end: ">",
            endCaptures: {
              0: {
                name: "punctuation.definition.tag.end.html"
              }
            },
            name: "meta.tag.custom.end.html",
            patterns: [
              {
                include: "#attribute"
              }
            ]
          }
        ]
      },
      "xml-processing": {
        begin: "(<\\?)(xml)",
        captures: {
          1: {
            name: "punctuation.definition.tag.html"
          },
          2: {
            name: "entity.name.tag.html"
          }
        },
        end: "(\\?>)",
        name: "meta.tag.metadata.processing.xml.html",
        patterns: [
          {
            include: "#attribute"
          }
        ]
      }
    };
    html_tmLanguage = {
      version: version4,
      name: name4,
      scopeName: scopeName4,
      injections,
      patterns: patterns4,
      repository: repository4
    };
  }
});

// src/tmLangs/css.tmLanguage.js
var css_tmLanguage_exports = {};
__export(css_tmLanguage_exports, {
  default: () => css_tmLanguage,
  name: () => name5,
  patterns: () => patterns5,
  repository: () => repository5,
  scopeName: () => scopeName5,
  version: () => version5
});
var version5, name5, scopeName5, patterns5, repository5, css_tmLanguage;
var init_css_tmLanguage = __esm({
  "src/tmLangs/css.tmLanguage.js"() {
    "use strict";
    version5 = "https://github.com/atom/language-css/commit/672168274c7b457f3c118788b5171ae888c1bf07";
    name5 = "CSS";
    scopeName5 = "source.css";
    patterns5 = [
      {
        include: "#comment-block"
      },
      {
        include: "#escapes"
      },
      {
        include: "#combinators"
      },
      {
        include: "#selector"
      },
      {
        include: "#at-rules"
      },
      {
        include: "#rule-list"
      }
    ];
    repository5 = {
      "at-rules": {
        patterns: [
          {
            begin: "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",
            end: ";|(?=$)",
            endCaptures: {
              0: {
                name: "punctuation.terminator.rule.css"
              }
            },
            name: "meta.at-rule.charset.css",
            patterns: [
              {
                captures: {
                  1: {
                    name: "invalid.illegal.not-lowercase.charset.css"
                  },
                  2: {
                    name: "invalid.illegal.leading-whitespace.charset.css"
                  },
                  3: {
                    name: "invalid.illegal.no-whitespace.charset.css"
                  },
                  4: {
                    name: "invalid.illegal.whitespace.charset.css"
                  },
                  5: {
                    name: "invalid.illegal.not-double-quoted.charset.css"
                  },
                  6: {
                    name: "invalid.illegal.unclosed-string.charset.css"
                  },
                  7: {
                    name: "invalid.illegal.unexpected-characters.charset.css"
                  }
                },
                match: '(?x)        # Possible errors:\n\\G\n((?!@charset)@\\w+)   # Not lowercase (@charset is case-sensitive)\n|\n\\G(\\s+)             # Preceding whitespace\n|\n(@charset\\S[^;]*)    # No whitespace after @charset\n|\n(?<=@charset)         # Before quoted charset name\n(\\x20{2,}|\\t+)      # More than one space used, or a tab\n|\n(?<=@charset\\x20)    # Beginning of charset name\n([^";]+)              # Not double-quoted\n|\n("[^"]+$)             # Unclosed quote\n|\n(?<=")                # After charset name\n([^;]+)               # Unexpected junk instead of semicolon'
              },
              {
                captures: {
                  1: {
                    name: "keyword.control.at-rule.charset.css"
                  },
                  2: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                match: "((@)charset)(?=\\s)"
              },
              {
                begin: '"',
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.css"
                  }
                },
                end: '"|$',
                endCaptures: {
                  0: {
                    name: "punctuation.definition.string.end.css"
                  }
                },
                name: "string.quoted.double.css",
                patterns: [
                  {
                    begin: '(?:\\G|^)(?=(?:[^"])+$)',
                    end: "$",
                    name: "invalid.illegal.unclosed.string.css"
                  }
                ]
              }
            ]
          },
          {
            begin: `(?i)((@)import)(?:\\s+|$|(?=['"]|/\\*))`,
            beginCaptures: {
              1: {
                name: "keyword.control.at-rule.import.css"
              },
              2: {
                name: "punctuation.definition.keyword.css"
              }
            },
            end: ";",
            endCaptures: {
              0: {
                name: "punctuation.terminator.rule.css"
              }
            },
            name: "meta.at-rule.import.css",
            patterns: [
              {
                begin: "\\G\\s*(?=/\\*)",
                end: "(?<=\\*/)\\s*",
                patterns: [
                  {
                    include: "#comment-block"
                  }
                ]
              },
              {
                include: "#string"
              },
              {
                include: "#url"
              },
              {
                include: "#media-query-list"
              }
            ]
          },
          {
            begin: "(?i)((@)font-face)(?=\\s*|{|/\\*|$)",
            beginCaptures: {
              1: {
                name: "keyword.control.at-rule.font-face.css"
              },
              2: {
                name: "punctuation.definition.keyword.css"
              }
            },
            end: "(?!\\G)",
            name: "meta.at-rule.font-face.css",
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#escapes"
              },
              {
                include: "#rule-list"
              }
            ]
          },
          {
            begin: "(?i)(@)page(?=[\\s:{]|/\\*|$)",
            captures: {
              0: {
                name: "keyword.control.at-rule.page.css"
              },
              1: {
                name: "punctuation.definition.keyword.css"
              }
            },
            end: "(?=\\s*($|[:{;]))",
            name: "meta.at-rule.page.css",
            patterns: [
              {
                include: "#rule-list"
              }
            ]
          },
          {
            begin: "(?i)(?=@media(\\s|\\(|/\\*|$))",
            end: "(?<=})(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)media",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.media.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*[{;])",
                name: "meta.at-rule.media.header.css",
                patterns: [
                  {
                    include: "#media-query-list"
                  }
                ]
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.media.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.media.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.media.body.css",
                patterns: [
                  {
                    include: "$self"
                  }
                ]
              }
            ]
          },
          {
            begin: `(?i)(?=@counter-style([\\s'"{;]|/\\*|$))`,
            end: "(?<=})(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)counter-style",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.counter-style.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*{)",
                name: "meta.at-rule.counter-style.header.css",
                patterns: [
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  },
                  {
                    captures: {
                      0: {
                        patterns: [
                          {
                            include: "#escapes"
                          }
                        ]
                      }
                    },
                    match: "(?x)\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
                    name: "variable.parameter.style-name.css"
                  }
                ]
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.property-list.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.property-list.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.counter-style.body.css",
                patterns: [
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  },
                  {
                    include: "#rule-list-innards"
                  }
                ]
              }
            ]
          },
          {
            begin: `(?i)(?=@document([\\s'"{;]|/\\*|$))`,
            end: "(?<=})(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)document",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.document.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*[{;])",
                name: "meta.at-rule.document.header.css",
                patterns: [
                  {
                    begin: "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",
                    beginCaptures: {
                      1: {
                        name: "support.function.document-rule.css"
                      },
                      2: {
                        name: "punctuation.section.function.begin.bracket.round.css"
                      }
                    },
                    end: "\\)",
                    endCaptures: {
                      0: {
                        name: "punctuation.section.function.end.bracket.round.css"
                      }
                    },
                    name: "meta.function.document-rule.css",
                    patterns: [
                      {
                        include: "#string"
                      },
                      {
                        include: "#comment-block"
                      },
                      {
                        include: "#escapes"
                      },
                      {
                        match: `[^'")\\s]+`,
                        name: "variable.parameter.document-rule.css"
                      }
                    ]
                  },
                  {
                    include: "#url"
                  },
                  {
                    include: "#commas"
                  },
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  }
                ]
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.document.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.document.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.document.body.css",
                patterns: [
                  {
                    include: "$self"
                  }
                ]
              }
            ]
          },
          {
            begin: `(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'"{;]|/\\*|$))`,
            end: "(?<=})(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.keyframes.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*{)",
                name: "meta.at-rule.keyframes.header.css",
                patterns: [
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  },
                  {
                    captures: {
                      0: {
                        patterns: [
                          {
                            include: "#escapes"
                          }
                        ]
                      }
                    },
                    match: "(?x)\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
                    name: "variable.parameter.keyframe-list.css"
                  }
                ]
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.keyframes.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.keyframes.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.keyframes.body.css",
                patterns: [
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  },
                  {
                    captures: {
                      1: {
                        name: "entity.other.keyframe-offset.css"
                      },
                      2: {
                        name: "entity.other.keyframe-offset.percentage.css"
                      }
                    },
                    match: "(?xi)\n(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%\n|\n([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value"
                  },
                  {
                    include: "#rule-list"
                  }
                ]
              }
            ]
          },
          {
            begin: "(?i)(?=@supports(\\s|\\(|/\\*|$))",
            end: "(?<=})(?!\\G)|(?=;)",
            patterns: [
              {
                begin: "(?i)\\G(@)supports",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.supports.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*[{;])",
                name: "meta.at-rule.supports.header.css",
                patterns: [
                  {
                    include: "#feature-query-operators"
                  },
                  {
                    include: "#feature-query"
                  },
                  {
                    include: "#comment-block"
                  },
                  {
                    include: "#escapes"
                  }
                ]
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.supports.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.supports.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.supports.body.css",
                patterns: [
                  {
                    include: "$self"
                  }
                ]
              }
            ]
          },
          {
            begin: `(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'"{;]|/\\*|$)`,
            beginCaptures: {
              1: {
                name: "keyword.control.at-rule.viewport.css"
              },
              2: {
                name: "punctuation.definition.keyword.css"
              }
            },
            end: "(?=\\s*[@{;])",
            name: "meta.at-rule.viewport.css",
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#escapes"
              }
            ]
          },
          {
            begin: `(?i)((@)font-feature-values)(?=[\\s'"{;]|/\\*|$)\\s*`,
            beginCaptures: {
              1: {
                name: "keyword.control.at-rule.font-feature-values.css"
              },
              2: {
                name: "punctuation.definition.keyword.css"
              }
            },
            contentName: "variable.parameter.font-name.css",
            end: "(?=\\s*[@{;])",
            name: "meta.at-rule.font-features.css",
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#escapes"
              }
            ]
          },
          {
            include: "#font-features"
          },
          {
            begin: `(?i)((@)namespace)(?=[\\s'";]|/\\*|$)`,
            beginCaptures: {
              1: {
                name: "keyword.control.at-rule.namespace.css"
              },
              2: {
                name: "punctuation.definition.keyword.css"
              }
            },
            end: ";|(?=[@{])",
            endCaptures: {
              0: {
                name: "punctuation.terminator.rule.css"
              }
            },
            name: "meta.at-rule.namespace.css",
            patterns: [
              {
                include: "#url"
              },
              {
                captures: {
                  1: {
                    patterns: [
                      {
                        include: "#comment-block"
                      }
                    ]
                  },
                  2: {
                    name: "entity.name.function.namespace-prefix.css",
                    patterns: [
                      {
                        include: "#escapes"
                      }
                    ]
                  }
                },
                match: "(?xi)\n(?:\\G|^|(?<=\\s))\n(?=\n  (?<=\\s|^)                             # Starts with whitespace\n  (?:[-a-zA-Z_]|[^\\x00-\\x7F])          # Then a valid identifier character\n  |\n  \\s*                                   # Possible adjoining whitespace\n  /\\*(?:[^*]|\\*[^/])*\\*/              # Injected comment\n)\n(.*?)                                    # Grouped to embed #comment-block\n(\n  (?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n  (?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n    |\\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n)"
              },
              {
                include: "#comment-block"
              },
              {
                include: "#escapes"
              },
              {
                include: "#string"
              }
            ]
          },
          {
            begin: "(?i)(?=@[\\w-]+[^;]+;s*$)",
            end: "(?<=;)(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)[\\w-]+",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: ";",
                endCaptures: {
                  0: {
                    name: "punctuation.terminator.rule.css"
                  }
                },
                name: "meta.at-rule.header.css"
              }
            ]
          },
          {
            begin: "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",
            end: "(?<=})(?!\\G)",
            patterns: [
              {
                begin: "(?i)\\G(@)[\\w-]+",
                beginCaptures: {
                  0: {
                    name: "keyword.control.at-rule.css"
                  },
                  1: {
                    name: "punctuation.definition.keyword.css"
                  }
                },
                end: "(?=\\s*[{;])",
                name: "meta.at-rule.header.css"
              },
              {
                begin: "{",
                beginCaptures: {
                  0: {
                    name: "punctuation.section.begin.bracket.curly.css"
                  }
                },
                end: "}",
                endCaptures: {
                  0: {
                    name: "punctuation.section.end.bracket.curly.css"
                  }
                },
                name: "meta.at-rule.body.css",
                patterns: [
                  {
                    include: "$self"
                  }
                ]
              }
            ]
          }
        ]
      },
      "color-keywords": {
        patterns: [
          {
            match: "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",
            name: "support.constant.color.w3c-standard-color-name.css"
          },
          {
            match: "(?xi) (?<![\\w-])\n(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood\n|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan\n|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange\n|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise\n|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen\n|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki\n|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow\n|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray\n|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue\n|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise\n|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered\n|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum\n|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell\n|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato\n|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)\n(?![\\w-])",
            name: "support.constant.color.w3c-extended-color-name.css"
          },
          {
            match: "(?i)(?<![\\w-])currentColor(?![\\w-])",
            name: "support.constant.color.current.css"
          },
          {
            match: "(?xi) (?<![\\w-])\n(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow\n|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption\n|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow\n|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)\n(?![\\w-])",
            name: "invalid.deprecated.color.system.css"
          }
        ]
      },
      combinators: {
        patterns: [
          {
            match: "/deep/|>>>",
            name: "invalid.deprecated.combinator.css"
          },
          {
            match: ">>|>|\\+|~",
            name: "keyword.operator.combinator.css"
          }
        ]
      },
      commas: {
        match: ",",
        name: "punctuation.separator.list.comma.css"
      },
      "comment-block": {
        begin: "/\\*",
        beginCaptures: {
          0: {
            name: "punctuation.definition.comment.begin.css"
          }
        },
        end: "\\*/",
        endCaptures: {
          0: {
            name: "punctuation.definition.comment.end.css"
          }
        },
        name: "comment.block.css"
      },
      escapes: {
        patterns: [
          {
            match: "\\\\[0-9a-fA-F]{1,6}",
            name: "constant.character.escape.codepoint.css"
          },
          {
            begin: "\\\\$\\s*",
            end: "^(?<!\\G)",
            name: "constant.character.escape.newline.css"
          },
          {
            match: "\\\\.",
            name: "constant.character.escape.css"
          }
        ]
      },
      "feature-query": {
        begin: "\\(",
        beginCaptures: {
          0: {
            name: "punctuation.definition.condition.begin.bracket.round.css"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "punctuation.definition.condition.end.bracket.round.css"
          }
        },
        name: "meta.feature-query.css",
        patterns: [
          {
            include: "#feature-query-operators"
          },
          {
            include: "#feature-query"
          }
        ]
      },
      "feature-query-operators": {
        patterns: [
          {
            match: "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",
            name: "keyword.operator.logical.feature.$1.css"
          },
          {
            include: "#rule-list-innards"
          }
        ]
      },
      "font-features": {
        begin: `(?xi)
((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))
(?=[\\s@'"{;]|/\\*|$)`,
        beginCaptures: {
          1: {
            name: "keyword.control.at-rule.${3:/downcase}.css"
          },
          2: {
            name: "punctuation.definition.keyword.css"
          }
        },
        end: "(?<=})",
        name: "meta.at-rule.${3:/downcase}.css",
        patterns: [
          {
            begin: "{",
            beginCaptures: {
              0: {
                name: "punctuation.section.property-list.begin.bracket.curly.css"
              }
            },
            end: "}",
            endCaptures: {
              0: {
                name: "punctuation.section.property-list.end.bracket.curly.css"
              }
            },
            name: "meta.property-list.font-feature.css",
            patterns: [
              {
                captures: {
                  0: {
                    patterns: [
                      {
                        include: "#escapes"
                      }
                    ]
                  }
                },
                match: "(?x)\n(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter\n(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier\n  | \\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
                name: "variable.font-feature.css"
              },
              {
                include: "#rule-list-innards"
              }
            ]
          }
        ]
      },
      functions: {
        patterns: [
          {
            begin: "(?i)(?<![\\w-])(calc)(\\()",
            beginCaptures: {
              1: {
                name: "support.function.calc.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.calc.css",
            patterns: [
              {
                match: "[*/]|(?<=\\s|^)[-+](?=\\s|$)",
                name: "keyword.operator.arithmetic.css"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?i)(?<![\\w-])(rgba?|hsla?)(\\()",
            beginCaptures: {
              1: {
                name: "support.function.misc.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.color.css",
            patterns: [
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: '(?xi) (?<![\\w-])\n(\n  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants\n  (?:repeating-)?            # "Repeating"-type gradient\n  (?:linear|radial|conic)    # Shape\n  -gradient\n)\n(\\()',
            beginCaptures: {
              1: {
                name: "support.function.gradient.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.gradient.css",
            patterns: [
              {
                match: "(?i)(?<![\\w-])(from|to|at)(?![\\w-])",
                name: "keyword.operator.gradient.css"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
            beginCaptures: {
              1: {
                name: "invalid.deprecated.gradient.function.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.gradient.invalid.deprecated.gradient.css",
            patterns: [
              {
                begin: "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
                beginCaptures: {
                  1: {
                    name: "invalid.deprecated.function.css"
                  },
                  2: {
                    name: "punctuation.section.function.begin.bracket.round.css"
                  }
                },
                end: "\\)",
                endCaptures: {
                  0: {
                    name: "punctuation.section.function.end.bracket.round.css"
                  }
                },
                patterns: [
                  {
                    include: "#property-values"
                  }
                ]
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?xi) (?<![\\w-])\n(annotation|attr|blur|brightness|character-variant|contrast|counters?\n|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate\n|image-set|invert|local|minmax|opacity|ornaments|repeat|saturate|sepia\n|styleset|stylistic|swash|symbols)\n(\\()",
            beginCaptures: {
              1: {
                name: "support.function.misc.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.misc.css",
            patterns: [
              {
                match: `(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"')]|/\\*|$)`,
                name: "constant.numeric.other.density.css"
              },
              {
                include: "#property-values"
              },
              {
                match: `[^'"),\\s]+`,
                name: "variable.parameter.misc.css"
              }
            ]
          },
          {
            begin: "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
            beginCaptures: {
              1: {
                name: "support.function.shape.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.shape.css",
            patterns: [
              {
                match: "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",
                name: "keyword.operator.shape.css"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
            beginCaptures: {
              1: {
                name: "support.function.timing-function.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.timing-function.css",
            patterns: [
              {
                match: "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",
                name: "support.constant.step-direction.css"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?xi) (?<![\\w-])\n( (?:translate|scale|rotate)(?:[XYZ]|3D)?\n| matrix(?:3D)?\n| skew[XY]?\n| perspective\n)\n(\\()",
            beginCaptures: {
              1: {
                name: "support.function.transform.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            patterns: [
              {
                include: "#property-values"
              }
            ]
          },
          {
            include: "#url"
          },
          {
            begin: "(?i)(?<![\\w-])(var)(\\()",
            beginCaptures: {
              1: {
                name: "support.function.misc.css"
              },
              2: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            name: "meta.function.variable.css",
            patterns: [
              {
                name: "variable.argument.css",
                match: "(?x)\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*"
              },
              {
                include: "#property-values"
              }
            ]
          }
        ]
      },
      "functional-pseudo-classes": {
        patterns: [
          {
            begin: "(?i)((:)dir)(\\()",
            beginCaptures: {
              1: {
                name: "entity.other.attribute-name.pseudo-class.css"
              },
              2: {
                name: "punctuation.definition.entity.css"
              },
              3: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#escapes"
              },
              {
                match: "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",
                name: "support.constant.text-direction.css"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            begin: "(?i)((:)lang)(\\()",
            beginCaptures: {
              1: {
                name: "entity.other.attribute-name.pseudo-class.css"
              },
              2: {
                name: "punctuation.definition.entity.css"
              },
              3: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            patterns: [
              {
                match: "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",
                name: "support.constant.language-range.css"
              },
              {
                begin: '"',
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.css"
                  }
                },
                end: '"',
                endCaptures: {
                  0: {
                    name: "punctuation.definition.string.end.css"
                  }
                },
                name: "string.quoted.double.css",
                patterns: [
                  {
                    include: "#escapes"
                  },
                  {
                    match: '(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])',
                    name: "support.constant.language-range.css"
                  }
                ]
              },
              {
                begin: "'",
                beginCaptures: {
                  0: {
                    name: "punctuation.definition.string.begin.css"
                  }
                },
                end: "'",
                endCaptures: {
                  0: {
                    name: "punctuation.definition.string.end.css"
                  }
                },
                name: "string.quoted.single.css",
                patterns: [
                  {
                    include: "#escapes"
                  },
                  {
                    match: "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",
                    name: "support.constant.language-range.css"
                  }
                ]
              },
              {
                include: "#commas"
              }
            ]
          },
          {
            begin: "(?i)((:)(?:not|has|matches))(\\()",
            beginCaptures: {
              1: {
                name: "entity.other.attribute-name.pseudo-class.css"
              },
              2: {
                name: "punctuation.definition.entity.css"
              },
              3: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            patterns: [
              {
                include: "#selector-innards"
              }
            ]
          },
          {
            begin: "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",
            beginCaptures: {
              1: {
                name: "entity.other.attribute-name.pseudo-class.css"
              },
              2: {
                name: "punctuation.definition.entity.css"
              },
              3: {
                name: "punctuation.section.function.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.section.function.end.bracket.round.css"
              }
            },
            patterns: [
              {
                match: "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",
                name: "constant.numeric.css"
              },
              {
                match: "(?i)even|odd",
                name: "support.constant.parity.css"
              }
            ]
          }
        ]
      },
      "media-features": {
        captures: {
          1: {
            name: "support.type.property-name.media.css"
          },
          2: {
            name: "support.type.property-name.media.css"
          },
          3: {
            name: "support.type.vendored.property-name.media.css"
          }
        },
        match: "(?xi)\n(?<=^|\\s|\\(|\\*/)           # Preceded by whitespace, bracket or comment\n(?:\n  # Standardised features\n  (\n    (?:min-|max-)?            # Range features\n    (?: height\n      | width\n      | aspect-ratio\n      | color\n      | color-index\n      | monochrome\n      | resolution\n    )\n    | grid                    # Discrete features\n    | scan\n    | orientation\n    | display-mode\n    | hover\n  )\n  |\n  # Deprecated features\n  (\n    (?:min-|max-)?            # Deprecated in Media Queries 4\n    device-\n    (?: height\n      | width\n      | aspect-ratio\n    )\n  )\n  |\n  # Vendor extensions\n  (\n    (?:\n      # Spec-compliant syntax\n      [-_]\n      (?: webkit              # Webkit/Blink\n        | apple|khtml         # Webkit aliases\n        | epub                # ePub3\n        | moz                 # Gecko\n        | ms                  # Microsoft\n        | o                   # Presto (pre-Opera 15)\n        | xv|ah|rim|atsc|     # Less common vendors\n          hp|tc|wap|ro\n      )\n      |\n      # Non-standard prefixes\n      (?: mso                 # Microsoft Office\n        | prince              # YesLogic\n      )\n    )\n    -\n    [\\w-]+                   # Feature name\n    (?=                       # Terminates correctly\n      \\s*                    # Possible whitespace\n      (?:                     # Possible injected comment\n        /\\*\n        (?:[^*]|\\*[^/])*\n        \\*/\n      )?\n      \\s*\n      [:)]                    # Ends with a colon or closed bracket\n    )\n  )\n)\n(?=\\s|$|[><:=]|\\)|/\\*)     # Terminates cleanly"
      },
      "media-feature-keywords": {
        match: "(?xi)\n(?<=^|\\s|:|\\*/)\n(?: portrait                  # Orientation\n  | landscape\n  | progressive               # Scan types\n  | interlace\n  | fullscreen                # Display modes\n  | standalone\n  | minimal-ui\n  | browser\n  | hover\n)\n(?=\\s|\\)|$)",
        name: "support.constant.property-value.css"
      },
      "media-query": {
        begin: "\\G",
        end: "(?=\\s*[{;])",
        patterns: [
          {
            include: "#comment-block"
          },
          {
            include: "#escapes"
          },
          {
            include: "#media-types"
          },
          {
            match: "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",
            name: "keyword.operator.logical.$1.media.css"
          },
          {
            match: "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",
            name: "keyword.operator.logical.and.media.css"
          },
          {
            match: ",(?:(?:\\s*,)+|(?=\\s*[;){]))",
            name: "invalid.illegal.comma.css"
          },
          {
            include: "#commas"
          },
          {
            begin: "\\(",
            beginCaptures: {
              0: {
                name: "punctuation.definition.parameters.begin.bracket.round.css"
              }
            },
            end: "\\)",
            endCaptures: {
              0: {
                name: "punctuation.definition.parameters.end.bracket.round.css"
              }
            },
            patterns: [
              {
                include: "#media-features"
              },
              {
                include: "#media-feature-keywords"
              },
              {
                match: ":",
                name: "punctuation.separator.key-value.css"
              },
              {
                match: ">=|<=|=|<|>",
                name: "keyword.operator.comparison.css"
              },
              {
                captures: {
                  1: {
                    name: "constant.numeric.css"
                  },
                  2: {
                    name: "keyword.operator.arithmetic.css"
                  },
                  3: {
                    name: "constant.numeric.css"
                  }
                },
                match: "(\\d+)\\s*(/)\\s*(\\d+)",
                name: "meta.ratio.css"
              },
              {
                include: "#numeric-values"
              },
              {
                include: "#comment-block"
              }
            ]
          }
        ]
      },
      "media-query-list": {
        begin: "(?=\\s*[^{;])",
        end: "(?=\\s*[{;])",
        patterns: [
          {
            include: "#media-query"
          }
        ]
      },
      "media-types": {
        captures: {
          1: {
            name: "support.constant.media.css"
          },
          2: {
            name: "invalid.deprecated.constant.media.css"
          }
        },
        match: "(?xi)\n(?<=^|\\s|,|\\*/)\n(?:\n  # Valid media types\n  (all|print|screen|speech)\n  |\n  # Deprecated in Media Queries 4: http://dev.w3.org/csswg/mediaqueries/#media-types\n  (aural|braille|embossed|handheld|projection|tty|tv)\n)\n(?=$|[{,\\s;]|/\\*)"
      },
      "numeric-values": {
        patterns: [
          {
            captures: {
              1: {
                name: "punctuation.definition.constant.css"
              }
            },
            match: "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
            name: "constant.other.color.rgb-value.hex.css"
          },
          {
            captures: {
              1: {
                name: "keyword.other.unit.percentage.css"
              },
              2: {
                name: "keyword.other.unit.${2:/downcase}.css"
              }
            },
            match: "(?xi) (?<![\\w-])\n[-+]?                               # Sign indicator\n\n(?:                                 # Numerals\n    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits\n  | \\.[0-9]+                       # Float without leading digits\n)\n\n(?:                                 # Scientific notation\n  (?<=[0-9])                        # Exponent must follow a digit\n  E                                 # Exponent indicator\n  [-+]?                             # Possible sign indicator\n  [0-9]+                            # Exponent value\n)?\n\n(?:                                 # Possible unit for data-type:\n  (%)                               # - Percentage\n  | ( deg|grad|rad|turn             # - Angle\n    | Hz|kHz                        # - Frequency\n    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length\n      pc|pt|px|q|rem|vh|vmax|vmin|\n      vw\n    | dpi|dpcm|dppx                 # - Resolution\n    | s|ms                          # - Time\n    )\n  \\b                               # Boundary checking intentionally lax to\n)?                                  # facilitate embedding in CSS-like grammars",
            name: "constant.numeric.css"
          }
        ]
      },
      "property-keywords": {
        patterns: [
          {
            match: "(?xi) (?<![\\w-])\n(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse\n|always|antialiased|auto|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel\n|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets\n|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn\n|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover\n|crisp-edges|crispEdges|crosshair|cyclic|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures\n|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in\n|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded\n|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze\n|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide\n|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space\n|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start\n|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83\n|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|lighten|lighter|line|line-edge|line-through|linear|linearRGB\n|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent\n|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize\n|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures\n|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize\n|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding\n|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line\n|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]\n|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text\n|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate\n|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller\n|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap\n|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table\n|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl\n|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle\n|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical\n|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy\n|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)\n(?![\\w-])",
            name: "support.constant.property-value.css"
          },
          {
            match: "(?xi) (?<![\\w-])\n(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic\n|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am\n|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew\n|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer\n|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek\n|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal\n|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian\n|upper-latin|upper-roman|urdu)\n(?![\\w-])",
            name: "support.constant.property-value.list-style-type.css"
          },
          {
            match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            name: "support.constant.vendored.property-value.css"
          },
          {
            match: "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",
            name: "support.constant.font-name.css"
          }
        ]
      },
      "property-names": {
        patterns: [
          {
            match: "(?xi) (?<![\\w-])\n(?:\n  # Standard CSS\n  additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration\n  | animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter\n  | backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image\n  | background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border\n  | border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color\n  | border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius\n  | border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image\n  | border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end\n  | border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color\n  | border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width\n  | border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius\n  | border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style\n  | border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side\n  | caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|column-count|column-fill|column-gap\n  | column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|content|counter-increment\n  | counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis\n  | flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family\n  | font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch\n  | font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures\n  | font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical\n  | grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start\n  | grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows\n  | hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align\n  | inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation\n  | justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style\n  | list-style-image|list-style-position|list-style-type|margin|margin-block-end|margin-block-start|margin-bottom|margin-inline-end|margin-inline-start\n  | margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset\n  | mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode\n  | mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width\n  | max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position\n  | offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans\n  | outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline\n  | overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]\n  | pad|padding|padding-block-end|padding-block-start|padding-bottom|padding-inline-end|padding-inline-start|padding-left\n  | padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin\n  | place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align\n  | ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start\n  | scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right\n  | scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom\n  | scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right\n  | scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type\n  | scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size\n  | speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit\n  | stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright\n  | text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style\n  | text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation\n  | text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-position|top|touch-action|transform\n  | transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function\n  | translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change\n  | word-break|word-spacing|word-wrap|writing-mode|z-index|zoom\n\n  # SVG attributes\n  | alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile\n  | color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity\n  | glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid\n  | marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap\n  | stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y\n\n  # Not listed on MDN; presumably deprecated\n  | adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break\n  | balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length\n  | bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction\n  | box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column\n  | column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break\n  | delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust\n  | drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position\n  | flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before\n  | hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust\n  | initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count\n  | justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift\n  | line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed\n  | marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group\n  | orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range\n  | play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim\n  | radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness\n  | right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color\n  | rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral\n  | speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch\n  | string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height\n  | text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style\n  | top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range\n  | voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap\n)\n(?![\\w-])",
            name: "support.type.property-name.css"
          },
          {
            match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            name: "support.type.vendored.property-name.css"
          }
        ]
      },
      "property-values": {
        patterns: [
          {
            include: "#commas"
          },
          {
            include: "#comment-block"
          },
          {
            include: "#escapes"
          },
          {
            include: "#functions"
          },
          {
            include: "#property-keywords"
          },
          {
            include: "#unicode-range"
          },
          {
            include: "#numeric-values"
          },
          {
            include: "#color-keywords"
          },
          {
            include: "#string"
          },
          {
            match: "!\\s*important(?![\\w-])",
            name: "keyword.other.important.css"
          }
        ]
      },
      "pseudo-classes": {
        captures: {
          1: {
            name: "punctuation.definition.entity.css"
          },
          2: {
            name: "invalid.illegal.colon.css"
          }
        },
        match: "(?xi)\n(:)(:*)\n(?: active|any-link|checked|default|disabled|empty|enabled|first\n  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover\n  | in-range|indeterminate|invalid|left|link|optional|out-of-range\n  | read-only|read-write|required|right|root|scope|target|unresolved\n  | valid|visited\n)(?![\\w-]|\\s*[;}])",
        name: "entity.other.attribute-name.pseudo-class.css"
      },
      "pseudo-elements": {
        captures: {
          1: {
            name: "punctuation.definition.entity.css"
          },
          2: {
            name: "punctuation.definition.entity.css"
          }
        },
        match: "(?xi)\n(?:\n  (::?)                       # Elements using both : and :: notation\n  (?: after\n    | before\n    | first-letter\n    | first-line\n    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz\n            |ms|o|rim|ro|tc|wap|webkit|xv)\n        | (?:mso|prince))\n      -[a-z-]+\n  )\n  |\n  (::)                        # Double-colon only\n  (?: backdrop\n    | content\n    | grammar-error\n    | marker\n    | placeholder\n    | selection\n    | shadow\n    | spelling-error\n  )\n)\n(?![\\w-]|\\s*[;}])",
        name: "entity.other.attribute-name.pseudo-element.css"
      },
      "rule-list": {
        begin: "{",
        beginCaptures: {
          0: {
            name: "punctuation.section.property-list.begin.bracket.curly.css"
          }
        },
        end: "}",
        endCaptures: {
          0: {
            name: "punctuation.section.property-list.end.bracket.curly.css"
          }
        },
        name: "meta.property-list.css",
        patterns: [
          {
            include: "#rule-list-innards"
          }
        ]
      },
      "rule-list-innards": {
        patterns: [
          {
            include: "#comment-block"
          },
          {
            include: "#escapes"
          },
          {
            include: "#font-features"
          },
          {
            match: "(?x) (?<![\\w-])\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
            name: "variable.css"
          },
          {
            begin: "(?<![-a-zA-Z])(?=[-a-zA-Z])",
            end: "$|(?![-a-zA-Z])",
            name: "meta.property-name.css",
            patterns: [
              {
                include: "#property-names"
              }
            ]
          },
          {
            begin: "(:)\\s*",
            beginCaptures: {
              1: {
                name: "punctuation.separator.key-value.css"
              }
            },
            end: "\\s*(;)|\\s*(?=}|\\))",
            endCaptures: {
              1: {
                name: "punctuation.terminator.rule.css"
              }
            },
            contentName: "meta.property-value.css",
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#property-values"
              }
            ]
          },
          {
            match: ";",
            name: "punctuation.terminator.rule.css"
          }
        ]
      },
      selector: {
        begin: "(?x)\n(?=\n  (?:\\|)?                    # Possible anonymous namespace prefix\n  (?:\n    [-\\[:.*\\#a-zA-Z_]       # Valid selector character\n    |\n    [^\\x00-\\x7F]            # Which can include non-ASCII symbols\n    |\n    \\\\                      # Or an escape sequence\n    (?:[0-9a-fA-F]{1,6}|.)\n  )\n)",
        end: "(?=\\s*[/@{)])",
        name: "meta.selector.css",
        patterns: [
          {
            include: "#selector-innards"
          }
        ]
      },
      "selector-innards": {
        patterns: [
          {
            include: "#comment-block"
          },
          {
            include: "#commas"
          },
          {
            include: "#escapes"
          },
          {
            include: "#combinators"
          },
          {
            captures: {
              1: {
                name: "entity.other.namespace-prefix.css"
              },
              2: {
                name: "punctuation.separator.css"
              }
            },
            match: "(?x)\n(?:^|(?<=[\\s,(};]))         # Follows whitespace, comma, semicolon, or bracket\n(?!\n  [-\\w*]+\n  \\|\n  (?!\n      [-\\[:.*\\#a-zA-Z_]    # Make sure there's a selector to match\n    | [^\\x00-\\x7F]\n  )\n)\n(\n  (?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter\n  (?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n  |\n  \\*     # Universal namespace\n)?\n(\\|)     # Namespace separator"
          },
          {
            include: "#tag-names"
          },
          {
            match: "\\*",
            name: "entity.name.tag.wildcard.css"
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.css"
              },
              2: {
                patterns: [
                  {
                    include: "#escapes"
                  }
                ]
              }
            },
            match: "(?x) (?<![@\\w-])\n([.\\#])\n# Invalid identifier\n(\n  (?:\n    # Starts with ASCII digits, with possible hyphen preceding it\n    -?[0-9]\n    |\n    # Consists of a hyphen only\n    -                                      # Terminated by either:\n    (?= $                                  # - End-of-line\n      | [\\s,.\\#)\\[:{>+~|]               # - Followed by another selector\n      | /\\*                               # - Followed by a block comment\n    )\n    |\n    # Name contains unescaped ASCII symbol\n    (?:                                    # Check for acceptable preceding characters\n        [-a-zA-Z_0-9]|[^\\x00-\\x7F]       # - Valid selector character\n      | \\\\(?:[0-9a-fA-F]{1,6}|.)         # - Escape sequence\n    )*\n    (?:                                    # Invalid punctuation\n      [!\"'%&(*;<?@^`|\\]}]                 # - NOTE: We exempt `)` from the list of checked\n      |                                    #   symbols to avoid matching `:not(.invalid)`\n      / (?!\\*)                            # - Avoid invalidating the start of a comment\n    )+\n  )\n  # Mark remainder of selector invalid\n  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]         # - Otherwise valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)           # - Escape sequence\n  )*\n)",
            name: "invalid.illegal.bad-identifier.css"
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.css"
              },
              2: {
                patterns: [
                  {
                    include: "#escapes"
                  }
                ]
              }
            },
            match: "(?x)\n(\\.)                                  # Valid class-name\n(\n  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]     # Valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence\n  )+\n)                                      # Followed by either:\n(?= $                                  # - End of the line\n  | [\\s,.\\#)\\[:{>+~|]               # - Another selector\n  | /\\*                               # - A block comment\n)",
            name: "entity.other.attribute-name.class.css"
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.entity.css"
              },
              2: {
                patterns: [
                  {
                    include: "#escapes"
                  }
                ]
              }
            },
            match: "(?x)\n(\\#)\n(\n  -?\n  (?![0-9])\n  (?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+\n)\n(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
            name: "entity.other.attribute-name.id.css"
          },
          {
            begin: "\\[",
            beginCaptures: {
              0: {
                name: "punctuation.definition.entity.begin.bracket.square.css"
              }
            },
            end: "\\]",
            endCaptures: {
              0: {
                name: "punctuation.definition.entity.end.bracket.square.css"
              }
            },
            name: "meta.attribute-selector.css",
            patterns: [
              {
                include: "#comment-block"
              },
              {
                include: "#string"
              },
              {
                captures: {
                  1: {
                    name: "storage.modifier.ignore-case.css"
                  }
                },
                match: `(?<=["'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)`
              },
              {
                captures: {
                  1: {
                    name: "string.unquoted.attribute-value.css",
                    patterns: [
                      {
                        include: "#escapes"
                      }
                    ]
                  }
                },
                match: `(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\"'\\s\\]]|\\\\.)+)`
              },
              {
                include: "#escapes"
              },
              {
                match: "[~|^$*]?=",
                name: "keyword.operator.pattern.css"
              },
              {
                match: "\\|",
                name: "punctuation.separator.css"
              },
              {
                captures: {
                  1: {
                    name: "entity.other.namespace-prefix.css",
                    patterns: [
                      {
                        include: "#escapes"
                      }
                    ]
                  }
                },
                match: "(?x)\n# Qualified namespace prefix\n( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+\n| \\*\n)\n# Lookahead to ensure there's a valid identifier ahead\n(?=\n  \\| (?!\\s|=|$|\\])\n  (?: -?(?!\\d)\n   |   [\\\\\\w-]\n   |   [^\\x00-\\x7F]\n   )\n)"
              },
              {
                captures: {
                  1: {
                    name: "entity.other.attribute-name.css",
                    patterns: [
                      {
                        include: "#escapes"
                      }
                    ]
                  }
                },
                match: "(?x)\n(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\n\\s*\n(?=[~|^\\]$*=]|/\\*)"
              }
            ]
          },
          {
            include: "#pseudo-classes"
          },
          {
            include: "#pseudo-elements"
          },
          {
            include: "#functional-pseudo-classes"
          },
          {
            match: "(?x) (?<![@\\w-])\n(?=            # Custom element names must:\n  [a-z]        # - start with a lowercase ASCII letter,\n  \\w* -       # - contain at least one dash\n)\n(?:\n  (?![A-Z])    # No uppercase ASCII letters are allowed\n  [\\w-]       # Allow any other word character or dash\n)+\n(?![(\\w-])",
            name: "entity.name.tag.custom.css"
          }
        ]
      },
      string: {
        patterns: [
          {
            begin: '"',
            beginCaptures: {
              0: {
                name: "punctuation.definition.string.begin.css"
              }
            },
            end: '"|(?<!\\\\)(?=$|\\n)',
            endCaptures: {
              0: {
                name: "punctuation.definition.string.end.css"
              }
            },
            name: "string.quoted.double.css",
            patterns: [
              {
                begin: '(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)',
                end: "$",
                name: "invalid.illegal.unclosed.string.css",
                patterns: [
                  {
                    include: "#escapes"
                  }
                ]
              },
              {
                include: "#escapes"
              }
            ]
          },
          {
            begin: "'",
            beginCaptures: {
              0: {
                name: "punctuation.definition.string.begin.css"
              }
            },
            end: "'|(?<!\\\\)(?=$|\\n)",
            endCaptures: {
              0: {
                name: "punctuation.definition.string.end.css"
              }
            },
            name: "string.quoted.single.css",
            patterns: [
              {
                begin: "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",
                end: "$",
                name: "invalid.illegal.unclosed.string.css",
                patterns: [
                  {
                    include: "#escapes"
                  }
                ]
              },
              {
                include: "#escapes"
              }
            ]
          }
        ]
      },
      "tag-names": {
        match: "(?xi) (?<![\\w:-])\n(?:\n    # HTML\n    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound\n  | big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command\n  | content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset\n  | figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i\n  | iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark\n  | marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript\n  | object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc\n  | ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong\n  | style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr\n  | track|tt|u|ul|var|video|wbr|xmp\n\n  # SVG\n  | altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform\n  | circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix\n  | feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap\n  | feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur\n  | feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting\n  | feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name\n  | font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern\n  | line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata\n  | missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor\n  | stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern\n\n  # MathML\n  | annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced\n  | mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot\n  | mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup\n  | msup|mtable|mtd|mtext|mtr|munder|munderover|semantics\n)\n(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)",
        name: "entity.name.tag.css"
      },
      "unicode-range": {
        captures: {
          0: {
            name: "constant.other.unicode-range.css"
          },
          1: {
            name: "punctuation.separator.dash.unicode-range.css"
          }
        },
        match: "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"
      },
      url: {
        begin: "(?i)(?<![\\w@-])(url)(\\()",
        beginCaptures: {
          1: {
            name: "support.function.url.css"
          },
          2: {
            name: "punctuation.section.function.begin.bracket.round.css"
          }
        },
        end: "\\)",
        endCaptures: {
          0: {
            name: "punctuation.section.function.end.bracket.round.css"
          }
        },
        name: "meta.function.url.css",
        patterns: [
          {
            match: `[^'")\\s]+`,
            name: "variable.parameter.url.css"
          },
          {
            include: "#string"
          },
          {
            include: "#comment-block"
          },
          {
            include: "#escapes"
          }
        ]
      }
    };
    css_tmLanguage = {
      version: version5,
      name: name5,
      scopeName: scopeName5,
      patterns: patterns5,
      repository: repository5
    };
  }
});

// src/index.tsx
import {
  useCallback,
  useEffect as useEffect4,
  useMemo as useMemo3,
  useRef as useRef4,
  useState as useState3
} from "react";
import { ErrorBoundary } from "react-error-boundary";

// src/components/Render/index.tsx
import React2, { useEffect, useMemo, useRef, useState } from "react";
import { createApp } from "vue";
import {
  parse,
  compileScript,
  compileTemplate
} from "@vue/compiler-sfc/dist/compiler-sfc.esm-browser";

// src/assets/svg/copy.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var copy_default = (_a) => {
  var _b = _a, { size = 16, color = "currentColor" } = _b, rest = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ jsxs(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 32 32"
    }, rest), {
      children: [
        rest.children,
        /* @__PURE__ */ jsx("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: color,
            d: "M28,0 C29.1045695,0 30,0.8954305 30,2 L30,22 C30,23.0543618 29.1841222,23.9181651 28.1492623,23.9945143 L28,24 L22,24 L22,30 C22,31.1045695 21.1045695,32 20,32 L4,32 C2.8954305,32 2,31.1045695 2,30 L2,10 C2,8.8954305 2.8954305,8 4,8 L10,8 L10,2 C10,0.8954305 10.8954305,0 12,0 L28,0 Z M18,12 L6,12 L6,28 L18,28 L18,12 Z M26,4 L14,4 L14,8 L20,8 C21.1045695,8 22,8.8954305 22,10 L22,20 L26,20 L26,4 Z"
          }
        ) })
      ]
    })
  );
};

// src/assets/svg/tick.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var tick_default = (_a) => {
  var _b = _a, { size = 16, color = "currentColor" } = _b, rest = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ jsxs2(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 32 32"
    }, rest), {
      children: [
        rest.children,
        /* @__PURE__ */ jsx2("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ jsx2(
          "path",
          {
            fill: color,
            d: "M9.99198046,23.962796 L5.04223299,19.0130486 C4.06592226,18.0367378 4.06592226,16.4538254 5.04223299,15.4775147 C6.01854372,14.5012039 7.60145617,14.5012039 8.5777669,15.4775147 L11.7597474,18.6594952 L23.4270093,6.99223328 C24.40332,6.01592255 25.9862325,6.01592255 26.9625432,6.99223328 C27.9388539,7.96854401 27.9388539,9.55145645 26.9625432,10.5277672 L13.5275144,23.962796 C12.5512036,24.9391068 10.9682912,24.9391068 9.99198046,23.962796 Z"
          }
        ) })
      ]
    })
  );
};

// src/assets/svg/close.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var close_default = (_a) => {
  var _b = _a, { size = 16, color = "currentColor" } = _b, rest = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ jsxs3(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 32 32"
    }, rest), {
      children: [
        rest.children,
        /* @__PURE__ */ jsx3("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ jsx3(
          "path",
          {
            fill: color,
            d: "M18.8284271,16 L25.8994949,23.0710678 C26.6805435,23.8521164 26.6805435,25.1184464 25.8994949,25.8994949 C25.1184464,26.6805435 23.8521164,26.6805435 23.0710678,25.8994949 L16,18.8284271 L8.92893219,25.8994949 C8.1478836,26.6805435 6.88155365,26.6805435 6.10050506,25.8994949 C5.31945648,25.1184464 5.31945648,23.8521164 6.10050506,23.0710678 L13.1715729,16 L6.10050506,8.92893219 C5.31945648,8.1478836 5.31945648,6.88155365 6.10050506,6.10050506 C6.88155365,5.31945648 8.1478836,5.31945648 8.92893219,6.10050506 L16,13.1715729 L23.0710678,6.10050506 C23.8521164,5.31945648 25.1184464,5.31945648 25.8994949,6.10050506 C26.6805435,6.88155365 26.6805435,8.1478836 25.8994949,8.92893219 L18.8284271,16 Z"
          }
        ) })
      ]
    })
  );
};

// src/assets/svg/expand.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var expand_default = (_a) => {
  var _b = _a, { size = 16, color = "currentColor" } = _b, rest = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ jsxs4(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 16 16"
    }, rest), {
      children: [
        rest.children,
        /* @__PURE__ */ jsxs4("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M2 2L5.33333 5.29983",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M2 13.9668L5.33333 10.667",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M14 13.9668L10.7002 10.667",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M13.9666 2L10.6667 5.29983",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M11 2H14V5",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M14 11V14H11",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M5 14H2V11",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              d: "M2 5V2H5",
              stroke: color,
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] })
      ]
    })
  );
};

// src/utils/transform.ts
import * as babel from "@babel/standalone";
var importDeclaration = (importsMap, t) => (path) => {
  const importName = path.node.source.value;
  const { specifiers } = path.node;
  const imports = specifiers.map((specifier) => {
    if (t.isImportDefaultSpecifier(specifier) || t.isImportNamespaceSpecifier(specifier)) {
      return specifier.local.name;
    }
    return [
      t.isIdentifier(specifier.imported) ? specifier.imported.name : specifier.imported.value,
      specifier.local.name
    ];
  });
  importsMap[importName] = imports;
  path.remove();
};
var transformReact = (code) => {
  var _a;
  const importsMap = {};
  const transformedCode = ((_a = babel.transform(code, {
    presets: ["react", "typescript"],
    filename: "index.tsx",
    plugins: [
      (babel2) => {
        const { types: t } = babel2;
        return {
          name: "ast-transform",
          visitor: {
            ImportDeclaration: importDeclaration(importsMap, t),
            ExportDefaultDeclaration(path) {
              const functionExpression = path.node.declaration;
              const returnStatement = t.returnStatement(functionExpression);
              path.replaceWith(returnStatement);
            },
            ExportNamedDeclaration(path) {
              path.remove();
            },
            ExportAllDeclaration(path) {
              path.remove();
            }
          }
        };
      }
    ]
  })) == null ? void 0 : _a.code) || '() => React.createElement("div", null, "Something went wrong")';
  return {
    transformedCode,
    importsMap
  };
};
var transformVueTemplate = (code) => {
  var _a;
  const importsMap = {};
  const transformedCode = (_a = babel.transform(code, {
    presets: ["typescript"],
    filename: "index.tsx",
    plugins: [
      (babel2) => {
        const { types: t } = babel2;
        return {
          name: "ast-transform",
          visitor: {
            ImportDeclaration: importDeclaration(importsMap, t),
            ExportNamedDeclaration(path) {
              const functionExpression = t.functionExpression(
                null,
                path.node.declaration.params,
                path.node.declaration.body
              );
              const returnStatement = t.returnStatement(
                functionExpression
              );
              path.replaceWith(returnStatement);
            },
            ExportAllDeclaration(path) {
              path.remove();
            }
          }
        };
      }
    ]
  })) == null ? void 0 : _a.code;
  return {
    transformedCode,
    importsMap
  };
};
var transformVueScript = (code) => {
  var _a;
  const importsMap = {};
  const transformedCode = (_a = babel.transform(code, {
    presets: ["typescript"],
    filename: "index.tsx",
    plugins: [
      (babel2) => {
        const { types: t } = babel2;
        return {
          name: "ast-transform",
          visitor: {
            ImportDeclaration: importDeclaration(importsMap, t),
            ExportDefaultDeclaration(path) {
              const functionExpression = path.node.declaration;
              const returnStatement = t.returnStatement(
                functionExpression
              );
              path.replaceWith(returnStatement);
            },
            ExportNamedDeclaration(path) {
              path.remove();
            },
            ExportAllDeclaration(path) {
              path.remove();
            }
          }
        };
      }
    ]
  })) == null ? void 0 : _a.code;
  return {
    transformedCode,
    importsMap
  };
};
var transformJS = (code) => {
  var _a;
  const importsMap = {};
  const transformedCode = ((_a = babel.transform(code, {
    filename: "index.js",
    plugins: [
      (babel2) => {
        const { types: t } = babel2;
        return {
          name: "ast-transform",
          visitor: {
            ImportDeclaration: importDeclaration(importsMap, t),
            ExportDefaultDeclaration(path) {
              path.remove();
            },
            ExportNamedDeclaration(path) {
              path.remove();
            },
            ExportAllDeclaration(path) {
              path.remove();
            }
          }
        };
      }
    ]
  })) == null ? void 0 : _a.code) || "";
  return {
    transformedCode: `return () => { ${transformedCode} }`,
    importsMap
  };
};

// src/constants/dependencies.ts
import * as React from "react";
import * as Vue from "vue";
var dependencies_default = {
  react: React,
  vue: Vue
};

// src/utils/buildFuntion.ts
var buildFunction = ({
  importsMap,
  code,
  extraDependencies
}) => {
  if (!code) {
    return () => null;
  }
  const paramNameList = [];
  const paramList = [];
  const dependencies = __spreadValues(__spreadValues({}, dependencies_default), extraDependencies);
  Object.entries(importsMap).forEach(([packageName, imports]) => {
    const targetPackage = dependencies[packageName];
    if (!targetPackage) {
      return;
    }
    imports.forEach((importName) => {
      if (Array.isArray(importName)) {
        const [local, imported] = importName;
        paramNameList.push(imported);
        paramList.push(targetPackage[local]);
      } else {
        paramNameList.push(importName);
        paramList.push(targetPackage);
      }
    });
  });
  return new Function(...paramNameList, code)(...paramList);
};

// src/components/Render/index.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var RenderContent = React2.memo(
  ({
    code,
    framework,
    dependencies,
    onRendered
  }) => {
    const randomDomId = useRef(`pg-${Math.random().toString(36).slice(2)}`);
    const dom = useMemo(() => /* @__PURE__ */ jsx5("div", { id: randomDomId.current }), []);
    useEffect(() => {
      onRendered == null ? void 0 : onRendered(code);
      if (framework === "react") {
        return () => null;
      }
      if (framework === "js") {
        const { transformedCode: transformedCode2, importsMap: importsMap2 } = transformJS(code);
        const render2 = buildFunction({
          importsMap: __spreadProps(__spreadValues({}, importsMap2), { getDom: ["getDom", "getDom"] }),
          code: transformedCode2,
          extraDependencies: __spreadProps(__spreadValues({}, dependencies), {
            getDom: () => document.getElementById(randomDomId.current)
          })
        });
        setTimeout(render2);
        return () => null;
      }
      const sfc = parse(code);
      const compiledScript = compileScript(sfc.descriptor, {
        id: "render"
      });
      const {
        transformedCode: transformedCodeScript,
        importsMap: importsMapScript
      } = transformVueScript(compiledScript.content);
      const scriptContent = buildFunction({
        code: transformedCodeScript,
        importsMap: importsMapScript,
        extraDependencies: dependencies
      });
      const {
        transformedCode: transformedCodeRender,
        importsMap: importsMapRender
      } = transformVueTemplate(
        compileTemplate({
          id: "render",
          source: sfc.descriptor.template.content,
          filename: ""
        }).code
      );
      const render = buildFunction({
        code: transformedCodeRender,
        importsMap: importsMapRender,
        extraDependencies: dependencies
      });
      const app = createApp(__spreadProps(__spreadValues({}, scriptContent), {
        render
      }));
      app.mount(`#${randomDomId.current}`);
      return () => {
        app.unmount();
      };
    }, [code]);
    if (framework !== "react") {
      return dom;
    }
    const { transformedCode, importsMap } = transformReact(code);
    const Component = buildFunction({
      importsMap,
      code: transformedCode,
      extraDependencies: dependencies
    });
    return /* @__PURE__ */ jsx5(Component, {});
  }
);
var Render = React2.memo(
  ({
    code,
    framework,
    dependencies,
    onRendered,
    theme,
    enableFullscreen = true
  }) => {
    const [expanded, setExpanded] = useState(false);
    return /* @__PURE__ */ jsxs5(
      "div",
      {
        className: `component-playground-render__wrapper component-playground-render__wrapper--${expanded ? "expanded" : "normal"} component-playground-render__wrapper--${theme === "dark" ? "dark" : "light"}`,
        children: [
          enableFullscreen && /* @__PURE__ */ jsx5(
            "div",
            {
              className: "component-playground-render__expand",
              onClick: () => setExpanded(!expanded),
              children: expanded ? /* @__PURE__ */ jsx5(close_default, { size: 24 }) : /* @__PURE__ */ jsx5(expand_default, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx5(
            RenderContent,
            {
              code,
              dependencies,
              framework,
              onRendered
            }
          )
        ]
      }
    );
  }
);

// src/components/Editor/index.tsx
import { useEffect as useEffect3, useRef as useRef3, useState as useState2 } from "react";
import { omit } from "ramda";
import clipboard from "clipboardy";
import prettier from "prettier";
import { loadTheme } from "monaco-volar";
import * as onigasm from "onigasm";

// externals/react-monaco-editor/src/index.ts
import * as monaco2 from "monaco-editor";

// externals/react-monaco-editor/src/utils.ts
function processSize(size) {
  return !/^\d+$/.test(size) ? size : `${size}px`;
}
function noop() {
}

// externals/react-monaco-editor/src/editor.tsx
import * as monaco from "monaco-editor";
import { useEffect as useEffect2, useMemo as useMemo2, useRef as useRef2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function MonacoEditor({
  width,
  height,
  value,
  defaultValue,
  language,
  theme,
  options,
  overrideServices,
  editorWillMount,
  editorDidMount,
  editorWillUnmount,
  onChange,
  className,
  uri
}) {
  const containerElement = useRef2(null);
  const editor4 = useRef2(null);
  const _subscription = useRef2(null);
  const __prevent_trigger_change_event = useRef2(null);
  const fixedWidth = processSize(width);
  const fixedHeight = processSize(height);
  const style = useMemo2(
    () => ({
      width: fixedWidth,
      height: fixedHeight
    }),
    [fixedWidth, fixedHeight]
  );
  const handleEditorWillMount = () => {
    const finalOptions = editorWillMount(monaco);
    return finalOptions || {};
  };
  const handleEditorDidMount = () => {
    editorDidMount(editor4.current, monaco);
    _subscription.current = editor4.current.onDidChangeModelContent((event) => {
      if (!__prevent_trigger_change_event.current) {
        onChange(editor4.current.getValue(), event);
      }
    });
  };
  const handleEditorWillUnmount = () => {
    editorWillUnmount(editor4.current, monaco);
  };
  const initMonaco = () => {
    const finalValue = value !== null ? value : defaultValue;
    if (containerElement.current) {
      const finalOptions = __spreadValues(__spreadValues({}, options), handleEditorWillMount());
      const modelUri = uri == null ? void 0 : uri(monaco);
      let model = modelUri && monaco.editor.getModel(modelUri);
      if (model) {
        model.setValue(finalValue);
        monaco.editor.setModelLanguage(model, language);
      } else {
        model = monaco.editor.createModel(finalValue, language, modelUri);
      }
      editor4.current = monaco.editor.create(
        containerElement.current,
        __spreadValues(__spreadValues(__spreadValues({
          model
        }, className ? { extraEditorClassName: className } : {}), finalOptions), theme ? { theme } : {}),
        overrideServices
      );
      handleEditorDidMount();
    }
  };
  useEffect2(initMonaco, []);
  useEffect2(() => {
    if (editor4.current) {
      if (value === editor4.current.getValue()) {
        return;
      }
      const model = editor4.current.getModel();
      __prevent_trigger_change_event.current = true;
      editor4.current.pushUndoStop();
      model.pushEditOperations(
        [],
        [
          {
            range: model.getFullModelRange(),
            text: value
          }
        ],
        void 0
      );
      editor4.current.pushUndoStop();
      __prevent_trigger_change_event.current = false;
    }
  }, [value]);
  useEffect2(() => {
    if (editor4.current) {
      const model = editor4.current.getModel();
      monaco.editor.setModelLanguage(model, language);
    }
  }, [language]);
  useEffect2(() => {
    if (editor4.current) {
      const _a = options, { model: _model } = _a, optionsWithoutModel = __objRest(_a, ["model"]);
      editor4.current.updateOptions(__spreadValues(__spreadValues({}, className ? { extraEditorClassName: className } : {}), optionsWithoutModel));
    }
  }, [className, options]);
  useEffect2(() => {
    if (editor4.current) {
      editor4.current.layout();
    }
  }, [width, height]);
  useEffect2(() => {
    monaco.editor.setTheme(theme);
  }, [theme]);
  useEffect2(
    () => () => {
      if (editor4.current) {
        handleEditorWillUnmount();
        editor4.current.dispose();
      }
      if (_subscription.current) {
        _subscription.current.dispose();
      }
    },
    []
  );
  return /* @__PURE__ */ jsx6(
    "div",
    {
      ref: containerElement,
      style,
      className: "react-monaco-editor-container"
    }
  );
}
MonacoEditor.defaultProps = {
  width: "100%",
  height: "100%",
  value: null,
  defaultValue: "",
  language: "javascript",
  theme: null,
  options: {},
  overrideServices: {},
  editorWillMount: noop,
  editorDidMount: noop,
  editorWillUnmount: noop,
  onChange: noop,
  className: null
};
MonacoEditor.displayName = "MonacoEditor";
var editor_default = MonacoEditor;

// src/constants/frameworks.ts
var EditorConfigs = {
  react: {
    language: "typescript",
    extension: "tsx",
    theme: {
      light: "vs-code-theme-converted-light",
      dark: "vs-code-theme-converted-dark"
    }
  },
  vue: {
    language: "vue",
    extension: "vue",
    theme: {
      light: "vs-code-theme-converted-light",
      dark: "vs-code-theme-converted-dark"
    }
  },
  js: {
    language: "javascript",
    extension: "js",
    theme: {
      light: "vs-code-theme-converted-light",
      dark: "vs-code-theme-converted-dark"
    }
  }
};

// src/utils/loadGrammars.ts
import { wireTmGrammars } from "monaco-editor-textmate";
import { Registry } from "monaco-textmate";
function dispatchGrammars(scopeName6) {
  return __async(this, null, function* () {
    switch (scopeName6) {
      case "source.tsx":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_TypeScriptReact_tmLanguage(), TypeScriptReact_tmLanguage_exports))
        };
      case "source.vue":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_vue_tmLanguage(), vue_tmLanguage_exports))
        };
      case "source.ts":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_TypeScriptReact_tmLanguage(), TypeScriptReact_tmLanguage_exports))
        };
      case "source.js":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_JavaScript_tmLanguage(), JavaScript_tmLanguage_exports))
        };
      case "text.html.basic":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_html_tmLanguage(), html_tmLanguage_exports))
        };
      case "source.css":
        return {
          format: "json",
          content: yield Promise.resolve().then(() => (init_css_tmLanguage(), css_tmLanguage_exports))
        };
      default:
        return {
          format: "json",
          content: {
            scopeName: "source",
            patterns: []
          }
        };
    }
  });
}
var loadGrammars = (monaco4, editor4) => __async(void 0, null, function* () {
  const registry = new Registry({
    getGrammarDefinition: (scopeName6) => __async(void 0, null, function* () {
      const dispatch = yield dispatchGrammars(scopeName6);
      return JSON.parse(JSON.stringify(dispatch));
    })
  });
  const grammars = /* @__PURE__ */ new Map();
  grammars.set("typescript", "source.tsx");
  grammars.set("vue", "source.vue");
  grammars.set("javascript", "source.js");
  grammars.set("css", "source.css");
  grammars.set("html", "text.html.basic");
  for (const lang of grammars.keys()) {
    monaco4.languages.register({
      id: lang
    });
  }
  yield wireTmGrammars(monaco4, registry, grammars, editor4);
});

// src/utils/registerLanguages.ts
import { monaco as monaco3 } from "react-monaco-editor";
import * as volar from "@volar/monaco";
var { languages: languages2, editor: editor3 } = monaco3;
var registerVue = () => {
  let initialized = false;
  languages2.register({ id: "vue", extensions: [".vue"] });
  languages2.onLanguage("vue", () => __async(void 0, null, function* () {
    if (initialized) {
      return;
    }
    initialized = true;
    self.MonacoEnvironment.getWorker = (_, label) => {
      if (label === "vue") {
        return new Worker(new URL("/vue.worker.js", window.location.origin));
      }
      return self.MonacoEnvironment.getWorkerUrl(_, label);
    };
    const worker = editor3.createWebWorker({
      moduleId: "vs/language/vue/vueWorker",
      label: "vue",
      createData: {}
    });
    const languageId = ["vue"];
    const getSyncUris = () => editor3.getModels().map((model) => model.uri);
    volar.editor.activateMarkers(
      worker,
      languageId,
      "vue",
      getSyncUris,
      editor3
    );
    volar.editor.activateAutoInsertion(
      worker,
      languageId,
      getSyncUris,
      editor3
    );
    yield volar.languages.registerProvides(
      worker,
      languageId,
      getSyncUris,
      languages2
    );
  }));
};

// src/utils/utils.ts
var convertPackageName = (scopedName) => {
  if (!scopedName.startsWith("@")) {
    return scopedName;
  }
  return scopedName.slice(1).replace("/", "__");
};

// src/components/Editor/index.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
registerVue();
var presetLoaded = false;
var preset = Promise.all([
  onigasm.loadWASM(
    "https://static-staging.airwallex.com/sdk-playground/lib/onigasm.wasm"
  ),
  loadTheme(monaco2.editor)
]).then(() => presetLoaded = true);
var Editor = ({
  value,
  onChange,
  size,
  theme,
  framework,
  configs,
  enableCopy = true,
  dependTypes
}) => {
  const EditorConfig = EditorConfigs[framework];
  const editorRef = useRef3();
  const [loading, setLoading] = useState2(!presetLoaded);
  const [copied, setCopied] = useState2(false);
  const onCopy = () => {
    clipboard.write(value).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2e3);
    });
  };
  const debouncedChangeRef = useRef3(0);
  const debouncedChangeTimer = useRef3();
  const debouncedChange = (v) => {
    const current = ++debouncedChangeRef.current;
    if (debouncedChangeTimer.current) {
      clearTimeout(debouncedChangeTimer.current);
    }
    debouncedChangeTimer.current = setTimeout(() => {
      if (current === debouncedChangeRef.current) {
        onChange(v);
      }
    }, 1e3);
  };
  useEffect3(() => {
    var _a;
    (_a = editorRef.current) == null ? void 0 : _a.layout();
  }, [size]);
  useEffect3(() => {
    if (loading) {
      preset.then(() => {
        setLoading(false);
      });
    }
  }, []);
  if (loading) {
    return null;
  }
  return /* @__PURE__ */ jsxs6("div", { className: "component-playground-editor", children: [
    enableCopy && /* @__PURE__ */ jsx7("div", { className: "component-playground-editor__copy", onClick: onCopy, children: copied ? /* @__PURE__ */ jsx7(tick_default, { size: 16, color: "#09CC71" }) : /* @__PURE__ */ jsx7(copy_default, { size: 16 }) }),
    /* @__PURE__ */ jsx7(
      editor_default,
      __spreadValues({
        width: "100%",
        height: "100%",
        language: EditorConfig.language,
        theme: EditorConfig.theme[theme],
        value,
        options: {
          minimap: {
            enabled: false
          }
        },
        uri: (monaco4) => monaco4.Uri.parse(
          `file:///main${Math.random()}.${EditorConfig.extension}`
        ),
        onChange: debouncedChange,
        editorWillMount: (monaco4) => {
          var _a;
          monaco4.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco4.languages.typescript.ScriptTarget.ES2016,
            allowNonTsExtensions: true,
            moduleResolution: monaco4.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco4.languages.typescript.ModuleKind.ESNext,
            noEmit: true,
            typeRoots: ["node_modules/@types"],
            jsx: monaco4.languages.typescript.JsxEmit.React,
            reactNamespace: "React",
            allowJs: true,
            esModuleInterop: true
          });
          monaco4.languages.registerDocumentFormattingEditProvider(
            "javascript",
            {
              provideDocumentFormattingEdits(model) {
                return [
                  {
                    range: model.getFullModelRange(),
                    text: prettier.format(model.getValue(), {
                      parser: "babel"
                    })
                  }
                ];
              }
            }
          );
          fetch("https://unpkg.com/@types/react@18.2.0/index.d.ts").then((response) => response.text()).then((data) => {
            monaco4.languages.typescript.typescriptDefaults.addExtraLib(
              data,
              "file:///node_modules/@types/react/index.d.ts"
            );
          });
          Object.entries(dependTypes || {}).forEach(([name6, getDts]) => {
            const typeFilePath = `file:///node_modules/@types/${convertPackageName(
              name6
            )}/index.d.ts`;
            if (typeof getDts === "function") {
              getDts().then((content) => {
                monaco4.languages.typescript.typescriptDefaults.addExtraLib(
                  content,
                  typeFilePath
                );
              });
              return;
            }
            monaco4.languages.typescript.typescriptDefaults.addExtraLib(
              getDts || "",
              typeFilePath
            );
          });
          (_a = configs == null ? void 0 : configs.editorWillMount) == null ? void 0 : _a.call(configs, monaco4);
        },
        editorDidMount: (editor4, monaco4) => {
          var _a;
          editorRef.current = editor4;
          setTimeout(() => {
            loadGrammars(monaco4, editor4);
          }, 100);
          (_a = configs == null ? void 0 : configs.editorDidMount) == null ? void 0 : _a.call(configs, editor4, monaco4);
        }
      }, omit(["editorWillMount", "editorDidMount"], configs || {}))
    )
  ] });
};

// src/components/ErrorBoundaryFallback.tsx
import { useImperativeHandle, forwardRef } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var ErrorBoundaryFallback = forwardRef(
  ({
    error
  }, ref) => {
    const { resetBoundary } = useErrorBoundary();
    useImperativeHandle(ref, () => {
      return {
        resetBoundary
      };
    });
    const [line, ...rest] = error.message.split("\n");
    return /* @__PURE__ */ jsxs7("div", { className: "component-playground-error", children: [
      /* @__PURE__ */ jsx8("div", { className: "component-playground-error__line", children: line }),
      /* @__PURE__ */ jsx8("pre", { className: "component-playground-error__detail", children: rest.join("\n") })
    ] });
  }
);

// src/index.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var RenderWithErrorBoundary = (_a) => {
  var _b = _a, {
    errorFallbackRef
  } = _b, rest = __objRest(_b, [
    "errorFallbackRef"
  ]);
  return /* @__PURE__ */ jsx9(
    ErrorBoundary,
    {
      FallbackComponent: ({ error }) => /* @__PURE__ */ jsx9(ErrorBoundaryFallback, { ref: errorFallbackRef, error }),
      children: /* @__PURE__ */ jsx9(Render, __spreadValues({}, rest))
    }
  );
};
var RenderWithContainer = (_a) => {
  var _b = _a, {
    errorFallbackRef,
    style
  } = _b, rest = __objRest(_b, [
    "errorFallbackRef",
    "style"
  ]);
  return /* @__PURE__ */ jsx9(
    "div",
    {
      className: `component-playground-container component-playground-container--${rest.theme}`,
      style,
      children: /* @__PURE__ */ jsx9(RenderWithErrorBoundary, __spreadValues({}, rest))
    }
  );
};
var Item = ({
  itemFramework,
  framework,
  loading,
  codeMap,
  setCodeMap,
  initCodeMap,
  editorConfigs,
  theme,
  _defaultFramework,
  dependencies,
  dependTypes,
  containerRef,
  enableCopy,
  enableFullscreen
}) => {
  const code = useMemo3(() => codeMap[itemFramework], [codeMap, itemFramework]);
  const setCode = useCallback(
    (v) => {
      setCodeMap(__spreadProps(__spreadValues({}, codeMap), {
        [itemFramework]: v
      }));
    },
    [codeMap, itemFramework]
  );
  const lastCompileSuccessCode = useRef4(initCodeMap[_defaultFramework]);
  const errorFallbackRef = useRef4(null);
  const [dragging, setDragging] = useState3(false);
  const [leftSize, setLeftSize] = useState3(50);
  const dragStartX = useRef4(0);
  const onRendered = useCallback((code2) => {
    lastCompileSuccessCode.current = code2;
  }, []);
  const onDragStart = useCallback((e) => {
    setDragging(true);
    dragStartX.current = e.clientX;
  }, []);
  const onDragEnd = useCallback(
    (e) => {
      const diff = e.clientX - dragStartX.current;
      const percent = diff / containerRef.current.getBoundingClientRect().width * 100;
      setLeftSize(leftSize + percent);
      setTimeout(() => {
        setDragging(false);
      }, 0);
    },
    [leftSize, dragStartX, containerRef]
  );
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: "component-playground-content",
      style: {
        display: framework === itemFramework ? "flex" : "none"
      },
      children: [
        /* @__PURE__ */ jsx9("div", { style: { width: `${leftSize}%` }, children: /* @__PURE__ */ jsx9(
          Editor,
          {
            value: code,
            onChange: (v) => {
              var _a;
              setCode(v);
              (_a = errorFallbackRef.current) == null ? void 0 : _a.resetBoundary();
            },
            size: leftSize,
            configs: editorConfigs,
            theme,
            framework: itemFramework,
            enableCopy,
            dependTypes
          }
        ) }),
        /* @__PURE__ */ jsx9(
          "div",
          {
            className: "component-playground-drag",
            draggable: true,
            onDragEnd,
            onDragStart
          }
        ),
        /* @__PURE__ */ jsx9(
          "div",
          {
            className: `component-playground-render component-playground-render--${dragging ? "dragging" : "normal"}`,
            style: {
              width: `calc(${100 - leftSize}% - 8px)`
            },
            onDragOver: (e) => e.preventDefault(),
            children: loading ? /* @__PURE__ */ jsx9("div", { children: "Loading..." }) : /* @__PURE__ */ jsx9(
              RenderWithErrorBoundary,
              {
                errorFallbackRef,
                code,
                dependencies,
                framework: itemFramework,
                onRendered,
                theme,
                enableFullscreen
              }
            )
          }
        )
      ]
    }
  );
};
var IndividualEditorItem = ({
  itemFramework,
  framework,
  codeMap,
  setCodeMap,
  editorConfigs,
  theme,
  enableCopy
}) => {
  const code = useMemo3(() => codeMap[itemFramework], [codeMap, itemFramework]);
  const setCode = useCallback(
    (v) => {
      setCodeMap(__spreadProps(__spreadValues({}, codeMap), {
        [itemFramework]: v
      }));
    },
    [codeMap, itemFramework]
  );
  return /* @__PURE__ */ jsx9(
    "div",
    {
      className: "component-playground-content",
      style: {
        display: framework === itemFramework ? "flex" : "none"
      },
      children: /* @__PURE__ */ jsx9(
        Editor,
        {
          value: code,
          onChange: setCode,
          configs: editorConfigs,
          theme,
          framework: itemFramework,
          enableCopy
        }
      )
    }
  );
};
var wrapper = (itemRenderer) => ({
  initCodeMap,
  dependencies,
  dependTypes,
  defaultFramework,
  beforeMount,
  theme = "light",
  editorConfigs,
  style,
  enableCopy,
  enableFullscreen,
  codeMap,
  onCodeMapChange,
  onFrameworkChange
}) => {
  const frameworks = useMemo3(
    () => Object.keys(initCodeMap),
    [initCodeMap]
  );
  const _defaultFramework = useMemo3(
    () => defaultFramework != null ? defaultFramework : frameworks[0],
    [defaultFramework, initCodeMap]
  );
  const [framework, setFramework] = useState3(_defaultFramework);
  const [_codeMap, setCodeMap] = useState3(initCodeMap);
  const [_initProps, setInitProps] = useState3();
  const [loading, setLoading] = useState3(true);
  const containerRef = useRef4(null);
  const [renderedFrameworks, setRenderedFrameworks] = useState3([
    _defaultFramework
  ]);
  useEffect4(() => {
    if (beforeMount) {
      beforeMount().then((res) => {
        setLoading(false);
        setInitProps(res);
      });
    } else {
      setLoading(false);
    }
  }, []);
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: `component-playground-container component-playground-container--${theme}`,
      ref: containerRef,
      style: __spreadValues({
        height: "506px",
        width: "100%"
      }, style),
      children: [
        /* @__PURE__ */ jsx9("div", { className: "component-playground-header", children: frameworks.length > 1 ? frameworks.map((key) => /* @__PURE__ */ jsx9(
          "button",
          {
            type: "button",
            className: `component-playground-tabs ${framework === key ? "component-playground-tabs--active" : ""}`,
            onClick: () => {
              setFramework(key);
              onFrameworkChange == null ? void 0 : onFrameworkChange(key);
              if (!renderedFrameworks.includes(key)) {
                setRenderedFrameworks([...renderedFrameworks, key]);
              }
            },
            children: key
          },
          key
        )) : null }),
        renderedFrameworks.map(
          (key) => itemRenderer({
            itemFramework: key,
            dependencies,
            dependTypes,
            theme,
            codeMap: codeMap != null ? codeMap : _codeMap,
            setCodeMap: (v) => {
              setCodeMap(v);
              onCodeMapChange == null ? void 0 : onCodeMapChange(v);
            },
            initCodeMap,
            editorConfigs,
            framework,
            loading,
            containerRef,
            _defaultFramework,
            enableCopy,
            enableFullscreen
          })
        )
      ]
    }
  );
};
var Playground = (props) => wrapper((p) => /* @__PURE__ */ jsx9(Item, __spreadValues({}, p), p.itemFramework))(props);
var IndividualEditor = (props) => wrapper((p) => /* @__PURE__ */ jsx9(IndividualEditorItem, __spreadValues({}, p), p.itemFramework))(
  props
);
export {
  IndividualEditor as Editor,
  Playground,
  RenderWithErrorBoundary as Render,
  RenderWithContainer
};
//! note: we don't distinguish between default and namespace imports for now
