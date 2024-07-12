import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";

const column1Svg = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
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
      d="M8.5 5.5A2.5 2.5 0 0 1 11 3h5a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17h-5a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zM1.5 5.5A2.5 2.5 0 0 1 4 3h1a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 5 17H4a2.5 2.5 0 0 1-2.5-2.5v-9zm2.5-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
    ></path>
    <title>2 Columns right split</title>
  </svg>
);
export const ColumnRightOutlined = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={columnRightSvg} {...props} />;
