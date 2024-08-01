import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "EasyMail",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "react",
        "antd",
        "react-dom",
        "react-i18next",
        "mjml-browser",
        "i18next",
        "i18next-browser-languagedetector",
        "@ant-design/icons",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
          antd: "antd",
          "react-dom": "ReactDOM",
          "react-i18next": "ReactI18next",
          mjmlBrowser: "mjmlBrowser",
          i18next: "i18next",
          "i18next-browser-languagedetector": "i18nextBrowserLanguageDetector",
          "@ant-design/icons": "@ant-design/icons",
        },
      },
    },
  },
});
