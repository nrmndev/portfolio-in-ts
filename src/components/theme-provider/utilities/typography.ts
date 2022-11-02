export enum FONT_SIZE {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}
export const handleFontSize = (sizeAs: string) => {
  switch (sizeAs) {
    case FONT_SIZE.H1:
      return `4.25rem;`;
    case FONT_SIZE.H2:
      return `2.5rem;`;
    case FONT_SIZE.H3:
      return `2rem;`;
    case FONT_SIZE.H4:
      return `1.5rem;`;
    case FONT_SIZE.H5:
      return `1.35rem;`;
    case FONT_SIZE.H6:
      return `1rem;`;
    case FONT_SIZE.P:
      return `1rem;`;
  }
};
