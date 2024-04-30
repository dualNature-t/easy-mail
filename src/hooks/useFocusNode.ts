import appContext from "@/context/appContext";
import { useContext } from "react";

const useFocusNode = () => {
  const { focusNode, setFocusNode } = useContext(appContext);

  return { focusNode, setFocusNode };
};

export default useFocusNode;
