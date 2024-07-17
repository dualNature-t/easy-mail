/**
 * @file
 * @date 2024-06-27
 * @author haodong.wang
 * @lastModify  2024-06-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Typography } from "antd";
import DragBlocks from "../DragBlocks";
import { BasicBlockType, ColumnType, DataTransferMapType } from "@/constant";
import {
  ButtonOutlined,
  Column1Outlined,
  Column2Outlined,
  Column3Outlined,
  Column4Outlined,
  ColumnLeftOutlined,
  ColumnRightOutlined,
  DividerOutlined,
  ImageOutlined,
  SocialOutlined,
  SpacerOutlined,
  TextOutlined,
} from "@/components/Icon";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export const columnDataTransferMap: DataTransferMapType<ColumnType>[] = [
  {
    type: "column",
    value: "mj-column-1",
    label: "1 Column",
    icon: <Column1Outlined />,
  },
  {
    type: "column",
    value: "mj-column-2",
    label: "2 Column",
    icon: <Column2Outlined />,
  },
  {
    type: "column",
    value: "mj-column-3",
    label: "3 Column",
    icon: <Column3Outlined />,
  },
  {
    type: "column",
    value: "mj-column-4",
    label: "4 Column",
    icon: <Column4Outlined />,
  },
  {
    type: "column",
    value: "mj-column-left",
    label: "Left Split",
    icon: <ColumnLeftOutlined />,
  },
  {
    type: "column",
    value: "mj-column-right",
    label: "Right Split",
    icon: <ColumnRightOutlined />,
  },
];

export const basicDataTransferMap: DataTransferMapType<BasicBlockType>[] = [
  { type: "basic", value: "mj-text", label: "Text", icon: <TextOutlined /> },
  { type: "basic", value: "mj-image", label: "Image", icon: <ImageOutlined /> },
  {
    type: "basic",
    value: "mj-button",
    label: "Button",
    icon: <ButtonOutlined />,
  },
  {
    type: "basic",
    value: "mj-divider",
    label: "Divider",
    icon: <DividerOutlined />,
  },
  {
    type: "basic",
    value: "mj-spacer",
    label: "Spacer",
    icon: <SpacerOutlined />,
  },
  {
    type: "basic",
    value: "mj-social",
    label: "Social",
    icon: <SocialOutlined />,
  },
];
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
