/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Border from "@/components/Border";
import BorderRadius from "@/components/BorderRadius";
import Padding from "@/components/Padding";
import { appDataType } from "@/context/appContext";
import useAppData from "@/hooks/useAppData";
import useFocusNode from "@/hooks/useFocusNode";
import getMjmlByNode from "@/utils/getMjmlByNode";
import { updateSectionLayout } from "@/utils/treeTool";
import {
  Button,
  Col,
  ColorPicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
  Typography,
  Upload,
} from "antd";
import { Color } from "antd/es/color-picker";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SectionBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleLayoutChange = (
    type: "1" | "2" | "3" | "4" | "left" | "right"
  ) => {
    const { idx } = getMjmlByNode(appData, focusNode);
    const result = updateSectionLayout(appData, idx as string, type);
    setAppData(result as appDataType);
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

        <Row justify="space-around">
          <Col onClick={() => handleLayoutChange("1")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 4.5H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM4 3a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 4 17h12a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16 3H4z"
              ></path>
              <title>1 Column</title>
            </svg>
          </Col>
          <Col onClick={() => handleLayoutChange("2")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4.5h2.75a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm-2.5 1A2.5 2.5 0 0 1 4 3h2.75a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-9zm11.75-1H16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2.75a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm-2.5 1a2.5 2.5 0 0 1 2.5-2.5H16a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-2.75a2.5 2.5 0 0 1-2.5-2.5v-9z"
              ></path>
              <title>2 Column</title>
            </svg>
          </Col>
          <Col onClick={() => handleLayoutChange("3")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 4.75C1.5 3.784 2.284 3 3.25 3h1.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 4.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75V4.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25h-1.5zm4.25.25C7.5 3.784 8.284 3 9.25 3h1.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75V4.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25h-1.5zm6-1.5a1.75 1.75 0 0 0-1.75 1.75v10.5c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 16.75 3h-1.5zM15 4.75a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V4.75z"
              ></path>
              <title>3 Column</title>
            </svg>
          </Col>
          <Col onClick={() => handleLayoutChange("4")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75 3c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h1C4.44 17 5 16.44 5 15.75V4.25C5 3.56 4.44 3 3.75 3h-1zM3 4.75a.25.25 0 0 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75zM7.25 3C6.56 3 6 3.56 6 4.25v11.5c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25V4.25C9.5 3.56 8.94 3 8.25 3h-1zm.25 1.75a.25.25 0 0 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75zm3-.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25V4.25zm1.75.25a.25.25 0 0 0-.25.25v10.5a.25.25 0 1 0 .5 0V4.75a.25.25 0 0 0-.25-.25zm4-1.5C15.56 3 15 3.56 15 4.25v11.5c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25h-1zm.25 1.75a.25.25 0 1 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75z"
              ></path>
              <title>4 Column</title>
            </svg>
          </Col>
          <Col onClick={() => handleLayoutChange("left")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 5.5A2.5 2.5 0 0 1 4 3h5a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 9 17H4a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zM12.5 5.5A2.5 2.5 0 0 1 15 3h1a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-1a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
              ></path>
              <title>2 Columns left split</title>
            </svg>
          </Col>
          <Col onClick={() => handleLayoutChange("right")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 5.5A2.5 2.5 0 0 1 11 3h5a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-5a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zM1.5 5.5A2.5 2.5 0 0 1 4 3h1a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 5 17H4a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
              ></path>
              <title>2 Columns right split</title>
            </svg>
          </Col>
        </Row>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SECTION STYLES</Text>
        </Divider>

        <BorderRadius />
        <Border />

        <Form.Item
          name="background-color"
          label={<Text strong>Background Color</Text>}
          normalize={(value: Color) => {
            return value.toHexString();
          }}
        >
          <ColorPicker showText format="hex" />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          name="background-url"
          label={<Text strong>Background Image</Text>}
          normalize={(value: string) => {
            return value === "" ? undefined : value;
          }}
        >
          <Input placeholder="Enter a url" />
        </Form.Item>

        <Form.Item
          name="background-repeat"
          label={<Text strong>Background Repeat</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "repeat", label: "Repeat" },
              { value: "no-repeat", label: "No-Repeat" },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item
          name="background-size"
          label={<Text strong>Background Size</Text>}
        >
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={[
              { value: "auto", label: "Auto" },
              { value: "cover", label: "Cover" },
              { value: "contain", label: "Contain" },
            ]}
          ></Select>
        </Form.Item>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>

        <Padding />
      </>
    </>
  );
};
export default SectionBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
