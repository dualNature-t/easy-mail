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

export const getStyleCategoryByNode = (node: HTMLElement | null) => {
  if (!node) return {};
  const classList = node.classList;
  if (classList.contains("mj-body")) {
    const currentStyle = styleStrToObj(node.getAttribute("style"));
    const extraStyle = styleStrToObj(
      node.getElementsByClassName("mj-section")[0].getAttribute("style")
    );
    return {
      "body style": {
        "background-color": currentStyle["background-color"] ?? "#ffffff",
        width: extraStyle["max-width"],
      },
    };
  }
  if (classList.contains("mj-section")) {
    return {};
  }
  if (classList.contains("mj-text")) {
    return {};
  }
  if (classList.contains("mj-button")) {
    return {};
  }
  if (classList.contains("mj-image")) {
    return {};
  }
  if (classList.contains("mj-divider")) {
    return {};
  }
  if (classList.contains("mj-spacer")) {
    return {};
  }
  if (classList.contains("mj-social")) {
    return {};
  }
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
