import { BasicBlockType, ColumnType } from "./block";

export type TransferActionType = "move" | "add" | "copy";
export type TransferCategoryType = "column" | "basic";

export type DataTransferType = {
  type: TransferActionType;
  data?: {
    type: TransferCategoryType;
    value: BasicBlockType | ColumnType;
  };
};

export type DataTransferMapType<T> = {
  type: TransferCategoryType;
  value: T;
  label: string;
  icon?: React.ReactNode;
};

export const columnDataTransferMap: DataTransferMapType<ColumnType>[] = [
  { type: "column", value: "mj-column-1", label: "一列" },
  { type: "column", value: "mj-column-2", label: "两列" },
  { type: "column", value: "mj-column-3", label: "三列" },
  { type: "column", value: "mj-column-4", label: "四列" },
  { type: "column", value: "mj-column-left", label: "Left" },
  { type: "column", value: "mj-column-right", label: "Right" },
];

export const basicDataTransferMap: DataTransferMapType<BasicBlockType>[] = [
  { type: "basic", value: "mj-text", label: "文本" },
  { type: "basic", value: "mj-image", label: "图片" },
  { type: "basic", value: "mj-button", label: "按钮" },
  { type: "basic", value: "mj-divider", label: "分割线" },
  { type: "basic", value: "mj-spacer", label: "间距" },
  { type: "basic", value: "mj-social", label: "社交" },
];
