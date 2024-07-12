import { BasicType } from "./block";
export * from "./block";
export * from "./dataTransfer";
export * from "./style";

export type TabType = "add" | "edit";

export interface AppDataType {
  tagName: BasicType;
  attributes: object;
  content?: string;
  children?: AppDataType[];
}
