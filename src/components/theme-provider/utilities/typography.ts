export enum UTIL_FONT_SIZE_AS {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}
export const handleFontSize = (sizeAs: UTIL_FONT_SIZE_AS) => {
  switch (sizeAs) {
    case UTIL_FONT_SIZE_AS.H1:
      return `font-size: 4.25rem;`;
    case UTIL_FONT_SIZE_AS.H2:
      return `font-size: 2.5rem;`;
    case UTIL_FONT_SIZE_AS.H3:
      return `font-size: 2rem;`;
    case UTIL_FONT_SIZE_AS.H4:
      return `font-size: 1.5rem;`;
    case UTIL_FONT_SIZE_AS.H5:
      return `font-size: 1.35rem;`;
    case UTIL_FONT_SIZE_AS.H6:
      return `font-size: 1rem;`;
    case UTIL_FONT_SIZE_AS.P:
      return `font-size: 1rem;`;
  }
};
export enum UTIL_TEXT_AS {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}
export enum UTIL_TEXT_TRANSFORM {
  UPPERCASE = "uppercase",
  LOWERCASE = "lowercase",
  CAPITALIZE = "capitalize",
  NONE = "none",
}

export const handleTextTransform = (textTransform: UTIL_TEXT_TRANSFORM) => {
  switch (textTransform) {
    case UTIL_TEXT_TRANSFORM.UPPERCASE:
      return `text-transform: uppercase;`;
    case UTIL_TEXT_TRANSFORM.LOWERCASE:
      return `text-transform: lowercase;`;
    case UTIL_TEXT_TRANSFORM.CAPITALIZE:
      return `text-transform: capitalize`;
    case UTIL_TEXT_TRANSFORM.NONE:
    default:
      return ``;
  }
};

export enum UTIL_TEXT_ALIGN {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export const handleTextAlign = (textAlign: UTIL_TEXT_ALIGN) => {
  switch (textAlign) {
    case UTIL_TEXT_ALIGN.LEFT:
    default:
      return `text-align: left;`;
    case UTIL_TEXT_ALIGN.RIGHT:
      return `text-align: right;`;
    case UTIL_TEXT_ALIGN.CENTER:
      return `text-align: center;`;
  }
};

// export const handleFontSize = (sizeAs: UTIL_TEXT_AS) => {
//   switch (sizeAs) {
//     case UTIL_TEXT_AS.H1:
//       return `4.25rem;`;
//     case UTIL_TEXT_AS.H2:
//       return `2.5rem;`;
//     case UTIL_TEXT_AS.H3:
//       return `2rem;`;
//     case UTIL_TEXT_AS.H4:
//       return `1.5rem;`;
//     case UTIL_TEXT_AS.H5:
//       return `1.35rem;`;
//     case UTIL_TEXT_AS.H6:
//       return `1rem;`;
//     case UTIL_TEXT_AS.P:
//       return `1rem;`;
//   }
// };
