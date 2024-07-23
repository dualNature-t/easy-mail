/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useEffect, useMemo, useState } from "react";
import { Button, Flex, Typography } from "antd";
import {
  BorderRadiusLBOutlined,
  BorderRadiusLTOutlined,
  BorderRadiusRBOutlined,
  BorderRadiusRTOutlined,
} from "../Icon";
import { useProperty } from "@/hooks";
import { EInputNumber } from "..";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
enum RadiusEnum {
  LEFT = "radius-left",
  RIGHT = "radius-right",
  TOP = "radius-top",
  BOTTOM = "radius-bottom",
}
type RadiusType = `${RadiusEnum}`;

const initRadiusValue: Record<RadiusType, number> = {
  [RadiusEnum.TOP]: 0,
  [RadiusEnum.RIGHT]: 0,
  [RadiusEnum.BOTTOM]: 0,
  [RadiusEnum.LEFT]: 0,
};

const radiusIconMap: Record<RadiusType, React.ReactNode> = {
  [RadiusEnum.TOP]: <BorderRadiusLTOutlined />,
  [RadiusEnum.RIGHT]: <BorderRadiusRTOutlined />,
  [RadiusEnum.BOTTOM]: <BorderRadiusRBOutlined />,
  [RadiusEnum.LEFT]: <BorderRadiusLBOutlined />,
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const BorderRadius = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty();

  const radiusProperty = useMemo(() => {
    const result = { ...initRadiusValue };
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
      result[RadiusEnum.LEFT] = number02;
      result[RadiusEnum.RIGHT] = number02;
      result[RadiusEnum.TOP] = number01;
      result[RadiusEnum.BOTTOM] = number01;
    } else if (len == 3) {
      const number01 = parseInt(radiusArr[0]);
      const number02 = parseInt(radiusArr[1]);
      const number03 = parseInt(radiusArr[2]);
      result[RadiusEnum.LEFT] = number02;
      result[RadiusEnum.RIGHT] = number02;
      result[RadiusEnum.TOP] = number01;
      result[RadiusEnum.BOTTOM] = number03;
    } else {
      Object.keys(result).forEach((item, index) => {
        result[item as keyof typeof result] = parseInt(radiusArr[index]);
      });
    }

    return result;
  }, [property]);

  const {
    [RadiusEnum.RIGHT]: radiusRight,
    [RadiusEnum.LEFT]: radiusLeft,
    [RadiusEnum.TOP]: radiusTop,
    [RadiusEnum.BOTTOM]: radiusBottom,
  } = radiusProperty;
  const sortRadius = [radiusTop, radiusRight, radiusBottom, radiusLeft];
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (value: number, key: "radius" | RadiusType) => {
    let result = null;
    if (key === "radius") {
      result = {
        ...property,
        "border-radius": `${value}px ${value}px ${value}px ${value}px`,
      };
    } else {
      const merge = Object.assign(radiusProperty, { [key]: value });
      result = {
        ...property,
        "border-radius": `${merge[RadiusEnum.TOP]}px ${
          merge[RadiusEnum.RIGHT]
        }px ${merge[RadiusEnum.BOTTOM]}px ${merge[RadiusEnum.LEFT]}px`,
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
    !open && setOpen(!unOpen);
  }, [radiusProperty]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ marginBottom: 24 }}>
      <Flex align="center" justify="space-between" style={{ marginBottom: 12 }}>
        <Text strong>{t("property.border_radius")}</Text>
        {open ? (
          <Button
            style={{ paddingRight: 0 }}
            onClick={() => {
              const minRadius = Math.min(...sortRadius);
              const radiusValue = `${minRadius}px ${minRadius}px ${minRadius}px ${minRadius}px`;

              setOpen(false);
              setProperty({ ...property, "border-radius": radiusValue });
            }}
            type="link"
          >
            {t("basic.less_option")}
          </Button>
        ) : (
          <Flex align="center">
            <Button
              style={{ paddingRight: 5 }}
              onClick={() => setOpen(true)}
              type="link"
            >
              {t("basic.more_option")}
            </Button>
            <EInputNumber
              hasForm={false}
              style={{ width: 74 }}
              step={1}
              value={Math.min(...sortRadius)}
              onChange={(value: number | null) =>
                onChange(value ?? 0, "radius")
              }
            />
          </Flex>
        )}
      </Flex>

      {open && (
        <>
          <Flex wrap justify="space-between" align="center" gap={12}>
            {(Object.keys(initRadiusValue).slice(0, 2) as RadiusType[]).map(
              (item, index) => {
                return (
                  <Flex
                    key={index}
                    gap={12}
                    style={{
                      flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                    }}
                  >
                    {radiusIconMap[item]}
                    <EInputNumber
                      hasForm={false}
                      style={{ width: 85 }}
                      value={sortRadius[index]}
                      step={1}
                      onChange={(value: number | null) =>
                        onChange(value ?? 0, item)
                      }
                    />
                  </Flex>
                );
              }
            )}
          </Flex>
          <Flex
            wrap
            justify="space-between"
            align="center"
            gap={12}
            style={{ flexDirection: "row-reverse", marginTop: 12 }}
          >
            {(Object.keys(initRadiusValue).slice(2) as RadiusType[]).map(
              (item, index) => {
                return (
                  <Flex
                    key={index}
                    gap={12}
                    style={{
                      flexDirection: index == 0 ? "row" : "row-reverse",
                    }}
                  >
                    {radiusIconMap[item]}
                    <EInputNumber
                      hasForm={false}
                      style={{ width: 85 }}
                      value={sortRadius[index + 2]}
                      step={1}
                      onChange={(value: number | null) =>
                        onChange(value ?? 0, item)
                      }
                    />
                  </Flex>
                );
              }
            )}
          </Flex>
        </>
      )}
    </div>
  );
};
export default BorderRadius;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
