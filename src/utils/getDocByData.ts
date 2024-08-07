import mjml2html from "mjml-browser";
import { mergeNodeEmpty } from ".";
import { EasymailValueType } from "@/constant";

export const getDocByData = (appData: EasymailValueType) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(mjml2html(appData).html, "text/html");
  return mergeNodeEmpty(doc.documentElement);
};
