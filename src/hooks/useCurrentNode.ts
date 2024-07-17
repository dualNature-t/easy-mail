import {
  BasicEnum,
  FOCUS_CHILD_CLS,
  FOCUS_CLS,
  HOVER_CLS,
  MJ_COLUMN_EMPTY,
} from "@/constant";
import { NodeContext, NodeContextType } from "@/context";
import getNodeByTarget from "@/utils/getNodeByTarget";
import { isSection } from "@/utils/isBlockType";
import { useContext } from "react";

const useCurrentNode = () => {
  const { currentEmptyNode, currentFocusNode, currentHoverNode } = useContext(
    NodeContext
  ) as NodeContextType;

  const resetEmptyNode = () => {
    if (currentEmptyNode.current) {
      currentEmptyNode.current.classList.add(MJ_COLUMN_EMPTY);
      currentEmptyNode.current = null;
    }
  };

  const setHoverNodeCls = (type: "add" | "remove") => {
    if (currentHoverNode.current) {
      if (!isSection(currentHoverNode.current)) {
        const sectionNode = getNodeByTarget(
          currentHoverNode.current,
          BasicEnum.MJ_SECTION
        );
        sectionNode?.classList[type](HOVER_CLS);
      }

      currentHoverNode.current.classList[type](HOVER_CLS);
    }
    if (type === "remove") {
      currentHoverNode.current = null;
    }
  };

  const setFocusNodeCls = (type: "add" | "remove") => {
    if (currentFocusNode.current) {
      if (!isSection(currentFocusNode.current)) {
        const sectionNode = getNodeByTarget(
          currentFocusNode.current,
          BasicEnum.MJ_SECTION
        );
        sectionNode?.classList[type](FOCUS_CHILD_CLS, HOVER_CLS);
      }

      currentFocusNode.current.classList[type](FOCUS_CLS);
    }
    if (type === "remove") {
      currentFocusNode.current = null;
    }
  };

  return {
    currentEmptyNode,
    currentFocusNode,
    currentHoverNode,
    resetEmptyNode,
    setHoverNodeCls,
    setFocusNodeCls,
  };
};

export default useCurrentNode;
