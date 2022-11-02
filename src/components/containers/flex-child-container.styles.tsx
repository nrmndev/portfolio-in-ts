import styled from "styled-components";

interface IContainerProps {
  readonly flexBasis: string | undefined;
}

export const StyledFlexChildContainer = styled.div<IContainerProps>(
  ({ flexBasis }) => `
  flex-basis: ${flexBasis ? flexBasis : `100%`};
`
);
