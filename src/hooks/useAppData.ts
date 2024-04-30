import appContext from "@/context/appContext";
import { useContext } from "react";

const useAppData = () => {
  const { appData, setAppData } = useContext(appContext);

  return { appData, setAppData };
};

export default useAppData;
