import { validFocusNodeTagNameType } from "@/hooks/useProperty";
import {
  columnTagNameType,
  basicTagNameType,
  appDataType,
} from "../context/appContext";

export const columnElementTextMap: Record<columnTagNameType, string> = {
  "mj-column": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
      </table>
    </div>`,
  "mj-column-2": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
                <div class="mj-column-per-50 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
                <div class="mj-column-per-50 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
        </tbody>
      </table>
    </div>`,
  "mj-column-3": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:200px;" ><![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:200px;" ><![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:200px;" ><![endif]-->
                <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  `,
  "mj-column-4": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:150px;" ><![endif]-->
                <div class="mj-column-per-25 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:150px;" ><![endif]-->
                <div class="mj-column-per-25 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:150px;" ><![endif]-->
                <div class="mj-column-per-25 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:150px;" ><![endif]-->
                <div class="mj-column-per-25 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  `,
  "mj-column-left": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:360px;" ><![endif]-->
                <div class="mj-column-per-60 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:240px;" ><![endif]-->
                <div class="mj-column-per-40 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
        </tbody>
      </table>
    </div>`,
  "mj-column-right": `
    <div class="mj-section" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:240px;" ><![endif]-->
                <div class="mj-column-per-40 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mj-column-outlook" style="vertical-align:top;width:360px;" ><![endif]-->
                <div class="mj-column-per-60 mj-outlook-group-fix mj-column mj-column-empty" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody></tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  `,
};

export const basicElementTextMap: Record<basicTagNameType, string> = {
  "mj-text": `
    <td align="left" class="mj-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
      <div contenteditable style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Replace Content</div>
    </td>
    `,
  "mj-image": `
    <td align="center" class="mj-image" style="font-size:0px;padding:10px 25px;word-break:break-word;">             
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:550px;">
              <img alt="" src="" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="550" height="200">
            </td>
          </tr>
        </tbody>
      </table>
    </td>
    `,
  "mj-button": `
    <td align="center" class="mj-button" style="font-size:0px;padding:10px 25px;word-break:break-word;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
        <tbody>
          <tr>
            <td align="center" bgcolor="#414141" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#414141;" valign="middle">
              <p style="display:inline-block;background:#414141;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;">
                Replace Content
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  `,
  "mj-divider": `
    <td align="center" class="mj-divider" style="font-size:0px;padding:10px 25px;word-break:break-word;">         
      <p style="border-top:solid 4px #000000;font-size:1px;margin:0px auto;width:100%;">
      </p>
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #000000;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
      </td></tr></table><![endif]-->
    </td>
  `,
  "mj-spacer": `
    <td class="mj-spacer" style="font-size:0px;word-break:break-word;">         
      <div style="height:20px;line-height:20px;"> </div>
    </td>
  `,
  "mj-social": ``,
};

export const tagNameMap = [
  "mj-body",
  "mj-section",
  ...Object.keys(basicElementTextMap),
];

export const defaultNodePropertyMap: Record<
  basicTagNameType | columnTagNameType,
  appDataType
> = {
  // "mj-section": {
  //   tagName: "mj-section",
  //   attributes: {
  //     "css-class": "mj-section",
  //     "border-radius": "0px",
  //     border: "",
  //     "background-color": "",
  //     "background-url": "",
  //     "background-repeat": "repeat",
  //     "background-size": "auto",
  //     padding: "20px",
  //   },
  // },
  "mj-button": {
    tagName: "mj-button",
    attributes: {
      "css-class": "mj-button",
      href: "",
      target: "_blank",
      width: "100%",
      "background-color": "#414141",
      "border-radius": "0px",
      border: "",
      "font-family": "arial",
      "font-size": "13px",
      "line-height": "1",
      color: "#FFFFFF",
      align: "center",
      padding: "10px 25px",
    },
    content: "Replace Content",
  },
  "mj-divider": {
    tagName: "mj-divider",
    attributes: {
      "css-class": "mj-divider",
      width: "100%",
      "border-width": "1px",
      "border-style": "solid",
      "border-color": "#000000",
      padding: "10px 25px",
    },
  },
  "mj-image": {
    tagName: "mj-image",
    attributes: {
      "css-class": "mj-image",
      src: "",
      href: "",
      target: "_blank",
      alt: "",
      width: "100%",
      "border-radius": "0px",
      align: "center",
      padding: "10px 25px",
    },
  },
  "mj-social": {
    tagName: "mj-social",
    attributes: {},
  },
  "mj-spacer": {
    tagName: "mj-spacer",
    attributes: {
      "css-class": "mj-spacer",
      height: "20px",
    },
  },
  "mj-text": {
    tagName: "mj-text",
    attributes: {
      "css-class": "mj-text",
      "font-family": "arial",
      "font-size": "13px",
      "line-height": "1",
      color: "#000",
      align: "left",
      padding: "10px 25px",
    },
    content: "Replace Content",
  },
  "mj-column": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  "mj-column-2": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  "mj-column-3": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  "mj-column-4": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column" },
        children: [],
      },
    ],
  },
  "mj-column-left": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "60%" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "40%" },
        children: [],
      },
    ],
  },
  "mj-column-right": {
    tagName: "mj-section",
    attributes: {
      "css-class": "mj-section",
      "border-radius": "0px",
      border: "",
      "background-color": "",
      "background-url": "",
      "background-repeat": "repeat",
      "background-size": "auto",
      padding: "20px",
    },
    children: [
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "40%" },
        children: [],
      },
      {
        tagName: "mj-column",
        attributes: { "css-class": "mj-column", width: "60%" },
        children: [],
      },
    ],
  },
};
