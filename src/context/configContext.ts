import { EasymailProps } from "@/constant";
import { createContext } from "react";

export const defaultAppData: string = `<mjml><mj-head><mj-attributes><mj-all font-family="arial" color="#000000"></mj-all><mj-button color="#FFFFFF" background-color="#414141"></mj-button><mj-section></mj-section></mj-attributes></mj-head><mj-body  css-class="mj-body" width="600px"></mj-body></mjml>`;

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
