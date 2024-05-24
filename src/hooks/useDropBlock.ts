import { useEffect, useState } from "react";
import useDataTransfer from "./useDataTransfer";
import useFocusNode from "./useFocusNode";
import { basicElementTextMap } from "@/constant";
import { appDataType, basicTagNameType } from "@/context/appContext";
import {
  hasChildByColumn,
  mergeSectionByNode,
  mergeSectionByType,
} from "@/utils/mergeNode";
import getNodeByTarget from "@/utils/getNodeByTarget";
import getMjmlByNode from "@/utils/getMjmlByNode";
import useAppData from "./useAppData";
import { addTreeItem, moveTreeItem } from "@/utils/treeTool";

const normalStyle =
  "border: 1px dashed #ccc; padding: 20px; text-align: center; font-size: 14px;";
const hoverStyle = `${normalStyle} background-color: rgba(0,0,0,0.1)`;

const useDropBlock = () => {
  const { dataTransfer } = useDataTransfer();
  const { appData, setAppData } = useAppData();
  const [block, setBlock] = useState<HTMLDivElement | null>(null);
  const { focusNode, setFocusNode } = useFocusNode();

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
      // e.stopPropagation();
      let target: Element | string = "";
      let targetOrigin = focusNode;

      if (block.parentElement?.classList.contains("mj-body")) {
        // 插入到body
        if (dataTransfer?.type == "add") {
          target = mergeSectionByType(dataTransfer.data.value);
        } else {
          if (focusNode?.classList.contains("mj-section")) {
            target = focusNode;
          } else {
            // 需要包裹section
            targetOrigin = focusNode?.parentElement as HTMLElement;
            target = mergeSectionByNode(focusNode);
          }
        }
      } else {
        // 插入到section
        if (dataTransfer?.type == "add") {
          const blockText =
            basicElementTextMap[dataTransfer.data.value as basicTagNameType];

          const tr = document.createElement("tr");
          tr.innerHTML = blockText;
          target = tr;
        } else {
          target = focusNode?.parentElement as Element;
        }
      }

      const sectionTarget = getNodeByTarget(
        targetOrigin as HTMLElement,
        "mj-column"
      );

      const { idx: originIdx } = getMjmlByNode(
        appData,
        targetOrigin as Element
      );

      block.replaceWith(target);

      const { idx } = getMjmlByNode(
        appData,
        ((target as Element).nodeName == "TR"
          ? (target as Element).children[0]
          : target) as Element
      );

      if (dataTransfer?.type == "add") {
        const result = addTreeItem(appData, idx, dataTransfer);
        setAppData(result as appDataType);
      } else {
        const result = moveTreeItem(appData, idx, originIdx);
        setAppData(result as appDataType);
      }

      if (sectionTarget && !hasChildByColumn(sectionTarget)) {
        sectionTarget.classList.add("mj-column-empty");
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
