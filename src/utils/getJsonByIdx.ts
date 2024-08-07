import { EasymailValueType } from "@/constant";

export const getJsonByIdx = ({
  appData,
  idx,
}: {
  appData: EasymailValueType | undefined;
  idx: string;
}) => {
  const idxArr = idx.split("-");
  const result = idxArr.reduce((cur, pre) => {
    return cur?.children?.[Number(pre)];
  }, appData);

  return result;
};
