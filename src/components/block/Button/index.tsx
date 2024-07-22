/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
  Align,
  Border,
  BorderRadius,
  EDivider,
  EInputNumber,
  Padding,
} from "@/components";
import { Checkbox, ColorPicker, Form, Input, Switch, Typography } from "antd";
import { Color } from "antd/es/color-picker";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ButtonBlock = (): JSX.Element => {
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
    <>
      <>
        <EDivider>BUTTON STYLES</EDivider>

        <Form.Item
          labelCol={{ span: 24 }}
          name="href"
          label={<Text strong>Button Link</Text>}
          style={{ marginBottom: 6 }}
        >
          <Input placeholder="https://www.example.com" />
        </Form.Item>

        <Form.Item
          name="target"
          valuePropName="checked"
          normalize={(value: boolean) => {
            return value ? "_blank" : undefined;
          }}
          style={{ textAlign: "left" }}
        >
          <Checkbox>Open link in new tab</Checkbox>
        </Form.Item>
      </>

      <>
        <EDivider>STYLES</EDivider>

        <Form.Item
          name="width"
          label={<Text strong>Full Width</Text>}
          valuePropName="checked"
          normalize={(value: boolean) => {
            return value ? "100%" : "";
          }}
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="background-color"
          label={<Text strong>Background Color</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker format="hex" showText />
        </Form.Item>

        <BorderRadius />

        <Border />
      </>

      <>
        <EDivider>TEXT STYLES</EDivider>

        <EInputNumber
          step={1}
          name="font-size"
          label={<Text strong>Font Size</Text>}
        />

        <EInputNumber
          name="line-height"
          options={["px", "%", "-"]}
          label={<Text strong>Line Height</Text>}
          step={0.1}
        />

        <Form.Item
          name="color"
          label={<Text strong>Font Color</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker format="hex" showText />
        </Form.Item>
      </>

      <>
        <EDivider>POSITION</EDivider>

        <Align />

        <Padding />
      </>
    </>
  );
};
export default ButtonBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
