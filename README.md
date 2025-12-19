# React Playground

English | [简体中文](./README.CN.md)

<div align="center">
  <p>A browser-based React code editor with real-time preview</p>
</div>

## 📖 Overview

React Playground is an online React code editing and live preview platform that allows you to write and run React code directly in the browser without any local setup. It integrates Monaco Editor (the core of VS Code), TypeScript support, syntax highlighting, and instant preview functionality.

## ✨ Key Features

- 🎨 **Monaco Editor Integration** - Uses the same editor as VS Code for a complete coding experience
- ⚡ **Live Preview** - Instant feedback on code changes without manual refresh
- 📝 **TypeScript Support** - Full TypeScript and TSX syntax support
- 🎯 **IntelliSense** - Automatic loading of React type definitions for smart code completion
- 🌈 **Syntax Highlighting** - Beautiful code highlighting powered by Shiki
- 💅 **Code Formatting** - Integrated Prettier for one-click code formatting
- 📦 **Browser-based Bundling** - Compile and bundle code directly in the browser using Rollup
- 🎨 **Tailwind CSS** - Styled with Tailwind CSS v4

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to start using the playground.

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## 🛠️ Tech Stack

### Core Framework

- **React 19** - Latest version of React
- **TypeScript 5.9** - Type-safe JavaScript superset
- **Vite 7** - Next-generation frontend tooling

### Editor

- **Monaco Editor** - VS Code's core editor
- **Shiki** - Beautiful syntax highlighter
- **Prettier** - Code formatter

### Build Tools

- **@rollup/browser** - Browser-based module bundler
- **TypeScript Compiler API** - Compile TypeScript in the browser

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework

### Code Quality

- **ESLint** - Linting utility
- **Prettier** - Code formatter

## 📂 Project Structure

```
react-playground/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── examples/
│   └── diag.js          # Example files
├── index.html           # HTML entry
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## 💡 Usage

1. **Write Code**: Write your React code in the Monaco Editor on the left
2. **Live Preview**: The right panel automatically displays the execution result
3. **Format Code**: Use the editor's formatting feature (keyboard shortcuts vary by OS)
4. **IntelliSense**: Type hints for React and TypeScript appear automatically

### Default Example Code

```tsx
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div></div>;
}

createRoot(document.getElementById("preview-root")!).render(<App />);
```

## 🔧 Configuration

### TypeScript Configuration

The project uses strict TypeScript configuration including:

- ESNext modules and targets
- JSX transforms to React JSX
- Complete type checking

### Vite Configuration

- Uses SWC for fast compilation
- Integrated Tailwind CSS v4
- Optimized Rollup browser dependencies

## 🤝 Development Guide

### Adding New Features

1. Modify the main application logic in [src/App.tsx](src/App.tsx)
2. Add new dependencies using `pnpm add <package>`
3. Follow the project's ESLint and Prettier rules

### Code Standards

- Use TypeScript strict mode
- Follow ESLint rules
- Run `pnpm lint` before committing code

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint checks
- `pnpm preview` - Preview production build

## 🎯 Core Implementation

1. **Code Compilation**: Uses TypeScript Compiler API to transpile TSX to JavaScript in the browser
2. **Module Bundling**: Uses @rollup/browser to bundle modules in the browser
3. **Code Execution**: Executes compiled code in an isolated environment using Function constructor
4. **Live Preview**: Monitors code changes and automatically recompiles and re-renders

## ⚠️ Notes

- This project is for learning and demonstration purposes only
- Browser compilation may consume significant resources
- Does not support importing all npm packages (only built-in React-related dependencies)

## 📄 License

[MIT License](LICENSE)

## 🙏 Acknowledgements

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Shiki](https://shiki.style/)
- [Rollup](https://rollupjs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  Made with ❤️ by developers, for developers
</div>
