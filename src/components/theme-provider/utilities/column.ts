import { UTIL_BREAKPOINTS } from "./breakpoint";

export type ColumnSizes = {
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const handleColumn = (
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  gap = `2%`
) => {
  // return `flex-basis: 100% / ${col};`;
  return `
    @media (min-width: ${UTIL_BREAKPOINTS.LG}px) {
        flex-basis: calc(${(lg / 12) * 100}% - ${gap});
    }
    @media (min-width: ${UTIL_BREAKPOINTS.MD}px) 
    and (max-width: ${UTIL_BREAKPOINTS.LG - 0.001}px) {
        flex-basis: calc(${(md / 12) * 100}% - ${gap});
    }
    @media (min-width: ${UTIL_BREAKPOINTS.SM}px) 
    and (max-width: ${UTIL_BREAKPOINTS.MD - 0.001}px) {
        flex-basis: calc(${(sm / 12) * 100}% - ${gap});
    }
    @media (max-width: ${UTIL_BREAKPOINTS.SM - 0.001}px) {
        flex-basis: calc(${(xs / 12) * 100}% - ${gap});
    }
    `;
};
