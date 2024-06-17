import { useEffect, useState } from "react";
import useDataTransfer from "./useDataTransfer";
import useFocusNode from "./useFocusNode";
import { appDataType } from "@/context/appContext";
import getMjmlByNode from "@/utils/getMjmlByNode";
import useAppData from "./useAppData";
import { addTreeItem, moveTreeItem } from "@/utils/treeTool";

const normalStyle =
  "border: 1px dashed #ccc; padding: 20px 20px; text-align: center; font-size: 14px;";
const hoverStyle = `${normalStyle} background-color: rgba(0,0,0,0.1)`;

const useDropBlock = () => {
  const { dataTransfer, setDataTransfer } = useDataTransfer();
  const { appData, setAppData } = useAppData();
  const [block, setBlock] = useState<HTMLDivElement | null>(null);
  const { focusNode } = useFocusNode();

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("class", "drop-block");
    div.setAttribute("style", normalStyle);
    div.innerText = "Drop here";

    setBlock(div);
  }, []);

  useEffect(() => {
    if (!block || !dataTransfer) return;
    const onDragEnter = (e: DragEvent) => {
      block.setAttribute("style", hoverStyle);
    };
    const onDragLeave = (e: DragEvent) => {
      block.setAttribute("style", normalStyle);
    };
    const onDrop = (e: DragEvent) => {
      if (dataTransfer?.type == "add") {
        const { idx } = getMjmlByNode(appData, block);
        const result = addTreeItem(appData, idx as string, dataTransfer);
        setAppData(result as appDataType);
      } else if (dataTransfer.type === "move") {
        const { idx: originIdx } = getMjmlByNode(
          appData,
          focusNode as Element,
          true
        );
        const { idx } = getMjmlByNode(appData, block, true);

        const result = moveTreeItem(
          appData,
          idx as string,
          originIdx as string
        );

        setAppData(result as appDataType);
      }
    };

    const onDragOver = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };

    block.addEventListener("dragenter", onDragEnter);
    block.addEventListener("dragleave", onDragLeave);
    block.addEventListener("dragover", onDragOver);
    block.addEventListener("drop", onDrop);

    return () => {
      block.removeEventListener("dragenter", onDragEnter);
      block.removeEventListener("dragleave", onDragLeave);
      block.removeEventListener("drop", onDrop);
      block.removeEventListener("dragover", onDragOver);
    };
  }, [block, dataTransfer, appData]);

  return { block };
};

export default useDropBlock;
