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
import useProperty from "@/hooks/useProperty";
import EInputNumber from "../EInputNumber";
import toFirstUpperCase from "@/utils/toFirstUpperCase";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
enum PaddingEnum {
  LEFT = "padding-left",
  RIGHT = "padding-right",
  TOP = "padding-top",
  BOTTOM = "padding-bottom",
}
type PaddingType = `${PaddingEnum}`;

const initPaddingValue: Record<PaddingType, number> = {
  [PaddingEnum.TOP]: 0,
  [PaddingEnum.RIGHT]: 0,
  [PaddingEnum.BOTTOM]: 0,
  [PaddingEnum.LEFT]: 0,
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Padding = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [open, setOpen] = useState(false);
  const { property, setProperty } = useProperty();

  const paddingProperty = useMemo(() => {
    const result = { ...initPaddingValue };
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
      result[PaddingEnum.LEFT] = number02;
      result[PaddingEnum.RIGHT] = number02;
      result[PaddingEnum.TOP] = number01;
      result[PaddingEnum.BOTTOM] = number01;
    } else if (len == 3) {
      const number01 = parseInt(paddingArr[0]);
      const number02 = parseInt(paddingArr[1]);
      const number03 = parseInt(paddingArr[2]);
      result[PaddingEnum.LEFT] = number02;
      result[PaddingEnum.RIGHT] = number02;
      result[PaddingEnum.TOP] = number01;
      result[PaddingEnum.BOTTOM] = number03;
    } else {
      Object.keys(result).forEach((item, index) => {
        result[item as keyof typeof result] = parseInt(paddingArr[index]);
      });
    }

    return result;
  }, [property]);

  const {
    [PaddingEnum.RIGHT]: paddingRight,
    [PaddingEnum.LEFT]: paddingLeft,
    [PaddingEnum.TOP]: paddingTop,
    [PaddingEnum.BOTTOM]: paddingBottom,
  } = paddingProperty;
  const sortPadding = [paddingTop, paddingRight, paddingBottom, paddingLeft];
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (value: number, key: "padding" | PaddingType) => {
    let result = null;
    if (key === "padding") {
      result = {
        ...property,
        padding: `${value}px ${value}px ${value}px ${value}px`,
      };
    } else {
      const merge = Object.assign(paddingProperty, { [key]: value });
      result = {
        ...property,
        padding: `${merge[PaddingEnum.TOP]}px ${merge[PaddingEnum.RIGHT]}px ${
          merge[PaddingEnum.BOTTOM]
        }px ${merge[PaddingEnum.LEFT]}px`,
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
    !open && setOpen(!unOpen);
  }, [paddingProperty]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <Flex align="center" justify="space-between">
        <Text strong>Padding</Text>
        {open ? (
          <Button
            style={{ paddingRight: 0 }}
            onClick={() => {
              const minPadding = Math.min(...sortPadding);
              const paddingValue = `${minPadding}px ${minPadding}px ${minPadding}px ${minPadding}px`;

              setOpen(false);
              setProperty({ ...property, padding: paddingValue });
            }}
            type="link"
          >
            Less Options
          </Button>
        ) : (
          <Flex align="center">
            <Button
              style={{ paddingRight: 5 }}
              onClick={() => setOpen(true)}
              type="link"
            >
              More Options
            </Button>
            <EInputNumber
              hasForm={false}
              value={Math.min(...sortPadding)}
              onChange={(value: number | null) =>
                onChange(value ?? 0, "padding")
              }
            />
          </Flex>
        )}
      </Flex>

      {open && (
        <Flex wrap justify="space-between">
          {(Object.keys(initPaddingValue) as PaddingType[]).map(
            (item, index) => {
              return (
                <Flex align="center" style={{ marginTop: 12 }} key={item}>
                  <Text style={{ width: 50, textAlign: "left" }}>
                    {toFirstUpperCase(item.split("-")[1])}
                  </Text>
                  <EInputNumber
                    hasForm={false}
                    style={{ width: 80 }}
                    value={sortPadding[index]}
                    onChange={(value: number | null) =>
                      onChange(value ?? 0, item)
                    }
                  />
                </Flex>
              );
            }
          )}
        </Flex>
      )}
    </>
  );
};
export default Padding;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
