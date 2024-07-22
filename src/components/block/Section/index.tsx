/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Border, BorderRadius, EDivider, Src } from "@/components";
import {
  Column1Outlined,
  Column2Outlined,
  Column3Outlined,
  Column4Outlined,
  ColumnLeftOutlined,
  ColumnRightOutlined,
} from "@/components/Icon";
import Padding from "@/components/Padding";
import { AppDataType, ColumnUnitType } from "@/constant";
import { useAppData, useFocusNode } from "@/hooks";
import { getIdxByNode, onLayoutChange } from "@/utils";
import { Button, ColorPicker, Flex, Form, Select, Typography } from "antd";
import { Color } from "antd/es/color-picker";
import React from "react";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SectionBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const renderData: Array<{ key: ColumnUnitType; icon: React.ReactNode }> = [
    { key: "1", icon: <Column1Outlined /> },
    { key: "2", icon: <Column2Outlined /> },
    { key: "3", icon: <Column3Outlined /> },
    { key: "4", icon: <Column4Outlined /> },
    { key: "left", icon: <ColumnLeftOutlined /> },
    { key: "right", icon: <ColumnRightOutlined /> },
  ];
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleLayoutChange = (column: ColumnUnitType) => {
    const idx = getIdxByNode({ node: focusNode as HTMLElement });
    setAppData(
      onLayoutChange({ appData: appData as AppDataType, idx, column })
    );
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <>
        <EDivider>LAYOUT</EDivider>

        <Flex justify="space-around">
          {renderData.map((item) => {
            return (
              <Button
                type="text"
                onClick={() => handleLayoutChange(item.key)}
                key={item.key}
                style={{ padding: "0px 6px" }}
              >
                {item.icon}
              </Button>
            );
          })}
        </Flex>
      </>

      <>
        <EDivider>SECTION STYLES</EDivider>

        <BorderRadius />
        <Border />

        <Form.Item
          name="background-color"
          label={<Text strong>Background Color</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker showText format="hex" />
        </Form.Item>

        <Src name="background-url" label="Background Image" />

        <Form.Item
          name="background-repeat"
          label={<Text strong>Background Repeat</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "repeat", label: "Repeat" },
              { value: "no-repeat", label: "No-Repeat" },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item
          name="background-size"
          label={<Text strong>Background Size</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "auto", label: "Auto" },
              { value: "cover", label: "Cover" },
              { value: "contain", label: "Contain" },
            ]}
          ></Select>
        </Form.Item>
      </>

      <>
        <EDivider>POSITION</EDivider>

        <Padding />
      </>
    </>
  );
};
export default SectionBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
