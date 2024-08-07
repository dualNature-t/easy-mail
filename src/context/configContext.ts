import { EasymailProps, EasymailValueType } from "@/constant";
import { createContext } from "react";

export const defaultAppData: EasymailValueType = {
  tagName: "mjml",
  attributes: {
    "css-class": "mjml",
  },
  children: [
    {
      tagName: "mj-body",
      attributes: {
        "css-class": "mj-body",
        "background-color": undefined,
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
                "background-color": undefined,
              },
            },
          ],
        },
      ],
    },
  ],
};

export const defaultConfig: EasymailProps = {
  skin: "light",
  colorPrimary: "#1677ff",
  lang: undefined,
  value: defaultAppData,
  width: "100%",
  height: "100%",
  ref: undefined,
  tinymceLink: undefined,
  onUpload: undefined,
  onUploadFocusChange: () => {},
};

export const ConfigContext = createContext<EasymailProps>(defaultConfig);
