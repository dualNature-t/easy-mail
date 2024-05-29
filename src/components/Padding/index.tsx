/**
 * @file
 * @date 2024-05-21
 * @author haodong.wang
 * @lastModify  2024-05-21
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, InputNumber, Row, Typography } from "antd";
import useProperty from "@/hooks/useProperty";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Padding = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [open, setOpen] = useState(false);
  const { property } = useProperty();
  // console.log(property);
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
    <>
      <Row align="middle" justify="space-between" style={{ marginBottom: 12 }}>
        <Col>
          <Text strong>Padding</Text>
        </Col>
        <Col>
          {open ? (
            <Button onClick={() => setOpen(false)} type="link">
              Less Options
            </Button>
          ) : (
            <Row align="middle">
              <Col>
                <Button onClick={() => setOpen(true)} type="link">
                  More Options
                </Button>
              </Col>
              <Col>
                <Form.Item noStyle name="padding">
                  <InputNumber step={10} />
                </Form.Item>
              </Col>
            </Row>
          )}
        </Col>
      </Row>

      {open && (
        <Row wrap={true} gutter={[12, 12]}>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Top</Text>
              </Col>
              <Col>
                <Form.Item noStyle name="padding-top">
                  <InputNumber step={10} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Right</Text>
              </Col>
              <Col>
                <Form.Item noStyle name="padding-right">
                  <InputNumber step={10} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Bottom</Text>
              </Col>
              <Col>
                <Form.Item noStyle name="padding-bottom">
                  <InputNumber step={10} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row align="middle" justify="space-between">
              <Col>
                <Text>Left</Text>
              </Col>
              <Col>
                <Form.Item noStyle name="padding-left">
                  <InputNumber step={10} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};
export default Padding;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
