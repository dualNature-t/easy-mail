/**
 * @file
 * @date 2024-04-22
 * @author haodong.wang
 * @lastModify  2024-04-22
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import style from "./style.module.scss";
import AppContext, {
  appDataType,
  dataTransferType,
  tabType,
} from "@/context/appContext";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface AppProps {
  defaultValue?: appDataType;
}

const defaultTreeData: appDataType = {
  tagName: "mjml",
  attributes: {
    "css-class": "mjml",
  },
  children: [
    {
      tagName: "mj-body",
      attributes: {
        "css-class": "mj-body",
        "background-color": "#f5f5f5",
        width: "600px",
        "font-family": "arial",
      },
      children: [
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "0px",
            border: "",
            "background-color": "",
            "background-url": "",
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
                    "line-height": "1",
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
                    "line-height": "1",
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
            border: "",
            "background-color": "#ffffff",
            "background-url": "",
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
                    href: "https://www.baidu.com",
                    target: "_blank",
                    width: "",
                    "background-color": "#9aaea6",
                    "border-radius": "0px",
                    border: "",
                    "font-family": "arial",
                    "font-size": "16px",
                    "line-height": "1",
                    color: "#FFFFFF",
                    align: "center",
                    padding: "10px 10px 40px 10px",
                  },
                  content: "Get&nbsp; the offer",
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
            border: "",
            "background-color": "",
            "background-url": "",
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

// const defaultTreeData: appDataType = {
//   tagName: "mjml",
//   attributes: {
//     "css-class": "mjml",
//   },
//   children: [
//     {
//       tagName: "mj-body",
//       attributes: {
//         "css-class": "mj-body",
//         "background-color": "#ffffff",
//         width: "600px",
//         "font-family": "arial",
//       },
//       children: [
//         // {
//         //   tagName: "mj-section",
//         //   attributes: {
//         //     "css-class": "mj-section",
//         //     "border-radius": "0px 10px 20px 30px",
//         //     // border: "8px solid #f40",
//         //     "background-color": "",
//         //     // "background-url": "",
//         //     "background-repeat": "repeat",
//         //     "background-size": "auto",
//         //     padding: "20px",
//         //     "full-width": "full-width",
//         //   },
//         //   children: [
//         //     {
//         //       tagName: "mj-column",
//         //       attributes: {
//         //         "css-class": "mj-column",
//         //       },
//         //       children: [
//         //         {
//         //           tagName: "mj-text",
//         //           attributes: {
//         //             "css-class": "mj-text",
//         //             "font-family": "arial",
//         //             "font-size": "13px",
//         //             "line-height": "1",
//         //             color: "#000",
//         //             align: "center",
//         //             padding: "10px 25px",
//         //           },
//         //           content: "<strong>Replace Content</strong>123123",
//         //         },
//         //         {
//         //           tagName: "mj-image",
//         //           attributes: {
//         //             "css-class": "mj-image",
//         //             src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
//         //             href: "",
//         //             target: "_blank",
//         //             alt: "",
//         //             width: "",
//         //             "border-radius": "0px",
//         //             align: "center",
//         //             padding: "10px 25px",
//         //           },
//         //         },
//         //         {
//         //           tagName: "mj-button",
//         //           attributes: {
//         //             "css-class": "mj-button",
//         //             href: "",
//         //             target: "_blank",
//         //             width: "100%",
//         //             "background-color": "#414141",
//         //             "border-radius": "0px",
//         //             border: "",
//         //             "font-family": "arial",
//         //             "font-size": "13px",
//         //             "line-height": "1",
//         //             color: "#FFFFFF",
//         //             align: "center",
//         //             padding: "10px 25px",
//         //           },
//         //           content: "Replace Content",
//         //         },
//         //         {
//         //           tagName: "mj-divider",
//         //           attributes: {
//         //             "css-class": "mj-divider",
//         //             width: "",
//         //             "border-width": "1px",
//         //             "border-style": "solid",
//         //             "border-color": "#000000",
//         //             padding: "10px 25px",
//         //           },
//         //         },
//         //         {
//         //           tagName: "mj-spacer",
//         //           attributes: {
//         //             "css-class": "mj-spacer",
//         //             height: "20px",
//         //           },
//         //         },
//         //       ],
//         //     },
//         //   ],
//         // },
//         // {
//         //   tagName: "mj-section",
//         //   attributes: {
//         //     "css-class": "mj-section",
//         //     padding: "20px",
//         //   },
//         //   children: [
//         //     {
//         //       tagName: "mj-column",
//         //       attributes: {
//         //         "css-class": "mj-column",
//         //       },
//         //       children: [],
//         //     },
//         //     {
//         //       tagName: "mj-column",
//         //       attributes: {
//         //         "css-class": "mj-column",
//         //       },
//         //       children: [],
//         //     },
//         //   ],
//         // },
//       ],
//     },
//   ],
// };
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const App: React.FC<AppProps> = ({
  defaultValue = defaultTreeData,
}): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [appData, setAppData] = useState<appDataType>(defaultValue);
  const [tab, setTab] = useState<tabType>("add");
  const [hoverNode, setHoverNode] = useState<HTMLElement | null>(null);
  const [focusNode, setFocusNode] = useState<HTMLElement | null>(null);
  const [dataTransfer, setDataTransfer] = useState<dataTransferType | null>(
    null
  );

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        tab,
        setTab,
        hoverNode,
        setHoverNode,
        focusNode,
        setFocusNode,
        dataTransfer,
        setDataTransfer,
      }}
    >
      <div className={style.app_header}>
        <Header />
      </div>
      <div className={style.app_content}>
        <aside className={style.app_aside}>
          <Aside />
        </aside>
        <main className={style.app_main}>
          <Main />
        </main>
      </div>
    </AppContext.Provider>
  );
};
export default App;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
