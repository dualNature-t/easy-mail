import {
  AppDataType,
  BasicBlockType,
  BasicEnum,
  ColumnEnum,
  ColumnUnitType,
  DataTransferType,
  defaultBlockPropertyJson,
} from "@/constant";
import { deepClone, isEmpty } from ".";

interface PyloadType {
  appData: AppDataType;
  idx: string;
}

const getTargetTree = (appData: AppDataType, idx: string, slice?: number) => {
  let idArr = idx.split("-").map((i) => Number(i));
  if (!isEmpty(slice)) {
    idArr = idArr.slice(0, slice);
  }

  const result = deepClone(appData);
  const tree = idArr.reduce((cur, pre) => {
    return cur?.children?.[pre] as AppDataType;
  }, result);
  return { result, tree };
};

export const onPropertyChange = ({
  appData,
  idx,
  property,
  index,
}: PyloadType & { property: Record<string, unknown>; index?: number }) => {
  let { result, tree } = getTargetTree(appData, idx);
  if (!isEmpty(index)) {
    tree = tree.children?.[index ?? 0] as AppDataType;
    tree.attributes = { ...property };
    return result;
  }
  tree.attributes = { ...tree.attributes, ...property };

  return result;
};

export const onTextContentChange = ({
  appData,
  idx,
  content,
  index,
}: PyloadType & { content: string; index?: number }) => {
  let { result, tree } = getTargetTree(appData, idx);
  if (!isEmpty(index)) {
    tree = tree.children?.[index ?? 0] as AppDataType;
  }
  tree.content = content;

  return result;
};

export const addBlock = ({
  appData,
  idx,
  dataTransfer,
}: PyloadType & { dataTransfer: DataTransferType }) => {
  const idArr = idx.split("-").map((i) => Number(i));
  let { result, tree } = getTargetTree(appData, idx, -1);

  const propertyResult = deepClone(defaultBlockPropertyJson)[
    dataTransfer.data?.value as BasicBlockType
  ];
  if (dataTransfer.data?.type === "basic" && idArr.length === 2) {
    const oneColumn = deepClone(defaultBlockPropertyJson)[
      ColumnEnum.MJ_COLUMN_1
    ];
    oneColumn.children?.[0].children?.push(propertyResult);
    tree.children?.splice(idArr[idArr.length - 1], 0, oneColumn);
  } else {
    tree.children?.splice(idArr[idArr.length - 1], 0, propertyResult);
  }
  return result;
};

export const deleteBlock = ({ appData, idx }: PyloadType) => {
  const idArr = idx.split("-").map((i) => Number(i));
  const { result, tree } = getTargetTree(appData, idx, -1);

  tree.children?.splice(idArr[idArr.length - 1], 1);
  return result;
};

export const copyBlock = ({ appData, idx }: PyloadType) => {
  const idArr = idx.split("-").map((i) => Number(i));
  const { result, tree } = getTargetTree(appData, idx, -1);

  tree.children?.splice(
    idArr[idArr.length - 1],
    0,
    tree.children?.[idArr[idArr.length - 1]]
  );
  return result;
};

export const moveBlock = ({
  appData,
  idx,
  originIdx,
}: PyloadType & { originIdx: string }) => {
  const idArr = idx.split("-").map((i) => Number(i));
  const originIdArr = originIdx.split("-").map((i) => Number(i));
  const { result, tree } = getTargetTree(appData, originIdx, -1);

  const tmp = tree.children?.splice(
    originIdArr[originIdArr.length - 1],
    1
  )[0] as AppDataType;

  const treeResult = idArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as AppDataType;
  }, result);

  if (idArr.length === 2 && tmp?.tagName !== BasicEnum.MJ_SECTION) {
    const oneColumn = deepClone(defaultBlockPropertyJson)[
      ColumnEnum.MJ_COLUMN_1
    ];
    oneColumn.children?.[0].children?.push(tmp);
    treeResult.children?.splice(idArr[idArr.length - 1], 0, oneColumn);
  } else {
    treeResult.children?.splice(idArr[idArr.length - 1], 0, tmp);
  }

  return result;
};

export const onLayoutChange = ({
  appData,
  idx,
  column,
}: PyloadType & { column: ColumnUnitType }) => {
  const idArr = idx.split("-").map((i) => Number(i));
  const { result, tree } = getTargetTree(appData, idx, -1);

  const treeColumns = tree.children?.[idArr[idArr.length - 1]].children;

  const columnLen = ["left", "right"].includes(column) ? 2 : Number(column);

  const defaultColumns = deepClone(defaultBlockPropertyJson)[
    `${BasicEnum.MJ_COLUMN}-${column}`
  ];
  defaultColumns.children?.forEach((item, index) => {
    let originColumn = treeColumns?.[index];
    const originColumnAttr = originColumn?.attributes as any;

    if (originColumnAttr && originColumnAttr.width) {
      delete originColumnAttr.width;
    }

    if (originColumn) {
      originColumn.attributes = {
        ...originColumn.attributes,
        ...item.attributes,
      };
    } else {
      treeColumns?.push(item);
    }
  });
  columnLen < (treeColumns?.length ?? 0) && treeColumns?.splice(columnLen);
  return result;
};

export const addSocialBlock = ({
  appData,
  idx,
  value,
}: PyloadType & { value: AppDataType }) => {
  const { result, tree } = getTargetTree(appData, idx);

  tree.children?.splice(tree.children.length, 0, value);

  return result;
};

export const deleteSocialBlock = ({
  appData,
  idx,
  index,
}: PyloadType & { index: number }) => {
  const { result, tree } = getTargetTree(appData, idx);

  tree.children?.splice(index, 1);
  return result;
};

export const moveSocialBlock = ({
  appData,
  idx,
  originIndex,
  targetIndex,
}: PyloadType & { originIndex: number; targetIndex: number }) => {
  const { result, tree } = getTargetTree(appData, idx);
  const tmp = tree.children?.splice(originIndex, 1)[0] as AppDataType;

  tree.children?.splice(targetIndex, 0, tmp);
  return result;
};
