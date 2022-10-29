import styled from "styled-components";

interface IContainerProps {
  readonly flexBasis: string | undefined;
}

export const StyledFlexChildContainer = styled.div<IContainerProps>`
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "100%")};
`;
