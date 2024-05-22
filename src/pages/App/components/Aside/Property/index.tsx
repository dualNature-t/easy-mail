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
import { Col, Form, Row, Typography, theme } from "antd";
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
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/

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

      {propertyContentMap[nodeName]}
    </div>
  );
};
export default Property;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
