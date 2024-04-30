import { createContext } from "react";

export type tabType = "add" | "edit";

export type tagNameType =
  | "mjml"
  | "mj-body"
  | "mj-section"
  | "mj-column"
  | "mj-text"
  | "mj-image"
  | "mj-button"
  | "mj-divider"
  | "mj-spacer"
  | "mj-social";

export type columnTagNameType = Extract<
  tagNameType,
  "mj-section" | "mj-column"
>;

export type basicTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-body" | "mj-section" | "mj-column"
>;

export interface appDataType {
  tagName: tagNameType;
  attributes: object;
  content?: string;
  children?: appDataType[];
}

interface appContextType {
  appData: appDataType | null;
  setAppData: (data: appDataType) => void;
  tab: tabType;
  setTab: (tab: tabType) => void;
  hoverNode: HTMLElement | null;
  setHoverNode: (node: HTMLElement | null) => void;
  focusNode: HTMLElement | null;
  setFocusNode: (node: HTMLElement | null) => void;
}

const AppContext = createContext<appContextType>({
  // mjml json数据
  appData: null,
  setAppData: () => {},

  // 左侧tab
  tab: "add",
  setTab: () => {},

  // 当前hover元素
  hoverNode: null,
  setHoverNode: () => {},

  // 当前选中元素
  focusNode: null,
  setFocusNode: () => {},
});

export default AppContext;
