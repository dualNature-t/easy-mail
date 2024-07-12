import {
  BasicEnum,
  DROP_BLOCK,
  FOCUS_CLS,
  FOCUS_TOOL_CLS,
  FOCUS_TOOL_COPY,
  FOCUS_TOOL_DELETE,
  FOCUS_TOOL_DRAG,
  HOVER_CLS,
  MJ_COLUMN_EMPTY,
} from "../constant";

export const isBody = (element: Element | HTMLElement | null) => {
  return (
    element?.tagName === "HTML" ||
    element?.classList.contains(BasicEnum.MJ_BODY) ||
    element?.tagName === "BODY"
  );
};

export const isSection = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_SECTION);
};

export const isColumn = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_COLUMN);
};

export const isButton = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_BOTTON);
};

export const isDivider = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_DIVEDER);
};

export const isImage = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_IMAGE);
};

export const isSocial = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_SOCIAL);
};

export const isSpacer = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_SPACER);
};

export const isText = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(BasicEnum.MJ_TEXT);
};

export const isDropBlock = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(DROP_BLOCK);
};

export const isFocusBlock = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(FOCUS_CLS);
};

export const isHoverBlock = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(HOVER_CLS);
};

export const isFocusTool = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(FOCUS_TOOL_CLS);
};

export const isFocusDrag = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(FOCUS_TOOL_DRAG);
};

export const isFocusCopy = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(FOCUS_TOOL_COPY);
};

export const isFocusDelete = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(FOCUS_TOOL_DELETE);
};

export const isEmptyColumn = (element: Element | HTMLElement | null) => {
  return element?.classList.contains(MJ_COLUMN_EMPTY);
};
