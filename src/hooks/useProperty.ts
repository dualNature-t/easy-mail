import { useCallback, useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import { tagNameType } from "@/context/appContext";
import { getPropertyByNode, objToStyleStr } from "@/utils/mergeProperty";

export type validFocusNodeTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-column"
>;

const useProperty = () => {
  const [property, setProperty] = useState<Record<string, string>>({});
  const { focusNode } = useFocusNode();

  const setPropertyToNode = useCallback(
    (styleStr: Record<string, string>) => {
      focusNode?.setAttribute("style", objToStyleStr(styleStr));
      setProperty(styleStr);
    },
    [focusNode]
  );

  useEffect(() => {
    if (!focusNode) return;
    const propertyMap = getPropertyByNode(focusNode);

    setProperty(propertyMap);
  }, [focusNode]);

  return {
    nodeName: focusNode?.classList[0],
    property,
    setProperty: setPropertyToNode,
  };
};

export default useProperty;
