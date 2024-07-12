import { useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import { EDITOR_TOOL_BOX } from "@/constant";
import { isButton, isText } from "@/utils/isBlockType";

const useEditorTool = () => {
  const [editorTool, setEditorTool] = useState<HTMLElement | null>(null);
  const { focusNode } = useFocusNode();

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", EDITOR_TOOL_BOX);
    div.setAttribute(
      "style",
      "position: absolute; left: 0; top: 0; width: 279px"
    );

    div.onclick = (e) => {
      e.stopPropagation();
    };
    setEditorTool(div);
  }, []);

  useEffect(() => {
    if (!focusNode || !editorTool) return;
    editorTool.replaceChildren();

    if (isText(focusNode) || isButton(focusNode)) {
      const documentEle = (focusNode.getRootNode() as Document).documentElement;
      documentEle.querySelector("body")?.appendChild(editorTool);

      const { left, top, width, height } = focusNode.getBoundingClientRect();
      editorTool.style.left = `${left + width / 2 - 279 / 2}px`;
      editorTool.style.top =
        top > 88
          ? `${top + documentEle?.scrollTop - 78 - 10}px`
          : `${top + documentEle?.scrollTop + height + 10}px`;
    }
  }, [focusNode, editorTool]);

  useEffect(() => {
    if (!editorTool) return;
    const fn = (e: MouseEvent) => {
      e.stopPropagation();
    };
    editorTool.addEventListener("click", fn, false);
    editorTool.addEventListener("mouseover", fn, false);

    return () => {
      editorTool.removeEventListener("click", fn, false);
      editorTool.removeEventListener("mouseover", fn, false);
    };
  }, [editorTool]);

  return { editorTool };
};

export default useEditorTool;
