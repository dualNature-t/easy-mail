import getNodeByTarget from "@/utils/getNodeByTarget";
import { useEffect, useRef, useState } from "react";
import useHoverNode from "./useHoverNode";
import useFocusNode from "./useFocusNode";
import { useClickAway } from "ahooks";

type classNameType = "hover" | "focus";

const addClassNameByNode = (target: HTMLElement, className: classNameType) => {
  target.classList.add(className);
};

const removeClassNameByNodes = (
  target: HTMLElement[],
  className: classNameType
) => {
  target.forEach((item) => {
    item.classList.remove(className);
  });
};

const userDropEle = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const hoverNodeArr = useRef<Array<HTMLElement>>([]);
  const focusNodeArr = useRef<Array<HTMLElement>>([]);
  const { setHoverNode } = useHoverNode();
  const { setFocusNode } = useFocusNode();

  useClickAway(() => {
    setFocusNode(null);
    removeClassNameByNodes(focusNodeArr.current, "focus");
  }, ref);

  useEffect(() => {
    if (!ref) return;

    const mouseover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      removeClassNameByNodes(hoverNodeArr.current, "hover");
      hoverNodeArr.current = [];

      const node = getNodeByTarget(target);
      if (node.classList.contains("hover")) return;

      !hoverNodeArr.current.includes(node) && hoverNodeArr.current.push(node);
      addClassNameByNode(node, "hover");
      setHoverNode(node);
    };

    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      removeClassNameByNodes(focusNodeArr.current, "focus");
      focusNodeArr.current = [];

      const node = getNodeByTarget(target);
      if (node.classList.contains("focus")) return;

      !focusNodeArr.current.includes(node) && focusNodeArr.current.push(node);
      addClassNameByNode(node, "focus");
      setFocusNode(node);
    };

    const drop = (e: DragEvent) => {
      // console.log(e);
    };

    const dragover = (e: DragEvent) => {
      e.preventDefault();
    };

    ref.addEventListener("mouseover", mouseover);
    ref.addEventListener("click", click);
    ref.addEventListener("drop", drop);
    ref.addEventListener("dragover", dragover);

    return () => {
      ref.removeEventListener("mouseover", mouseover);
      ref.removeEventListener("click", click);
      ref.removeEventListener("drop", drop);
      ref.removeEventListener("dragover", dragover);
    };
  }, [ref]);

  return { setRef };
};

export default userDropEle;
