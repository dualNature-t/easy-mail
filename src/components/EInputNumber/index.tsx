/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Form, InputNumber, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useProperty } from "@/hooks";
import "./style.css";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface EInputNumberProps {
  hasForm?: boolean;
  name?: string;
  options?: Array<"px" | "%" | "-">;
  style?: React.CSSProperties;
  step?: number;
  label?: React.ReactNode;
  value?: number;
  percentMax?: number;
  onChange?: (value: number | null) => void;
}

const initOptions = [
  {
    value: "px",
    label: "px",
    className: "easy-mail-input-number-select-option",
  },
  { value: "%", label: "%", className: "easy-mail-input-number-select-option" },
  { value: "", label: "-", className: "easy-mail-input-number-select-option" },
];
const initStep = 10;
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EInputNumber: React.FC<EInputNumberProps> = ({
  hasForm = true,
  name,
  options,
  style,
  step = initStep,
  label,
  value,
  percentMax,
  onChange,
}): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { property } = useProperty();

  const unit = property?.[name as keyof typeof property];
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const selectOptions = options
    ? options.map((i) => {
        return initOptions.find((j) => j.label === i);
      })
    : [initOptions[0]];

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const getStep = () => {
    if (String(unit)?.includes("%") || String(unit)?.includes("px")) {
      return step === 0.1 ? initStep : step;
    }
    return step;
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  const InputEle = (
    <InputNumber
      min={0}
      max={percentMax}
      step={getStep()}
      style={style}
      className="easy-mail-input-number-input"
      value={value}
      onChange={onChange}
    />
  );

  const selectEle = (
    <Select
      value={"px"}
      allowClear={false}
      suffixIcon={false}
      className="easy-mail-input-number-select"
      variant="borderless"
      options={
        (hasForm ? selectOptions : [initOptions[0]]) as DefaultOptionType[]
      }
      dropdownStyle={{ padding: 0 }}
    />
  );

  return (
    <div style={{ position: "relative" }}>
      {hasForm ? (
        <>
          <Form.Item name={name} label={label}>
            {InputEle}
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
            {selectEle}
          </Form.Item>
        </>
      ) : (
        <>
          {InputEle}
          <div
            style={{
              position: "absolute",
              right: 25,
              top: 0,
              width: 20,
              marginBottom: 0,
              zIndex: 99,
            }}
          >
            {selectEle}
          </div>
        </>
      )}
    </div>
  );
};
export default EInputNumber;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
