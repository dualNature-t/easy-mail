import { basicElementTextMap, columnElementTextMap } from "@/constant";
import { basicTagNameType, columnTagNameType } from "@/context/appContext";

export const mergeSectionByNode = (node: Element | null) => {
  if (!node) return "";

  const div = document.createElement("div");
  const nodeText = `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix mj-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody>
                            <tr>
                                <td class="block-replace"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
        </table>
    </div>`;

  div.innerHTML = nodeText;
  const replaceEle = div.querySelector(".block-replace");
  replaceEle?.replaceWith(node);

  return div.children[0];
};

export const mergeSectionByType = (
  type: basicTagNameType | columnTagNameType
) => {
  if (Object.keys(basicElementTextMap).includes(type)) {
    // 基础类型
    const blockText = basicElementTextMap[type as basicTagNameType];
    const tr = document.createElement("tr");
    tr.innerHTML = blockText;

    return mergeSectionByNode(tr.children[0]);
  } else {
    // columns类型
    const blockText = columnElementTextMap[type as columnTagNameType];
    const div = document.createElement("div");
    div.innerHTML = blockText;
    return div.children[0];
  }
};

export const hasChildByColumn = (item: Element) => {
  const childStr = Object.keys(basicElementTextMap)
    .map((i) => `.${i}`)
    .join(",");
  return item.querySelectorAll(childStr).length > 0;
};

export const mergeNodeEmpty = (node: Element | null) => {
  if (!node) return null;
  const nodeClone = node.cloneNode(true) as Element;
  const body = nodeClone.querySelector("div.mj-body");

  if (body && body.childElementCount === 0) {
    body.innerHTML = "";
  } else {
    const columns = nodeClone.querySelectorAll("div.mj-column");
    columns.forEach((item) => {
      if (!hasChildByColumn(item)) item.classList.add("mj-column-empty");
    });
  }

  return nodeClone;
};
