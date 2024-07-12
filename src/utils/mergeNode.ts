import { BasicEnum, MJ_COLUMN_EMPTY, basicBlockNameList } from "../constant";
import { isSection } from "./isBlockType";

export const hasChildByColumn = (column: Element) => {
  const childStr = basicBlockNameList.map((i) => `.${i}`).join(",");
  return column.querySelectorAll(childStr).length > 0;
};

export const mergeNodeEmpty = <T extends Node>(node: T): T => {
  const nodeClone = node.cloneNode(true) as Element;
  const body = nodeClone.querySelector(`div.${BasicEnum.MJ_BODY}`);

  if (body && body.childElementCount === 0) {
    body.innerHTML = "";
  } else {
    const columns = nodeClone.querySelectorAll(`div.${BasicEnum.MJ_COLUMN}`);
    columns.forEach((item: Element) => {
      if (!hasChildByColumn(item)) item.classList.add(MJ_COLUMN_EMPTY);
    });
  }

  return nodeClone as unknown as T;
};

export const mergeNode = (node: Element, newNode: Element) => {
  let originNode = node;
  let targetNode = newNode;
  if (!isSection(node)) {
    targetNode = targetNode.children[0];
  }
  originNode
    .getAttributeNames()
    .filter(
      (i) => !["id", "class", "contenteditable", "spellcheck"].includes(i)
    )
    .forEach((attr) => {
      node.setAttribute(attr, targetNode?.getAttribute(attr) as string);
    });
  originNode.replaceChildren(
    ...targetNode.childNodes,
    originNode.lastElementChild as Node
  );
};
