/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Align, EDivider, EInputNumber, Padding } from "@/components";
import { ColorPicker, Form, Typography } from "antd";
import { Color } from "antd/es/color-picker";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DividerBlock = (): JSX.Element => {
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
        <EDivider>{t("basic.divider_style")}</EDivider>

        <EInputNumber
          name="width"
          percentMax={100}
          options={["px", "%"]}
          label={<Text strong>{t("property.width")}</Text>}
        />

        <EInputNumber
          step={1}
          name="border-width"
          label={<Text strong>{t("property.border_width")}</Text>}
        />

        <Form.Item
          name="border-color"
          label={<Text strong>{t("property.border_color")}</Text>}
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
export default DividerBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
