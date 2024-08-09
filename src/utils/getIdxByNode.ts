import { TransferActionType } from "../constant";
import { isBody, isColumn, isDropBlock, isFocusBlock, isSection } from ".";

export const getIdxByNode = ({
  node,
  transferAction,
}: {
  node: Element | null;
  transferAction?: TransferActionType;
}) => {
  let idx = "1";
  if (!node) return idx;
  if (isBody(node.parentElement)) {
    let id = 0;
    let currentNode = node;
    while (currentNode.previousElementSibling) {
      currentNode = currentNode.previousElementSibling;
      if (
        isDropBlock(currentNode) ||
        (transferAction === "move" && isFocusBlock(currentNode))
      ) {
        continue;
      }
      id++;
    }
    idx = `${idx}-${id}`;
  } else {
    let id = 0;
    let currentNode = isDropBlock(node) ? node : node.parentElement;

    // BLOCK
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling;
      if (
        isDropBlock(currentNode) ||
        (transferAction === "move" && isFocusBlock(currentNode.children[0]))
      ) {
        continue;
      }

      id++;
    }
    const block4Id = id;

    // COLUMN
    while (!isColumn(currentNode)) {
      currentNode = currentNode?.parentElement as Element;
    }
    id = 0;
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling;
      if (isDropBlock(currentNode)) {
        continue;
      }
      id++;
    }
    const block3Id = id;

    // SECTION
    while (!isSection(currentNode)) {
      currentNode = currentNode?.parentElement as Element;
    }
    id = 0;
    while (currentNode?.previousElementSibling) {
      currentNode = currentNode.previousElementSibling as HTMLElement;
      if (isDropBlock(currentNode)) {
        continue;
      }
      id++;
    }
    const block2Id = id;

    idx = `${idx}-${block2Id}-${block3Id}-${block4Id}`;
  }
  return idx;
};
