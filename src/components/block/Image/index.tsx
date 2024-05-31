/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import BorderRadius from "@/components/BorderRadius";
import Padding from "@/components/Padding";
import {
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Typography,
} from "antd";
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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">IMAGE STYLES</Text>
        </Divider>

        <Form.Item name="src" label={<Text strong>Image Source</Text>}>
          <Input />
        </Form.Item>

        <Form.Item
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

        <Form.Item name="alt" label={<Text strong>Alt Text</Text>}>
          <Input placeholder="Enter an image description" />
        </Form.Item>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SIZE</Text>
        </Divider>

        <Form.Item name="width" label={<Text strong>Width</Text>}>
          <InputNumber step={10} min={0} />
        </Form.Item>

        <BorderRadius />
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
export default ImageBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
