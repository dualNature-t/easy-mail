import { BasicEnum } from "@/constant";

export const getNodeByIdx = <T extends Element>({
  doc,
  idx,
}: {
  doc: T;
  idx: string | null;
}): T | null => {
  if (!idx) return null;
  const idxArr = idx.split("-");
  idxArr.splice(0, 1, "0");
  let index = 0;
  let result = doc.querySelector("body") as Element;

  while (idxArr.length > 0) {
    const currentId = Number(idxArr.shift());
    if (index === 0 || index === 1) {
      result = result?.children?.[currentId];
    } else if (index === 2) {
      result = result?.querySelectorAll(`.${BasicEnum.MJ_COLUMN}`)?.[currentId];
    } else if (index === 3) {
      result = result?.querySelectorAll(".mj-column > table > tbody > tr")?.[
        currentId
      ];
    }

    index++;
  }
  return (result ?? null) as T;
};
