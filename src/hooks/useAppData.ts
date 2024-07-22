import { useContext } from "react";
import { AppContext } from "@/context";

export const useAppData = () => {
  const { appData, setAppData } = useContext(AppContext);

  return { appData, setAppData };
};
