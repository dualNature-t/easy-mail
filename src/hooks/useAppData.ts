import { useContext } from "react";
import { AppContext } from "../context";

const useAppData = () => {
  const { appData, setAppData } = useContext(AppContext);

  return { appData, setAppData };
};

export default useAppData;
