import styled from "styled-components";

interface IContainerBoxed {
  readonly borderColor: string;
}

export const StyledContainerBoxed = styled.section<IContainerBoxed>`
  width: 80%;
  margin: 0 10%;
  border-width: 20px;
  border-style: solid;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-color: ${({ borderColor }) =>
    borderColor ? borderColor : `transparent`};
  border-image-slice: 1;
  z-index: 2;
  position: relative;
`;
