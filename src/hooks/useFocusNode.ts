import { useContext } from "react";
import { AppContext } from "@/context";

export const useFocusNode = () => {
  const { focusNode, setFocusNode } = useContext(AppContext);

  return { focusNode, setFocusNode };
};
