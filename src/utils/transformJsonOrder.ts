import { BasicEnum, EasymailValueType } from "@/constant";

const initHeadJson: EasymailValueType = {
  tagName: "mj-head",
  attributes: {},
  children: [
    {
      tagName: "mj-attributes",
      attributes: {},
      children: [
        {
          tagName: "mj-all",
          attributes: {
            "font-family": "arial",
            color: "#000000",
          },
        },
        {
          tagName: "mj-button",
          attributes: {
            color: "#FFFFFF",
            "background-color": "#414141",
          },
        },
        {
          tagName: "mj-section",
          attributes: {
            "background-color": undefined,
          },
        },
      ],
    },
  ],
};

export const transformJsonOrder = (value: EasymailValueType) => {
  let result = value;
  if (
    result.children?.findIndex((i) => i.tagName === BasicEnum.MJ_BODY) === 0
  ) {
    const tmp = result.children.shift() as EasymailValueType;

    if (result.children.length === 0) {
      result.children.push(initHeadJson);
    }

    result.children.push(tmp);
  }

  return result;
};
