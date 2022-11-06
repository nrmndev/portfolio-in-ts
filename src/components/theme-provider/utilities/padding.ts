export type PaddingTypes = {
  padding?: UTIL_PADDING;
  vPadding?: UTIL_PADDING;
  hPadding?: UTIL_PADDING;
};

export enum UTIL_PADDING {
  NONE = "0",
  XS = "1rem",
  SM = "1.5rem",
  MD = "2rem",
  LG = "3rem",
  XL = "4rem",
  XXL = "6rem",
}

export const handlePadding = (padding: UTIL_PADDING) => {
  switch (padding) {
    case UTIL_PADDING.NONE:
    default:
      return ``;
    case UTIL_PADDING.XS:
      return `padding: ${UTIL_PADDING.XS};`;
    case UTIL_PADDING.SM:
      return `padding: ${UTIL_PADDING.SM};`;
    case UTIL_PADDING.MD:
      return `padding: ${UTIL_PADDING.MD};`;
    case UTIL_PADDING.LG:
      return `padding: ${UTIL_PADDING.LG};`;
    case UTIL_PADDING.XL:
      return `padding: ${UTIL_PADDING.XL};`;
    case UTIL_PADDING.XXL:
      return `padding: ${UTIL_PADDING.XXL};`;
  }
};

export const handleVPadding = (padding: UTIL_PADDING) => {
  switch (padding) {
    case UTIL_PADDING.NONE:
    default:
      return ``;
    case UTIL_PADDING.XS:
      return `padding-left: ${UTIL_PADDING.XS}; padding-right: ${UTIL_PADDING.XS};`;
    case UTIL_PADDING.SM:
      return `padding-left: ${UTIL_PADDING.SM}; padding-right: ${UTIL_PADDING.SM};`;
    case UTIL_PADDING.MD:
      return `padding-left: ${UTIL_PADDING.MD}; padding-right: ${UTIL_PADDING.MD};`;
    case UTIL_PADDING.LG:
      return `padding-left: ${UTIL_PADDING.LG}; padding-right: ${UTIL_PADDING.LG};`;
    case UTIL_PADDING.XL:
      return `padding-left: ${UTIL_PADDING.XL}; padding-right: ${UTIL_PADDING.XL};`;
    case UTIL_PADDING.XXL:
      return `padding-left: ${UTIL_PADDING.XXL}; padding-right: ${UTIL_PADDING.XXL};`;
  }
};
export const handleHPadding = (padding: UTIL_PADDING) => {
  switch (padding) {
    case UTIL_PADDING.NONE:
    default:
      return ``;
    case UTIL_PADDING.XS:
      return `padding-top: ${UTIL_PADDING.XS}; padding-bottom: ${UTIL_PADDING.XS};`;
    case UTIL_PADDING.SM:
      return `padding-top: ${UTIL_PADDING.SM}; padding-bottom: ${UTIL_PADDING.SM};`;
    case UTIL_PADDING.MD:
      return `padding-top: ${UTIL_PADDING.MD}; padding-bottom: ${UTIL_PADDING.MD};`;
    case UTIL_PADDING.LG:
      return `padding-top: ${UTIL_PADDING.LG}; padding-bottom: ${UTIL_PADDING.LG};`;
    case UTIL_PADDING.XL:
      return `padding-top: ${UTIL_PADDING.XL}; padding-bottom: ${UTIL_PADDING.XL};`;
    case UTIL_PADDING.XXL:
      return `padding-top: ${UTIL_PADDING.XXL}; padding-bottom: ${UTIL_PADDING.XXL};`;
  }
};
