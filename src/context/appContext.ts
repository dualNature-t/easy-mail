import { createContext } from "react";
import { EasymailValueType, DataTransferType, TabType } from "../constant";

export interface appContextType {
  appData: EasymailValueType | null;
  setAppData: (
    data:
      | EasymailValueType
      | ((preData: EasymailValueType) => EasymailValueType)
  ) => void;
  tab: TabType;
  setTab: (tab: TabType) => void;
  hoverNode: HTMLElement | null;
  setHoverNode: (node: HTMLElement | null) => void;
  focusNode: HTMLElement | null;
  setFocusNode: (node: HTMLElement | null) => void;
  dataTransfer: DataTransferType | null;
  setDataTransfer: (data: DataTransferType | null) => void;
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
});
