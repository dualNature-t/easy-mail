/**
 * @file
 * @date 2024-05-31
 * @author haodong.wang
 * @lastModify  2024-05-31
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useEffect, useMemo, useState } from "react";
import useProperty from "@/hooks/useProperty";
import { Flex, InputNumber, Switch, Typography } from "antd";
import EInputNumber from "../EInputNumber";

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
  useEffect(() => {
    setOpen(width !== "");
  }, [width]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div>
      <Flex justify="space-between" style={{ marginBottom: 24 }}>
        <Text strong>Full Width</Text>
        <Switch
          value={width === ""}
          onChange={(value: boolean) => {
            if (value) {
              setProperty({ ...property, width: "" });
            } else {
              setProperty({ ...property, width: "200px" });
            }
          }}
        />
      </Flex>

      {open && (
        <Flex justify="space-between" style={{ marginBottom: 24 }}>
          <Text strong>Width</Text>
          <InputNumber
            step={10}
            min={0}
            value={parseInt(width)}
            onChange={(value: number | null) => {
              if (value) {
                setProperty({ ...property, width: `${value}px` });
              }
            }}
          />
        </Flex>
      )}
    </div>
  );
};
export default Width;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
