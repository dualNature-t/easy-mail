/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Align from "@/components/Align";
import EDivider from "@/components/EDivider";
import EInputNumber from "@/components/EInputNumber";
import FontFamily from "@/components/FontFamily";
import Padding from "@/components/Padding";
import {
  Divider,
  Form,
  InputNumber,
  Radio,
  Typography,
  ColorPicker,
  Select,
} from "antd";
import { Color } from "antd/es/color-picker";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TextBlock = (): JSX.Element => {
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
        <EDivider>TEXT STYLES</EDivider>

        <FontFamily />

        <EInputNumber name="font-size" label={<Text strong>Font Size</Text>} />
        <EInputNumber
          name="line-height"
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
export default TextBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
