import { useContext } from "react";
import { AppContext } from "@/context";

export const useHoverNode = () => {
  const { hoverNode, setHoverNode } = useContext(AppContext);

  return { hoverNode, setHoverNode };
};
