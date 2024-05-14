import appContext from "@/context/appContext";
import { useContext } from "react";

const useDataTransfer = () => {
  const { dataTransfer, setDataTransfer } = useContext(appContext);

  return { dataTransfer, setDataTransfer };
};

export default useDataTransfer;
