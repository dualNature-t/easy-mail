/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import style from "./style.module.scss";
import useAppData from "@/hooks/useAppData";
import useFocusNode from "@/hooks/useFocusNode";
import getMjmlByNode from "@/utils/getMjmlByNode";
import {
  ColorPicker,
  Form,
  Input,
  InputNumber,
  Segmented,
  Switch,
  Typography,
} from "antd";
import { appDataType, tagNameType } from "@/context/appContext";
import { onTreePropertyChange } from "@/utils/treeTool";
import {
  getStyleCategoryByNode,
  setStyleByNode,
} from "@/utils/makeStyleByNode";
const { Title } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
const PxInputNumber = (
  <InputNumber
    step={10}
    formatter={(value) => `${value}px`}
    parser={(value) => value?.replace("px", "") as unknown as number}
  />
);

const propertyComponentMap: Record<
  string,
  { type: string; component: React.ReactNode }
> = {
  "background-color": {
    type: "colorPicker",
    component: <ColorPicker showText format="hex" />,
  },
  width: {
    type: "number",
    component: PxInputNumber,
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
    component: PxInputNumber,
  },
  "font-size": {
    type: "number",
    component: PxInputNumber,
  },
  color: {
    type: "colorPicker",
    component: <ColorPicker showText format="hex" />,
  },
  "line-height": {
    type: "number",
    component: PxInputNumber,
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

const propertyByTagNamesMap: Record<
  Exclude<tagNameType, "mjml" | "mj-column">,
  string[]
> = {
  "mj-body": ["background-color", "width"],
  "mj-section": ["full-width", "background-color", "background-url", "padding"],
  "mj-text": ["font-size", "color", "line-height", "align", "padding"],
  "mj-button": ["font-size", "color", "line-height", "align", "padding"],
  "mj-image": ["align", "border", "padding", "src", "width"],
  "mj-divider": ["align", "padding", "width"],
  "mj-spacer": ["padding"],
  "mj-social": ["align", "padding"],
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Property = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();

  // const { mjml, idx } = getMjmlByNode(appData, focusNode);

  // const tagName = mjml?.tagName ?? "mj-body";
  // const tagAttrs =
  //   propertyByTagNamesMap[tagName as keyof typeof propertyByTagNamesMap];

  const renderAttrs = getStyleCategoryByNode(focusNode);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const formatChangeValue = (value: Record<string, unknown>) => {
    const result: Record<string, unknown> = {};
    const key = Object.keys(value)[0];
    const type = propertyComponentMap[key].type;
    if (type == "colorPicker") {
      result[key] = (value[key] as { toHexString: () => string }).toHexString();
    } else if (type == "number") {
      result[key] = `${value[key]}px`;
    } else {
      result[key] = value[key];
    }
    return result;
  };

  const handleValuesChange = (changeValue: Record<string, unknown>) => {
    // console.log(focusNode, changeValue, focusNode?.getAttribute("style"));
    // focusNode?.setAttribute("style", JSON.stringify(changeValue));
    setStyleByNode(focusNode, changeValue);

    // const result = onTreePropertyChange(
    //   appData,
    //   idx,
    //   formatChangeValue(changeValue)
    // );
    // setAppData(result as appDataType);
  };

  const getInitValue = () => {
    const flatAttrs = Object.values(renderAttrs).reduce((cur, pre) => {
      return { ...cur, ...pre };
    }, {});

    const result = {};
    Object.keys(flatAttrs).forEach((item) => {
      const type = propertyComponentMap[item].type;
      result[item] =
        type == "number" ? parseInt(flatAttrs[item]) : flatAttrs[item];
    });
    return result;
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div className={style.property_container}>
      {/* <Title className={style.property_title} level={5}>
        {tagName.split("-")[1]}
      </Title>
      <Form initialValues={getInitValue()} onValuesChange={handleValuesChange}>
        {Object.keys(renderAttrs).map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Title
                className={style.property_title__secondary}
                type="secondary"
                level={5}
              >
                {item}
              </Title>
              {Object.keys(renderAttrs[item]).map((citem, cindex) => {
                return (
                  <Form.Item
                    key={cindex}
                    className={style.property_formItem}
                    colon={false}
                    name={citem}
                    label={
                      <Title
                        className={style.property_formItem_title}
                        level={5}
                      >
                        {citem}
                      </Title>
                    }
                  >
                    {
                      propertyComponentMap[
                        citem as keyof typeof propertyComponentMap
                      ].component
                    }
                  </Form.Item>
                );
              })}
            </React.Fragment>
          );
        })}
      </Form> */}
    </div>
  );
};
export default Property;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
