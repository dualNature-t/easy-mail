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
        "background-color": "#ffffff",
        width: "600px",
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
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "170px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
                },
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1",
                    color: "#000",
                    align: "center",
                    padding: "10px",
                  },
                  content: "Replace Content",
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "530px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
                },
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "Ubuntu",
                    "font-size": "20px",
                    "line-height": "1",
                    color: "#000",
                    align: "center",
                    padding: "10px",
                  },
                  content: "Replace Content",
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
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "250px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
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
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1",
                    color: "#000",
                    align: "left",
                    padding: "10px 25px",
                  },
                  content: "Replace Content",
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
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1",
                    color: "#000",
                    align: "left",
                    padding: "10px 25px",
                  },
                  content: "Replace Content",
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
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "250px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
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
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "250px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
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
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1",
                    color: "#000",
                    align: "left",
                    padding: "10px 25px",
                  },
                  content: "Replace Content",
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
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "540px",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px",
                  },
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "170px",
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
