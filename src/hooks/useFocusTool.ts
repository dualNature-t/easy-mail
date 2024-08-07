import { useEffect, useState } from "react";
import {
  copyBlock,
  deleteBlock,
  getIdxByNode,
  getNodeByTarget,
  hasChildByColumn,
  insertEle2Node,
  isBody,
  isFocusCopy,
  isFocusDelete,
  isSection,
} from "@/utils";
import {
  EasymailValueType,
  BasicBlockType,
  BasicEnum,
  ColumnType,
  FOCUS_CLS,
  FOCUS_TOOL_CLS,
  FOCUS_TOOL_COPY,
  FOCUS_TOOL_DELETE,
  FOCUS_TOOL_DRAG,
  HOVER_CLS,
  MJ_COLUMN_EMPTY,
} from "@/constant";
import { useAppData, useCurrentNode, useDataTransfer, useFocusNode } from ".";

export const useFocusTool = () => {
  const { appData, setAppData } = useAppData();
  const { focusNode, setFocusNode } = useFocusNode();
  const { setDataTransfer } = useDataTransfer();
  const { setFocusNodeCls } = useCurrentNode();

  const [focusTool, setFocusTool] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = document.createElement("div");
    div.className = FOCUS_TOOL_CLS;

    div.innerHTML = `
        <div draggable="true" class='${FOCUS_TOOL_DRAG}'></div>
        <div class='${FOCUS_TOOL_COPY}'></div>
        <div class='${FOCUS_TOOL_DELETE}'></div>
    `;
    setFocusTool(div);
  }, []);

  useEffect(() => {
    if (!focusTool || !focusNode || isBody(focusNode)) {
      focusTool?.remove();
      return;
    }
    const dragElement = focusTool.querySelector(`.${FOCUS_TOOL_DRAG}`);
    focusNode.appendChild(focusTool);

    const isSectionNode = isSection(focusNode);
    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLDivElement;
      const idx = getIdxByNode({ node: focusNode });

      if (isFocusCopy(target)) {
        setAppData(copyBlock({ appData: appData as EasymailValueType, idx }));

        const cloneFocusNode = focusNode.cloneNode(true) as Element;
        cloneFocusNode.classList.remove(FOCUS_CLS, HOVER_CLS);
        cloneFocusNode.querySelector(`.${FOCUS_TOOL_CLS}`)?.remove();

        if (isSectionNode) {
          insertEle2Node(focusNode, cloneFocusNode);
        } else {
          const tr = document.createElement("tr");
          tr.appendChild(cloneFocusNode);

          insertEle2Node(focusNode.parentElement as HTMLElement, tr);
        }
        setDataTransfer({ type: "copy" });
      }

      if (isFocusDelete(target)) {
        setAppData(deleteBlock({ appData: appData as EasymailValueType, idx }));
        setFocusNodeCls("remove");

        if (isSectionNode) {
          if (focusNode.parentNode?.children.length === 1) {
            focusNode?.parentElement?.replaceChildren();
          } else {
            focusNode?.remove();
          }
        } else {
          const column = getNodeByTarget(
            focusNode,
            BasicEnum.MJ_COLUMN
          ) as Element;
          focusNode?.parentElement?.remove();

          if (!hasChildByColumn(column)) {
            column?.classList.add(MJ_COLUMN_EMPTY);
          }
        }

        setFocusNode(null);
        setDataTransfer({ type: "delete" });
      }
    };

    const onDragStart = () => {
      setDataTransfer({
        type: "move",
        data: {
          type: isSectionNode ? "column" : "basic",
          value: focusNode.classList[0] as BasicBlockType | ColumnType,
        },
      });
    };
    focusTool.addEventListener("click", onClick, false);
    dragElement?.addEventListener("dragstart", onDragStart);

    return () => {
      focusTool.removeEventListener("click", onClick, false);
      dragElement?.removeEventListener("dragstart", onDragStart);
    };
  }, [focusNode, focusTool, appData]);

  return { focusTool };
};
