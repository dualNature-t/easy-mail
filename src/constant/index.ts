import { BasicType } from "./block";
export * from "./block";
export * from "./dataTransfer";

export type TabType = "add" | "edit";

export interface AppDataType {
  tagName: BasicType | "mj-head" | "mj-attributes" | "mj-all";
  attributes: object;
  content?: string;
  children?: AppDataType[];
}
