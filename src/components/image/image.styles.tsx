import styled from "styled-components";
import { BORDER_WIDTH, handleBorderWidth } from "../theme-provider/utilities";

type StyledImageBaseProps = {
  readonly width: number;
  readonly height: number;
  readonly align: string;
  readonly objectFit: boolean;
  readonly borderWidth: BORDER_WIDTH;
};

type StyledDivBaseProps = {
  readonly borderWidth: BORDER_WIDTH;
};

const handleAlign = (align: string) => {
  switch (align) {
    case "right":
      return `margin: 0 0 0 auto`;
    case "center":
      return `margin: 0 auto`;
    case "left":
      return `margin: 0 auto 0 0`;
  }
};

export const StyledImageBase = styled.img<StyledImageBaseProps>(
  ({ theme, width, height, align, borderWidth, objectFit }) => `
  width: 100%;
  display: table;
  max-width: ${width ? `${width}px` : `auto`};
  max-height: ${height ? `${height}px` : `auto`};
  ${align && handleAlign(align)};
  ${handleBorderWidth(borderWidth)};
  background: ${theme.backgroundColorFlatAlt};

  ${
    objectFit &&
    `
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;`
  }
`
);

export const StyledImageRounded = styled(StyledImageBase)`
  border-radius: 50%;
`;

export const StyledImageBordered = styled(StyledImageBase)`
  border-radius: 10px;
`;

export const StyledImageWrapper = styled.div<StyledDivBaseProps>(
  ({ borderWidth }) => `
  overflow: hidden;
  ${handleBorderWidth(borderWidth)}
`
);
