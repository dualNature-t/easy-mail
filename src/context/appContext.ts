import { createContext } from "react";
import { AppDataType, DataTransferType, TabType } from "../constant";
import { FormInstance } from "antd";

export interface appContextType {
  appData: AppDataType | null;
  setAppData: (
    data: AppDataType | ((preData: AppDataType) => AppDataType)
  ) => void;
  tab: TabType;
  setTab: (tab: TabType) => void;
  hoverNode: HTMLElement | null;
  setHoverNode: (node: HTMLElement | null) => void;
  focusNode: HTMLElement | null;
  setFocusNode: (node: HTMLElement | null) => void;
  dataTransfer: DataTransferType | null;
  setDataTransfer: (data: DataTransferType | null) => void;
  form: FormInstance | undefined;
}

export const AppContext = createContext<appContextType>({
  // MJML JSON
  appData: null,
  setAppData: () => {},

  // TAB
  tab: "add",
  setTab: () => {},

  // HOVER NODE
  hoverNode: null,
  setHoverNode: () => {},

  // FOCUS NODE
  focusNode: null,
  setFocusNode: () => {},

  // DRAG DATA
  dataTransfer: null,
  setDataTransfer: () => {},

  form: undefined,
});
