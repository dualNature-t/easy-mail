import { BasicEnum, BasicType, tagNameList } from "../constant";
import { isBody } from "./isBlockType";

const getNodeByTarget = (
  node: Element | HTMLElement,
  target?: BasicType | BasicType[]
) => {
  let result = node;
  if (isBody(node)) return null;

  let limitArr = target
    ? Array.isArray(target)
      ? target
      : [target]
    : tagNameList.filter((item) => item !== BasicEnum.MJ_COLUMN);

  while (
    result &&
    limitArr.every((item) => !result.classList?.contains(item)) &&
    !isBody(result)
  ) {
    result = result.parentNode as Element | HTMLElement;
  }

  return result;
};

export default getNodeByTarget;
