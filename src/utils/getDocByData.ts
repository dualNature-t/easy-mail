import { AppDataType } from "../constant";
import mjml2html from "mjml-browser";
import { mergeNodeEmpty } from ".";

export const getDocByData = (appData: AppDataType) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(mjml2html(appData).html, "text/html");
  return mergeNodeEmpty(doc.documentElement);
};
