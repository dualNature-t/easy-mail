import { useEffect, useMemo, useState } from "react";
import { getIdxByNode, getJsonByIdx, onPropertyChange } from "@/utils";
import { useAppData, useFocusNode } from ".";

export const useProperty = () => {
  const [property, setProperty] = useState<object | undefined>(undefined);
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();

  const idx = useMemo(() => {
    if (!focusNode) return "0";
    return getIdxByNode({ node: focusNode });
  }, [focusNode]);

  const onChange = (property: Record<string, unknown>) => {
    if (!appData) return;
    setAppData(onPropertyChange({ appData, idx, property }));
  };

  useEffect(() => {
    if (!appData || !idx) return;
    const json = getJsonByIdx({ appData, idx });
    setProperty(json?.attributes);
  }, [idx, appData]);

  return {
    property,
    setProperty: onChange,
  };
};
