/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { EDivider, EInputNumber } from "@/components";
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
        <ColorPicker showText format="hex" />
      </Form.Item>

      <EInputNumber
        name="width"
        label={<Text strong>{t("property.width")}</Text>}
      />
    </>
  );
};
export default BodyBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
