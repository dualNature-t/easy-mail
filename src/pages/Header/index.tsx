/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { BasicEnum } from "@/constant";
import { useCurrentNode, useFocusNode } from "@/hooks";
import { getNodeByTarget, isSection } from "@/utils";
import { DesktopOutlined, MobileOutlined } from "@ant-design/icons";
import { Breadcrumb, Flex, Segmented, theme } from "antd";
import { useState } from "react";
import { IFRAME_ID } from "../Main";
import { useTranslation } from "react-i18next";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Header = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const { focusNode, setFocusNode } = useFocusNode();
  const { currentFocusNode, setFocusNodeCls } = useCurrentNode();

  const [value, setValue] = useState("desktop");
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const getBreadcrumbItems = () => {
    const body = {
      title: (
        <a
          onClick={(e) => {
            e.preventDefault();
            setFocusNodeCls("remove");
            setFocusNode(null);
          }}
        >
          {t("block.body")}
        </a>
      ),
    };
    const section = {
      title: (
        <a
          onClick={(e) => {
            e.preventDefault();
            const result = getNodeByTarget(
              focusNode as Element,
              BasicEnum.MJ_SECTION
            );
            setFocusNodeCls("remove");
            currentFocusNode.current = result;
            setFocusNodeCls("add");
            setFocusNode(result as HTMLElement);
          }}
        >
          {t("block.section")}
        </a>
      ),
    };
    if (focusNode) {
      if (isSection(focusNode)) {
        return [
          body,
          {
            title: t("block.section"),
          },
        ];
      } else {
        const block = {
          title: t(`block.${focusNode.classList[0].split("-")[1]}`),
        };
        return [body, section, block];
      }
    } else {
      return [
        {
          title: t("block.body"),
        },
      ];
    }
  };

  const onChange = (value: string) => {
    const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement;
    iframe.style.width = value === "mobile" ? "400px" : "100%";
    setValue(value);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Flex
      style={{
        height: 40,
        padding: "0 20px",
        borderBottom: `1px solid ${token.colorBorder}`,
        backgroundColor: token.colorBgContainer,
      }}
      align="center"
      justify="space-between"
    >
      <Breadcrumb separator=">" items={getBreadcrumbItems()} />

      <Flex gap={10}>
        <Segmented
          value={value}
          onChange={onChange}
          options={[
            { label: "", value: "desktop", icon: <DesktopOutlined /> },
            { label: "", value: "mobile", icon: <MobileOutlined /> },
          ]}
        />
      </Flex>
    </Flex>
  );
};
export default Header;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
