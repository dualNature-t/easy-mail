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
import { appDataType } from "@/context/appContext";
import useAppData from "@/hooks/useAppData";
import useFocusNode from "@/hooks/useFocusNode";
import useProperty from "@/hooks/useProperty";
import getMjmlByNode from "@/utils/getMjmlByNode";
import {
  addSocialItem,
  deleteSocialItem,
  moveSocialItem,
  onTextContentChange,
  onTreePropertyChange,
} from "@/utils/treeTool";
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

interface SocialElementAttrType {
  name: string;
  href: string;
  src?: string;
  "background-color"?: string;
}

const defaultSocialMap: Record<string, SocialElementAttrType> = {
  facebook: {
    name: "facebook",
    href: "https://www.facebook.com/",
  },
  twitter: {
    name: "twitter",
    href: "https://www.twitter.com/",
  },
  x: {
    name: "x",
    href: "https://www.twitter.com/",
  },
  google: {
    name: "google",
    href: "https://www.google.com/",
  },
  pinterest: {
    name: "pinterest",
    href: "https://www.pinterest.com/",
  },
  linkedin: {
    name: "linkedin",
    href: "https://www.linkedin.com/",
  },
  tumblr: {
    name: "tumblr",
    href: "https://www.tumblr.com/",
  },
  xing: {
    name: "xing",
    href: "https://www.xing.com/",
  },
  github: {
    name: "github",
    href: "https://www.github.com/",
  },
  instagram: {
    name: "instagram",
    href: "https://www.instagram.com/",
  },
  web: {
    name: "web",
    href: "https://www.web.com/",
  },
  snapchat: {
    name: "snapchat",
    href: "https://www.snapchat.com/",
  },
  youtube: {
    name: "youtube",
    href: "https://www.youtube.com/",
  },
  vimeo: {
    name: "vimeo",
    href: "https://www.vimeo.com/",
  },
  medium: {
    name: "medium",
    href: "https://www.medium.com/",
  },
  soundcloud: {
    name: "soundcloud",
    href: "https://www.soundcloud.com/",
  },
  dribbble: {
    name: "dribbble",
    href: "https://www.dribbble.com/",
  },
  custom: {
    name: "custom",
    href: "",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACDUlEQVR4Ae3BP0tqcQDH4a8NCUHWUg1tElGBEvRvDhoaIlp6BSFmtFdzk29BKgQJCXoBLU1FBIE1ByVFFC5Cehoi7HMRrnAwDY+e3z3CPc8jn8/n8/0fmGVW3YQUKXUP+ilTpl/dgk2qNtUtyFGVU3dgjpo5dQMOqDmQ9whhUWMRktdIYJeQ17jF7lbeYp568/ISh9Q7lHcIYVHPIiSvsEUjW/IKdzRyJ2+wQDML8gJHNHOkf48BPmjmgwGZQIBBwsywxDpxdkmS4pRzcuQp8ZsSeXKcc0qKJLvEWWeJGcIMEpAzRDjjhgeKVDChQpEHbjgjotawQgnTSqyodUTIY1KeiJxhiEtMuWRIztFLGhPS9Kpd7FDBTRV21BlWKeOWMqvqHFGecMMTUbmDYa7o1BXDcg9BMnQiQ1BuY49v2vHNnsxgDQunLNZkDtMUcKLAtMziGSeeZRZhnArLJDZwakMmkcGpjEziBadeZA5jtGNMphCjHTGZwjHtOJYpvNJMmjTNvMoMxmnsnkVJYpF7GhuXCcT56ZN9gvqLIPt88lNcJpCl3gWTqsMkF9TLygTesCsSI6AGCBCjiN2b3McEdllG9AtGyGI3IbeRoOaRZbWAZR6pSchtnFD1RZI+tYg+knxRdSK3UQCuicoholwDBbmLKd7ZpkdtoIdt3pmSm4gwqg4wSkQ+n8/n85nwB8QLTUFkdp6OAAAAAElFTkSuQmCC",
    "background-color": "#c1c1c1",
  },
};
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

  const { mjml, idx } = getMjmlByNode(appData, focusNode);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (
    index: number,
    key: keyof SocialElementAttrType | "content",
    value: string
  ) => {
    let result = null;
    if (key === "content") {
      result = onTextContentChange(appData, idx as string, value, index);
    } else {
      const attr = key === "name" ? defaultSocialMap[value] : { [key]: value };
      result = onTreePropertyChange(
        appData,
        idx as string,
        attr as Record<string, unknown>,
        index
      );
    }

    setAppData(result as appDataType);
  };

  const handleAddSocial = () => {
    const result = addSocialItem(appData, idx as string, {
      tagName: "mj-social-element",
      attributes: defaultSocialMap.custom,
      content: "",
    });
    setAppData(result as appDataType);
  };

  const handleUpItem = (index: number) => {
    const result = moveSocialItem(
      appData as appDataType,
      idx as string,
      index,
      index - 1
    );
    setAppData(result as appDataType);
  };

  const handleDownItem = (index: number) => {
    const result = moveSocialItem(
      appData as appDataType,
      idx as string,
      index,
      index + 1
    );
    setAppData(result as appDataType);
  };

  const handleDeleteItem = (index: number) => {
    const result = deleteSocialItem(appData, idx as string, index);
    setAppData(result as appDataType);
  };
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
          const attr = item.attributes as SocialElementAttrType;
          return (
            <Card
              style={{ marginBottom: 12 }}
              styles={{
                header: { textAlign: "left", padding: "0 12px", minHeight: 46 },
                body: { padding: "12px" },
              }}
              key={`${attr.name}-${index}`}
              title={attr.name}
              extra={
                <Flex gap={4}>
                  <Button
                    type="text"
                    style={{ padding: "2px 8px" }}
                    disabled={index === 0 || mjml?.children?.length === 1}
                    onClick={() => handleUpItem(index)}
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
                    onClick={() => handleDownItem(index)}
                  >
                    <DownOutlined />
                  </Button>
                  <Button
                    type="text"
                    style={{ padding: "2px 8px" }}
                    disabled={mjml?.children?.length === 1}
                    onClick={() => handleDeleteItem(index)}
                  >
                    <DeleteOutlined />
                  </Button>
                </Flex>
              }
            >
              <Flex justify="space-between" align="center">
                <Text strong>Network</Text>
                <Select
                  value={attr.name}
                  style={{ width: 150, textAlign: "left" }}
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
                  onChange={(value) => onChange(index, "name", value)}
                ></Select>
              </Flex>

              <Flex
                justify="space-between"
                align="center"
                style={{ marginTop: 6 }}
              >
                <Text strong>Label</Text>
                <Input
                  value={item.content}
                  style={{ width: 150 }}
                  placeholder="Social label"
                  onChange={(e) => onChange(index, "content", e.target.value)}
                />
              </Flex>

              <Flex
                justify="space-between"
                align="center"
                style={{ marginTop: 6 }}
              >
                <Text strong>URL</Text>
                <Input
                  value={attr.href}
                  style={{ width: 150 }}
                  placeholder="Social url"
                  onChange={(e) => onChange(index, "href", e.target.value)}
                />
              </Flex>

              {attr.name === "custom" && (
                <>
                  <Flex
                    justify="space-between"
                    align="center"
                    style={{ marginTop: 6 }}
                  >
                    <Text strong>Icon</Text>
                    <Input
                      value={attr?.src}
                      style={{ width: 150 }}
                      placeholder="Icon url"
                      onChange={(e) => onChange(index, "src", e.target.value)}
                    />
                  </Flex>

                  <Flex
                    justify="space-between"
                    align="center"
                    style={{ marginTop: 6 }}
                  >
                    <Text strong>Icon Color</Text>
                    <ColorPicker
                      value={attr?.["background-color"]}
                      onChange={(_, hex) =>
                        onChange(index, "background-color", hex)
                      }
                      showText
                    />
                  </Flex>
                </>
              )}
            </Card>
          );
        })}
        <Button
          icon={<PlusOutlined />}
          style={{ width: "100%" }}
          type="default"
          onClick={handleAddSocial}
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
