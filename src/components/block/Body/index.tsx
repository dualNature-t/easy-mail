/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { EDivider, EInputNumber, FontFamily } from "@/components";
import { ColorPicker, Form, Typography } from "antd";
import { Color } from "antd/es/color-picker";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const BodyBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();
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
      <EDivider>{t("basic.body_style")}</EDivider>

      <Form.Item
        name="background-color"
        label={<Text strong>{t("property.background_color")}</Text>}
        normalize={(value: Color) => {
          return value.toHexString();
        }}
      >
        <ColorPicker showText />
      </Form.Item>

      <EInputNumber
        name="width"
        label={<Text strong>{t("property.width")}</Text>}
      />

      <EDivider>{t("basic.public_style")}</EDivider>

      <FontFamily name="all_font-family" />

      <Form.Item
        name="all_color"
        label={<Text strong>{t("property.font_color")}</Text>}
        normalize={(value: Color) => {
          return value.toHexString();
        }}
      >
        <ColorPicker showText />
      </Form.Item>

      <Form.Item
        name="button_background-color"
        label={<Text strong>{t("property.button_background_color")}</Text>}
        normalize={(value: Color) => {
          return value.toHexString();
        }}
      >
        <ColorPicker showText />
      </Form.Item>

      <Form.Item
        name="button_color"
        label={<Text strong>{t("property.button_color")}</Text>}
        normalize={(value: Color) => {
          return value.toHexString();
        }}
      >
        <ColorPicker showText />
      </Form.Item>

      <Form.Item
        name="section_background-color"
        label={<Text strong>{t("property.section_background_color")}</Text>}
        normalize={(value: Color) => {
          return value.toHexString();
        }}
      >
        <ColorPicker showText />
      </Form.Item>
    </>
  );
};
export default BodyBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
