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
  BorderRadius,
  EDivider,
  Padding,
  Src,
  Width,
} from "@/components";
import { Checkbox, Form, Input, Typography } from "antd";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ImageBlock = (): JSX.Element => {
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
        <EDivider>IMAGE STYLES</EDivider>

        <Src name="src" label="Image Source" />

        <Form.Item
          labelCol={{ span: 24 }}
          name="href"
          label={<Text strong>Image Link</Text>}
          style={{ marginBottom: 6 }}
        >
          <Input placeholder="Enter a link url" />
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

        <Form.Item
          labelCol={{ span: 24 }}
          name="alt"
          label={<Text strong>Alt Text</Text>}
        >
          <Input placeholder="Enter an image description" />
        </Form.Item>
      </>

      <>
        <EDivider>SIZE</EDivider>

        <Width />

        <BorderRadius />
      </>

      <>
        <EDivider>POSITION</EDivider>

        <Align />

        <Padding />
      </>
    </>
  );
};
export default ImageBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
