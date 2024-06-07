import { appDataType, dataTransferType } from "@/context/appContext";
import deepClone from "./deepClone";
import { defaultNodePropertyMap } from "@/constant";

export const onTreePropertyChange = (
  tree: appDataType | null,
  idx: string,
  property: Record<string, unknown>
) => {
  if (!tree) return;
  const result = deepClone(tree);
  if (idx) {
    const idArr = idx.split("-").map((i) => Number(i));

    const treeResult = idArr.reduce((cur, pre) => {
      return cur.children?.[pre] as appDataType;
    }, result);
    treeResult.attributes = { ...treeResult.attributes, ...property };
  } else {
    const treeResult = result.children?.[0] as appDataType;
    treeResult.attributes = { ...treeResult.attributes, ...property };
  }

  return result;
};

export const onTextContentChange = (
  tree: appDataType | null,
  idx: string,
  content: string
) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeResult = idArr.reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);
  treeResult.content = content;

  return result;
};

export const addTreeItem = (
  tree: appDataType | null,
  idx: string,
  dataTransfer: dataTransferType
) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeResult = idArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);

  if (dataTransfer.data.type === "base" && idArr.length === 2) {
    const oneColumn = deepClone(defaultNodePropertyMap["mj-column"]);
    oneColumn.children?.[0].children?.push(
      deepClone(
        defaultNodePropertyMap[
          dataTransfer.data.value as keyof typeof defaultNodePropertyMap
        ]
      )
    );
    treeResult.children?.splice(idArr[idArr.length - 1], 0, oneColumn);
  } else {
    treeResult.children?.splice(
      idArr[idArr.length - 1],
      0,
      deepClone(
        defaultNodePropertyMap[
          dataTransfer.data.value as keyof typeof defaultNodePropertyMap
        ]
      )
    );
  }

  return result;
};

export const deleteTreeItem = (tree: appDataType | null, idx: string) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeResult = idArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);
  treeResult.children?.splice(idArr[idArr.length - 1], 1);
  return result;
};

export const copyTreeItem = (tree: appDataType | null, idx: string) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeResult = idArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);
  treeResult.children?.splice(
    idArr[idArr.length - 1],
    0,
    treeResult.children?.[idArr[idArr.length - 1]]
  );
  return result;
};

export const moveTreeItem = (
  tree: appDataType | null,
  idx: string,
  originIdx: string
) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));
  const originIdArr = originIdx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeOriginResult = originIdArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);

  const tmp = treeOriginResult.children?.splice(
    originIdArr[originIdArr.length - 1],
    1
  )[0] as appDataType;

  const treeResult = idArr.slice(0, -1).reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);

  if (idArr.length === 2 && tmp?.tagName !== "mj-section") {
    const oneColumn = deepClone(defaultNodePropertyMap["mj-column"]);
    oneColumn.children?.[0].children?.push(tmp);
    treeResult.children?.splice(idArr[idArr.length - 1], 0, oneColumn);
  } else {
    treeResult.children?.splice(idArr[idArr.length - 1], 0, tmp);
  }

  return result;
};
