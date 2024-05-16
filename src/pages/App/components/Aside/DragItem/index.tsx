/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import useDataTransfer from "@/hooks/useDataTransfer";
import React from "react";
import { additionDataType } from "../Addition";
import { basicTagNameType, columnTagNameType } from "@/context/appContext";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface DragItemProps {
  value: additionDataType<basicTagNameType | columnTagNameType>;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DragItem: React.FC<DragItemProps> = ({ value }): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { setDataTransfer } = useDataTransfer();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDataTransfer({
      type: "add",
      data: { type: value.type, value: value.value },
    });
  };

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div draggable onDragStart={onDragStart}>
      {value.label}
    </div>
  );
};
export default DragItem;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
