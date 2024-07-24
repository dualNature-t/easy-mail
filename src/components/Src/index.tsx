/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { UploadOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import { useProperty } from "@/hooks";
import "./style.css";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface SrcProps {
  label: string;
  name: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Src: React.FC<SrcProps> = ({ label, name }): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { t } = useTranslation();

  const { setProperty } = useProperty() as {
    property: { src: string } | undefined;
    setProperty: (property: { src: string }) => void;
  };
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const upload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(file.name);
      }, 2000);
    });
  };

  const handleUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".png,.jpg,.jpeg,.webp");
    input.click();
    input.onchange = async () => {
      var file = input.files?.[0] as File;
      const result = await upload(file);
      setProperty({ src: result });
    };
  };

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Form.Item
      className="src-container"
      labelCol={{ span: 24 }}
      name={name}
      label={
        <Flex align="center" justify="space-between" style={{ width: "100%" }}>
          <Text strong>{label}</Text>
          <Button
            type="link"
            icon={<UploadOutlined />}
            style={{ padding: 0 }}
            onClick={handleUpload}
          >
            {t("basic.upload_image")}
          </Button>
        </Flex>
      }
      normalize={(value: string) => {
        return value === "" ? undefined : value;
      }}
    >
      <Input placeholder="https://www.example.com" />
    </Form.Item>
  );
};
export default Src;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
