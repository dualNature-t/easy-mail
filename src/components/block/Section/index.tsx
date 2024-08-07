/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Border, BorderRadius, EDivider, Src } from "@/components";
import {
  Column1Outlined,
  Column2Outlined,
  Column3Outlined,
  Column4Outlined,
  ColumnLeftOutlined,
  ColumnRightOutlined,
} from "@/components/Icon";
import Padding from "@/components/Padding";
import { EasymailValueType, ColumnUnitType } from "@/constant";
import { useAppData, useFocusNode } from "@/hooks";
import { getIdxByNode, onLayoutChange } from "@/utils";
import {
  Button,
  ColorPicker,
  Flex,
  Form,
  Select,
  Switch,
  Typography,
} from "antd";
import { Color } from "antd/es/color-picker";
import React from "react";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SectionBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const renderData: Array<{ key: ColumnUnitType; icon: React.ReactNode }> = [
    { key: "1", icon: <Column1Outlined /> },
    { key: "2", icon: <Column2Outlined /> },
    { key: "3", icon: <Column3Outlined /> },
    { key: "4", icon: <Column4Outlined /> },
    { key: "left", icon: <ColumnLeftOutlined /> },
    { key: "right", icon: <ColumnRightOutlined /> },
  ];
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleLayoutChange = (column: ColumnUnitType) => {
    const idx = getIdxByNode({ node: focusNode as HTMLElement });
    setAppData(
      onLayoutChange({ appData: appData as EasymailValueType, idx, column })
    );
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <>
        <EDivider>{t("basic.layout")}</EDivider>

        <Flex justify="space-around">
          {renderData.map((item) => {
            return (
              <Button
                type="text"
                onClick={() => handleLayoutChange(item.key)}
                key={item.key}
                style={{ padding: "0px 6px" }}
              >
                {item.icon}
              </Button>
            );
          })}
        </Flex>
      </>

      <>
        <EDivider>{t("basic.section_style")}</EDivider>

        <Form.Item
          name="full-width"
          label={<Text strong>{t("property.full_width")}</Text>}
          valuePropName="checked"
          normalize={(value: boolean) => {
            return value ? "full-width" : "";
          }}
        >
          <Switch />
        </Form.Item>

        <BorderRadius />
        <Border />

        <Form.Item
          name="background-color"
          label={<Text strong>{t("property.background_color")}</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker showText />
        </Form.Item>

        <Src name="background-url" label={t("property.background_image")} />

        <Form.Item
          name="background-repeat"
          label={<Text strong>{t("property.background_repeat")}</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "repeat", label: t("property.repeat") },
              { value: "no-repeat", label: t("property.no_repeat") },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item
          name="background-size"
          label={<Text strong>{t("property.background_size")}</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "auto", label: t("property.auto") },
              { value: "cover", label: t("property.cover") },
              { value: "contain", label: t("property.contain") },
            ]}
          ></Select>
        </Form.Item>
      </>

      <>
        <EDivider>{t("basic.position")}</EDivider>

        <Padding />
      </>
    </>
  );
};
export default SectionBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
