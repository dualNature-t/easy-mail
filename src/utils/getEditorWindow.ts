import { IFRAME_ID } from "@/pages/Main";

export const getEditorWindow = () => {
  return (document.getElementById(IFRAME_ID) as HTMLIFrameElement)
    .contentWindow as any;
};
