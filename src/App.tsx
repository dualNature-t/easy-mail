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
import {
  DataTransferType,
  EasymailProps,
  EasymailRefProps,
  EasymailValueType,
  TabType,
} from "./constant";
import {
  AppContext,
  ConfigContext,
  defaultConfig,
  NodeContext,
} from "./context";
import Header from "./pages/Header";
import Aside from "./pages/Aside";
import Main from "./pages/Main";
import {
  formatClassToJson,
  isEmpty,
  jsonToMjml,
  transformJsonOrder,
} from "./utils";
import { useTranslation } from "react-i18next";
import mjml2html from "mjml-browser";
import "./App.css";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const App = forwardRef<EasymailRefProps, EasymailProps>((props, ref) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { i18n } = useTranslation();
  const mergeProps = {
    ...defaultConfig,
    ...props,
    value: isEmpty(props.value) ? defaultConfig.value : props.value,
  };
  const { value, width, height, colorPrimary, skin, lang } = mergeProps;

  const [appData, setAppData] = useState<EasymailValueType>(
    formatClassToJson(
      transformJsonOrder(
        (typeof value === "string"
          ? mjml2html(value).json
          : value) as EasymailValueType
      )
    )
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
        return { json: appData, mjml: jsonToMjml(appData) };
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
