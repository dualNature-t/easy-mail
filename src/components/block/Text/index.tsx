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
  EDivider,
  EInputNumber,
  FontFamily,
  Padding,
} from "@/components";
import { Form, Typography, ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TextBlock = (): JSX.Element => {
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
        <EDivider>{t("basic.text_style")}</EDivider>

        <FontFamily />

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
          <ColorPicker showText />
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
export default TextBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
