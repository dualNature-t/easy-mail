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
const BorderRadius = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty();

  const {
    "radius-left": radiusLeft,
    "radius-right": radiusRight,
    "radius-top": radiusTop,
    "radius-bottom": radiusBottom,
  } = useMemo(() => {
    const result = {
      "radius-top": 0,
      "radius-right": 0,
      "radius-bottom": 0,
      "radius-left": 0,
    };
    if (!property || Object.keys(property).length == 0) {
      return result;
    }

    const radius = (property as { "border-radius": string })["border-radius"];
    if (!radius) return result;

    const radiusArr = radius.split(" ");
    const len = radiusArr.length;

    if (len == 1) {
      Object.keys(result).forEach((item) => {
        result[item as keyof typeof result] = parseInt(radiusArr[0]);
      });
    } else if (len == 2) {
      const number01 = parseInt(radiusArr[0]);
      const number02 = parseInt(radiusArr[1]);
      result["radius-left"] = number02;
      result["radius-right"] = number02;
      result["radius-top"] = number01;
      result["radius-bottom"] = number01;
    } else if (len == 3) {
      const number01 = parseInt(radiusArr[0]);
      const number02 = parseInt(radiusArr[1]);
      const number03 = parseInt(radiusArr[2]);
      result["radius-left"] = number02;
      result["radius-right"] = number02;
      result["radius-top"] = number01;
      result["radius-bottom"] = number03;
    } else {
      Object.keys(result).forEach((item, index) => {
        result[item as keyof typeof result] = parseInt(radiusArr[index]);
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
      | "radius"
      | "radius-left"
      | "radius-right"
      | "radius-top"
      | "radius-bottom"
  ) => {
    let result = null;
    if (key === "radius") {
      result = {
        ...property,
        "border-radius": `${value}px ${value}px ${value}px ${value}px`,
      };
    } else {
      const merge = Object.assign(
        {
          "radius-left": radiusLeft,
          "radius-right": radiusRight,
          "radius-top": radiusTop,
          "radius-bottom": radiusBottom,
        },
        { [key]: value }
      );
      result = {
        ...property,
        "border-radius": `${merge["radius-top"]}px ${merge["radius-right"]}px ${merge["radius-bottom"]}px ${merge["radius-left"]}px`,
      };
    }

    setProperty(result);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    const unOpen =
      radiusBottom === radiusLeft &&
      radiusLeft === radiusRight &&
      radiusRight === radiusTop;
    setOpen(!unOpen);
  }, [radiusBottom, radiusLeft, radiusRight, radiusTop]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ marginBottom: 24 }}>
      <Row align="middle" justify="space-between" style={{ marginBottom: 12 }}>
        <Col>
          <Text strong>Border Radius</Text>
        </Col>
        <Col>
          {open ? (
            <Button
              style={{ paddingRight: 0 }}
              onClick={() => {
                const minRadius = Math.min(
                  radiusBottom,
                  radiusLeft,
                  radiusRight,
                  radiusTop
                );
                const radiusValue = `${minRadius}px ${minRadius}px ${minRadius}px ${minRadius}px`;

                setOpen(false);
                setProperty({ ...property, "border-radius": radiusValue });
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
                  style={{ width: 74 }}
                  value={Math.min(
                    radiusBottom,
                    radiusLeft,
                    radiusRight,
                    radiusTop
                  )}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "radius")
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
            <Row align="middle" gutter={20}>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={radiusTop}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "radius-top")
                  }
                />
              </Col>
              <Col>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 4h.5a1.5 1.5 0 0 1 0 3H14a7 7 0 0 0-6.996 6.76L7 14v.5a1.5 1.5 0 0 1-3 0V14C4 8.477 8.477 4 14 4z"
                    fill="#979797"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="end" gutter={20}>
              <Col>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4h-.5a1.5 1.5 0 0 0 0 3H5a7 7 0 0 1 6.996 6.76L12 14v.5a1.5 1.5 0 0 0 3 0V14C15 8.477 10.523 4 5 4z"
                    fill="#979797"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={radiusRight}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "radius-right")
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" gutter={20}>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={radiusLeft}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "radius-left")
                  }
                />
              </Col>
              <Col>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 15h.5a1.5 1.5 0 0 0 0-3H14a7 7 0 0 1-6.996-6.76L7 5v-.5a1.5 1.5 0 0 0-3 0V5c0 5.523 4.477 10 10 10z"
                    fill="#979797"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="end" gutter={20}>
              <Col>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15h-.5a1.5 1.5 0 0 1 0-3H5a7 7 0 0 0 6.996-6.76L12 5v-.5a1.5 1.5 0 0 1 3 0V5c0 5.523-4.477 10-10 10z"
                    fill="#979797"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Col>
              <Col>
                <InputNumber
                  style={{ width: 80 }}
                  value={radiusBottom}
                  step={10}
                  min={0}
                  onChange={(value: number | null) =>
                    onChange(value ?? 0, "radius-bottom")
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default BorderRadius;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
