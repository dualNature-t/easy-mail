/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { TabType } from "@/constant";
import { useTab } from "@/hooks";
import { Flex, Tabs, TabsProps, theme } from "antd";
import Blocks from "./components/Blocks";
import Attributes from "./components/Attributes";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Aside = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();
  const { t } = useTranslation();

  const { tab, setTab } = useTab();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const tabItems: TabsProps["items"] = [
    {
      key: "add",
      label: (
        <Flex vertical align="center" gap={4} style={{ padding: "10px 0" }}>
          <PlusOutlined />
          {t("basic.add")}
        </Flex>
      ),
    },
    {
      key: "edit",
      label: (
        <Flex vertical align="center" gap={4} style={{ padding: "10px 0" }}>
          <EditOutlined />
          {t("basic.edit")}
        </Flex>
      ),
    },
  ];
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Flex
      style={{
        width: 406,
        borderRight: `1px solid ${token.colorBorder}`,
        backgroundColor: token.colorBgContainer,
      }}
    >
      {/* TAB */}
      <div
        style={{
          width: 77,
          height: "100%",
        }}
      >
        <Tabs
          style={{ height: "100%" }}
          tabPosition={"left"}
          items={tabItems}
          activeKey={tab}
          onChange={(key) => {
            setTab(key as TabType);
          }}
        />
      </div>

      {/* BLOCK */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {tab === "add" ? <Blocks /> : <Attributes />}
      </div>
    </Flex>
  );
};
export default Aside;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
