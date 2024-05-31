/**
 * @file
 * @date 2024-04-24
 * @author haodong.wang
 * @lastModify  2024-04-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { createContext, useEffect } from "react";
import style from "./style.module.scss";
import { Col, Form, FormInstance, Row, Typography, theme } from "antd";
import useProperty, { validFocusNodeTagNameType } from "@/hooks/useProperty";
import {
  BodyBlock,
  ButtonBlock,
  DividerBlock,
  ImageBlock,
  SectionBlock,
  SocialBlock,
  SpacerBlock,
  TextBlock,
} from "@/components";
const { Title } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
const propertyContentMap: Record<validFocusNodeTagNameType, React.ReactNode> = {
  "mj-body": <BodyBlock />,
  "mj-section": <SectionBlock />,
  "mj-text": <TextBlock />,
  "mj-image": <ImageBlock />,
  "mj-button": <ButtonBlock />,
  "mj-divider": <DividerBlock />,
  "mj-spacer": <SpacerBlock />,
  "mj-social": <SocialBlock />,
};

const NumberPropertyMap = ["width", "font-size", "border-width", "height"];

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Property = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const { nodeName, property, setProperty } = useProperty();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const transformProperty = (property?: object) => {
    if (!property) return;
    const propertyMap: Record<string, string | number> = {};
    for (const key in property) {
      if (
        NumberPropertyMap.includes(key) &&
        !(property[key as keyof typeof property] as string).includes("%")
      ) {
        propertyMap[key] = parseInt(property[key as keyof typeof property]);
      } else {
        propertyMap[key] = property[key as keyof typeof property];
      }
    }
    return propertyMap;
  };

  const unTransformProperty = (property: object) => {
    const propertyMap: Record<string, string> = {};
    for (const key in property) {
      const value = property[key as keyof typeof property];
      if (NumberPropertyMap.includes(key)) {
        propertyMap[key] = typeof value == "number" ? `${value}px` : value;
      } else {
        propertyMap[key] = property[key as keyof typeof property];
      }
    }
    return propertyMap;
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    form.setFieldsValue(transformProperty(property));
  }, [property]);

  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div className={style.property_container}>
      <Row>
        <Col
          style={{ background: token.colorPrimary, width: 4, marginRight: 4 }}
        ></Col>
        <Col>
          <Title className={style.property_title} level={4}>
            {nodeName?.split("-")[1].toUpperCase()}
          </Title>
        </Col>
      </Row>

      <Form
        colon={false}
        name="property"
        form={form}
        preserve={false}
        onValuesChange={async (value, allVlaue) => {
          console.log("change", value, allVlaue);
          setProperty(value, unTransformProperty(allVlaue));
        }}
        className={style.property_form}
      >
        {propertyContentMap[nodeName]}
      </Form>
    </div>
  );
};
export default Property;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
