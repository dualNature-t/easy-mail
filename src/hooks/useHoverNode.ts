import appContext from "@/context/appContext";
import { useContext } from "react";

const useHoverNode = () => {
  const { hoverNode, setHoverNode } = useContext(appContext);

  return { hoverNode, setHoverNode };
};

export default useHoverNode;
