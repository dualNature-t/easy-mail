/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import mjml2html from "mjml-browser";
import useAppData from "@/hooks/useAppData";
import userDropEle from "@/hooks/useDropEle";
import style from "./style.module.scss";

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Main = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { appData } = useAppData();
  const { setRef } = userDropEle();

  if (!appData) {
    return <></>;
  }
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const html = mjml2html(appData).html;
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div
      className={style.main_container}
      ref={setRef}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};
export default Main;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
