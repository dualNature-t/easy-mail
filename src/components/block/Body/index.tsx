/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import useFocusNode from "@/hooks/useFocusNode";
import useProperty from "@/hooks/useProperty";
import {
  Col,
  ColorPicker,
  Divider,
  Form,
  InputNumber,
  Row,
  Typography,
} from "antd";

const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const BodyBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { property, setProperty } = useProperty();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onChange = (styleObj: Record<string, string>) => {
    setProperty(styleObj);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">BODY STYLES</Text>
        </Divider>

        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 12 }}
        >
          <Col>
            <Text strong>Background Color</Text>
          </Col>
          <Col>
            <ColorPicker
              showText
              value={property["background-color"]}
              format="hex"
              onChange={(_, hex: string) => {
                onChange({ "background-color": hex });
              }}
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col>
            <Text strong>Width</Text>
          </Col>
          <Col>
            <InputNumber
              value={parseInt(property["max-width"])}
              step={10}
              onChange={(value) => {
                onChange({ "max-width": `${value}px` });
              }}
            />
          </Col>
        </Row>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">TEMPLATE DEFAULTS</Text>
        </Divider>
      </>
    </>
  );
};
export default BodyBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
