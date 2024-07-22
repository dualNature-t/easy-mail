import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { AppDataType } from "./constant";

const appData: AppDataType = {
  tagName: "mjml",
  attributes: {
    "css-class": "mjml",
    color: "#f40",
  },
  children: [
    {
      tagName: "mj-body",
      attributes: {
        "css-class": "mj-body",
        "background-color": "#f5f5f5",
        width: "600px",
      },
      children: [
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            padding: "10px 10px 10px 10px",
          },
          children: [
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "arial",
                    "font-size": "13px",
                    "line-height": 1,
                    color: "#cccccc",
                    align: "left",
                    padding: "10px",
                  },
                  content: "Put your preheader text here",
                },
              ],
            },
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "arial",
                    "font-size": "13px",
                    "line-height": 1,
                    color: "#cccccc",
                    align: "right",
                    padding: "10px",
                  },
                  content:
                    '<span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">Vier in brower</span>',
                },
              ],
            },
          ],
        },
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            padding: "10px 10px 10px 10px",
          },
          children: [
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [],
            },
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [],
            },
          ],
        },
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "0px",
            "background-color": "#ffffff",
            "background-repeat": "repeat",
            "background-size": "auto",
            padding: "0px 0px 0px 0px",
          },
          children: [
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [
                {
                  tagName: "mj-social",
                  attributes: {
                    "css-class": "mj-social",
                    "icon-size": "30px",
                    "icon-padding": "15px",
                    "border-radius": "3px",
                    "inner-padding": "4px",
                    "font-family": "arial",
                    "font-size": "13px",
                    color: "#000000",
                    mode: "horizontal",
                    // mode: "vertical",
                    align: "left",
                    padding: "10px 25px",
                  },
                  children: [
                    {
                      tagName: "mj-social-element",
                      attributes: {
                        name: "facebook",
                        "css-class": "mj-social-element",
                        href: "https://www.facebook.com",
                      },
                      content: "",
                    },
                    {
                      tagName: "mj-social-element",
                      attributes: {
                        name: "twitter",
                        "css-class": "mj-social-element",
                        href: "https://www.twitter.com",
                      },
                      content: "",
                    },
                    {
                      tagName: "mj-social-element",
                      attributes: {
                        name: "google",
                        "css-class": "mj-social-element",
                        href: "https://www.google.com",
                      },
                      content: "",
                    },
                  ],
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://tlr.stripocdn.email/content/guids/bannerImgGuid/images/28931529910609317.png",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "",
                    "border-radius": "0px",
                    align: "center",
                    padding: "0px 0px 0px 0px",
                  },
                },
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "arial",
                    "font-size": "16px",
                    "line-height": 1.6,
                    color: "#999999",
                    align: "center",
                    padding: "20px 20px 20px 20px",
                  },
                  content:
                    "Celebrate the 4th of July with us! For the next week, you can get 50% off Platinum status, or 25% off Gold status.",
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://tlr.stripocdn.email/content/guids/CABINET_59b5127c770ba89d8116e9677e27a017/images/88151529679163500.png",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "",
                    "border-radius": "0px",
                    align: "center",
                    padding: "0px 50px 0px 50px",
                  },
                },
                {
                  tagName: "mj-button",
                  attributes: {
                    "css-class": "mj-button",
                    href: "http://www.baidu.com",
                    target: "_blank",
                    width: "",
                    "background-color": "#9aaea6",
                    "border-radius": "0px",
                    border: "",
                    "font-family": "arial",
                    "font-size": "16px",
                    "line-height": 1,
                    color: "#FFFFFF",
                    align: "center",
                    padding: "10px 10px 40px 10px",
                  },
                  content: "Get the offer",
                },
              ],
            },
          ],
        },
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            padding: "20px",
          },
          children: [
            {
              tagName: "mj-column",
              attributes: {
                "css-class": "mj-column",
              },
              children: [
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://tlr.stripocdn.email/content/guids/CABINET_1fee0ac138fe1171748bd02f460659d5/images/54451504249243863.png",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "50px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
                },
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "arial",
                    "font-size": "13px",
                    "line-height": 1.3,
                    color: "#000",
                    align: "center",
                    padding: "10px",
                  },
                  content:
                    'Copyright © 2018 Run, All rights reserved.<div><span style="font-size: 12px;" data-mce-style="font-size: 12px;">You are receiving this email because you have visited our site or asked us about regular newsletter.</span></div><div><a class="unsubscribe" href="https://viewstripo.email/template/4ac762c7-92a9-4fba-9364-4aa93c62b366" target="_blank" rel="noopener" data-mce-href="https://viewstripo.email/template/4ac762c7-92a9-4fba-9364-4aa93c62b366">Unsubscribe</a></div>',
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://tlr.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "120px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(19, 194, 194)",
        },
        components: {
          Button: {
            colorPrimary: "rgb(19, 194, 194)",
          },
        },
      }}
    >
      <App width="100vw" height="100vh" value={appData} />
    </ConfigProvider>
  </React.StrictMode>
);
