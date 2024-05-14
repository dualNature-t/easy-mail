import { appDataType } from "@/context/appContext";
import deepClone from "./deepClone";

export const onTreePropertyChange = (
  tree: appDataType | null,
  idx: string,
  property: Record<string, unknown>
) => {
  if (!tree) return;
  const idArr = idx.split("-").map((i) => Number(i));

  const result = deepClone(tree);
  const treeResult = idArr.reduce((cur, pre) => {
    return cur.children?.[pre] as appDataType;
  }, result);
  treeResult.attributes = { ...treeResult.attributes, ...property };

  return result;
};

export const addTreeItem = () => {};

export const deleteTreeItem = () => {};

export const moveTreeItem = () => {};
