import { useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import useDataTransfer from "./useDataTransfer";
import {
  appDataType,
  basicTagNameType,
  columnTagNameType,
} from "@/context/appContext";
import getMjmlByNode from "@/utils/getMjmlByNode";
import useAppData from "./useAppData";
import { copyTreeItem, deleteTreeItem } from "@/utils/treeTool";
import getNodeByTarget from "@/utils/getNodeByTarget";
import { hasChildByColumn } from "@/utils/mergeNode";

const useFocusTool = () => {
  const { appData, setAppData } = useAppData();
  const { focusNode, setFocusNode } = useFocusNode();
  const [focusTool, setFocusTool] = useState<HTMLDivElement | null>(null);
  const { setDataTransfer } = useDataTransfer();

  useEffect(() => {
    const div = document.createElement("div");
    div.className = "focus-tool";

    div.innerHTML = `
        <div draggable="true" class="focus-tool-drag"></div>
        <div class="focus-tool-copy"></div>
        <div class="focus-tool-delete"></div>
    `;
    setFocusTool(div);
  }, []);

  useEffect(() => {
    if (
      !focusTool ||
      !focusNode ||
      focusNode.nodeName === "BODY" ||
      focusNode.classList.contains("mj-body")
    ) {
      focusTool?.remove();
      return;
    }
    const dragBlock = focusTool.getElementsByClassName("focus-tool-drag")[0];

    focusNode.appendChild(focusTool);

    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLDivElement;
      const { idx } = getMjmlByNode(appData, focusNode);
      if (target.classList.contains("focus-tool-copy")) {
        const result = copyTreeItem(appData, idx as string);
        setAppData(result as appDataType);

        const cloneFocusNode = focusNode.cloneNode(true) as HTMLElement;
        cloneFocusNode.classList.remove("focus", "hover");
        cloneFocusNode.querySelector(".focus-tool")?.remove();

        if (focusNode?.classList.contains("mj-section")) {
          focusNode.nextElementSibling
            ? focusNode.parentElement?.insertBefore(
                cloneFocusNode,
                focusNode.nextElementSibling
              )
            : focusNode.parentElement?.appendChild(cloneFocusNode as Node);
        } else {
          const tr = document.createElement("tr");
          tr.appendChild(cloneFocusNode);
          focusNode?.parentElement?.nextElementSibling
            ? focusNode.parentElement.parentElement?.insertBefore(
                tr,
                focusNode.parentElement.nextElementSibling
              )
            : focusNode?.parentElement?.parentElement?.appendChild(tr);
        }
      }

      if (target.classList.contains("focus-tool-delete")) {
        const result = deleteTreeItem(appData, idx as string);
        setAppData(result as appDataType);

        if (focusNode?.classList.contains("mj-section")) {
          focusNode?.remove();
        } else {
          const column = getNodeByTarget(focusNode, "mj-column");
          focusNode?.parentElement?.remove();

          if (!hasChildByColumn(column as Element)) {
            column?.classList.add("mj-column-empty");
          }
        }

        setFocusNode(null);
      }
    };

    const onDragStart = () => {
      setDataTransfer({
        type: "move",
        data: {
          type: focusNode.classList.contains("mj-section") ? "column" : "base",
          value: focusNode.classList[0] as basicTagNameType | columnTagNameType,
        },
      });
    };
    focusTool.addEventListener("click", onClick, false);
    dragBlock.addEventListener("dragstart", onDragStart);

    return () => {
      focusTool.removeEventListener("click", onClick, false);
      dragBlock.removeEventListener("dragstart", onDragStart);
    };
  }, [focusNode, focusTool]);

  return { focusTool };
};

export default useFocusTool;
