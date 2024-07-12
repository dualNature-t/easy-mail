import { useContext } from "react";
import { AppContext } from "../context";

const useTab = () => {
  const { tab, setTab } = useContext(AppContext);

  return { tab, setTab };
};

export default useTab;
