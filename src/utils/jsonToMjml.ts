import { EasymailValueType } from "@/constant";

const attrToStr = (attr?: object) => {
  if (!attr) return "";
  let result = "";
  Object.keys(attr).forEach((key) => {
    const value = attr[key as keyof typeof attr];
    if (value) {
      result += ` ${key}="${value}"`;
    }
  });
  return result;
};

const getMjmlItemStr = (item: EasymailValueType, content?: string) => {
  return `<${item.tagName}${attrToStr(item.attributes)}>${content ?? ""}</${
    item.tagName
  }>`;
};

const getBlockMjml = (data?: EasymailValueType) => {
  if (!data) return "";
  let result = "";

  if (data.children) {
    data.children.forEach((item) => {
      let childMjml = "";
      if (["mj-social", "mj-attributes"].includes(item.tagName)) {
        childMjml = item.children?.reduce((cur, pre) => {
          return (cur += getMjmlItemStr(pre));
        }, ``) as string;
      }

      if (childMjml) {
        result += getMjmlItemStr(item, childMjml);
        return result;
      }

      if (["mj-section", "mj-column"].includes(item.tagName)) {
        result += getMjmlItemStr(item, getBlockMjml(item));
        return result;
      }

      result += getMjmlItemStr(item, item.content);
    });
  }

  return result;
};

export const jsonToMjml = (json: EasymailValueType) => {
  let result = `<mjml><mj-head>${getBlockMjml(
    json.children?.[0]
  )}</mj-head><mj-body ${attrToStr(
    json.children?.[1].attributes
  )}>${getBlockMjml(json.children?.[1])}</mj-body></mjml>`;

  return result;
};
