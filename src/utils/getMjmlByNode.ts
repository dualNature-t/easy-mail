import { appDataType } from "@/context/appContext";

const getMjmlByNode = (appData: appDataType | null, node: Element | null) => {
  let mjml = appData?.children?.[0];
  let idx = "0";
  if (!appData || !node || node.classList.contains("mj-body"))
    return { mjml, idx: null };

  if (
    node.classList.contains("mj-section") ||
    node.previousElementSibling?.classList.contains("mj-section") ||
    node.nextElementSibling?.classList.contains("mj-section") ||
    appData.children?.[0].children?.length == 0
  ) {
    let id = 0;
    let siblingNode = node;
    while (siblingNode.previousElementSibling) {
      siblingNode = siblingNode.previousElementSibling as HTMLElement;
      if (siblingNode.classList.contains("drop-block")) {
        continue;
      }
      id++;
    }
    mjml = mjml?.children?.[id];
    idx = `${idx}-${id}`;
  } else {
    let id = 0;
    let currentNode = node.classList.contains("drop-block")
      ? node
      : (node.parentElement as HTMLElement);
    // 第一层block筛选
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling as HTMLElement;
      if (
        currentNode.classList.contains("drop-block") ||
        currentNode.children[0].classList.contains("focus")
      ) {
        continue;
      }

      id++;
    }
    const block4Id = id;

    // 第二层column筛选
    currentNode = currentNode?.parentElement as HTMLElement;
    while (currentNode && !currentNode?.classList?.contains("mj-column")) {
      currentNode = currentNode.parentElement as HTMLElement;
    }
    id = 0;
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling as HTMLElement;
      if (currentNode.classList.contains("drop-block")) {
        continue;
      }

      id++;
    }
    const block3Id = id;

    // 第三层section筛选
    currentNode = currentNode?.parentElement as HTMLElement;
    while (currentNode && !currentNode?.classList?.contains("mj-section")) {
      currentNode = currentNode.parentElement as HTMLElement;
    }
    id = 0;
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling as HTMLElement;
      if (currentNode.classList.contains("drop-block")) {
        continue;
      }

      id++;
    }
    const block2Id = id;
    idx = `${idx}-${block2Id}-${block3Id}-${block4Id}`;
    mjml =
      mjml?.children?.[block2Id]?.children?.[block3Id]?.children?.[block4Id];
  }

  return { mjml, idx } as { mjml: appDataType; idx: string };
};

export const getNodeByIdx = <T extends Element>(
  doc: T,
  idx: string | null
): T | null => {
  if (!idx) return null;
  const idxArr = idx.split("-");
  let index = 0;
  let result = doc.querySelector("body") as Element;

  while (idxArr.length > 0) {
    const currentId = idxArr.shift();
    if (index === 0 || index === 1) {
      result = result?.children?.[Number(currentId)];
    } else if (index === 2) {
      result = result?.querySelectorAll(".mj-column")?.[Number(currentId)];
    } else if (index === 3) {
      result = result?.querySelectorAll(".mj-column > table > tbody > tr")?.[
        Number(currentId)
      ];
    }

    index++;
  }
  return (result ?? null) as T;
};

export default getMjmlByNode;
