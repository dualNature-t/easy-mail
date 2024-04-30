import appContext from "@/context/appContext";
import { useContext } from "react";

const useTab = () => {
  const { tab, setTab } = useContext(appContext);

  return { tab, setTab };
};

export default useTab;
