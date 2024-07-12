import { useEffect, useMemo, useState } from "react";
import useFocusNode from "./useFocusNode";
import useAppData from "./useAppData";
import getIdxByNode from "@/utils/getIdxByNode";
import getJsonByIdx from "@/utils/getJsonByIdx";
import { onPropertyChange } from "@/utils/treeTools";

const useProperty = () => {
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
    // console.log(appData, json, idx);
    setProperty(json?.attributes);
  }, [idx, appData]);

  return {
    property: property,
    setProperty: onChange,
  };
};

export default useProperty;
