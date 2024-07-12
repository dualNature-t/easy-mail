/**
 * @file
 * @date 2024-06-27
 * @author haodong.wang
 * @lastModify  2024-06-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Card, Flex } from "antd";
import { BasicBlockType, ColumnType, DataTransferMapType } from "@/constant";
import useDataTransfer from "@/hooks/useDataTransfer";
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
    <Flex wrap gap={10} style={{ margin: "10px 0" }}>
      {value.map((item, index) => {
        return (
          <Card
            style={{ width: 96, height: 96 }}
            styles={{
              body: {
                padding: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
            hoverable
            key={index}
            draggable
            onDragStart={() => onDragStart(item)}
          >
            {item.label}
          </Card>
        );
      })}
    </Flex>
  );
};
export default DragBlocks;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
