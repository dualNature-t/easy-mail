/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Form, Select, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const FontFamily = (): JSX.Element => {
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
    <Form.Item
      name="font-family"
      label={<Text strong>{t("property.font_family")}</Text>}
    >
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
            label: <span style={{ fontFamily: "sans-serif" }}>Sansserif</span>,
          },
          {
            value: "monospace",
            label: <span style={{ fontFamily: "monospace" }}>Monospace</span>,
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
  );
};
export default FontFamily;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
