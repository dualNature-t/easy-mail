import { dragBlockCategoryType } from "@/pages/App/components/Aside/Addition";
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
  | "mj-social"
  | "mj-social-element";

export type columnTagNameType =
  | "mj-column"
  | "mj-column-2"
  | "mj-column-3"
  | "mj-column-4"
  | "mj-column-left"
  | "mj-column-right";

export type basicTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-body" | "mj-section" | "mj-column" | "mj-social-element"
>;

export interface appDataType {
  tagName: tagNameType;
  attributes: object;
  content?: string;
  children?: appDataType[];
}

export interface dataTransferType {
  type: "move" | "add";
  data: {
    type?: dragBlockCategoryType;
    value?: basicTagNameType | columnTagNameType;
  };
}

interface appContextType {
  appData: appDataType | null;
  setAppData: (
    data: appDataType | ((preData: appDataType) => appDataType)
  ) => void;
  tab: tabType;
  setTab: (tab: tabType) => void;
  hoverNode: HTMLElement | null;
  setHoverNode: (node: HTMLElement | null) => void;
  focusNode: HTMLElement | null;
  setFocusNode: (node: HTMLElement | null) => void;
  dataTransfer: dataTransferType | null;
  setDataTransfer: (data: dataTransferType | null) => void;
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

  // drag数据
  dataTransfer: null,
  setDataTransfer: () => {},
});

export default AppContext;
