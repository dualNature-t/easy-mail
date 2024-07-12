/**
 * @file
 * @date 2024-05-30
 * @author haodong.wang
 * @lastModify  2024-05-30
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  Checkbox,
  Col,
  ColorPicker,
  InputNumber,
  Row,
  Select,
  Switch,
  Typography,
} from "antd";
import useProperty from "@/hooks/useProperty";

const { Text } = Typography;

const defaultConfig = "1px solid #000";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Border = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const { borderWidth, borderStyle, borderColor } = useMemo(() => {
    const config = (property as { border: string })?.border || defaultConfig;
    const [borderWidth, borderStyle, borderColor] = config.split(" ");
    return {
      borderWidth,
      borderStyle,
      borderColor,
    };
  }, [property]);

  const borderDirValue = useMemo(() => {
    const result = [
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
    ];
    if (!property || Object.keys(property).length == 0) {
      return result;
    }
    const {
      "border-top": borderTop,
      "border-right": borderRight,
      "border-bottom": borderBottom,
      "border-left": borderLeft,
    } = property as {
      "border-top": string;
      "border-right": string;
      "border-bottom": string;
      "border-left": string;
    };

    const dir = {
      "border-top": borderTop,
      "border-right": borderRight,
      "border-bottom": borderBottom,
      "border-left": borderLeft,
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
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    setOpen(!!(property as { border: string })?.border);
  }, [property]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ marginBottom: 24 }}>
      <Row align="middle" justify="space-between">
        <Col>
          <Text strong>Border</Text>
        </Col>

        <Col>
          <Switch
            value={!!(property as { border: string })?.border}
            onChange={(value: boolean) => {
              setOpen(value);
              const border = value
                ? `${borderWidth} ${borderStyle} ${borderColor}`
                : "";
              setProperty({
                ...property,
                border,
              });
            }}
          />
        </Col>
      </Row>

      {open && (
        <Row>
          <Card
            style={{ width: "100%", marginTop: 6 }}
            styles={{ body: { padding: 16 } }}
          >
            <Row style={{ marginBottom: 12 }}>
              <Checkbox.Group
                className={style.border_checkbox}
                value={borderDirValue}
                options={[
                  { label: "Top", value: "border-top" },
                  { label: "Bottom", value: "border-bottom" },
                  { label: "Left", value: "border-left" },
                  { label: "Right", value: "border-right" },
                ]}
                onChange={(value) => {
                  if (borderDirValue.length > value.length) {
                    // 减少
                    const hiddenDirArr = borderDirValue.filter(
                      (i) => !value.includes(i)
                    );
                    const hiddenValue: Record<string, string> = {};
                    hiddenDirArr.forEach((i) => {
                      hiddenValue[i] = "none";
                    });
                    setProperty({
                      ...property,
                      ...hiddenValue,
                    });
                  } else {
                    // 增加
                    const showDirArr = value.filter(
                      (i) => !borderDirValue.includes(i)
                    );
                    showDirArr.forEach((i) => {
                      delete (property as Record<string, string>)[i];
                    });
                    setProperty({ ...property });
                  }
                }}
              />
            </Row>
            <Row
              align="middle"
              justify="space-between"
              style={{ marginBottom: 12 }}
            >
              <Col>
                <Text strong>Border Width</Text>
              </Col>
              <Col>
                <InputNumber
                  min={0}
                  value={parseInt(borderWidth)}
                  onChange={(value: number | null) => {
                    onChange(`${value ?? 0}px`, "borderWidth");
                  }}
                />
              </Col>
            </Row>
            <Row
              align="middle"
              justify="space-between"
              style={{ marginBottom: 12 }}
            >
              <Col>
                <Text strong>Border Style</Text>
              </Col>
              <Col>
                <Select
                  value={borderStyle}
                  style={{ width: 100, textAlign: "left" }}
                  options={[
                    { label: "Solid", value: "solid" },
                    { label: "Dashed", value: "dashed" },
                    { label: "Dotted", value: "dotted" },
                    { label: "Double", value: "double" },
                    { label: "Groove", value: "groove" },
                    { label: "Ridge", value: "rigde" },
                    { label: "Inset", value: "inset" },
                    { label: "Outset", value: "outset" },
                    { label: "Hidden", value: "hidden" },
                  ]}
                  onChange={(value: string) => {
                    onChange(value, "borderStyle");
                  }}
                ></Select>
              </Col>
            </Row>
            <Row align="middle" justify="space-between">
              <Col>
                <Text strong>Border Color</Text>
              </Col>
              <Col>
                <ColorPicker
                  showText
                  value={borderColor}
                  onChange={(_, value: string) => {
                    onChange(value, "borderColor");
                  }}
                />
              </Col>
            </Row>
          </Card>
        </Row>
      )}
    </div>
  );
};
export default Border;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
