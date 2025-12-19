# React Playground

[English](./README.md) | 简体中文

<div align="center">
  <p>一个基于浏览器的 React 代码编辑器和实时预览工具</p>
</div>

## 📖 项目简介

React Playground 是一个在线 React 代码编辑和实时预览平台，让你可以在浏览器中直接编写和运行 React 代码，无需任何本地配置。它集成了 Monaco Editor（VS Code 编辑器核心）、TypeScript 支持、语法高亮和即时预览功能。

## ✨ 核心特性

- 🎨 **Monaco Editor 集成** - 使用 VS Code 同款编辑器，提供完整的代码编辑体验
- ⚡ **实时预览** - 代码修改即时反馈，无需手动刷新
- 📝 **TypeScript 支持** - 完整的 TypeScript 和 TSX 语法支持
- 🎯 **智能提示** - 自动加载 React 类型定义，提供智能代码补全
- 🌈 **语法高亮** - 使用 Shiki 提供美观的代码高亮
- 💅 **代码格式化** - 集成 Prettier，支持一键格式化代码
- 📦 **浏览器端构建** - 使用 Rollup 在浏览器中直接编译和打包代码
- 🎨 **Tailwind CSS** - 使用 Tailwind CSS v4 进行样式开发

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 即可开始使用。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 🛠️ 技术栈

### 核心框架

- **React 19** - 最新版本的 React
- **TypeScript 5.9** - 类型安全的 JavaScript 超集
- **Vite 7** - 下一代前端构建工具

### 编辑器相关

- **Monaco Editor** - VS Code 的核心编辑器
- **Shiki** - 美观的语法高亮器
- **Prettier** - 代码格式化工具

### 构建工具

- **@rollup/browser** - 浏览器端模块打包工具
- **TypeScript Compiler API** - 在浏览器中编译 TypeScript

### 样式

- **Tailwind CSS v4** - 实用优先的 CSS 框架

### 代码质量

- **ESLint** - 代码检查工具
- **Prettier** - 代码格式化

## 📂 项目结构

```
react-playground/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── App.css          # 应用样式
│   ├── main.tsx         # 应用入口
│   └── index.css        # 全局样式
├── examples/
│   └── diag.js          # 示例文件
├── index.html           # HTML 入口
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
├── eslint.config.js     # ESLint 配置
├── package.json         # 项目依赖
└── README.md            # 项目说明
```

## 💡 使用说明

1. **编写代码**：在左侧的 Monaco Editor 中编写你的 React 代码
2. **实时预览**：右侧会自动显示代码运行结果
3. **格式化代码**：使用编辑器的格式化功能（快捷键根据系统不同）
4. **智能提示**：输入时会自动显示 React 和 TypeScript 的类型提示

### 默认示例代码

```tsx
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div></div>;
}

createRoot(document.getElementById("preview-root")!).render(<App />);
```

## 🔧 配置说明

### TypeScript 配置

项目使用了严格的 TypeScript 配置，包括：

- ESNext 模块和目标
- JSX 转换为 React JSX
- 完整的类型检查

### Vite 配置

- 使用 SWC 进行快速编译
- 集成 Tailwind CSS v4
- 优化了 Rollup 浏览器端依赖

## 🤝 开发指南

### 添加新功能

1. 在 [src/App.tsx](src/App.tsx) 中修改主应用逻辑
2. 添加新的依赖时使用 `pnpm add <package>`
3. 遵循项目的 ESLint 和 Prettier 规则

### 代码规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 代码提交前运行 `pnpm lint`

## 📝 可用脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm lint` - 运行 ESLint 检查
- `pnpm preview` - 预览生产构建

## 🎯 核心实现原理

1. **代码编译**：使用 TypeScript Compiler API 在浏览器中将 TSX 转换为 JavaScript
2. **模块打包**：使用 @rollup/browser 在浏览器中打包模块
3. **代码执行**：通过 Function 构造函数在隔离环境中执行编译后的代码
4. **实时预览**：监听代码变化，自动重新编译和渲染

## ⚠️ 注意事项

- 本项目仅用于学习和演示目的
- 在浏览器中编译可能会消耗较多资源
- 不支持所有 npm 包的导入（仅内置 React 相关依赖）

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

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
