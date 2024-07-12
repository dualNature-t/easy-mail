/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useEffect, useMemo, useState } from "react";
import { Button, Col, InputNumber, Row, Typography } from "antd";
import useProperty from "@/hooks/useProperty";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Padding = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty();

  const {
    "padding-left": paddingLeft,
    "padding-right": paddingRight,
    "padding-top": paddingTop,
    "padding-bottom": paddingBottom,
  } = useMemo(() => {
    const result = {
      "padding-top": 0,
      "padding-right": 0,
      "padding-bottom": 0,
      "padding-left": 0,
    };
    if (!property || Object.keys(property).length == 0) {
      return result;
    }

    const padding = (property as { padding: string }).padding;
    if (!padding) return result;
    const paddingArr = padding?.split(" ");
    const len = paddingArr.length;

    if (len == 1) {
      Object.keys(result).forEach((item) => {
        result[item as keyof typeof result] = parseInt(paddingArr[0]);
      });
    } else if (len == 2) {
      const number01 = parseInt(paddingArr[0]);
      const number02 = parseInt(paddingArr[1]);
      result["padding-left"] = number02;
      result["padding-right"] = number02;
      result["padding-top"] = number01;
      result["padding-bottom"] = number01;
    } else if (len == 3) {
      const number01 = parseInt(paddingArr[0]);
      const number02 = parseInt(paddingArr[1]);
      const number03 = parseInt(paddingArr[2]);
      result["padding-left"] = number02;
      result["padding-right"] = number02;
      result["padding-top"] = number01;
      result["padding-bottom"] = number03;
    } else {
      Object.keys(result).forEach((item, index) => {
        result[item as keyof typeof result] = parseInt(paddingArr[index]);
      });
    }

    return result;
  }, [property]);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (
    value: number,
    key:
      | "padding"
      | "padding-left"
      | "padding-right"
      | "padding-top"
      | "padding-bottom"
  ) => {
    let result = null;
    if (key === "padding") {
      result = {
        ...property,
        padding: `${value}px ${value}px ${value}px ${value}px`,
      };
    } else {
      const merge = Object.assign(
        {
          "padding-left": paddingLeft,
          "padding-right": paddingRight,
          "padding-top": paddingTop,
          "padding-bottom": paddingBottom,
        },
        { [key]: value }
      );
      result = {
        ...property,
        padding: `${merge["padding-top"]}px ${merge["padding-right"]}px ${merge["padding-bottom"]}px ${merge["padding-left"]}px`,
      };
    }

    setProperty(result);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    const unOpen =
      paddingLeft === paddingRight &&
      paddingRight === paddingTop &&
      paddingTop === paddingBottom;
    setOpen(!unOpen);
  }, [paddingLeft, paddingRight, paddingTop, paddingBottom]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <Row align="middle" justify="space-between" style={{ marginBottom: 12 }}>
        <Col>
          <Text strong>Padding</Text>
        </Col>
        <Col>
          {open ? (
            <Button
              style={{ paddingRight: 0 }}
              onClick={() => {
                const minPadding = Math.min(
                  paddingLeft,
                  paddingRight,
                  paddingTop,
                  paddingBottom
                );
                const paddingValue = `${minPadding}px ${minPadding}px ${minPadding}px ${minPadding}px`;

                setOpen(false);
                setProperty({ ...property, padding: paddingValue });
              }}
              type="link"
            >
              Less Options
            </Button>
          ) : (
            <Row align="middle">
              <Col>
                <Button
                  style={{ paddingRight: 5 }}
                  onClick={() => setOpen(true)}
                  type="link"
                >
                  More Options
                </Button>
              </Col>
              <Col>
                <InputNumber
                  value={Math.min(
                    paddingLeft,
                    paddingRight,
                    paddingTop,
                    paddingBottom
                  )}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "padding")
                  }
                />
              </Col>
            </Row>
          )}
        </Col>
      </Row>

      {open && (
        <Row wrap={true} gutter={[12, 12]}>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Top</Text>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={paddingTop}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "padding-top")
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Right</Text>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={paddingRight}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "padding-right")
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between" wrap={false}>
              <Col>
                <Text>Bottom</Text>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={paddingBottom}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "padding-bottom")
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Left</Text>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={paddingLeft}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "padding-left")
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};
export default Padding;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
