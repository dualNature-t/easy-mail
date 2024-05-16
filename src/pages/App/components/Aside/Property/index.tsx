/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect } from "react";
import style from "./style.module.scss";
import {
  ColorPicker,
  Form,
  Input,
  InputNumber,
  Segmented,
  Switch,
  Typography,
} from "antd";
import useProperty from "@/hooks/useProperty";
const { Title } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export const propertyComponentMap: Record<
  string,
  { type: string; component: React.ReactNode }
> = {
  "background-color": {
    type: "color",
    component: <ColorPicker showText format="hex" />,
  },
  width: {
    type: "number",
    component: <InputNumber />,
  },
  "full-width": {
    type: "boolean",
    component: <Switch />,
  },
  "background-url": {
    type: "string",
    component: <Input />,
  },
  padding: {
    type: "number",
    component: <InputNumber />,
  },
  "font-size": {
    type: "number",
    component: <InputNumber />,
  },
  color: {
    type: "color",
    component: <ColorPicker showText format="hex" />,
  },
  "line-height": {
    type: "number",
    component: <InputNumber />,
  },
  align: {
    type: "string",
    component: <Segmented<string> options={["left", "center", "right"]} />,
  },
  border: {
    type: "boolean",
    component: <Switch />,
  },
  src: {
    type: "string",
    component: <Input />,
  },
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Property = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [form] = Form.useForm();
  const { nodeName, property, setProperty } = useProperty();

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleValuesChange = (value: Record<string, unknown>) => {
    const result = formatFormValueToProperty(property, value);
    setProperty(result);
  };

  const formatPropertyToFormValue = (property: Record<string, unknown>) => {
    const result: Record<string, string | number> = {};
    Object.keys(property).forEach((item) => {
      const propertyType = propertyComponentMap[item].type;
      const propertyValue = property[item];
      if (propertyType === "number") {
        result[item] = parseInt(propertyValue as string);
      } else {
        result[item] = propertyValue as string;
      }
    });

    return result;
  };

  const formatFormValueToProperty = (
    property: Record<string, unknown>,
    value: Record<string, unknown>
  ) => {
    const key = Object.keys(value)[0];
    const valueType = propertyComponentMap[key].type;

    let result = { [key]: value[key] };
    if (valueType == "number") {
      result = { [key]: `${value[key]}px` };
    } else if (valueType == "color") {
      result = {
        [key]: (value[key] as { toHexString: () => string }).toHexString(),
      };
    }

    return { ...property, ...result } as Record<string, string>;
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    form.setFieldsValue(formatPropertyToFormValue(property));
  }, [property]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div className={style.property_container}>
      <Title className={style.property_title} level={5}>
        {nodeName?.split("-")[1]}
      </Title>
      <Form form={form} onValuesChange={handleValuesChange}>
        {Object.keys(property).map((citem, cindex) => {
          return (
            <Form.Item
              key={cindex}
              className={style.property_formItem}
              colon={false}
              name={citem}
              label={
                <Title className={style.property_formItem_title} level={5}>
                  {citem}
                </Title>
              }
            >
              {
                propertyComponentMap[citem as keyof typeof propertyComponentMap]
                  .component
              }
            </Form.Item>
          );
        })}
      </Form>
    </div>
  );
};
export default Property;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
