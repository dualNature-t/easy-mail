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
import useAppData from "@/hooks/useAppData";
import useFocusNode from "@/hooks/useFocusNode";
import useProperty from "@/hooks/useProperty";
import getMjmlByNode from "@/utils/getMjmlByNode";
import {
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  ColorPicker,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Typography,
} from "antd";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SocialBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();

  const { mjml } = getMjmlByNode(appData, focusNode);
  console.log(mjml);
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
          <Text type="secondary">CONTENT</Text>
        </Divider>

        {mjml?.children?.map((item, index) => {
          return (
            <Card
              style={{ marginBottom: 12 }}
              styles={{
                header: { textAlign: "left", padding: "0 12px", minHeight: 46 },
                body: { padding: "12px" },
              }}
              key={index}
              title={item.attributes?.name}
              extra={
                <Flex gap={4}>
                  <Button
                    type="text"
                    style={{ padding: "2px 8px" }}
                    disabled={index === 0 || mjml?.children?.length === 1}
                  >
                    <UpOutlined />
                  </Button>
                  <Button
                    type="text"
                    style={{ padding: "2px 8px" }}
                    disabled={
                      index === (mjml?.children?.length ?? 1) - 1 ||
                      mjml?.children?.length === 1
                    }
                  >
                    <DownOutlined />
                  </Button>
                  <Button
                    type="text"
                    style={{ padding: "2px 8px" }}
                    disabled={mjml?.children?.length === 1}
                  >
                    <DeleteOutlined />
                  </Button>
                </Flex>
              }
            >
              <Flex justify="space-between" align="center">
                <Text strong>Network</Text>
                <Select
                  value={item.attributes?.name}
                  style={{ width: 120, textAlign: "left" }}
                  options={[
                    { value: "facebook", label: "Facebook" },
                    { value: "twitter", label: "Twitter(X)" },
                    { value: "x", label: "X" },
                    { value: "google", label: "Google" },
                    { value: "pinterest", label: "Pinterest" },
                    { value: "linkedin", label: "Linkedin" },
                    { value: "tumblr", label: "Tumblr" },
                    { value: "xing", label: "Xing" },
                    { value: "github", label: "Github" },
                    { value: "instagram", label: "Instagram" },
                    { value: "web", label: "Web" },
                    { value: "snapchat", label: "Snapchat" },
                    { value: "youtube", label: "Youtube" },
                    { value: "vimeo", label: "Vimeo" },
                    { value: "medium", label: "Medium" },
                    { value: "soundcloud", label: "Soundcloud" },
                    { value: "dribbble", label: "Dribbble" },
                    { value: "custom", label: "Custom" },
                  ]}
                ></Select>
              </Flex>
            </Card>
          );
        })}
        <Button
          icon={<PlusOutlined />}
          style={{ width: "100%" }}
          type="default"
        >
          Add Social
        </Button>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SOCIAL STYLES</Text>
        </Divider>

        <Form.Item name="icon-size" label={<Text strong>Icon Size</Text>}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item name="icon-padding" label={<Text strong>Icon Padding</Text>}>
          <InputNumber min={0} />
        </Form.Item>

        <BorderRadius />

        <Form.Item
          name="inner-padding"
          label={<Text strong>Inner Padding</Text>}
        >
          <InputNumber min={0} />
        </Form.Item>
      </>

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
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item name="font-color" label={<Text strong>Font Color</Text>}>
          <ColorPicker format="hex" showText />
        </Form.Item>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>

        <Form.Item name="mode" label={<Text strong>Mode</Text>}>
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              {
                value: "vertical",
                label: "Vertical",
              },
              {
                value: "horizontal",
                label: "Horizontal",
              },
            ]}
          ></Select>
        </Form.Item>

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
export default SocialBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
