import { IFRAME_ID } from "@/pages/Main";

const getEditorWindow = () => {
  return (document.getElementById(IFRAME_ID) as HTMLIFrameElement)
    .contentWindow as any;
};

export default getEditorWindow;
