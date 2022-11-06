export enum UTIL_ALIGN_ITEMS {
  CENTER = "center",
  END = "end",
  FLEXEND = "flex-end",
  FLEXSTART = "flex-start",
  SPACEBETWEEN = "space-between",
  SELFEND = "self-end",
  START = "start",
  STRETCH = "stretch",
}

export const handleAlignItems = (alignItems: UTIL_ALIGN_ITEMS) => {
  return `align-items: ${alignItems};`;
};
