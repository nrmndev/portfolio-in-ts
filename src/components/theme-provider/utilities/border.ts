export enum UTIL_BORDER_WIDTH {
  NONE = "none",
  SM = "1rem",
  MD = "1.5rem",
  LG = "2rem",
  XL = "2.5rem",
}
export const handleBorderWidth = (borderWidth: UTIL_BORDER_WIDTH) => {
  switch (borderWidth) {
    case UTIL_BORDER_WIDTH.NONE:
    default:
      return ``;
    case UTIL_BORDER_WIDTH.SM:
      return `border-width:${UTIL_BORDER_WIDTH.SM};`;
    case UTIL_BORDER_WIDTH.MD:
      return `border-width:${UTIL_BORDER_WIDTH.MD};`;
    case UTIL_BORDER_WIDTH.LG:
      return `border-width:${UTIL_BORDER_WIDTH.SM};`;
    case UTIL_BORDER_WIDTH.XL:
      return `border-width:${UTIL_BORDER_WIDTH.XL};`;
  }
};
