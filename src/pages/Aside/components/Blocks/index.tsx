/**
 * @file
 * @date
 * @author
 * @lastModify
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
import { useTranslation } from "react-i18next";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export const columnDataTransferMap: DataTransferMapType<ColumnType>[] = [
  {
    type: "column",
    value: "mj-column-1",
    label: "1_column",
    icon: <Column1Outlined />,
  },
  {
    type: "column",
    value: "mj-column-2",
    label: "2_columns",
    icon: <Column2Outlined />,
  },
  {
    type: "column",
    value: "mj-column-3",
    label: "3_columns",
    icon: <Column3Outlined />,
  },
  {
    type: "column",
    value: "mj-column-4",
    label: "4_columns",
    icon: <Column4Outlined />,
  },
  {
    type: "column",
    value: "mj-column-left",
    label: "left_columns",
    icon: <ColumnLeftOutlined />,
  },
  {
    type: "column",
    value: "mj-column-right",
    label: "right_columns",
    icon: <ColumnRightOutlined />,
  },
];

export const basicDataTransferMap: DataTransferMapType<BasicBlockType>[] = [
  {
    type: "basic",
    value: "mj-text",
    label: "text",
    icon: <TextOutlined />,
  },
  {
    type: "basic",
    value: "mj-image",
    label: "image",
    icon: <ImageOutlined />,
  },
  {
    type: "basic",
    value: "mj-button",
    label: "button",
    icon: <ButtonOutlined />,
  },
  {
    type: "basic",
    value: "mj-divider",
    label: "divider",
    icon: <DividerOutlined />,
  },
  {
    type: "basic",
    value: "mj-spacer",
    label: "spacer",
    icon: <SpacerOutlined />,
  },
  {
    type: "basic",
    value: "mj-social",
    label: "social",
    icon: <SocialOutlined />,
  },
];
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Blocks = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();
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
      <Typography.Title level={5}>{t("basic.add_component")}</Typography.Title>

      <>
        <Typography.Text strong>{t("basic.layout_component")}</Typography.Text>
        <DragBlocks value={columnDataTransferMap} />
      </>

      <>
        <Typography.Text strong>{t("basic.basic_component")}</Typography.Text>
        <DragBlocks value={basicDataTransferMap} />
      </>
    </div>
  );
};
export default Blocks;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
