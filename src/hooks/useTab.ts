import { useContext } from "react";
import { AppContext } from "@/context";

export const useTab = () => {
  const { tab, setTab } = useContext(AppContext);

  return { tab, setTab };
};
