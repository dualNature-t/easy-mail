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
      },
      children: [
        // {
        //   tagName: "mj-section",
        //   attributes: { "css-class": "mj-section" },
        //   children: [
        //     {
        //       tagName: "mj-column",
        //       attributes: { "css-class": "mj-column" },
        //       children: [
        //         {
        //           tagName: "mj-text",
        //           attributes: {
        //             "css-class": "mj-text",
        //           },
        //           content: "column -left01",
        //         },
        //         {
        //           tagName: "mj-image",
        //           attributes: {
        //             "css-class": "mj-image",
        //             src: "https://cdn.getvero.com/dd-editor/templates/getting-started/hero.png",
        //           },
        //         },
        //         {
        //           tagName: "mj-button",
        //           attributes: {
        //             "css-class": "mj-button",
        //           },
        //           content: "column -left01",
        //         },
        //         {
        //           tagName: "mj-divider",
        //           attributes: {
        //             "css-class": "mj-divider",
        //           },
        //         },
        //         // {
        //         //   tagName: "mj-spacer",
        //         //   attributes: {
        //         //     "css-class": "mj-spacer",
        //         //   },
        //         // },
        //         // {
        //         //   tagName: "mj-social",
        //         //   attributes: {
        //         //     "css-class": "mj-social",
        //         //   },
        //         // },
        //       ],
        //     },
        //   ],
        // },
        {
          tagName: "mj-section",
          attributes: { "css-class": "mj-section" },
          children: [
            {
              tagName: "mj-column",
              attributes: { "css-class": "mj-column" },
              // children: [
              //   {
              //     tagName: "mj-text",
              //     attributes: {
              //       "css-class": "mj-text",
              //     },
              //     content: "column -left01",
              //   },
              // ],
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
