import { ColumnEnum, BasicEnum } from ".";

/** ----------------------------------------tabType--------------------------------------- */
export type TabType = "add" | "edit";

/** ----------------------------------------blockType------------------------------------- */
export type ColumnType = `${ColumnEnum}`;

export type BasicType = `${BasicEnum}`;

export type BasicBlockType = Exclude<
  `${BasicEnum}`,
  "mjml" | "mj-body" | "mj-column" | "mj-section" | "mj-social-element"
>;

export type ColumnUnitType = "1" | "2" | "3" | "4" | "left" | "right";

/** ------------------------------------DataTransferType----------------------------------- */
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
