export enum HORIZONTAL_PADDING {
  NONE = "NONE",
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}
const horizontal_padding = {
  NONE: `padding-top: ${HORIZONTAL_PADDING.NONE}; padding-bottom: ${HORIZONTAL_PADDING.NONE}`,
  XS: `padding-top: ${HORIZONTAL_PADDING.XS}; padding-bottom: ${HORIZONTAL_PADDING.XS}`,
  SM: `padding-top: ${HORIZONTAL_PADDING.SM}; padding-bottom: ${HORIZONTAL_PADDING.SM}`,
  MD: `padding-top: ${HORIZONTAL_PADDING.MD}; padding-bottom: ${HORIZONTAL_PADDING.MD}`,
  LG: `padding-top: ${HORIZONTAL_PADDING.LG}; padding-bottom: ${HORIZONTAL_PADDING.LG}`,
  XL: `padding-top: ${HORIZONTAL_PADDING.XL}; padding-bottom: ${HORIZONTAL_PADDING.XL}`,
  XXL: `padding-top: ${HORIZONTAL_PADDING.XXL}; padding-bottom: ${HORIZONTAL_PADDING.XXL}`,
};
export const handleHorizontalPadding = (str: HORIZONTAL_PADDING) => {
  switch (str) {
    case HORIZONTAL_PADDING.NONE:
      return;
    case HORIZONTAL_PADDING.XS:
      return horizontal_padding.XS;
    case HORIZONTAL_PADDING.SM:
      return horizontal_padding.SM;
    case HORIZONTAL_PADDING.MD:
    default:
      return horizontal_padding.MD;
    case HORIZONTAL_PADDING.LG:
      return horizontal_padding.LG;
    case HORIZONTAL_PADDING.XL:
      return horizontal_padding.XL;
    case HORIZONTAL_PADDING.XXL:
      return horizontal_padding.XXL;
  }
};
