import { useEffect, useMemo, useState } from "react";
import {
  getIdxByNode,
  getJsonByIdx,
  formatPrefixPublicProperty,
  onPropertyChange,
} from "@/utils";
import { useAppData, useFocusNode } from ".";
import { defaultBlockPropertyJson } from "@/constant";

export const useProperty = () => {
  const [property, setProperty] = useState<object | undefined>(undefined);
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();

  const { idx, defaultNodeAttr } = useMemo(() => {
    if (!focusNode)
      return {
        idx: "1",
        defaultNodeAttr: { width: "600px", "background-color": "" },
      };
    return {
      idx: getIdxByNode({ node: focusNode }),
      defaultNodeAttr:
        defaultBlockPropertyJson[
          focusNode.classList[0] as keyof typeof defaultBlockPropertyJson
        ].attributes,
    };
  }, [focusNode]);

  const onChange = (property: Record<string, unknown>) => {
    if (!appData) return;
    setAppData(onPropertyChange({ appData, idx, property }));
  };

  useEffect(() => {
    if (!appData || !idx) return;
    const publicProperty =
      idx === "1" ? formatPrefixPublicProperty(appData) : {};
    const json = getJsonByIdx({ appData, idx });
    setProperty({ ...defaultNodeAttr, ...json?.attributes, ...publicProperty });
  }, [idx, appData]);

  return {
    property,
    setProperty: onChange,
  };
};
