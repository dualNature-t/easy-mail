/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useRef, useState } from "react";
import { Flex } from "antd";
import { AppDataType, DataTransferType, TabType } from "./constant";
import {
  AppContext,
  AppProps,
  ConfigContext,
  defaultConfig,
  NodeContext,
} from "./context";
import Header from "./pages/Header";
import Aside from "./pages/Aside";
import Main from "./pages/Main";
import { deepClone } from "./utils";
import "./App.css";

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const App: React.FC<AppProps> = (props): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const mergeProps = { ...defaultConfig, ...props };
  const { value, width, height } = mergeProps;

  const [appData, setAppData] = useState<AppDataType>(
    deepClone(value as AppDataType)
  );
  const [tab, setTab] = useState<TabType>("add");
  const [hoverNode, setHoverNode] = useState<HTMLElement | null>(null);
  const [focusNode, setFocusNode] = useState<HTMLElement | null>(null);
  const [dataTransfer, setDataTransfer] = useState<DataTransferType | null>(
    null
  );

  const currentHoverNode = useRef<Element | null>(null);
  const currentFocusNode = useRef<Element | null>(null);
  const currentEmptyNode = useRef<Element | null>(null);
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
    <div style={{ height, width }}>
      <ConfigContext.Provider value={{ ...mergeProps }}>
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
          <NodeContext.Provider
            value={{ currentHoverNode, currentFocusNode, currentEmptyNode }}
          >
            <Header />
            <Flex style={{ height: "calc(100% - 40px)" }}>
              <Aside />
              <Main />
            </Flex>
          </NodeContext.Provider>
        </AppContext.Provider>
      </ConfigContext.Provider>
    </div>
  );
};
export default App;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
