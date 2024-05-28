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

const useFocusTool = () => {
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();
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
      if (target.classList.contains("focus-tool-copy")) {
        const { idx } = getMjmlByNode(appData, focusNode);
        const result = copyTreeItem(appData, idx as string);
        setAppData(result as appDataType);
        setDataTransfer({ type: "copy", data: {} });
        return;
      }

      if (target.classList.contains("focus-tool-delete")) {
        const { idx } = getMjmlByNode(appData, focusNode);
        const result = deleteTreeItem(appData, idx as string);
        setAppData(result as appDataType);
        setDataTransfer({ type: "del", data: {} });
        return;
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
