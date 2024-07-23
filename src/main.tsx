import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n.ts";
import Test from "./Test.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App
      lang="zh_CN"
      width="100vw"
      height="100vh"
      skin="dark"
      value={appData}
    /> */}
    <Test></Test>
  </React.StrictMode>
);
