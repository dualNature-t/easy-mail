/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Padding from "@/components/Padding";
import { ColorPicker, Divider, Form, InputNumber, Typography } from "antd";
import { Color } from "antd/es/color-picker";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DividerBlock = (): JSX.Element => {
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
          <Text type="secondary">DIVIDER STYLES</Text>
        </Divider>

        <Form.Item name="width" label={<Text strong>Width</Text>}>
          <InputNumber step={10} min={0} />
        </Form.Item>

        <Form.Item name="border-width" label={<Text strong>Border Width</Text>}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          name="border-color"
          label={<Text strong>Border Color</Text>}
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

        <Padding />
      </>
    </>
  );
};
export default DividerBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
