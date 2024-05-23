/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Padding from "@/components/Padding";
import useProperty from "@/hooks/useProperty";
import parseBackground from "@/utils/parseBackground";
import { UploadOutlined } from "@ant-design/icons";
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
  const { property } = useProperty();

  const {
    "background-size": backgroundSize,
    "background-repeat": backgroundRepeat,
  } = property as { "background-size": string; "background-repeat": string };

  const backgroundName =
    backgroundSize == "cover" ? "background-size" : "background-repeat";
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

        <Form.Item
          name="border-radius"
          label={<Text strong>Border Radius</Text>}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="border"
          valuePropName="checked"
          label={<Text strong>Border</Text>}
          normalize={(value: boolean) => {
            return value ? "1px solid #eee" : "";
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
            style={{ width: 120 }}
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
            style={{ width: 120 }}
            options={[
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
