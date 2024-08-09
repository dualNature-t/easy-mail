import { EasymailValueType } from "index";
import { deepClone } from "./deepClone";

export const formatClassToJson = (json: EasymailValueType) => {
  for (let index = 0; index < (json.children?.length ?? 0); index++) {
    const i = json.children?.[index] as EasymailValueType;
    if (i.tagName === "mj-head") continue;

    const attr = i.attributes as { "css-class": string };
    if (i.attributes.hasOwnProperty("css-class")) {
      if (!attr["css-class"].includes(i.tagName)) {
        attr["css-class"] = i.tagName + " " + attr["css-class"];
      }
    } else {
      attr["css-class"] = i.tagName;
    }

    if (i.children) {
      formatClassToJson(i);
    }
  }

  return deepClone(json);
};
