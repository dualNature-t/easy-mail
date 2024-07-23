/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Card, Flex, Typography } from "antd";
import { BasicBlockType, ColumnType, DataTransferMapType } from "@/constant";
import { useDataTransfer } from "@/hooks";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface DragBlocksProps {
  value: DataTransferMapType<ColumnType | BasicBlockType>[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DragBlocks: React.FC<DragBlocksProps> = ({ value }): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { setDataTransfer } = useDataTransfer();
  const { t } = useTranslation();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const onDragStart = (
    item: DataTransferMapType<ColumnType | BasicBlockType>
  ) => {
    setDataTransfer({
      type: "add",
      data: { type: item.type, value: item.value },
    });
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Flex wrap style={{ margin: "10px 0" }} justify="space-between">
      {value.map((item, index) => {
        return (
          <Card
            style={{ width: 96, height: 96, marginBottom: 10 }}
            styles={{
              body: {
                padding: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
            hoverable
            key={index}
            draggable
            onDragStart={() => onDragStart(item)}
          >
            {item.icon}
            <Text style={{ marginTop: 4 }} strong>
              {t(`block.${item.label}`)}
            </Text>
          </Card>
        );
      })}
    </Flex>
  );
};
export default DragBlocks;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
