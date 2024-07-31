/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useEffect, useMemo, useState } from "react";
import { Card, ColorPicker, Flex, Select, Switch, Typography } from "antd";
import { ECheckbox, EInputNumber } from "..";
import { useProperty } from "@/hooks";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
enum BorderEnum {
  Top = "border-top",
  Bottom = "border-bottom",
  Left = "border-left",
  Right = "border-right",
}
type BorderType = `${BorderEnum}`;

const defaultConfig = "1px solid #000";
const dirOptions = [
  { label: "top", value: BorderEnum.Top },
  { label: "bottom", value: BorderEnum.Bottom },
  { label: "left", value: BorderEnum.Left },
  { label: "right", value: BorderEnum.Right },
];
const borderStyleOptions = [
  { label: "Solid", value: "solid" },
  { label: "Dashed", value: "dashed" },
  { label: "Dotted", value: "dotted" },
  { label: "Double", value: "double" },
  { label: "Groove", value: "groove" },
  { label: "Ridge", value: "rigde" },
  { label: "Inset", value: "inset" },
  { label: "Outset", value: "outset" },
  { label: "Hidden", value: "hidden" },
];
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Border = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty() as {
    property: Record<BorderType | "border", string>;
    setProperty: (value: Record<string, unknown>) => void;
  };
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const { borderWidth, borderStyle, borderColor } = useMemo(() => {
    const config = property?.border || defaultConfig;
    const [borderWidth, borderStyle, borderColor] = config.split(" ");
    return {
      borderWidth,
      borderStyle,
      borderColor,
    };
  }, [property]);

  const borderDirValue = useMemo(() => {
    const result = [
      BorderEnum.Top,
      BorderEnum.Bottom,
      BorderEnum.Left,
      BorderEnum.Right,
    ];
    if (!property || Object.keys(property).length == 0) {
      return result;
    }

    const dir = {
      [BorderEnum.Top]: property[BorderEnum.Top],
      [BorderEnum.Bottom]: property[BorderEnum.Bottom],
      [BorderEnum.Left]: property[BorderEnum.Left],
      [BorderEnum.Right]: property[BorderEnum.Right],
    };

    return Object.keys(dir).filter(
      (item) => dir[item as keyof typeof dir] === undefined
    );
  }, [property]);

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (
    value: string,
    key: "borderWidth" | "borderStyle" | "borderColor"
  ) => {
    const config = Object.assign(
      { borderWidth, borderStyle, borderColor },
      { [key]: value }
    );
    const border = `${config.borderWidth} ${config.borderStyle} ${config.borderColor}`;
    setProperty({
      ...property,
      border,
    });
  };

  const onSwitchChange = (value: boolean) => {
    setOpen(value);
    const border = value ? `${borderWidth} ${borderStyle} ${borderColor}` : "";
    setProperty({
      ...property,
      border,
    });
  };

  const onBorderDirChange = (value: string[]) => {
    if (borderDirValue.length > value.length) {
      // HIDDEN
      const hiddenDirArr = borderDirValue.filter((i) => !value.includes(i));
      const hiddenValue: Record<string, string> = {};
      hiddenDirArr.forEach((i) => {
        hiddenValue[i] = "none";
      });
      setProperty({
        ...property,
        ...hiddenValue,
      });
    } else {
      // SHOW
      const showDirArr = value.filter((i) => !borderDirValue.includes(i));
      showDirArr.forEach((i) => {
        delete (property as Record<string, string>)[i];
      });
      setProperty({ ...property });
    }
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    setOpen(!!(property as { border: string })?.border);
  }, [property]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ marginBottom: 24 }}>
      <Flex align="center" justify="space-between">
        <Text strong>{t("property.border")}</Text>

        <Switch
          value={!!(property as { border: string })?.border}
          onChange={onSwitchChange}
        />
      </Flex>

      {open && (
        <Card
          style={{ width: "100%", marginTop: 6 }}
          styles={{ body: { padding: 16 } }}
        >
          <ECheckbox
            style={{ marginBottom: 12 }}
            value={borderDirValue}
            options={dirOptions}
            onChange={onBorderDirChange}
          />

          <Flex
            align="center"
            justify="space-between"
            style={{ marginBottom: 12 }}
          >
            <Text strong>{t("property.border_width")}</Text>
            <EInputNumber
              hasForm={false}
              step={1}
              value={parseInt(borderWidth)}
              onChange={(value: number | null) => {
                onChange(`${value ?? 0}px`, "borderWidth");
              }}
            />
          </Flex>

          <Flex
            align="center"
            justify="space-between"
            style={{ marginBottom: 12 }}
          >
            <Text strong>{t("property.border_style")}</Text>
            <Select
              value={borderStyle}
              style={{ width: 100, textAlign: "left" }}
              options={borderStyleOptions}
              onChange={(value: string) => {
                onChange(value, "borderStyle");
              }}
            ></Select>
          </Flex>

          <Flex align="center" justify="space-between">
            <Text strong>{t("property.border_color")}</Text>
            <ColorPicker
              showText
              value={borderColor}
              onChange={(_, value: string) => {
                onChange(value, "borderColor");
              }}
            />
          </Flex>
        </Card>
      )}
    </div>
  );
};
export default Border;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
