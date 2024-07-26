/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ConfigProvider, Flex, theme } from "antd";
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
import { useTranslation } from "react-i18next";

export interface IRefProps {
  getData: () => AppDataType;
}

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const App = forwardRef<IRefProps, AppProps>((props, ref) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { i18n } = useTranslation();
  const mergeProps = { ...defaultConfig, ...props };
  const { value, width, height, colorPrimary, skin, lang } = mergeProps;

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

  useImperativeHandle(ref, () => {
    return {
      getData: () => {
        return appData;
      },
    };
  });

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const classNameStr = `easy-mail-container ${skin === "dark" ? "dark" : ""}`;
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <ConfigProvider
      theme={{
        algorithm:
          skin === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          colorPrimary,
        },
      }}
    >
      <div className={classNameStr} style={{ height, width }}>
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
    </ConfigProvider>
  );
});

export default App;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
