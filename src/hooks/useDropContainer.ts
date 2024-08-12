import { useEffect, useState } from "react";
import { BasicEnum, EDITOR_TOOL_BOX, MJ_COLUMN_EMPTY } from "@/constant";
import {
  getDocByData,
  getEditorWindow,
  getIdxByNode,
  getNodeByIdx,
  getNodeByTarget,
  hasChildByColumn,
  insertEle2Node,
  isBody,
  isButton,
  isDropBlock,
  isEmptyColumn,
  isFocusBlock,
  isHoverBlock,
  isSection,
  isText,
  mergeNode,
  mergeTinymceEmptyNode,
  onTextContentChange,
  throttle,
} from "@/utils";
import {
  useAppData,
  useConfig,
  useCurrentNode,
  useDataTransfer,
  useDropBlock,
  useEditorTool,
  useFocusNode,
  useFocusTool,
  useHoverNode,
  useTab,
} from ".";
import i18n from "@/i18n";

export const useDropContainer = () => {
  const { setHoverNode } = useHoverNode();
  const { focusNode, setFocusNode } = useFocusNode();
  const { setTab } = useTab();
  const { appData, setAppData } = useAppData();
  const { dataTransfer, setDataTransfer } = useDataTransfer();
  const { block } = useDropBlock();
  const { editorTool } = useEditorTool();
  const { skin, lang } = useConfig();
  useFocusTool();

  const [ref, setRef] = useState<Element | null>(null);
  const {
    currentHoverNode,
    currentFocusNode,
    currentEmptyNode,
    resetEmptyNode,
    setHoverNodeCls,
    setFocusNodeCls,
  } = useCurrentNode();

  useEffect(() => {
    if (!ref) return;

    const mouseover = (e: Event) => {
      const target = e.target as Element;
      if (!target || dataTransfer) return;
      setHoverNodeCls("remove");

      const node = getNodeByTarget(target) as HTMLElement;

      if (!node || isHoverBlock(node)) return;

      if (currentHoverNode.current !== node) {
        currentHoverNode.current = node;
      }
      setHoverNodeCls("add");
      setHoverNode(node);
    };

    const mouseout = () => {
      setHoverNodeCls("remove");
    };

    const click = (e: Event) => {
      e.preventDefault();
      const target = e.target as Element;
      if (!target) return;

      setTab("edit");
      setFocusNodeCls("remove");

      const node = getNodeByTarget(target) as HTMLElement | null;

      if (!node) {
        setFocusNode(null);
        return;
      }
      if (isFocusBlock(node)) return;

      if (currentFocusNode.current !== node) {
        currentFocusNode.current = node;
      }

      setFocusNodeCls("add");
      setFocusNode(node);
    };

    const drop = (e: Event) => {
      e.preventDefault();

      if (isDropBlock(e.target as HTMLElement)) {
        currentEmptyNode.current = null;
      } else {
        resetEmptyNode();
      }
    };

    const dragover = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      throttleDragOver(e);
    };

    const throttleDragOver = throttle((e: Event) => {
      let target = getNodeByTarget(e.target as Element, BasicEnum.MJ_COLUMN);
      const editorBody = getEditorWindow().document.body;

      if (
        isBody(e.target as Element) &&
        editorBody.children[0].children.length === 0
      ) {
        editorBody.children[0].appendChild(block as Node);
        return;
      }

      if (dataTransfer?.data?.type == "basic" && isEmptyColumn(target)) {
        resetEmptyNode();
        currentEmptyNode.current = target;
        target?.classList.remove(MJ_COLUMN_EMPTY);
        target?.children[0].children[0].appendChild(block as Node);
        return;
      }

      const isMergeSection =
        dataTransfer?.type === "move"
          ? dataTransfer?.data?.type == "column" || isSection(focusNode)
          : dataTransfer?.data?.type == "column";

      target = getNodeByTarget(
        e.target as HTMLElement,
        isMergeSection ? BasicEnum.MJ_SECTION : undefined
      );

      if (!target || !block) return;

      const { height, top } = target.getBoundingClientRect();
      const { clientY } = e as DragEvent;
      const direction = clientY - top > height / 2 ? "down" : "up";

      let insertParentEle = target.parentElement;
      let insertEle = target;

      if (!isSection(target)) {
        insertParentEle = insertParentEle?.parentElement ?? null;
        insertEle = insertEle.parentElement as HTMLElement;
      }

      if (dataTransfer?.type == "move") {
        if (target === focusNode) return;
        if (isSection(focusNode)) {
          if (
            (direction == "down" &&
              focusNode?.previousElementSibling === insertEle) ||
            (direction == "up" && focusNode?.nextElementSibling === insertEle)
          ) {
            return;
          }
        } else {
          if (
            (direction == "down" &&
              focusNode?.parentElement?.previousElementSibling === insertEle) ||
            (direction == "up" &&
              focusNode?.parentElement?.nextElementSibling === insertEle)
          ) {
            return;
          }
        }
      }

      if (direction == "down") {
        insertEle2Node(insertEle, block);
      } else {
        insertParentEle?.insertBefore(block, insertEle);
      }

      resetEmptyNode();
    }, 400);

    ref.addEventListener("mouseover", mouseover);
    ref.addEventListener("mouseout", mouseout);
    ref.addEventListener("click", click);
    ref.addEventListener("drop", drop);
    ref.addEventListener("dragover", dragover);

    return () => {
      ref.removeEventListener("mouseover", mouseover);
      ref.removeEventListener("click", click);
      ref.removeEventListener("drop", drop);
      ref.removeEventListener("dragover", dragover);
      ref.removeEventListener("mouseout", mouseout);
    };
  }, [ref, block, focusNode, dataTransfer]);

  useEffect(() => {
    if (!ref) return;
    const onDragEnd = () => {
      block && block.remove();
      resetEmptyNode();
      setDataTransfer(null);
    };
    window.addEventListener("dragend", onDragEnd);
    ref.addEventListener("dragend", onDragEnd);

    return () => {
      window.removeEventListener("dragend", onDragEnd);
      ref.removeEventListener("dragend", onDragEnd);
    };
  }, [ref, block]);

  useEffect(() => {
    if (!ref || !editorTool) return;
    let mceEditor: any = null;
    const iframeWindow = getEditorWindow();

    const removeEditor = (node: Element | null) => {
      iframeWindow.tinymce?.remove();
      node?.removeAttribute("id");
      node?.removeAttribute("class");
      node?.removeAttribute("contenteditable");
      mceEditor = null;
    };

    const clickFn = (e: Event) => {
      const node = getNodeByTarget(e.target as HTMLElement);

      if (isText(node) || isButton(node)) {
        let targetNode = isText(node)
          ? node?.children[0]
          : node?.querySelector("p") || node?.querySelector("a");

        if (isButton(node)) {
          if (targetNode?.children[0]) {
            targetNode = targetNode.children[0];
          } else {
            const div = document.createElement("div");
            div.innerText = targetNode?.textContent?.trim() ?? "";
            targetNode?.replaceChildren(div);
            targetNode = div;
          }
        }

        if (targetNode?.getAttribute("id") === "editor") return;
        if (mceEditor && !mceEditor.removed) {
          removeEditor(mceEditor.bodyElement);
        }
        targetNode?.setAttribute("id", "editor");

        iframeWindow.tinymce?.init({
          selector: "#editor",
          license_key: "gpl",
          inline: true,
          menubar: false,
          language: lang ?? (i18n.language.includes("zh") ? "zh_CN" : "en_US"),
          skin: skin === "light" ? "oxide" : "oxide-dark",
          plugins: "autolink link",
          toolbar: [
            "fontsize forecolor undo redo",
            "removeformat bold italic underline strikethrough link unlink",
          ],
          fixed_toolbar_container: `#${EDITOR_TOOL_BOX}`,
          forced_root_block: " ",
          init_instance_callback: () => {
            (targetNode as HTMLTextAreaElement).focus();
          },
          font_size_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
          setup: (editor: any) => {
            mceEditor = editor;
            editor.on("change", (e: any) => {
              const content = e.level.content;
              const idx = getIdxByNode({ node: node as Element });
              setDataTransfer({ type: "tinymce" });
              setAppData((preData) => {
                return onTextContentChange({
                  appData: preData,
                  idx,
                  content,
                });
              });
            });
            editor.on("blur", () => {
              setTimeout(() => {
                removeEditor(targetNode ?? null);
              });
            });
          },
        });
        return;
      }

      if (mceEditor && !mceEditor.removed) {
        removeEditor(mceEditor.bodyElement);
      }
    };

    ref.addEventListener("click", clickFn, false);
    return () => {
      ref.removeEventListener("click", clickFn, false);
    };
  }, [editorTool, ref, lang, skin]);

  useEffect(() => {
    if (!appData || !ref) return;
    const doc = getDocByData(appData);

    const focusIdx = getIdxByNode({ node: focusNode });
    const focusTargetNode = getNodeByIdx({ doc, idx: focusIdx });
    let targetNode: HTMLElement | null = null;

    if (dataTransfer) {
      if (["copy", "delete", "tinymce"].includes(dataTransfer.type)) {
        setDataTransfer(null);
        return;
      }
      const blockIdx = getIdxByNode({
        node: block,
        transferAction: dataTransfer?.type,
      });
      const blockTargetNode = getNodeByIdx({ doc, idx: blockIdx });
      if (dataTransfer.type === "add") {
        targetNode = blockTargetNode;
        mergeTinymceEmptyNode(targetNode);

        block?.replaceWith(targetNode as Node);
      } else {
        const column = getNodeByTarget(
          focusNode as HTMLElement,
          BasicEnum.MJ_COLUMN
        );

        if (
          focusIdx.split("-")[1] !== blockIdx.split("-")[1] ||
          focusIdx.length !== blockIdx.length
        ) {
          setFocusNodeCls("remove");
        }

        if (isSection(focusNode)) {
          focusNode?.remove();
        } else {
          focusNode?.parentElement?.remove();
        }

        if (!hasChildByColumn(column as Element)) {
          column?.classList.add(MJ_COLUMN_EMPTY);
        }

        targetNode = blockTargetNode;
        if (targetNode) {
          if (isSection(targetNode)) {
            currentFocusNode.current = targetNode;
          } else {
            currentFocusNode.current = targetNode.children[0];
          }
          setFocusNode(currentFocusNode.current as HTMLElement);
        }
        mergeTinymceEmptyNode(targetNode);
        block?.replaceWith(targetNode as Node);
        setFocusNodeCls("add");
      }
    } else {
      let focusOriginNode =
        focusNode || getEditorWindow().document.body.children[0];

      if (focusTargetNode) {
        // Section full-width
        if (
          isSection(focusOriginNode) &&
          focusOriginNode.tagName !== focusTargetNode?.tagName
        ) {
          focusTargetNode.appendChild(focusOriginNode.lastElementChild);
          currentFocusNode.current = focusTargetNode;

          focusOriginNode.replaceWith(focusTargetNode);
          setFocusNodeCls("add");
          setFocusNode(focusTargetNode);
        } else {
          setTimeout(() => {
            mergeNode(focusOriginNode, focusTargetNode);
            mergeTinymceEmptyNode(focusOriginNode);
          });
        }
      }
    }

    setDataTransfer(null);
  }, [appData]);

  return { setRef };
};
