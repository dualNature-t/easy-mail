import { BasicBlockType, BasicType, ColumnType, EasymailValueType } from ".";

export const MJ_COLUMN_EMPTY = "mj-column-empty";
export const DROP_BLOCK = "drop-block";
export const FOCUS_CLS = "focus";
export const FOCUS_CHILD_CLS = "focus-child";
export const HOVER_CLS = "hover";
export const FOCUS_TOOL_CLS = "focus-tool";
export const FOCUS_TOOL_DRAG = "focus-tool-drag";
export const FOCUS_TOOL_COPY = "focus-tool-copy";
export const FOCUS_TOOL_DELETE = "focus-tool-delete";
export const EDITOR_TOOL_BOX = "editor-tool-box";
export const EDITOR_BODY = "editor-body";

export enum ColumnEnum {
  MJ_COLUMN_1 = "mj-column-1",
  MJ_COLUMN_2 = "mj-column-2",
  MJ_COLUMN_3 = "mj-column-3",
  MJ_COLUMN_4 = "mj-column-4",
  MJ_COLUMN_LEFT = "mj-column-left",
  MJ_COLUMN_RIGHT = "mj-column-right",
}

export enum BasicEnum {
  MJML = "mjml",
  MJ_BODY = "mj-body",
  MJ_SECTION = "mj-section",
  MJ_COLUMN = "mj-column",
  MJ_TEXT = "mj-text",
  MJ_IMAGE = "mj-image",
  MJ_BUTTON = "mj-button",
  MJ_DIVEDER = "mj-divider",
  MJ_SPACER = "mj-spacer",
  MJ_SOCIAL = "mj-social",
  MJ_SOCIAL_ELEMENT = "mj-social-element",
}

export const defaultBlockPropertyJson: Record<
  BasicBlockType | ColumnType | BasicEnum.MJ_SECTION,
  EasymailValueType
> = {
  [BasicEnum.MJ_BUTTON]: {
    tagName: "mj-button",
    attributes: {
      "css-class": "mj-button",
      href: "",
      target: "_blank",
      "border-radius": "3px",
      "font-size": "13px",
      "line-height": "120%",
      align: "center",
      padding: "10px 25px",
    },
    content: "",
  },
  [BasicEnum.MJ_DIVEDER]: {
    tagName: "mj-divider",
    attributes: {
      width: "100%",
      "css-class": "mj-divider",
      "border-width": "4px",
      "border-style": "solid",
      "border-color": "#000000",
      padding: "10px 25px",
    },
  },
  [BasicEnum.MJ_IMAGE]: {
    tagName: "mj-image",
    attributes: {
      "css-class": "mj-image",
      src: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDFlbTtoZWlnaHQ6IDFlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNzgwIj48cGF0aCBkPSJNMjA3Ljc2IDI5NS4zMTJBMzIgMzIgMCAwIDEgMjM1LjUyIDI2MC44bDEzNy45Mi0xNy43OTItOTIuOTc2IDk0LjMyIDE0OC4yNzIgMTYyLjE3NnYxMTEuMmwtMjQuNzA0IDEyMy41ODQgOTIuNDQ4LTI4NC4yMDgtMTA4LjI3Mi0xMjYuNTkyTDQ5Ni40OCAyNDBoMy45NTJsMjg0LjE2IDIyLjE5MmEzMiAzMiAwIDAgMSAyOS4zOTIgMzQuNjg4bC0zNy42MzIgNDMwLjkxMmEzMiAzMiAwIDAgMS0zMy45NjggMjkuMTUybC0zNDIuMDE2LTIyLjQzMmEzMS45NjggMzEuOTY4IDAgMCAwLTcuMzYgMC4zNjhsLTExMC41MTIgMTguNDE2YTMyIDMyIDAgMCAxLTM3LjEyLTI4Ljc2OGwtMzcuNjMyLTQyOS4yMTZ6IG00ODIuNDMyIDE0OC45MTJhNDcuMDQgNDcuMDQgMCAxIDAgMC05NC4wOCA0Ny4wNCA0Ny4wNCAwIDAgMCAwIDk0LjA4ek00OTQuMDggNjQ2LjcyYTEzLjg0IDEzLjg0IDAgMCAwIDEyLjc1MiAxNC44NjRsMjI0Ljk3NiAxNy4xMmExMy44NCAxMy44NCAwIDAgMCAyLjExMi0yNy42bC0yMjQuOTkyLTE3LjEyYTEzLjg0IDEzLjg0IDAgMCAwLTE0Ljg0OCAxMi43MzZ6IG0tMTQyLjQ2NCAxLjgyNGExMy44NCAxMy44NCAwIDAgMC04Ljc1Mi0yNi4yNTZsLTc0LjE0NCAyNC43MDRhMTMuODQgMTMuODQgMCAwIDAgOC43NTIgMjYuMjcybDc0LjE0NC0yNC43MnoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjEiIHAtaWQ9IjIwNzgxIj48L3BhdGg+PC9zdmc+",
      href: "",
      target: "_blank",
      alt: "",
      width: "",
      "border-radius": "0px",
      align: "center",
      padding: "10px 25px",
    },
  },
  [BasicEnum.MJ_SOCIAL]: {
    tagName: "mj-social",
    attributes: {
      "css-class": "mj-social",
      "icon-size": "20px",
      "icon-padding": "0px",
      "border-radius": "3px",
      "inner-padding": "4px",
      "font-size": "13px",
      mode: "horizontal",
      align: "center",
      padding: "10px 25px",
    },
    children: [
      {
        tagName: "mj-social-element",
        attributes: {
          name: "facebook",
          "css-class": "mj-social-element",
          href: "https://www.facebook.com",
        },
        content: "",
      },
      {
        tagName: "mj-social-element",
        attributes: {
          name: "twitter",
          "css-class": "mj-social-element",
          href: "https://www.twitter.com",
        },
        content: "",
      },
      {
        tagName: "mj-social-element",
        attributes: {
          name: "google",
          "css-class": "mj-social-element",
          href: "https://www.google.com",
        },
        content: "",
      },
    ],
  },
  [BasicEnum.MJ_SPACER]: {
    tagName: "mj-spacer",
    attributes: {
      "css-class": "mj-spacer",
      height: "50px",
    },
  },
  [BasicEnum.MJ_TEXT]: {
    tagName: "mj-text",
    attributes: {
      "css-class": "mj-text",
      "font-size": "13px",
      "line-height": 1,
      align: "left",
      padding: "10px 25px",
    },
    content: "",
  },
  [BasicEnum.MJ_SECTION]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
  },

  [ColumnEnum.MJ_COLUMN_1]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  [ColumnEnum.MJ_COLUMN_2]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  [ColumnEnum.MJ_COLUMN_3]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  [ColumnEnum.MJ_COLUMN_4]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  [ColumnEnum.MJ_COLUMN_LEFT]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "60%" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "40%" },
        children: [],
      },
    ],
  },
  [ColumnEnum.MJ_COLUMN_RIGHT]: {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "40%" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "60%" },
        children: [],
      },
    ],
  },
};

export const basicBlockNameList: Array<BasicBlockType> = [
  "mj-button",
  "mj-divider",
  "mj-image",
  "mj-social",
  "mj-spacer",
  "mj-text",
];

export const tagNameList: Array<Exclude<BasicType, "mj-social-element">> = [
  "mjml",
  "mj-body",
  "mj-column",
  "mj-section",
  ...basicBlockNameList,
];
