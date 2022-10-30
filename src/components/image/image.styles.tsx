import { Sign } from "crypto";
import styled from "styled-components";
import { themedImageBackfaceBG } from "../theme-provider/theme-provider.styles";

type StyledImageBaseProps = {
  readonly width: number;
  readonly height: number;
  readonly align: string;
  readonly objectFit: boolean;
  readonly borderSize: string | undefined;
};

type StyledDivBaseProps = {
  readonly borderSize: string | undefined;
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
export const StyledImageBase = styled.img<StyledImageBaseProps>`
  width: 100%;
  display: table;
  max-width: ${({ width }) => (width ? `${width}px` : `auto`)};
  max-height: ${({ height }) => (height ? `${height}px` : `auto`)};
  ${({ align }) => handleAlign(align)};
  ${({ borderSize }) => borderSize && `border-radius:${borderSize}`};
  background: ${themedImageBackfaceBG};

  ${({ objectFit }) =>
    objectFit &&
    `    object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;`}
`;

export const StyledImageRounded = styled(StyledImageBase)`
  border-radius: 50%;
`;

export const StyledImageBordered = styled(StyledImageBase)`
  border-radius: 10px;
`;

export const StyledImageWrapper = styled.div<StyledDivBaseProps>`
  overflow: hidden;
  ${({ borderSize }) => borderSize && `border-radius:${borderSize}`};
`;
