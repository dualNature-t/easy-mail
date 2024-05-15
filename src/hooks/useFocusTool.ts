import { useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import useDataTransfer from "./useDataTransfer";
import { basicTagNameType, columnTagNameType } from "@/context/appContext";
import getNodeByTarget from "@/utils/getNodeByTarget";
import { hasChildByColumn } from "@/utils/mergeNode";

const useFocusTool = () => {
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
      const target = e.target as HTMLDivElement;
      if (target.classList.contains("focus-tool-copy")) {
        let insertElement = focusNode.parentElement;
        let targetElement = focusNode;

        const clone = focusNode.cloneNode(true) as HTMLElement;
        clone.getElementsByClassName("focus-tool")[0].remove();
        clone.classList.remove("focus", "hover");

        let targetEle = clone;
        if (!focusNode.classList.contains("mj-section")) {
          insertElement = insertElement?.parentElement as HTMLElement;
          targetElement = targetElement?.parentElement as HTMLElement;
          const tr = document.createElement("tr");
          tr.appendChild(clone);
          targetEle = tr;
        }

        targetElement?.nextElementSibling
          ? insertElement?.insertBefore(
              targetEle,
              targetElement?.nextElementSibling
            )
          : insertElement?.appendChild(targetEle);
        return;
      }

      if (target.classList.contains("focus-tool-delete")) {
        if (focusNode.classList.contains("mj-section")) {
          if (focusNode.parentElement?.childElementCount === 1) {
            focusNode.parentElement.innerHTML = "";
          }
          focusNode?.remove();
        } else {
          const target = getNodeByTarget(focusNode, "mj-column") as HTMLElement;
          focusNode?.parentElement?.remove();
          if (!hasChildByColumn(target)) {
            target.classList.add("mj-column-empty");
          }
        }

        setFocusNode(null);
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
