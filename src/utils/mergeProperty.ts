import { defaultNodePropertyMap } from "@/constant";
import { validFocusNodeTagNameType } from "@/hooks/useProperty";

export const styleStrToObj = (styleStr?: string | null) => {
  if (!styleStr) return {};
  const result: Record<string, string> = {};
  const styleArr = styleStr.split(";").filter((i) => !!i);
  styleArr.forEach((item) => {
    const key = item.split(":")[0];
    const value = item.split(":")[1];
    result[key] = value;
  });
  return result;
};

export const objToStyleStr = (styleObj: Record<string, string>) => {
  const result = Object.entries(styleObj)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
  return result;
};

export const getPropertyByNode = (node: HTMLElement | null) => {
  if (!node) return {};
  const nodeName = node.classList[0] as validFocusNodeTagNameType;
  const styleStr = node.getAttribute("style");
  let result: Record<string, string> = {};
  switch (nodeName) {
    case "mj-body":
      result = Object.assign(
        defaultNodePropertyMap[nodeName],
        styleStrToObj(styleStr)
      );
      break;
    case "mj-section":
      break;
    case "mj-button":
      break;
    case "mj-divider":
      break;
    case "mj-image":
      break;
    case "mj-social":
      break;
    case "mj-spacer":
      break;
    case "mj-text":
      break;
  }
  return result;
};

export const setStyleByNode = (
  node: HTMLElement | null,
  styleObj: Record<string, unknown>
) => {
  if (!node) return;
  // const originStyle = styleStrToObj(node.getAttribute("style"));
  // const newStyle = { ...originStyle, ...styleObj };
  // console.log(newStyle);
};
