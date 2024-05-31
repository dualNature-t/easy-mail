/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Border from "@/components/Border";
import BorderRadius from "@/components/BorderRadius";
import Padding from "@/components/Padding";
import {
  Checkbox,
  ColorPicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Segmented,
  Switch,
  Typography,
} from "antd";
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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">BUTTON STYLES</Text>
        </Divider>

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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">STYLES</Text>
        </Divider>

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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">TEXT STYLES</Text>
        </Divider>

        <Form.Item name="font-size" label={<Text strong>Font Size</Text>}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item name="line-height" label={<Text strong>Line Height</Text>}>
          <InputNumber step={0.1} min={1} />
        </Form.Item>

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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>

        <Form.Item name="align" label={<Text strong>Align</Text>}>
          <Radio.Group>
            <Radio.Button value="left">Left</Radio.Button>
            <Radio.Button value="center">Center</Radio.Button>
            <Radio.Button value="right">Right</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Padding />
      </>
    </>
  );
};
export default ButtonBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
