import { AppContext } from "@/context";
import { useContext } from "react";

export const useDataTransfer = () => {
  const { dataTransfer, setDataTransfer } = useContext(AppContext);

  return { dataTransfer, setDataTransfer };
};
