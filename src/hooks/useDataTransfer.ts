import { useContext } from "react";
import { AppContext } from "../context";

const useDataTransfer = () => {
  const { dataTransfer, setDataTransfer } = useContext(AppContext);

  return { dataTransfer, setDataTransfer };
};

export default useDataTransfer;
