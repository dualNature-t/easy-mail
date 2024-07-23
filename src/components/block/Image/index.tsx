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
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ImageBlock = (): JSX.Element => {
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
      <>
        <EDivider>{t("basic.image_style")}</EDivider>

        <Src name="src" label={t("property.image_source")} />

        <Form.Item
          labelCol={{ span: 24 }}
          name="href"
          label={<Text strong>{t("property.image_link")}</Text>}
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

        <Form.Item
          labelCol={{ span: 24 }}
          name="alt"
          label={<Text strong>{t("property.alt_text")}</Text>}
        >
          <Input placeholder={t("basic.alt_text_plc")} />
        </Form.Item>
      </>

      <>
        <EDivider>{t("basic.size")}</EDivider>

        <Width />

        <BorderRadius />
      </>

      <>
        <EDivider>{t("basic.position")}</EDivider>

        <Align />

        <Padding />
      </>
    </>
  );
};
export default ImageBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
