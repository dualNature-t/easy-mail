/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Flex, theme } from "antd";
import { useTranslation } from "react-i18next";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */

/** This section will include all the interface for this tsx file */
interface ECheckboxProps {
  style?: React.CSSProperties;
  value: string[];
  options: { label: string | React.ReactNode; value: string }[];
  onChange: (value: string[]) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ECheckbox: React.FC<ECheckboxProps> = ({
  style,
  value,
  options,
  onChange,
}): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();
  const { t } = useTranslation();
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
    <Flex style={style} justify="space-between" align="center">
      {options.map((option) => {
        const isActive = value.includes(option.value);
        return (
          <div
            onClick={() => {
              if (isActive) {
                onChange(value.filter((v) => v !== option.value));
              } else {
                onChange([...value, option.value]);
              }
            }}
            style={{
              width: 55,
              border: `1px solid ${
                isActive ? token.colorPrimaryBorder : token.colorBorder
              }`,
              backgroundColor: isActive ? token.colorPrimaryBg : "transparent",
              color: isActive ? token.colorPrimaryText : token.colorText,
              cursor: "pointer",
              borderRadius: "4px",
              textAlign: "center",
            }}
            key={option.value}
          >
            {t(`property.${option.label}`)}
          </div>
        );
      })}
    </Flex>
  );
};
export default ECheckbox;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
