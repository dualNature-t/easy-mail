import { tagNameMap } from "@/constant";

const getBreadCrumbByNode = (node: HTMLElement | null) => {
  if (!node) return ["body"];
  const result = tagNameMap.find((item) => node.classList.contains(item));
  if (result == "mj-body") {
    return ["body"];
  }

  if (result == "mj-section") {
    return ["body", "section"];
  }

  return ["body", "section", result?.split("-")[1]];
};

export default getBreadCrumbByNode;
