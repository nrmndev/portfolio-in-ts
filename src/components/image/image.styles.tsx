import styled from "styled-components";

type StyledImageBaseProps = {
  width: number;
  height: number;
  align: string;
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
`;

export const StyledImageRounded = styled(StyledImageBase)`
  border-radius: 50%;
`;

export const StyledImageBordered = styled(StyledImageBase)`
  border-radius: 10px;
`;
