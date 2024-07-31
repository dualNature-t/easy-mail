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
import { useConfig, useFocusNode, useProperty } from "@/hooks";
import { useTranslation } from "react-i18next";
import { fileToBase64 } from "@/utils";
import { useEffect, useState } from "react";
import "./style.css";
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
  const { onUpload, onUploadFocusChange } = useConfig();
  const { focusNode } = useFocusNode();

  const { setProperty } = useProperty() as {
    property: { src: string } | undefined;
    setProperty: (property: { [key: string]: string }) => void;
  };

  const [loading, setLoading] = useState(false);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".png,.jpg,.jpeg,.webp");
    input.click();
    input.onchange = async () => {
      try {
        var file = input.files?.[0] as File;
        let url = "";
        setLoading(true);
        if (onUpload) {
          url = (await onUpload(file)).url;
        } else {
          url = await fileToBase64(file);
        }
        setProperty({ [name]: url });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  useEffect(() => {
    return () => {
      if (loading) {
        onUploadFocusChange();
      }
    };
  }, [focusNode, loading]);
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Form.Item
      className="easy-marl-src-container"
      labelCol={{ span: 24 }}
      name={name}
      label={
        <Flex align="center" justify="space-between" style={{ width: "100%" }}>
          <Text strong>{label}</Text>
          <Button
            type="link"
            icon={<UploadOutlined />}
            style={{ padding: 0 }}
            loading={loading}
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
