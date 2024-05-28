import { defaultNodePropertyMap } from "@/constant";
import { validFocusNodeTagNameType } from "@/hooks/useProperty";

export const styleStrToObj = (styleStr?: string | null) => {
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
            "max-width": styleObj["max-width"] as string,
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
      const {
        background,
        "background-repeat": backgroundRepeat,
        "background-size": backgroundSize,
        border,
        "border-radius": borderRadius,
        padding,
      } = styleObj;
      const tdEle = node.querySelector("td");
      const tableEle = node.querySelector("table");
      tdEle?.setAttribute(
        "style",
        objToStyleStr(
          Object.assign(styleStrToObj(tdEle.getAttribute("style")), {
            padding: padding,
          })
        )
      );
      node.setAttribute(
        "style",
        objToStyleStr(
          Object.assign(styleStrToObj(node.getAttribute("style")), {
            background,
            "background-repeat": backgroundRepeat,
            "background-size": backgroundSize,
            border,
            "border-radius": borderRadius,
          })
        )
      );
      tableEle?.setAttribute(
        "style",
        objToStyleStr(
          Object.assign(styleStrToObj(tableEle.getAttribute("style")), {
            background,
            "background-repeat": backgroundRepeat,
            "background-size": backgroundSize,
            border,
            "border-radius": borderRadius,
          })
        )
      );
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
