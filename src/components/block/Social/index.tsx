/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Align from "@/components/Align";
import BorderRadius from "@/components/BorderRadius";
import EDivider from "@/components/EDivider";
import EInputNumber from "@/components/EInputNumber";
import FontFamily from "@/components/FontFamily";
import Padding from "@/components/Padding";
import { AppDataType } from "@/constant";
import useAppData from "@/hooks/useAppData";
import useFocusNode from "@/hooks/useFocusNode";
import getIdxByNode from "@/utils/getIdxByNode";
import getJsonByIdx from "@/utils/getJsonByIdx";
import {
  addSocialBlock,
  deleteSocialBlock,
  moveSocialBlock,
  onPropertyChange,
  onTextContentChange,
} from "@/utils/treeTools";
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
  Flex,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import { Color } from "antd/es/color-picker";
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

  const idx = getIdxByNode({ node: focusNode as HTMLElement });
  const mjml = getJsonByIdx({
    appData: appData as AppDataType,
    idx,
  });
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
      result = onTextContentChange({
        appData: appData as AppDataType,
        idx,
        content: value,
        index,
      });
    } else {
      const attr = key === "name" ? defaultSocialMap[value] : { [key]: value };
      result = onPropertyChange({
        appData: appData as AppDataType,
        idx,
        property: attr as Record<string, unknown>,
        index,
      });
    }
    setAppData(result);
  };

  const handleAddSocial = () => {
    setAppData(
      addSocialBlock({
        appData: appData as AppDataType,
        idx,
        value: {
          tagName: "mj-social-element",
          attributes: defaultSocialMap.custom,
          content: "",
        },
      })
    );
  };

  const handleUpItem = (index: number) => {
    setAppData(
      moveSocialBlock({
        appData: appData as AppDataType,
        idx,
        originIndex: index,
        targetIndex: index - 1,
      })
    );
  };

  const handleDownItem = (index: number) => {
    setAppData(
      moveSocialBlock({
        appData: appData as AppDataType,
        idx,
        originIndex: index,
        targetIndex: index + 1,
      })
    );
  };

  const handleDeleteItem = (index: number) => {
    setAppData(
      deleteSocialBlock({ appData: appData as AppDataType, idx, index })
    );
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <>
        <EDivider>CONTENT</EDivider>

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
                      format="hex"
                      value={attr?.["background-color"]}
                      onChange={(_, hex) => {
                        onChange(index, "background-color", hex);
                      }}
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
        <EDivider>SOCIAL STYLES</EDivider>

        <EInputNumber name="icon-size" label={<Text strong>Icon Size</Text>} />

        <EInputNumber
          name="icon-padding"
          label={<Text strong>Icon Padding</Text>}
        />

        <BorderRadius />

        <EInputNumber
          name="inner-padding"
          label={<Text strong>Inner Padding</Text>}
        />
      </>

      <>
        <EDivider>TEXT STYLES</EDivider>

        <FontFamily />

        <EInputNumber name="font-size" label={<Text strong>Font Size</Text>} />

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

        <Align />

        <Padding />
      </>
    </>
  );
};
export default SocialBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
