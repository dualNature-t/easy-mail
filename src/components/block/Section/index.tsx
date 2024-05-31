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
  Button,
  Col,
  ColorPicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
  Typography,
  Upload,
} from "antd";
import { Color } from "antd/es/color-picker";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SectionBlock = (): JSX.Element => {
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
          <Text type="secondary">LAYOUT</Text>
        </Divider>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SECTION STYLES</Text>
        </Divider>

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

        <Form.Item
          name="background-url"
          label={<Text strong>Background Image</Text>}
          normalize={(value: string) => {
            return value === "" ? undefined : value;
          }}
        >
          <Input placeholder="Enter a url" />
        </Form.Item>

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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>

        <Padding />
      </>
    </>
  );
};
export default SectionBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
