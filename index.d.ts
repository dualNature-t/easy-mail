import React from "react";
declare const Easymail: React.ForwardRefExoticComponent<EasymailProps>;

export type EasymailLangType = "zh_CN" | "en_US";

export type EasymailSkinType = "light" | "dark";

export interface EasymailRefProps {
  getData: () => EasymailValueType;
}

export type EasymailValueType = {
  tagName:
    | "mjml"
    | "mj-body"
    | "mj-section"
    | "mj-column"
    | "mj-text"
    | "mj-image"
    | "mj-button"
    | "mj-divider"
    | "mj-spacer"
    | "mj-social"
    | "mj-social-element"
    | "mj-head"
    | "mj-attributes"
    | "mj-all";
  attributes: object;
  content?: string;
  children?: EasymailValueType[];
};

export interface EasymailProps {
  /** theme */
  skin?: EasymailSkinType;
  /** primary color */
  colorPrimary?: string;
  /** language */
  lang?: EasymailLangType;
  /** JSON value */
  value?: EasymailValueType;
  /** width  */
  width?: string;
  /** height  */
  height?: string;
  /** ref */
  ref?: React.RefObject<EasymailRefProps>;
  /** tinymce host_self editor src */
  tinymceLink?: string;
  /** upload image */
  onUpload?: (file: File) => Promise<{ url: string }>;
  /** when image uploading, but focusNode change callback */
  onUploadFocusChange?: () => void;
}

export default Easymail;
