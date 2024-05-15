import { useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import { tagNameType } from "@/context/appContext";
import { getPropertyByNode } from "@/utils/mergeProperty";

export type validFocusNodeTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-column"
>;

const useProperty = () => {
  const [property, setProperty] = useState<Record<string, string>>({});
  const { focusNode } = useFocusNode();

  useEffect(() => {
    if (!focusNode) return;
    const propertyMap = getPropertyByNode(focusNode);

    setProperty(propertyMap);
  }, [focusNode]);

  return { property };
};

export default useProperty;
