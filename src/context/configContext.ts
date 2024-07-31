import { AppDataType } from "@/constant";
import { createContext } from "react";

export type LangType = "zh_CN" | "en_US";

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
    {
      tagName: "mj-head",
      attributes: {},
      children: [
        {
          tagName: "mj-attributes",
          attributes: {},
          children: [
            {
              tagName: "mj-all",
              attributes: {
                "font-family": "arial",
                color: "#000000",
              },
            },
            {
              tagName: "mj-button",
              attributes: {
                color: "#FFFFFF",
                "background-color": "#414141",
              },
            },
            {
              tagName: "mj-section",
              attributes: {
                "background-color": "transparent",
              },
            },
          ],
        },
      ],
    },
  ],
};

export const defaultConfig: AppProps = {
  skin: "light",
  colorPrimary: "#1677ff",
  lang: undefined,
  value: defaultAppData,
  width: "100%",
  height: "100%",
  ref: undefined,
  onUpload: undefined,
  onUploadFocusChange: () => {},
};

export interface AppProps {
  skin?: "light" | "dark";
  colorPrimary?: string;
  lang?: LangType;
  value?: AppDataType;
  width?: string;
  height?: string;
  ref?: React.RefObject<Element>;
  tinymceLink?: string;
  onUpload?: (file: File) => Promise<{ url: string }>;
  onUploadFocusChange: () => void;
}

export const ConfigContext = createContext<AppProps>(defaultConfig);
