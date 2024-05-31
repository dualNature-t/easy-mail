/**
 * @file
 * @date 2024-05-31
 * @author haodong.wang
 * @lastModify  2024-05-31
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useMemo, useState } from "react";
import style from "./style.module.scss";
import useProperty from "@/hooks/useProperty";
import { Col, InputNumber, Row, Switch, Typography } from "antd";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Width = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { property, setProperty } = useProperty();

  const [open, setOpen] = useState(false);

  const { width } = useMemo(() => {
    if (!property || Object.keys(property).length == 0) {
      return { width: "" };
    }
    return { width: (property as { width: string }).width || "" };
  }, [property]);
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
    <div style={{ marginBottom: 24 }}>
      <Row align="middle" justify="space-between" style={{ marginBottom: 24 }}>
        <Col>
          <Text strong>Full Width</Text>
        </Col>
        <Col>
          <Switch
            value={width === ""}
            onChange={(value: boolean) => {
              if (value) {
                setProperty({}, { ...property, width: "" });
              } else {
                setProperty({}, { ...property, width: "200px" });
              }
              setOpen(!value);
            }}
          />
        </Col>
      </Row>

      {open && (
        <Row align="middle" justify="space-between">
          <Col>
            <Text strong>Width</Text>
          </Col>
          <Col>
            <InputNumber
              step={10}
              min={0}
              value={parseInt(width)}
              onChange={(value: number | null) => {
                if (value) {
                  setProperty({}, { ...property, width: `${value}px` });
                }
              }}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};
export default Width;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
