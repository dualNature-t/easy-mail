import { useContext } from "react";
import { AppContext } from "../context";

const useHoverNode = () => {
  const { hoverNode, setHoverNode } = useContext(AppContext);

  return { hoverNode, setHoverNode };
};

export default useHoverNode;
