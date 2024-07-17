import { useEffect, useMemo, useState } from "react";
import useDataTransfer from "./useDataTransfer";
import useFocusNode from "./useFocusNode";
import useAppData from "./useAppData";
import { AppDataType, DROP_BLOCK } from "@/constant";
import getIdxByNode from "@/utils/getIdxByNode";
import { theme } from "antd";
import { addBlock, moveBlock } from "@/utils/treeTools";

const useDropBlock = () => {
  const { token } = theme.useToken();
  const { dataTransfer } = useDataTransfer();
  const { appData, setAppData } = useAppData();
  const [block, setBlock] = useState<HTMLElement | null>(null);
  const { focusNode } = useFocusNode();

  const { style, hoverStyle } = useMemo(() => {
    const normalStyle = `border: 1px dashed ${token.colorPrimaryBorder}; background-color: ${token.colorPrimaryBg}; padding: 20px; text-align: center; font-size: 14px; line-height: 14px; color: ${token.colorPrimaryTextHover};`;
    return {
      style: normalStyle,
      hoverStyle: `${normalStyle} background-color: ${token.colorPrimaryBgHover}`,
    };
  }, [token]);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("class", DROP_BLOCK);
    div.setAttribute("style", style);
    div.innerText = "Drop here";

    setBlock(div);
  }, []);

  useEffect(() => {
    if (!block || !dataTransfer) return;

    const onDragEnter = () => {
      block.setAttribute("style", hoverStyle);
    };

    const onDragLeave = () => {
      block.setAttribute("style", style);
    };

    const onDrop = () => {
      const idx = getIdxByNode({
        node: block,
        transferAction: dataTransfer.type,
      });
      if (dataTransfer.type == "add") {
        setAppData(
          addBlock({ appData: appData as AppDataType, idx, dataTransfer })
        );
      } else if (dataTransfer.type === "move") {
        const originIdx = getIdxByNode({
          node: focusNode as Element,
          transferAction: dataTransfer.type,
        });
        setAppData(
          moveBlock({ appData: appData as AppDataType, idx, originIdx })
        );
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
