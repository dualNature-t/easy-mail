import { tagNameMap } from "@/constant";
import { tagNameType } from "@/context/appContext";

const getNodeByTarget = (
  node: HTMLElement,
  target?: tagNameType | tagNameType[]
) => {
  let result = node;
  if (!result || result.nodeName === "HTML") return;

  const limitArr = target
    ? Array.isArray(target)
      ? target
      : [target]
    : tagNameMap;

  while (
    result &&
    limitArr.every((item) => !result.classList?.contains(item)) &&
    result.parentNode?.nodeName !== "BODY" &&
    result.parentNode?.nodeName !== "HTML"
  ) {
    result = result.parentNode as HTMLElement;
  }

  return result;
};

export default getNodeByTarget;
