import { useContext } from "react";
import { AppContext } from "../context";

const useFocusNode = () => {
  const { focusNode, setFocusNode } = useContext(AppContext);

  return { focusNode, setFocusNode };
};

export default useFocusNode;
