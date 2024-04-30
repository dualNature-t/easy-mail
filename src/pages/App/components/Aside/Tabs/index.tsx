/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import classNames from "classnames";
import useTab from "@/hooks/useTab";
import { tabType } from "@/context/appContext";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Tabs = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { tab, setTab } = useTab();

  const tabItems: Array<{ value: tabType; label: string }> = [
    { value: "add", label: "添加" },
    { value: "edit", label: "编辑" },
  ];
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
    <>
      {tabItems.map((item) => {
        return (
          <div
            className={classNames(style.tabs_item, {
              [style.tabs_item__active]: tab == item.value,
            })}
            key={item.value}
            onClick={() => {
              setTab(item.value);
            }}
          >
            {item.label}
          </div>
        );
      })}
    </>
  );
};
export default Tabs;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
