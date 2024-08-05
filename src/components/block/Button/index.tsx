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
  Border,
  BorderRadius,
  EDivider,
  EInputNumber,
  Padding,
} from "@/components";
import { useProperty } from "@/hooks";
import { isEmpty } from "@/utils";
import {
  Checkbox,
  ColorPicker,
  Flex,
  Form,
  Input,
  Switch,
  Typography,
} from "antd";
import { Color } from "antd/es/color-picker";
import { useTranslation } from "react-i18next";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ButtonBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();
  const { property, setProperty } = useProperty() as {
    property: { width?: string };
    setProperty: (property: unknown) => void;
  };
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
        <EDivider>{t("basic.button_style")}</EDivider>

        <Form.Item
          labelCol={{ span: 24 }}
          name="href"
          label={<Text strong>{t("property.button_link")}</Text>}
          style={{ marginBottom: 6 }}
        >
          <Input placeholder="https://www.example.com" />
        </Form.Item>

        <Form.Item
          name="target"
          valuePropName="checked"
          normalize={(value: boolean) => {
            return value ? "_blank" : undefined;
          }}
          style={{ textAlign: "left" }}
        >
          <Checkbox>{t("basic.open_link_new_tab")}</Checkbox>
        </Form.Item>
      </>

      <>
        <EDivider>{t("basic.styles")}</EDivider>

        <Flex justify="space-between" style={{ marginBottom: 24 }}>
          <Text strong>{t("property.full_width")}</Text>
          <Switch
            value={!isEmpty(property?.width)}
            onChange={(value: boolean) => {
              setProperty({ ...property, width: value ? "100%" : "" });
            }}
          />
        </Flex>

        <Form.Item
          name="background-color"
          label={<Text strong>{t("property.background_color")}</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker format="hex" showText />
        </Form.Item>

        <BorderRadius />

        <Border />
      </>

      <>
        <EDivider>{t("basic.text_style")}</EDivider>

        <EInputNumber
          step={1}
          name="font-size"
          label={<Text strong>{t("property.font_size")}</Text>}
        />

        <EInputNumber
          name="line-height"
          options={["px", "%", "-"]}
          label={<Text strong>{t("property.line_height")}</Text>}
          step={0.1}
        />

        <Form.Item
          name="color"
          label={<Text strong>{t("property.font_color")}</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker format="hex" showText />
        </Form.Item>
      </>

      <>
        <EDivider>{t("basic.position")}</EDivider>

        <Align />

        <Padding />
      </>
    </>
  );
};
export default ButtonBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
