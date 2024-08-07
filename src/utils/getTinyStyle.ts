import { EasymailLangType } from "@/constant";
import { AliasToken } from "antd/es/theme/internal";
import { TFunction } from "i18next";

export const getTinyStyle = ({
  token,
  t,
  lng,
}: {
  token: AliasToken;
  t: TFunction;
  lng: EasymailLangType;
}) => {
  const primary = token.colorPrimaryHover;
  const primaryHover = token.colorPrimaryBorder;
  const colorWhite = token.colorWhite;
  const colorText = token.colorPrimaryTextHover;
  return `
      html {
        height: 100%;
        scrollbar-color: ${
          token.colorBgBase === "#fff"
            ? ""
            : "rgba(255, 255, 255, 0.25) rgba(253, 253, 253, 0.12)"
        };
      }
      *:focus-visible {
        outline: none;
      }
      * img, * a {
        -webkit-user-drag: none;
      }
      .focus-tool {
        position: absolute;
        right: -30px;
        top: -10px;
        display: flex;
        flex-direction: column;
        z-index: 9;
      }
      .focus-tool-drag, .focus-tool-copy, .focus-tool-delete {
        width: 25px;
        height: 25px;
        margin-bottom: 3px;
        border-radius: 25px;
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: center center;
        border: none;
        background-color: ${primary};
        cursor: pointer;
      }
      .focus-tool-drag {
        cursor: grab;
        background-image: url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2219px%22%20height%3D%2219px%22%20viewBox%3D%220%200%2019%2019%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cg%20id%3D%22drag%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22arrow-down-copy%22%20fill%3D%22%23ffffff%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9.49936886%2C1%20C9.75529117%2C1%2010.0112135%2C1.09763107%2010.2064756%2C1.29289322%20L12.6164551%2C3.62132034%20C13.0069794%2C4.01184464%2013.0069794%2C4.64500961%2012.6164551%2C5.03553391%20C12.2259308%2C5.4260582%2011.5927658%2C5.4260582%2011.2022415%2C5.03553391%20L10.4991165%2C4.41396122%20L10.4998532%2C7.98269085%20L10.4997913%2C8.517%20L14.6028593%2C8.51732521%20L14.003857%2C7.8150837%20C13.6133327%2C7.4245594%2013.6133327%2C6.79139442%2014.003857%2C6.40087013%20C14.3943813%2C6.01034584%2015.0275463%2C6.01034584%2015.4180706%2C6.40087013%20L17.724432%2C8.81047077%20C17.9196941%2C9.00573292%2018.0173252%2C9.26165523%2018.0173252%2C9.51757755%20C18.0173252%2C9.77349987%2017.9196941%2C10.0294222%2017.724432%2C10.2246843%20L15.3960049%2C12.6346638%20C15.0054806%2C13.0251881%2014.3723156%2C13.0251881%2013.9817913%2C12.6346638%20C13.591267%2C12.2441395%2013.591267%2C11.6109745%2013.9817913%2C11.2204502%20L14.603364%2C10.5173252%20L11.0346344%2C10.5180619%20L10.4997913%2C10.518%20L10.5%2C14.621068%20L11.2022415%2C14.0220657%20C11.5927658%2C13.6315414%2012.2259308%2C13.6315414%2012.6164551%2C14.0220657%20C13.0069794%2C14.41259%2013.0069794%2C15.045755%2012.6164551%2C15.4362793%20L10.2068544%2C17.7426407%20C10.0115923%2C17.9379028%209.75566998%2C18.0355339%209.49974766%2C18.0355339%20C9.24382534%2C18.0355339%208.98790302%2C17.9379028%208.79264088%2C17.7426407%20L6.38266144%2C15.4142136%20C5.99213715%2C15.0236893%205.99213715%2C14.3905243%206.38266144%2C14%20C6.77318573%2C13.6094757%207.40635071%2C13.6094757%207.796875%2C14%20L8.5%2C14.6215727%20L8.49926081%2C11.0526954%20L8.4987913%2C10.518%20L4.39625721%2C10.5182087%20L4.99525948%2C11.2204502%20C5.38578377%2C11.6109745%205.38578377%2C12.2441395%204.99525948%2C12.6346638%20C4.60473518%2C13.0251881%203.97157021%2C13.0251881%203.58104591%2C12.6346638%20L1.27468452%2C10.2250631%20C1.07942238%2C10.029801%200.981791305%2C9.77387867%200.981791305%2C9.51795635%20C0.981791305%2C9.26203404%201.07942238%2C9.00611172%201.27468452%2C8.81084957%20L3.60311165%2C6.40087013%20C3.99363594%2C6.01034584%204.62680092%2C6.01034584%205.01732521%2C6.40087013%20C5.4078495%2C6.79139442%205.4078495%2C7.4245594%205.01732521%2C7.8150837%20L4.39575253%2C8.5182087%20L7.9646298%2C8.5174695%20L8.4987913%2C8.517%20L8.49911652%2C4.4144659%20L7.796875%2C5.01346817%20C7.40635071%2C5.40399246%206.77318573%2C5.40399246%206.38266144%2C5.01346817%20C5.99213715%2C4.62294388%205.99213715%2C3.9897789%206.38266144%2C3.59925461%20L8.79226208%2C1.29289322%20C8.98752422%2C1.09763107%209.24344654%2C1%209.49936886%2C1%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E);
      }
      .focus-tool-copy {
        background-image: url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2219px%22%20height%3D%2219px%22%20viewBox%3D%220%200%2019%2019%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cg%20id%3D%22duplicate%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22arrow-down-copy-2%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22nonzero%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M11.007983%2C2%20C12.1081436%2C2%2013%2C2.90017617%2013%2C3.99201702%20L13%2C6%20L15.007983%2C6%20C16.1081436%2C6%2017%2C6.90017617%2017%2C7.99201702%20L17%2C15.007983%20C17%2C16.1081436%2016.0998238%2C17%2015.007983%2C17%20L7.99201702%2C17%20C6.8918564%2C17%206%2C16.0998238%206%2C15.007983%20L6%2C13%20L3.99201702%2C13%20C2.8918564%2C13%202%2C12.0998238%202%2C11.007983%20L2%2C3.99201702%20C2%2C2.8918564%202.90017617%2C2%203.99201702%2C2%20L11.007983%2C2%20Z%20M11%2C4%20L4%2C4%20L4%2C11%20L6%2C11%20L6%2C7.99201702%20C6%2C6.8918564%206.90017617%2C6%207.99201702%2C6%20L11%2C6%20L11%2C4%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E);
      }
      .focus-tool-delete {
        background-image: url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2219px%22%20height%3D%2219px%22%20viewBox%3D%220%200%2019%2019%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cg%20id%3D%22trash%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23ffffff%22%20id%3D%22Combined-Shape%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M11%2C2%20C11.5522847%2C2%2012%2C2.44771525%2012%2C3%20L15.0014977%2C3%20C15.5529553%2C3%2016%2C3.44266033%2016%2C3.99895656%20L16%2C5.00104344%20C16%2C5.55275191%2015.5525106%2C6%2015.0014977%2C6%20L15%2C6%20L15%2C15%20C15%2C16.1045695%2014.1045695%2C17%2013%2C17%20L6%2C17%20C4.8954305%2C17%204%2C16.1045695%204%2C15%20L4%2C6%20L3.99850233%2C6%20C3.44704472%2C6%203%2C5.55733967%203%2C5.00104344%20L3%2C3.99895656%20C3%2C3.44724809%203.44748943%2C3%203.99850233%2C3%20L7%2C3%20C7%2C2.44771525%207.44771525%2C2%208%2C2%20L11%2C2%20Z%20M7%2C7%20L6%2C7%20L6%2C15%20L7%2C15%20L7%2C7%20Z%20M10%2C7%20L9%2C7%20L9%2C15%20L10%2C15%20L10%2C7%20Z%20M13%2C7%20L12%2C7%20L12%2C15%20L13%2C15%20L13%2C7%20Z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E);
      }
      .editor-body .mj-body:empty:before, .mj-column-empty > table:before {
        content: "${t("basic.empty_body", { lng })}";
        display: block;
        padding-top: 20px;
        padding-bottom: 20px;
        color: ${colorText};
        font-size: 14px;
        line-height: 14px;
        font-weight: 500;
        font-family: sans-serif;
        text-align: center;
        background: transparent;
        outline: ${primaryHover} 1px dashed;
        border-radius: 0px;
        vertical-align: middle;
      }
      .mj-body a {
        text-decoration: none;
      }
      .mj-column-empty > table:before {
        content: "${t("basic.empty_column", { lng })}";
      }
      .mj-column-empty.mj-column-per-100 > table:before {
        content: "${t("basic.empty_section", { lng })}";
      }
      .editor-body {
        user-select: none;
        border: 22px solid ${token.colorBgContainer};
        border-left-width: 30px;
        border-right-width: 30px;
        min-width: 275px;
        min-height: calc(100% - 44px);
        overflow-x: hidden;
      }
      .editor-body .mj-section {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-section.hover, .editor-body .mj-section.focus, .editor-body .mj-section.focus-child {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-section.hover:before, .editor-body .mj-section.focus:before, .editor-body .mj-section.focus-child:before {
        content: "${t("block.section", { lng })}";
        display: block;
        position: absolute;
        left: -2px;
        top: -22px;
        text-align: left;
        padding: 1px 6px;
        line-height: 20px;
        font-size: 15px;
        color: ${colorWhite};
        background-color: ${primaryHover};
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .editor-body .mj-section.focus {
        outline-color: ${primary};
      }
      .editor-body .mj-section.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-section.hover .mj-column {
        outline: 1px dashed ${primary};
      }
      .editor-body .mj-text {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-text > div {
        outline: none;
      }
      .editor-body .mj-text.hover, .editor-body .mj-text.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-text.hover:before, .editor-body .mj-text.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNyA2LjczM2gtLjkzYzAtMS44NjYtMS44Ny0yLjMzMy00LjIwMy0yLjMzM3Y5LjQ3YzAgLjc2My40NjQgMS40NSAxLjE3MyAxLjczM2wxLjE2LjQ2NFYxN0g1Ljh2LS45MzNsMS4xNi0uNDY0YTEuODY3IDEuODY3IDAgMCAwIDEuMTczLTEuNzMzVjQuNGMtMi4zMzMgMC00LjIuNDY3LTQuMiAyLjMzM0gzVjNoMTR2My43MzN6Ij48L3BhdGg+PC9zdmc+) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-text.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-text.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-text > div:empty:before {
        content: "${t("basic.empty_text_plc", { lng })}";
        display: block;
        width: 100%;
        height: 14px;
        font-size: 14px;
        color: ${token.colorTextPlaceholder};
      }
      .editor-body .mj-text > div.mce-edit-focus:empty:before {
        content: "";
      }
      .editor-body .mj-image {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-image img {
        min-height: 10px;
      }
      .editor-body .mj-image.hover, .editor-body .mj-image.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-image.hover:before, .editor-body .mj-image.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCA0LjVBMi41IDIuNSAwIDAgMCAxNS41IDJoLTExQTIuNSAyLjUgMCAwIDAgMiA0LjV2MTFBMi41IDIuNSAwIDAgMCA0LjUgMThoMTFhMi41IDIuNSAwIDAgMCAyLjUtMi41di0xMXptLTEzLjUtMWExIDEgMCAwIDAtMSAxdjkuNzMybDIuNjYtMi44NWExIDEgMCAwIDEgMS4zLS4xNGwxLjgxIDEuMjUyYTEgMSAwIDAgMCAxLjMxOC0uMTZsMi40ODUtMi44MTdhMSAxIDAgMCAxIDEuNDI4LS4wNzNsMS45OTkgMS44NDVWNC41YTEgMSAwIDAgMC0xLTFoLTExem0xIDMuNWExLjUgMS41IDAgMSAxIDMgMCAxLjUgMS41IDAgMCAxLTMgMHoiPjwvcGF0aD48L3N2Zz4=) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-image.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-image.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-button {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-button.hover, .editor-body .mj-button.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-button.hover:before, .editor-body .mj-button.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4IDVhMi41IDIuNSAwIDAgMC0yLjUtMi41aC0xMUEyLjUgMi41IDAgMCAwIDIgNXY1YTIuNSAyLjUgMCAwIDAgMi41IDIuNWgzLjY1NEw4LjAzOCAxMUg0LjVhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFoMTFhMSAxIDAgMCAxIDEgMXY1YzAgLjI2MS0uMS40OTktLjI2NC42NzdsMS4yMDMuOTAyYy4zNS0uNDMuNTYxLS45OC41NjEtMS41NzlWNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS43MDYgOC4xMTZsLjkyOSA4LjQ4Yy4wMTIuMTA5LjE0OC4xNS4yMi4wNjhMMTIuNjIgMTQuNmwxLjY2NyAyLjg4N2EuODMzLjgzMyAwIDEgMCAxLjQ0My0uODMzbC0xLjY2Ny0yLjg4NyAyLjY3LS40OThhLjEyNS4xMjUgMCAwIDAgLjA1MS0uMjIzTDkuOTA0IDhhLjEyNS4xMjUgMCAwIDAtLjE5OC4xMTV6Ij48L3BhdGg+PC9zdmc+) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-button.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-button.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-button a:empty:before, .editor-body .mj-button p:empty:before, .editor-body .mj-button a > div:empty:before, .editor-body .mj-button p > div:empty:before {
        content: "${t("basic.empty_text_plc", { lng })}";
        display: block;
        width: 100%;
        height: 14px;
        font-size: 14px;
        color: ${colorWhite};
      }
      .editor-body .mj-button a.mce-edit-focus:empty:before, .editor-body .mj-button p.mce-edit-focus:empty:before, .editor-body .mj-button a > div.mce-edit-focus:empty:before, .editor-body .mj-button p > div.mce-edit-focus:empty:before {
        content: "";
      }
      .editor-body .mj-divider {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-divider.hover, .editor-body .mj-divider.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-divider.hover:before, .editor-body .mj-divider.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuODM2IDQuNTYxYS4yNS4yNSAwIDAgMSAuMzI4IDBsMS45MjcgMS42N2EuMjUuMjUgMCAwIDEtLjE2My40MzhIOC4wNzJhLjI1LjI1IDAgMCAxLS4xNjMtLjQzOWwxLjkyNy0xLjY2OXpNMiA4LjQyaDE2djNIMnYtM3pNOS44MzYgMTUuMjc3YS4yNS4yNSAwIDAgMCAuMzI4IDBsMS45MjctMS42NjlhLjI1LjI1IDAgMCAwLS4xNjMtLjQzOUg4LjA3MmEuMjUuMjUgMCAwIDAtLjE2My40NGwxLjkyNyAxLjY2OHoiPjwvcGF0aD48L3N2Zz4=) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-divider.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-divider.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-spacer {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-spacer.hover, .editor-body .mj-spacer.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-spacer.hover:before, .editor-body .mj-spacer.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuODM2IDIuMTYxYS4yNS4yNSAwIDAgMSAuMzI4IDBsMS45MjcgMS42N2EuMjUuMjUgMCAwIDEtLjE2My40MzhIOC4wNzJhLjI1LjI1IDAgMCAxLS4xNjMtLjQzOWwxLjkyNy0xLjY2OXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDguMDJhMi41IDIuNSAwIDAgMC0yLjUtMi41aC0xMUEyLjUgMi41IDAgMCAwIDIgOC4wMnY0YTIuNSAyLjUgMCAwIDAgMi41IDIuNWgxMWEyLjUgMi41IDAgMCAwIDIuNS0yLjV2LTR6bS0xMy41LTFhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAxIDFoMTFhMSAxIDAgMCAwIDEtMXYtNGExIDEgMCAwIDAtMS0xaC0xMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS44MzYgMTcuODc4YS4yNS4yNSAwIDAgMCAuMzI4IDBsMS45MjctMS42N2EuMjUuMjUgMCAwIDAtLjE2My0uNDM5SDguMDcyYS4yNS4yNSAwIDAgMC0uMTYzLjQ0bDEuOTI3IDEuNjY5eiI+PC9wYXRoPjwvc3ZnPg==) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-spacer.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-spacer.focus:before {
        background-color: ${primary};
      }
      .editor-body .mj-social {
        position: relative;
        outline: 2px solid transparent;
      }
      .editor-body .mj-social.hover, .editor-body .mj-social.focus {
        outline-color: ${primaryHover};
        z-index: 1;
      }
      .editor-body .mj-social.hover:before, .editor-body .mj-social.focus:before {
        content: "";
        display: block;
        width: 20px;
        height: 30px;
        position: absolute;
        left: -20px;
        top: -2px;
        color: ${colorWhite};
        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBjbGFzcz0ibXgtYXV0byBzdmctdGV4dCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUgNy41YTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1ek0xMi4yMiA2LjIyNGMuMTc5LjQ4LjQ2LjkwOS44MTYgMS4yNjJMOS45MTYgOS4yM2EzLjQ4NSAzLjQ4NSAwIDAgMC0uNjQtMS4zNjFsMi45NDQtMS42NDV6TTkgMTBhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDB6TTE4IDE1YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwek05Ljg1NCAxMS4wMDVjLS4xNDcuNDkxLS40LjkzNy0uNzMgMS4zMWwzLjAyMiAxLjY4Yy4xNDctLjQ5MS40LS45MzcuNzMtMS4zMWwtMy4wMjItMS42OHoiPjwvcGF0aD48L3N2Zz4=) ${primaryHover} no-repeat;
        background-position-y: 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .editor-body .mj-social.focus {
        outline-color: ${primary};
        z-index: 2;
      }
      .editor-body .mj-social.focus:before {
        background-color: ${primary};
      }`;
};
