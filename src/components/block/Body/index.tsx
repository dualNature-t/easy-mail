/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import useFocusNode from "@/hooks/useFocusNode";
import useProperty from "@/hooks/useProperty";
import {
  Col,
  ColorPicker,
  Divider,
  Form,
  InputNumber,
  Row,
  Typography,
} from "antd";
import { Color } from "antd/es/color-picker";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const BodyBlock = (): JSX.Element => {
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
          <Text type="secondary">BODY STYLES</Text>
        </Divider>

        <Form.Item
          name="background-color"
          label={<Text strong>Background Color</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker showText format="hex" />
        </Form.Item>

        <Form.Item name="width" label={<Text strong>Width</Text>}>
          <InputNumber step={10} />
        </Form.Item>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">TEMPLATE DEFAULTS</Text>
        </Divider>
      </>
    </>
  );
};
export default BodyBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
