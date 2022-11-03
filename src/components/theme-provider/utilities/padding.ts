export type PaddingTypes = {
  padding?: UTIL_PADDING;
  vPadding?: UTIL_V_PADDING;
  hPadding?: UTIL_H_PADDING;
};

export enum UTIL_PADDING {
  NONE = "NONE",
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}
export enum UTIL_V_PADDING {
  NONE = "NONE",
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}
export enum UTIL_H_PADDING {
  NONE = "NONE",
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}
const paddingValue = {
  NONE: "0",
  XS: "1rem",
  SM: "1.5rem",
  MD: "2rem",
  LG: "3rem",
  XL: "4rem",
  XXL: "6rem",
};

const padding = {
  NONE: `padding: ${paddingValue.NONE};`,
  XS: `padding:${paddingValue.XS};`,
  SM: `padding: ${paddingValue.SM};`,
  MD: `padding: ${paddingValue.MD};`,
  LG: `padding: ${paddingValue.LG};`,
  XL: `padding: ${paddingValue.XL};`,
  XXL: `padding: ${paddingValue.XXL};`,
};

const H_padding = {
  NONE: `padding-top: ${paddingValue.NONE}; padding-bottom: ${paddingValue.NONE}`,
  XS: `padding-top: ${paddingValue.XS}; padding-bottom: ${paddingValue.XS}`,
  SM: `padding-top: ${paddingValue.SM}; padding-bottom: ${paddingValue.SM}`,
  MD: `padding-top: ${paddingValue.MD}; padding-bottom: ${paddingValue.MD}`,
  LG: `padding-top: ${paddingValue.LG}; padding-bottom: ${paddingValue.LG}`,
  XL: `padding-top: ${paddingValue.XL}; padding-bottom: ${paddingValue.XL}`,
  XXL: `padding-top: ${paddingValue.XXL}; padding-bottom: ${paddingValue.XXL}`,
};

const V_padding = {
  NONE: `padding-left: ${paddingValue.NONE}; padding-right: ${paddingValue.NONE}`,
  XS: `padding-left: ${paddingValue.XS}; padding-right: ${paddingValue.XS}`,
  SM: `padding-left: ${paddingValue.SM}; padding-right: ${paddingValue.SM}`,
  MD: `padding-left: ${paddingValue.MD}; padding-right: ${paddingValue.MD}`,
  LG: `padding-left: ${paddingValue.LG}; padding-right: ${paddingValue.LG}`,
  XL: `padding-left: ${paddingValue.XL}; padding-right: ${paddingValue.XL}`,
  XXL: `padding-left: ${paddingValue.XXL}; padding-right: ${paddingValue.XXL}`,
};
const handle_PADDING = (str: UTIL_PADDING) => {
  switch (str) {
    case UTIL_PADDING.NONE:
    default:
      return;
    case UTIL_PADDING.XS:
      return padding.XS;
    case UTIL_PADDING.SM:
      return padding.SM;
    case UTIL_PADDING.MD:
      return padding.MD;
    case UTIL_PADDING.LG:
      return padding.LG;
    case UTIL_PADDING.XL:
      return padding.XL;
    case UTIL_PADDING.XXL:
      return padding.XXL;
  }
};
const handle_H_PADDING = (str: UTIL_H_PADDING) => {
  switch (str) {
    case UTIL_H_PADDING.NONE:
      return;
    case UTIL_H_PADDING.XS:
      return H_padding.XS;
    case UTIL_H_PADDING.SM:
      return H_padding.SM;
    case UTIL_H_PADDING.MD:
    default:
      return H_padding.MD;
    case UTIL_H_PADDING.LG:
      return H_padding.LG;
    case UTIL_H_PADDING.XL:
      return H_padding.XL;
    case UTIL_H_PADDING.XXL:
      return H_padding.XXL;
  }
};

const handle_V_PADDING = (str: UTIL_V_PADDING) => {
  switch (str) {
    case UTIL_V_PADDING.NONE:
    default:
      return;
    case UTIL_V_PADDING.XS:
      return V_padding.XS;
    case UTIL_V_PADDING.SM:
      return V_padding.SM;
    case UTIL_V_PADDING.MD:
      return V_padding.MD;
    case UTIL_V_PADDING.LG:
      return V_padding.LG;
    case UTIL_V_PADDING.XL:
      return V_padding.XL;
    case UTIL_V_PADDING.XXL:
      return V_padding.XXL;
  }
};

// Please pass 3 arguments accordingly or will cause Error,
// (padding, hPadding, vPadding)

export const handlePadding = (
  padding: UTIL_PADDING,
  hPadding: UTIL_H_PADDING,
  vPadding: UTIL_V_PADDING
) => {
  let paddingCSS = "";
  if (padding) {
    paddingCSS = paddingCSS += handle_PADDING(padding);
  } else {
    if (vPadding) {
      paddingCSS = paddingCSS + handle_V_PADDING(vPadding);
    } else if (hPadding) {
      paddingCSS = paddingCSS += handle_H_PADDING(hPadding);
    } else {
      paddingCSS = "none";
      return paddingCSS;
    }
    paddingCSS = "none";
    return paddingCSS;
  }
};
