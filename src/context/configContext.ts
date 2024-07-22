import { AppDataType } from "@/constant";
import { createContext } from "react";

export const defaultAppData: AppDataType = {
  tagName: "mjml",
  attributes: {
    "css-class": "mjml",
  },
  children: [
    {
      tagName: "mj-body",
      attributes: {
        "css-class": "mj-body",
        "background-color": "transparent",
        width: "600px",
      },
      children: [],
    },
  ],
};

export const defaultConfig: AppProps = {
  skin: "light",
  colorPrimary: "#1677ff",
  lang: "en",
  value: defaultAppData,
  width: "100%",
  height: "100%",
  ref: undefined,
  onUpload: undefined,
};

export interface AppProps {
  skin?: "light" | "dark";
  colorPrimary?: string;
  lang?: "zh" | "en";
  value?: AppDataType;
  width?: string;
  height?: string;
  ref?: React.RefObject<Element>;
  onUpload?: (file: File) => void;
}

export const ConfigContext = createContext<AppProps>(defaultConfig);
