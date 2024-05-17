import { useCallback, useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import { tagNameType } from "@/context/appContext";
import { getPropertyByNode, setPropertyByNode } from "@/utils/mergeProperty";

export type validFocusNodeTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-column"
>;

const useProperty = () => {
  const [property, setProperty] = useState<Record<string, string>>({});
  const { focusNode } = useFocusNode();

  const setPropertyToNode = useCallback(
    (styleObj: Record<string, string>) => {
      const pt = { ...property, ...styleObj };
      setPropertyByNode(focusNode, pt);
      setProperty(pt);
    },
    [focusNode, property]
  );

  const nodeName = (focusNode?.classList[0] ??
    "mj-body") as validFocusNodeTagNameType;

  useEffect(() => {
    if (!focusNode) return;
    const propertyMap = getPropertyByNode(focusNode);

    setProperty(propertyMap);
  }, [focusNode]);

  return {
    nodeName,
    property,
    setProperty: setPropertyToNode,
  };
};

export default useProperty;
