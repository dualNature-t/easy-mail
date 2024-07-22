/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { EDITOR_BODY, getStyle } from "@/constant";
import { useAppData, useDropContainer } from "@/hooks";
import { getDocByData } from "@/utils";
import { theme } from "antd";
import { useCallback, useMemo } from "react";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
const setMjmlColumnStyle = (
  head: HTMLElement,
  styles: NodeListOf<HTMLStyleElement>
) => {
  const columnPer1 = `
    @media only screen and (min-width:480px) {
      .mj-column-per-100 { width:100% !important; max-width: 100%; }
      .mj-column-per-50 { width:50% !important; max-width: 50%; }
      .mj-column-per-60 { width:60% !important; max-width: 60%; }
      .mj-column-per-40 { width:40% !important; max-width: 40%; }
      .mj-column-per-33-333333333333336 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
      .mj-column-per-25 { width:25% !important; max-width: 25%; }
    }
  `;
  const columnPer2 = `
    .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    .moz-text-html .mj-column-per-50 { width:50% !important; max-width: 50%; }
    .moz-text-html .mj-column-per-60 { width:60% !important; max-width: 60%; }
    .moz-text-html .mj-column-per-40 { width:40% !important; max-width: 40%; }
    .moz-text-html .mj-column-per-33-333333333333336 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
    .moz-text-html .mj-column-per-25 { width:25% !important; max-width: 25%; }
  `;
  if (styles.length > 1) {
    styles[1].innerHTML = columnPer1;
    styles[2].innerHTML = columnPer2;
  } else {
    const style01 = document.createElement("style");
    const style02 = document.createElement("style");
    style01.innerHTML = columnPer1;
    style02.innerHTML = columnPer2;
    head?.appendChild(style01);
    head?.appendChild(style02);
  }
};

const setTinymceSrc = (head: HTMLElement) => {
  const script = document.createElement("script");
  script.setAttribute("src", "/tinymce/js/tinymce/tinymce.min.js");
  head.appendChild(script);
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
export const IFRAME_ID = "easy-mail-iframe";
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Main = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();
  const { appData } = useAppData();
  const { setRef } = useDropContainer();
  if (!appData) {
    return <></>;
  }
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const html = useMemo(() => {
    const result = getDocByData(appData);
    return result?.outerHTML;
  }, []);

  const setMailStyle = useCallback(
    (head: HTMLElement) => {
      const style = document.createElement("style");

      const styleStr = getStyle(token);
      style.innerHTML = styleStr;
      head?.appendChild(style);
    },
    [token]
  );

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onLoad = (e: React.BaseSyntheticEvent) => {
    const target: EventTarget | null = e.target;
    if (target && target instanceof HTMLIFrameElement && target.contentWindow) {
      const iframeDocument = target.contentWindow.document.documentElement;
      setRef(iframeDocument);

      const head = iframeDocument.querySelector("head") as HTMLElement;
      const body = iframeDocument.querySelector("body");
      const styles = iframeDocument.querySelectorAll("style");

      body?.classList.add(EDITOR_BODY);
      setMjmlColumnStyle(head, styles);
      setTinymceSrc(head);
      setMailStyle(head);
    }
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ width: "calc(100% - 406px)" }}>
      <iframe
        srcDoc={html}
        onLoad={onLoad}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          display: "block",
        }}
        id={IFRAME_ID}
      ></iframe>
    </div>
  );
};
export default Main;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
