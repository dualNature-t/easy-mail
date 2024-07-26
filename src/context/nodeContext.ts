import React, { createContext } from "react";

export interface NodeContextType {
  currentHoverNode: React.MutableRefObject<Element | null>;
  currentFocusNode: React.MutableRefObject<Element | null>;
  currentEmptyNode: React.MutableRefObject<Element | null>;
}

export const NodeContext = createContext<NodeContextType | null>(null);
