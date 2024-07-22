import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";

const column1Svg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M16 4.5H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM4 3a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 4 17h12a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16 3H4z"
    ></path>
    <title>1 Column</title>
  </svg>
);
export const Column1Outlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={column1Svg} {...props} />
);

const column2Svg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M4 4.5h2.75a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm-2.5 1A2.5 2.5 0 0 1 4 3h2.75a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-9zm11.75-1H16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2.75a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm-2.5 1a2.5 2.5 0 0 1 2.5-2.5H16a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-2.75a2.5 2.5 0 0 1-2.5-2.5v-9z"
    ></path>
    <title>2 Column</title>
  </svg>
);
export const Column2Outlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={column2Svg} {...props} />
);

const column3Svg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M1.5 4.75C1.5 3.784 2.284 3 3.25 3h1.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 4.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75V4.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25h-1.5zm4.25.25C7.5 3.784 8.284 3 9.25 3h1.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75V4.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25h-1.5zm6-1.5a1.75 1.75 0 0 0-1.75 1.75v10.5c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 16.75 3h-1.5zM15 4.75a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V4.75z"
    ></path>
    <title>3 Column</title>
  </svg>
);
export const Column3Outlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={column3Svg} {...props} />
);

const column4Svg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M2.75 3c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h1C4.44 17 5 16.44 5 15.75V4.25C5 3.56 4.44 3 3.75 3h-1zM3 4.75a.25.25 0 0 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75zM7.25 3C6.56 3 6 3.56 6 4.25v11.5c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25V4.25C9.5 3.56 8.94 3 8.25 3h-1zm.25 1.75a.25.25 0 0 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75zm3-.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25V4.25zm1.75.25a.25.25 0 0 0-.25.25v10.5a.25.25 0 1 0 .5 0V4.75a.25.25 0 0 0-.25-.25zm4-1.5C15.56 3 15 3.56 15 4.25v11.5c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25h-1zm.25 1.75a.25.25 0 1 1 .5 0v10.5a.25.25 0 1 1-.5 0V4.75z"
    ></path>
    <title>4 Column</title>
  </svg>
);
export const Column4Outlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={column4Svg} {...props} />
);

const columnLeftSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M1.5 5.5A2.5 2.5 0 0 1 4 3h5a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 9 17H4a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zM12.5 5.5A2.5 2.5 0 0 1 15 3h1a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-1a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
    ></path>
    <title>2 Columns left split</title>
  </svg>
);
export const ColumnLeftOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={columnLeftSvg} {...props} />;

const columnRightSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M8.5 5.5A2.5 2.5 0 0 1 11 3h5a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-5a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zM1.5 5.5A2.5 2.5 0 0 1 4 3h1a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 5 17H4a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
    ></path>
    <title>2 Columns right split</title>
  </svg>
);
export const ColumnRightOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={columnRightSvg} {...props} />;

const borderRadiusLTSvg = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <path
      d="M14 4h.5a1.5 1.5 0 0 1 0 3H14a7 7 0 0 0-6.996 6.76L7 14v.5a1.5 1.5 0 0 1-3 0V14C4 8.477 8.477 4 14 4z"
      fill="#979797"
      fillRule="nonzero"
    ></path>
  </svg>
);
export const BorderRadiusLTOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={borderRadiusLTSvg} {...props} />;

const borderRadiusLBSvg = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <path
      d="M14 15h.5a1.5 1.5 0 0 0 0-3H14a7 7 0 0 1-6.996-6.76L7 5v-.5a1.5 1.5 0 0 0-3 0V5c0 5.523 4.477 10 10 10z"
      fill="#979797"
      fillRule="nonzero"
    ></path>
  </svg>
);
export const BorderRadiusLBOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={borderRadiusLBSvg} {...props} />;

const borderRadiusRTSvg = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <path
      d="M5 4h-.5a1.5 1.5 0 0 0 0 3H5a7 7 0 0 1 6.996 6.76L12 14v.5a1.5 1.5 0 0 0 3 0V14C15 8.477 10.523 4 5 4z"
      fill="#979797"
      fillRule="nonzero"
    ></path>
  </svg>
);
export const BorderRadiusRTOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={borderRadiusRTSvg} {...props} />;

const borderRadiusRBSvg = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <path
      d="M5 15h-.5a1.5 1.5 0 0 1 0-3H5a7 7 0 0 0 6.996-6.76L12 5v-.5a1.5 1.5 0 0 1 3 0V5c0 5.523-4.477 10-10 10z"
      fill="#979797"
      fillRule="nonzero"
    ></path>
  </svg>
);
export const BorderRadiusRBOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={borderRadiusRBSvg} {...props} />;

const textSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M17 6.733h-.93c0-1.866-1.87-2.333-4.203-2.333v9.47c0 .763.464 1.45 1.173 1.733l1.16.464V17H5.8v-.933l1.16-.464a1.867 1.867 0 0 0 1.173-1.733V4.4c-2.333 0-4.2.467-4.2 2.333H3V3h14v3.733z"
    ></path>
  </svg>
);
export const TextOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={textSvg} {...props} />
);

const imageSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M18 4.5A2.5 2.5 0 0 0 15.5 2h-11A2.5 2.5 0 0 0 2 4.5v11A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-11zm-13.5-1a1 1 0 0 0-1 1v9.732l2.66-2.85a1 1 0 0 1 1.3-.14l1.81 1.252a1 1 0 0 0 1.318-.16l2.485-2.817a1 1 0 0 1 1.428-.073l1.999 1.845V4.5a1 1 0 0 0-1-1h-11zm1 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
    ></path>
  </svg>
);
export const ImageOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={imageSvg} {...props} />
);

const buttonSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      d="M18 5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 2 5v5a2.5 2.5 0 0 0 2.5 2.5h3.654L8.038 11H4.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5c0 .261-.1.499-.264.677l1.203.902c.35-.43.561-.98.561-1.579V5z"
    ></path>
    <path
      fill="currentColor"
      d="M9.706 8.116l.929 8.48c.012.109.148.15.22.068L12.62 14.6l1.667 2.887a.833.833 0 1 0 1.443-.833l-1.667-2.887 2.67-.498a.125.125 0 0 0 .051-.223L9.904 8a.125.125 0 0 0-.198.115z"
    ></path>
  </svg>
);
export const ButtonOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={buttonSvg} {...props} />
);

const dividerSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      d="M9.836 4.561a.25.25 0 0 1 .328 0l1.927 1.67a.25.25 0 0 1-.163.438H8.072a.25.25 0 0 1-.163-.439l1.927-1.669zM2 8.42h16v3H2v-3zM9.836 15.277a.25.25 0 0 0 .328 0l1.927-1.669a.25.25 0 0 0-.163-.439H8.072a.25.25 0 0 0-.163.44l1.927 1.668z"
    ></path>
  </svg>
);
export const DividerOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={dividerSvg} {...props} />
);

const spacerSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      d="M9.836 2.161a.25.25 0 0 1 .328 0l1.927 1.67a.25.25 0 0 1-.163.438H8.072a.25.25 0 0 1-.163-.439l1.927-1.669z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M18 8.02a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 2 8.02v4a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-4zm-13.5-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-11z"
    ></path>
    <path
      fill="currentColor"
      d="M9.836 17.878a.25.25 0 0 0 .328 0l1.927-1.67a.25.25 0 0 0-.163-.439H8.072a.25.25 0 0 0-.163.44l1.927 1.669z"
    ></path>
  </svg>
);
export const SpacerOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={spacerSvg} {...props} />
);

const socialSvg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      d="M15.5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12.22 6.224c.179.48.46.909.816 1.262L9.916 9.23a3.485 3.485 0 0 0-.64-1.361l2.944-1.645zM9 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zM18 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM9.854 11.005c-.147.491-.4.937-.73 1.31l3.022 1.68c.147-.491.4-.937.73-1.31l-3.022-1.68z"
    ></path>
  </svg>
);
export const SocialOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={socialSvg} {...props} />
);
