import { useContext } from "react";
import { ConfigContext } from "@/context";

export const useConfig = () => {
  const configValue = useContext(ConfigContext);

  return { ...configValue };
};
