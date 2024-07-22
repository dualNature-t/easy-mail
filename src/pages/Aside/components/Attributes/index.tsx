/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Col, Form, Row, theme, Typography } from "antd";
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
import { BasicEnum } from "@/constant";
import { useEffect } from "react";
import { useFocusNode, useProperty } from "@/hooks";
import { isEmpty } from "@/utils";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
const BlockNodeMap = {
  [BasicEnum.MJ_BODY]: <BodyBlock />,
  [BasicEnum.MJ_SECTION]: <SectionBlock />,
  [BasicEnum.MJ_TEXT]: <TextBlock />,
  [BasicEnum.MJ_IMAGE]: <ImageBlock />,
  [BasicEnum.MJ_BUTTON]: <ButtonBlock />,
  [BasicEnum.MJ_DIVEDER]: <DividerBlock />,
  [BasicEnum.MJ_SPACER]: <SpacerBlock />,
  [BasicEnum.MJ_SOCIAL]: <SocialBlock />,
};
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Attributes = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/

  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const { focusNode } = useFocusNode();
  const { property, setProperty } = useProperty();

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const nodeTag = focusNode?.classList[0] ?? BasicEnum.MJ_BODY;
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    if (!property) return;
    const keys = Object.keys(property);
    const result: Record<string, string | number> = {};
    keys.forEach((key) => {
      const value = property[key as keyof typeof property];
      const valueStr = String(value);
      if (typeof value === "number") {
        result[key] = value;
        result[`${key}_unit`] = "";
      } else if (valueStr.includes("px")) {
        result[key] = parseInt(value);
        result[`${key}_unit`] = "px";
      } else if (valueStr.includes("%")) {
        result[key] = parseInt(value);
        result[`${key}_unit`] = "%";
      } else {
        result[key] = value;
      }
    });

    form.setFieldsValue(result);
  }, [property]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div style={{ padding: 20 }}>
      <Row>
        <Col
          style={{ background: token.colorPrimary, width: 4, marginRight: 4 }}
        ></Col>
        <Col>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {nodeTag?.split("-")[1].toUpperCase()}
          </Typography.Title>
        </Col>
      </Row>
      <Form
        form={form}
        colon={false}
        preserve={false}
        style={{ textAlign: "right" }}
        onValuesChange={(_, allValue) => {
          const keys = Object.keys(allValue);
          const result: Record<string, string | number> = {};
          keys.forEach((key) => {
            const value = allValue[key];
            if (!key.includes("unit")) {
              result[key] = value;
            } else {
              const propertyKey = key.split("_")[0];
              if (!isEmpty(value)) {
                const propertyValue =
                  value === "%"
                    ? Number(result[propertyKey]) > 100
                      ? 100
                      : result[propertyKey]
                    : result[propertyKey];
                result[propertyKey] = `${propertyValue}${value}`;
              }
            }
          });
          setProperty(result);
        }}
      >
        {BlockNodeMap[nodeTag as keyof typeof BlockNodeMap]}
      </Form>
    </div>
  );
};
export default Attributes;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
