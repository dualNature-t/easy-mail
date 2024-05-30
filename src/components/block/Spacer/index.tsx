/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Divider, Form, InputNumber, Typography } from "antd";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SpacerBlock = (): JSX.Element => {
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
      <Divider orientation="left" orientationMargin="0">
        <Text type="secondary">SPACER STYLES</Text>
      </Divider>

      <Form.Item name="height" label={<Text strong>Height</Text>}>
        <InputNumber step={10} min={10} />
      </Form.Item>
    </>
  );
};
export default SpacerBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
