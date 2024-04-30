import { appDataType } from "@/context/appContext";

const getMjmlByNode = (
  appData: appDataType | null,
  node: HTMLElement | null
) => {
  let mjml = appData?.children?.[0];
  let idx = "0";
  if (!appData || !node || node.classList.contains("mj-body"))
    return { mjml, idx };

  if (node.classList.contains("mj-section")) {
    let id = 0;
    let siblingNode = node;
    while (siblingNode.previousElementSibling) {
      id++;
      siblingNode = siblingNode.previousElementSibling as HTMLElement;
    }
    mjml = mjml?.children?.[id];
    idx = `${idx}-${id}`;
  } else {
    let id = 0;
    let currentNode = node.parentElement as HTMLElement;
    // 第一层block筛选
    while (currentNode.previousElementSibling) {
      id++;
      currentNode = currentNode.previousElementSibling as HTMLElement;
    }
    const block4Id = id;

    // 第二层column筛选
    currentNode = currentNode.parentElement as HTMLElement;
    while (!currentNode?.classList?.contains("mj-column")) {
      currentNode = currentNode.parentElement as HTMLElement;
    }
    id = 0;
    while (currentNode.previousElementSibling) {
      id++;
      currentNode = currentNode.previousElementSibling as HTMLElement;
    }
    const block3Id = id;

    // 第三层section筛选
    currentNode = currentNode.parentElement as HTMLElement;
    while (!currentNode?.classList?.contains("mj-section")) {
      currentNode = currentNode.parentElement as HTMLElement;
    }
    id = 0;
    while (currentNode.previousElementSibling) {
      id++;
      currentNode = currentNode.previousElementSibling as HTMLElement;
    }
    const block2Id = id;
    idx = `${idx}-${block2Id}-${block3Id}-${block4Id}`;
    mjml =
      mjml?.children?.[block2Id]?.children?.[block3Id]?.children?.[block4Id];
  }

  return { mjml, idx };
};

export default getMjmlByNode;
