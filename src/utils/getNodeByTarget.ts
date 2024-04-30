import { tagNameMap } from "@/constant";

const getNodeByTarget = (node: HTMLElement) => {
  let result = node;
  while (
    tagNameMap.every((item) => !result.classList.contains(item)) &&
    result.parentNode?.nodeName !== "BODY"
  ) {
    result = result.parentNode as HTMLElement;
  }

  return result;
};

export default getNodeByTarget;
