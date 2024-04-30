/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import style from "./style.module.scss";
import DragItem from "../DragItem";
import { basicTagNameType, columnTagNameType } from "@/context/appContext";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
type dataBelongType = "column" | "base";

type additionDataType<T> = {
  type: dataBelongType;
  value: T;
  label: string;
};

const columnData: additionDataType<
  columnTagNameType | "mj-column-2" | "mj-column-3" | "mj-column-4"
>[] = [
  { type: "column", value: "mj-column", label: "一列" },
  { type: "column", value: "mj-column-2", label: "两列" },
  { type: "column", value: "mj-column-3", label: "三列" },
  { type: "column", value: "mj-column-4", label: "四列" },
];

const baseData: additionDataType<basicTagNameType>[] = [
  { type: "base", value: "mj-text", label: "文本" },
  { type: "base", value: "mj-image", label: "图片" },
  { type: "base", value: "mj-button", label: "按钮" },
  { type: "base", value: "mj-divider", label: "分割线" },
  { type: "base", value: "mj-spacer", label: "间距" },
  { type: "base", value: "mj-social", label: "社交" },
];

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Addition = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
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
    <div className={style.addition_container}>
      <h5>添加组件</h5>

      <div className={style.addition_section}>
        <h6>布局组件</h6>

        <div className={style.addition_section_list}>
          {columnData.map((item, index) => {
            return <DragItem key={index} value={item} />;
          })}
        </div>
      </div>

      <div className={style.addition_content}>
        <h6>基础组件</h6>

        <div className={style.addition_content_list}>
          {baseData.map((item, index) => {
            return <DragItem key={index} value={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Addition;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
