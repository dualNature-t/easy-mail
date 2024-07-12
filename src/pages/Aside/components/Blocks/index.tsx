/**
 * @file
 * @date 2024-06-27
 * @author haodong.wang
 * @lastModify  2024-06-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Typography } from "antd";
import { basicDataTransferMap, columnDataTransferMap } from "@/constant";
import DragBlocks from "../DragBlocks";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Blocks = (): JSX.Element => {
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
    <div style={{ margin: 10 }}>
      <Typography.Title level={5}>添加组件</Typography.Title>

      <>
        <Typography.Text strong>布局组件</Typography.Text>
        <DragBlocks value={columnDataTransferMap} />
      </>

      <>
        <Typography.Text strong>基础组件</Typography.Text>
        <DragBlocks value={basicDataTransferMap} />
      </>
    </div>
  );
};
export default Blocks;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
