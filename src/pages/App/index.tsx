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
        "background-color": "#eee",
        width: "600px",
      },
      children: [
        {
          tagName: "mj-section",
          attributes: {
            "css-class": "mj-section",
            "border-radius": "4px",
            border: "1px solid #ddd",
            "background-color": "#f40",
            "background-url":
              "https://ss2.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2107631312,3178897554&fm=253&gp=0.jpg",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            padding: "20px 40px",
          },
          children: [
            {
              tagName: "mj-column",
              attributes: { "css-class": "mj-column" },
              children: [
                {
                  tagName: "mj-text",
                  attributes: {
                    "css-class": "mj-text",
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1px",
                    color: "#000",
                    align: "left",
                    padding: "10px 25px",
                  },
                  content: "Hello World",
                },
                {
                  tagName: "mj-image",
                  attributes: {
                    "css-class": "mj-image",
                    src: "https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0",
                    href: "",
                    target: "_blank",
                    alt: "",
                    width: "",
                    "border-radius": "0px",
                    align: "center",
                    padding: "10px 25px",
                  },
                },
                {
                  tagName: "mj-button",
                  attributes: {
                    "css-class": "mj-button",
                    href: "",
                    target: "_blank",
                    width: "100%",
                    "background-color": "#414141",
                    "border-radius": "0px",
                    border: "",
                    "font-family": "Ubuntu",
                    "font-size": "13px",
                    "line-height": "1",
                    color: "#FFFFFF",
                    align: "center",
                    padding: "10px 25px",
                  },
                  content: "Button",
                },
                {
                  tagName: "mj-divider",
                  attributes: {
                    "css-class": "mj-divider",
                    width: "100%",
                    "border-width": "1px",
                    "border-style": "solid",
                    "border-color": "#000000",
                    padding: "10px 25px",
                  },
                },
                {
                  tagName: "mj-spacer",
                  attributes: {
                    "css-class": "mj-spacer",
                    height: "20px",
                  },
                },
                {
                  tagName: "mj-social",
                  attributes: {
                    "css-class": "mj-social",
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
