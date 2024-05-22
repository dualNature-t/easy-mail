/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Padding from "@/components/Padding";
import useProperty from "@/hooks/useProperty";
import parseBackground from "@/utils/parseBackground";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  ColorPicker,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
  Typography,
  Upload,
} from "antd";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SectionBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { property, setProperty } = useProperty();

  const { color, url } = parseBackground(property.background);
  const bgStyleValue =
    property["background-size"] == "cover"
      ? "cover"
      : property["background-repeat"];

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
          <Text type="secondary">LAYOUT</Text>
        </Divider>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SECTION STYLES</Text>
        </Divider>

        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 12 }}
        >
          <Col>
            <Text strong>Border Radius</Text>
          </Col>
          <Col>
            <InputNumber
              value={parseInt(property["border-radius"])}
              onChange={(value) => {
                onChange({ "border-radius": `${value}px` });
              }}
            />
          </Col>
        </Row>

        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 12 }}
        >
          <Col>
            <Text strong>Border</Text>
          </Col>
          <Col>
            <Switch
              value={!!property["border"]}
              onChange={(value) => {
                onChange({ border: value ? `1px solid #eee` : "" });
              }}
            />
          </Col>
        </Row>

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
              value={color}
              format="hex"
              onChange={(_, hex: string) => {
                // onChange({ "background-color": hex });
              }}
            />
          </Col>
        </Row>

        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 12 }}
          gutter={[0, 6]}
        >
          <Col span={24}>
            <Row justify="space-between" align="middle">
              <Col>
                <Text strong>Background Image</Text>
              </Col>
              <Col>
                <Upload>
                  <Button type="link" icon={<UploadOutlined />}>
                    Upload Image File
                  </Button>
                </Upload>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Input value={url} placeholder="Enter a url" />
          </Col>
        </Row>

        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 12 }}
        >
          <Col>
            <Text strong>Background Style</Text>
          </Col>
          <Col>
            <Select
              value={bgStyleValue}
              style={{ width: 120 }}
              options={[
                { value: "repeat", label: "Repeat" },
                { value: "no-repeat", label: "No-Repeat" },
                { value: "cover", label: "Cover" },
              ]}
              onChange={(value) => {
                console.log(value);
                onChange(
                  value == "cover"
                    ? { "background-size": value }
                    : { "background-repeat": value }
                );
              }}
            ></Select>
          </Col>
        </Row>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>

        <Padding
          value={property["padding"]}
          onChange={(styleObj) => {
            onChange(styleObj);
          }}
        />
      </>
    </>
  );
};
export default SectionBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
