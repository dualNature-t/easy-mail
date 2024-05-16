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
  const selfStyleStr = node.getAttribute("style");

  let result: Record<string, string> = {};
  switch (nodeName) {
    case "mj-body":
      const sectionWidth = styleStrToObj(
        node.querySelector(".mj-section")?.getAttribute("style")
      )["max-width"];
      const extraSytleStr = sectionWidth ? { width: sectionWidth } : {};

      result = Object.assign(
        defaultNodePropertyMap[nodeName],
        styleStrToObj(selfStyleStr),
        extraSytleStr
      );

      break;
    case "mj-section":
      // result = Object.assign(defaultNodePropertyMap[nodeName]);
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

export const setPropertyByNode = (
  node: HTMLElement | null,
  styleObj: Record<string, unknown>
) => {
  if (!node) return;
  const nodeName = node.classList[0] as validFocusNodeTagNameType;
  switch (nodeName) {
    case "mj-body":
      const nodyStyle = objToStyleStr({
        "background-color": styleObj["background-color"] as string,
      });
      const sections = node.querySelectorAll(".mj-section");
      sections.forEach((section) => {
        const sectionStyle = Object.assign(
          styleStrToObj(section.getAttribute("style")),
          {
            "max-width": styleObj.width as string,
          }
        );
        section.setAttribute("style", objToStyleStr(sectionStyle));
      });
      node.setAttribute("style", nodyStyle);
      node.parentElement?.setAttribute(
        "style",
        objToStyleStr(
          Object.assign(
            styleStrToObj(node.parentElement.getAttribute("style")),
            {
              "background-color": styleObj["background-color"] as string,
            }
          )
        )
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
};
