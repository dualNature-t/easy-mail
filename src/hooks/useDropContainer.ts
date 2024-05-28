import getNodeByTarget from "@/utils/getNodeByTarget";
import { useEffect, useRef, useState } from "react";
import useHoverNode from "./useHoverNode";
import useFocusNode from "./useFocusNode";
import useTab from "./useTab";
import throttle from "@/utils/throttle";
import useDataTransfer from "./useDataTransfer";
import useDropBlock from "./useDropBlock";
import useFocusTool from "./useFocusTool";
import getMjmlByNode, { getNodeByIdx } from "@/utils/getMjmlByNode";
import useAppData from "./useAppData";
import mjml2html from "mjml-browser";
import { mergeNodeEmpty } from "@/utils/mergeNode";

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

const useDropContainer = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const hoverNodeArr = useRef<Array<HTMLElement>>([]);
  const focusNodeArr = useRef<Array<HTMLElement>>([]);
  const emptyNodeArr = useRef<Array<HTMLElement>>([]);
  const { setHoverNode } = useHoverNode();
  const { focusNode, setFocusNode } = useFocusNode();
  const { setTab } = useTab();
  const { appData } = useAppData();
  const { dataTransfer, setDataTransfer } = useDataTransfer();

  const { block } = useDropBlock();
  useFocusTool();

  const resetEmptyNode = () => {
    if (emptyNodeArr.current.length > 0) {
      emptyNodeArr.current.forEach((node) => {
        node.classList.add("mj-column-empty");
      });
      emptyNodeArr.current = [];
    }
  };

  useEffect(() => {
    if (!ref) return;

    const mouseover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || dataTransfer) return;

      removeClassNameByNodes(hoverNodeArr.current, "hover");
      hoverNodeArr.current = [];

      const node = getNodeByTarget(target);

      if (
        !node ||
        node.nodeName === "BODY" ||
        node.classList.contains("mj-body")
      )
        return;
      if (node.classList.contains("hover")) return;

      !hoverNodeArr.current.includes(node) && hoverNodeArr.current.push(node);
      addClassNameByNode(node, "hover");
      setHoverNode(node);
    };

    const mouseout = () => {
      removeClassNameByNodes(hoverNodeArr.current, "hover");
      hoverNodeArr.current = [];
    };

    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      setTab("edit");

      removeClassNameByNodes(focusNodeArr.current, "focus");
      focusNodeArr.current = [];

      const node = getNodeByTarget(target);

      if (!node) {
        setFocusNode(null);
        return;
      }
      if (node.nodeName === "BODY") {
        setFocusNode(node.children[0] as HTMLElement);
        return;
      }
      if (node.classList.contains("mj-body")) {
        setFocusNode(node);
        return;
      }
      if (node.classList.contains("focus")) return;

      !focusNodeArr.current.includes(node) && focusNodeArr.current.push(node);
      addClassNameByNode(node, "focus");
      setFocusNode(node);
    };

    const drop = (e: DragEvent) => {
      e.preventDefault();
      if ((e.target as HTMLElement).classList.contains("drop-block")) {
        emptyNodeArr.current = [];
      } else {
        resetEmptyNode();
      }
    };

    const dragover = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      throttleDragOver(e);
    };

    const throttleDragOver = throttle((e: DragEvent) => {
      let target = getNodeByTarget(e.target as HTMLElement, "mj-column");

      if (
        dataTransfer?.data.type == "base" &&
        target?.classList.contains("mj-column-empty")
      ) {
        resetEmptyNode();
        emptyNodeArr.current.push(target);
        target.classList.remove("mj-column-empty");
        target.children[0].children[0].appendChild(block as Node);
        return;
      }

      const isMergeSection =
        dataTransfer?.type === "move"
          ? dataTransfer?.data.type == "column" ||
            focusNode?.classList.contains("mj-section")
          : dataTransfer?.data.type == "column";

      target = getNodeByTarget(
        e.target as HTMLElement,
        isMergeSection ? "mj-section" : undefined
      );

      if (!target || !block) return;

      if (target.nodeName === "BODY") {
        if (target.children[0].children.length === 0) {
          target.children[0].appendChild(block as Node);
        }
        return;
      }

      if (target.classList.contains("mj-body")) {
        if (target.children.length === 0) {
          target.appendChild(block as Node);
        }
        return;
      }

      const { height, top } = target.getBoundingClientRect();
      const { clientY } = e;
      const direction = clientY - top > height / 2 ? "down" : "up";

      let insertParentEle = target.parentElement as HTMLElement;
      let insertEle = target;

      if (!target.classList.contains("mj-section")) {
        insertParentEle = insertParentEle.parentElement as HTMLElement;
        insertEle = insertEle.parentElement as HTMLElement;
      }

      if (dataTransfer?.type == "move") {
        if (target === focusNode) return;
        if (focusNode?.classList.contains("mj-section")) {
          if (
            (direction == "down" &&
              focusNode.previousElementSibling === insertEle) ||
            (direction == "up" && focusNode.nextElementSibling === insertEle)
          ) {
            return;
          }
        } else {
          if (
            (direction == "down" &&
              focusNode?.parentElement?.previousElementSibling === insertEle) ||
            (direction == "up" &&
              focusNode?.parentElement?.nextElementSibling === insertEle)
          ) {
            return;
          }
        }
      }

      if (direction == "down") {
        insertEle?.nextSibling
          ? insertParentEle?.insertBefore(block, insertEle?.nextSibling)
          : insertParentEle?.appendChild(block);
      } else {
        insertParentEle?.insertBefore(block, insertEle);
      }

      resetEmptyNode();
    }, 400);

    ref.addEventListener("mouseover", mouseover);
    ref.addEventListener("mouseout", mouseout);
    ref.addEventListener("click", click);
    ref.addEventListener("drop", drop);
    ref.addEventListener("dragover", dragover);

    return () => {
      ref.removeEventListener("mouseover", mouseover);
      ref.removeEventListener("click", click);
      ref.removeEventListener("drop", drop);
      ref.removeEventListener("dragover", dragover);
      ref.removeEventListener("mouseout", mouseout);
    };
  }, [ref, block, focusNode, dataTransfer]);

  useEffect(() => {
    const onDragEnd = () => {
      block && block.remove();
      resetEmptyNode();
      setDataTransfer(null);
    };
    window.addEventListener("dragend", onDragEnd);
    ref?.addEventListener("dragend", onDragEnd);

    return () => {
      window.removeEventListener("dragend", onDragEnd);
      ref?.removeEventListener("dragend", onDragEnd);
    };
  }, [ref, block]);

  useEffect(() => {
    if (!appData) return;
    let parser = new DOMParser();
    let doc = parser.parseFromString(mjml2html(appData).html, "text/html");
    // console.log("block", block);
    // console.log("focusNode", focusNode);
    // console.log("datatransfer", dataTransfer);
    // console.log("appData", appData);

    const mergeDoc = mergeNodeEmpty(doc.documentElement);
    const { idx: blockIdx } = getMjmlByNode(appData, block);
    const { idx: focusIdx } = getMjmlByNode(appData, focusNode);
    const focusTargetNode = getNodeByIdx(mergeDoc, focusIdx);
    const blockTargetNode = getNodeByIdx(mergeDoc, blockIdx);
    let targetNode: HTMLElement | null = null;
    // debugger;
    if (!dataTransfer) {
      // property
      targetNode = focusTargetNode;
    } else {
      // add or copy or delete or move
      if (dataTransfer.type === "add") {
        if (focusNode) {
          targetNode = focusTargetNode;
        } else {
          targetNode = blockTargetNode;
        }
      } else if (dataTransfer.type === "copy") {
        targetNode = focusTargetNode;
      } else if (dataTransfer.type === "move") {
        targetNode = blockTargetNode;
      } else {
        focusNodeArr.current = [];
        setFocusNode(null);
      }
    }

    if (targetNode) {
      if (targetNode.classList.contains("mj-section")) {
        targetNode.classList.add("focus");
        focusNodeArr.current.push(targetNode);
        setFocusNode(targetNode);
      } else {
        targetNode.children[0].classList.add("focus");
        focusNodeArr.current.push(targetNode.children[0] as HTMLElement);
        setFocusNode(targetNode.children[0] as HTMLElement);
      }
    }

    const docBody = mergeDoc.querySelector("body");
    ref?.querySelector("body")?.replaceChildren(docBody as Node);

    setDataTransfer(null);
  }, [appData]);

  return { setRef };
};

export default useDropContainer;
