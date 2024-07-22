/**
 * @file
 * @date
 * @author
 * @lastModify
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { BasicEnum } from "@/constant";
import { useCurrentNode, useFocusNode } from "@/hooks";
import { getNodeByTarget, isSection, toFirstUpperCase } from "@/utils";
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
  const { focusNode, setFocusNode } = useFocusNode();
  const { currentFocusNode, setFocusNodeCls } = useCurrentNode();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const getBreadcrumbItems = () => {
    const body = {
      title: (
        <a
          onClick={(e) => {
            e.preventDefault();
            setFocusNodeCls("remove");
            setFocusNode(null);
          }}
        >
          Body
        </a>
      ),
    };
    const section = {
      title: (
        <a
          onClick={(e) => {
            e.preventDefault();
            const result = getNodeByTarget(
              focusNode as Element,
              BasicEnum.MJ_SECTION
            );
            setFocusNodeCls("remove");
            currentFocusNode.current = result;
            setFocusNodeCls("add");
            setFocusNode(result as HTMLElement);
          }}
        >
          Section
        </a>
      ),
    };
    if (focusNode) {
      if (isSection(focusNode)) {
        return [
          body,
          {
            title: "Section",
          },
        ];
      } else {
        const block = {
          title: toFirstUpperCase(
            focusNode?.classList[0].split("-")[1] as string
          ),
        };
        return [body, section, block];
      }
    } else {
      return [
        {
          title: "Body",
        },
      ];
    }
  };
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
      <Breadcrumb separator=">" items={getBreadcrumbItems()} />
    </Flex>
  );
};
export default Header;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
