import { useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";

const useEditorTool = () => {
  const [editorTool, setEditorTool] = useState<HTMLDivElement | null>(null);
  const { focusNode } = useFocusNode();

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "editor-tool-box");
    div.setAttribute("style", "position: absolute; left: 0; top: 0");
    setEditorTool(div);
  }, []);

  useEffect(() => {
    if (!focusNode || !editorTool) return;
    editorTool.replaceChildren();

    if (
      focusNode.classList.contains("mj-text") ||
      focusNode.classList.contains("mj-button")
    ) {
      const documentEle = (focusNode.getRootNode() as Document).documentElement;
      documentEle.querySelector("body")?.appendChild(editorTool);
      const { left, top, width } = focusNode.getBoundingClientRect();
      editorTool.style.left = `${left + width / 2 - 279 / 2}px`;
      editorTool.style.top = `${top + documentEle?.scrollTop - 78 - 10}px`;
    } else {
      editorTool?.remove();
    }
  }, [focusNode, editorTool]);

  return { editorTool };
};

export default useEditorTool;
