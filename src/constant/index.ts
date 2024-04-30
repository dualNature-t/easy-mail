import {
  appDataType,
  columnTagNameType,
  basicTagNameType,
} from "../context/appContext";

export const additionColumnItemMap: Record<columnTagNameType, appDataType> = {
  "mj-section": {
    tagName: "mj-section",
    attributes: { "css-class": "mj-section" },
    children: [],
  },
  "mj-column": {
    tagName: "mj-column",
    attributes: { "css-class": "mj-column" },
    children: [],
  },
};

export const additionContentItemMap: Record<basicTagNameType, appDataType> = {
  "mj-text": {
    tagName: "mj-text",
    attributes: { "css-class": "mj-text" },
    children: [],
  },
  "mj-image": {
    tagName: "mj-image",
    attributes: { "css-class": "mj-image" },
    children: [],
  },
  "mj-button": {
    tagName: "mj-button",
    attributes: { "css-class": "mj-button" },
    children: [],
  },
  "mj-divider": {
    tagName: "mj-divider",
    attributes: { "css-class": "mj-divider" },
    children: [],
  },
  "mj-spacer": {
    tagName: "mj-spacer",
    attributes: { "css-class": "mj-spacer" },
    children: [],
  },
  "mj-social": {
    tagName: "mj-social",
    attributes: { "css-class": "mj-social" },
    children: [],
  },
};

export const tagNameMap = [
  "mj-body",
  ...Object.keys(additionColumnItemMap),
  ...Object.keys(additionContentItemMap),
];
