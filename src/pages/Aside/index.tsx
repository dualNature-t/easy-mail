/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Flex, Tabs, TabsProps, theme } from "antd";
import { TabType } from "../../constant";
import useTab from "../../hooks/useTab";
import Blocks from "./components/Blocks";
import Attributes from "./components/Attributes";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Aside = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();

  const { tab, setTab } = useTab();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const tabItems: TabsProps["items"] = [
    {
      key: "add",
      label: <div style={{ padding: "19px 0", marginBottom: 0 }}>添加</div>,
    },
    {
      key: "edit",
      label: <div style={{ padding: "19px 0", marginBottom: 0 }}>编辑</div>,
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
    <Flex style={{ width: 406, borderRight: `1px solid ${token.colorBorder}` }}>
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
