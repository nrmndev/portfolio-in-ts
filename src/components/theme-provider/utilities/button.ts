export enum UTIL_BUTTON_VARIANT {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  icon = "with-icon",
  gradient = "gradient",
  raw = "raw",
}

export enum UTIL_BUTTON_SIZE {
  RAW = "raw",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export const handleButtonSize = (size: UTIL_BUTTON_SIZE) => {
  switch (size) {
    case UTIL_BUTTON_SIZE.SM:
      return "padding: .4rem .8rem;";
    case UTIL_BUTTON_SIZE.MD:
    default:
      return "padding: .7rem 1.4rem;";
    case UTIL_BUTTON_SIZE.LG:
      return "padding: 1.2rem 2.4rem;";
  }
};
