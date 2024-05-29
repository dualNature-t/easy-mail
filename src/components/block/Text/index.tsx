/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
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
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">TEXT STYLES</Text>
        </Divider>

        <Form.Item name="font-family" label={<Text strong>Font Family</Text>}>
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              {
                value: "arial",
                label: <span style={{ fontFamily: "arial" }}>Arial</span>,
              },
              {
                value: "serif ",
                label: <span style={{ fontFamily: "serif" }}>Serif</span>,
              },
              {
                value: "sans-serif",
                label: (
                  <span style={{ fontFamily: "sans-serif" }}>Sansserif</span>
                ),
              },
              {
                value: "monospace",
                label: (
                  <span style={{ fontFamily: "monospace" }}>Monospace</span>
                ),
              },
              {
                value: "cursive",
                label: <span style={{ fontFamily: "cursive" }}>Cursive</span>,
              },
              {
                value: "fantasy",
                label: <span style={{ fontFamily: "fantasy" }}>Fantasy</span>,
              },
              {
                value: "emoji",
                label: <span style={{ fontFamily: "emoji" }}>Emoji</span>,
              },
              {
                value: "math",
                label: <span style={{ fontFamily: "math" }}>Math</span>,
              },
              {
                value: "fangsong",
                label: <span style={{ fontFamily: "fangsong" }}>仿宋</span>,
              },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item name="font-size" label={<Text strong>Font Size</Text>}>
          <InputNumber />
        </Form.Item>

        <Form.Item name="line-height" label={<Text strong>Line Height</Text>}>
          <InputNumber step={0.1} />
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
export default TextBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
