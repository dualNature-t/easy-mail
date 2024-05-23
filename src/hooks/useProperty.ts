import { useCallback, useEffect, useState } from "react";
import useFocusNode from "./useFocusNode";
import { appDataType, tagNameType } from "@/context/appContext";
import getMjmlByNode from "@/utils/getMjmlByNode";
import useAppData from "./useAppData";
import { onTreePropertyChange } from "@/utils/treeTool";

export type validFocusNodeTagNameType = Exclude<
  tagNameType,
  "mjml" | "mj-column"
>;

const useProperty = () => {
  const [property, setProperty] = useState<object | undefined>({});
  const { appData, setAppData } = useAppData();
  const { focusNode } = useFocusNode();

  const nodeName = (focusNode?.classList[0] ??
    "mj-body") as validFocusNodeTagNameType;

  const onPropertyChange = (
    value: Record<string, string>,
    allValue: Record<string, string>
  ) => {
    const json = getMjmlByNode(appData, focusNode);
    setAppData(
      onTreePropertyChange(appData, json.idx, allValue) as appDataType
    );
  };

  useEffect(() => {
    const json = getMjmlByNode(appData, focusNode);
    setProperty(json.mjml?.attributes);
  }, [appData, focusNode]);

  return {
    nodeName,
    property,
    setProperty: onPropertyChange,
  };
};

export default useProperty;
