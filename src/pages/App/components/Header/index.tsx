/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import useFocusNode from "@/hooks/useFocusNode";
import style from "./style.module.scss";
import getBreadCrumbByNode from "@/utils/getBreadCrumbByNode";
import { useMemo, useState } from "react";
import { Button, Modal } from "antd";
import useAppData from "@/hooks/useAppData";
import mjml2html from "mjml-browser";
import { appDataType } from "@/context/appContext";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Header = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { focusNode } = useFocusNode();
  const { appData } = useAppData();

  const [modalOpen, setModalOpen] = useState(false);
  const [docHtml, setDocHtml] = useState("");

  const breadcrumb = useMemo(() => {
    return getBreadCrumbByNode(focusNode);
  }, [focusNode]);
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
    <div className={style.header_container}>
      <div className={style.header_breadcrumb}>
        {breadcrumb?.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div className={style.header_operate}>
        <Button
          type="primary"
          onClick={() => {
            setModalOpen(true);
            setDocHtml(mjml2html(appData as appDataType).html);
          }}
        >
          preview
        </Button>
      </div>

      <Modal
        width="90%"
        title="预览"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <iframe
          style={{ width: "100%", border: "none" }}
          srcDoc={docHtml}
        ></iframe>
      </Modal>
    </div>
  );
};
export default Header;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
