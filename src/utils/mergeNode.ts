import { BasicEnum, MJ_COLUMN_EMPTY, basicBlockNameList } from "../constant";
import { isBody, isSection } from "./isBlockType";

const styleStrToObj = (styleStr?: string | null) => {
  if (!styleStr) return {};
  const result: Record<string, string> = {};
  const styleArr = styleStr.split(";").filter((i) => !!i);
  styleArr.forEach((item) => {
    const itemArr = item.split(":");

    const key = itemArr[0];
    const value = itemArr.slice(1).join(":");
    result[key] = value;
  });
  return result;
};

const objToStyleStr = (styleObj: Record<string, string>) => {
  const result = Object.entries(styleObj)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
  return result;
};

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

  const isOriginBody = isBody(originNode);

  if (!isSection(originNode) && !isOriginBody) {
    targetNode = targetNode.children[0];
  }

  if (isOriginBody) {
    originNode.parentElement?.setAttribute(
      "style",
      objToStyleStr({
        ...styleStrToObj(originNode.parentElement?.getAttribute("style")),
        ...styleStrToObj(targetNode?.getAttribute("style")),
      })
    );
  }
  originNode
    .getAttributeNames()
    .filter(
      (i) => !["id", "class", "contenteditable", "spellcheck"].includes(i)
    )
    .forEach((attr) => {
      originNode.setAttribute(attr, targetNode?.getAttribute(attr) as string);
    });

  originNode.replaceChildren(
    ...targetNode.childNodes,
    isOriginBody ? "" : (originNode.lastElementChild as Node)
  );
};
