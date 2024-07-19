import { BasicBlockType, ColumnType } from "./block";

export type TransferActionType = "move" | "add" | "copy" | "delete" | "tinymce";
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
