/**
 * @file
 * @date 2024-05-17
 * @author haodong.wang
 * @lastModify  2024-05-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Divider, Typography } from "antd";
const { Text } = Typography;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SocialBlock = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
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
    <>
      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">CONTENT</Text>
        </Divider>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">SOCIAL STYLES</Text>
        </Divider>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">TEXT STYLES</Text>
        </Divider>
      </>

      <>
        <Divider orientation="left" orientationMargin="0">
          <Text type="secondary">POSITION</Text>
        </Divider>
      </>
    </>
  );
};
export default SocialBlock;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
