/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from "react";
import "./style.css";
import { Form, InputNumber, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface EInputNumberProps {
  name: string;
  options?: Array<"px" | "%" | "-">;
  style?: React.CSSProperties;
  step?: number;
  label?: React.ReactNode;
}

const initOptions = [
  {
    value: "px",
    label: "px",
    className: "eInputNumber-select-option",
  },
  { value: "%", label: "%", className: "eInputNumber-select-option" },
  { value: "", label: "-", className: "eInputNumber-select-option" },
];
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EInputNumber: React.FC<EInputNumberProps> = ({
  name,
  options,
  style,
  step = 10,
  label,
}): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const selectOptions = options
    ? options.map((i) => {
        return initOptions.find((j) => j.label === i);
      })
    : initOptions;
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ position: "relative" }}>
      <Form.Item name={name} label={label}>
        <InputNumber
          min={0}
          // max={unit == "%" ? 100 : undefined}
          step={step}
          style={style}
          className="eInputNumber-input"
        />
      </Form.Item>

      <Form.Item
        name={`${name}_unit`}
        style={{
          position: "absolute",
          right: 25,
          top: 0,
          width: 20,
          marginBottom: 0,
          zIndex: 99,
        }}
      >
        <Select
          allowClear={false}
          suffixIcon={false}
          className="eInputNumber-select"
          variant="borderless"
          options={selectOptions as DefaultOptionType[]}
          dropdownStyle={{ padding: 0 }}
        />
      </Form.Item>
    </div>
  );
};
export default EInputNumber;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
