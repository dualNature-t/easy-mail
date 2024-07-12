/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Breadcrumb, Flex, theme } from "antd";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Header = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Flex
      style={{
        height: 40,
        padding: "0 20px",
        borderBottom: `1px solid ${token.colorBorder}`,
      }}
      align="center"
    >
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
          },
          {
            title: "Application Center",
          },
          {
            title: "Application List",
          },
          {
            title: "An Application",
          },
        ]}
      />
    </Flex>
  );
};
export default Header;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
