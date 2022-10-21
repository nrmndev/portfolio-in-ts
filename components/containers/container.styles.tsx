import styled from "styled-components";

interface IStyledSection {
  readonly bg: string;
  readonly img: string;
  readonly fluid: boolean;
}

const handleBG = (bg: string, img: string) => {
  if (img.length > 0) {
    return `  background: ${bg},url('${img}');     
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;`;
  } else {
    return `background: ${bg}`;
  }
};

export const StyledSection = styled.section<IStyledSection>`
  ${({ bg, img }) => handleBG(bg, img)};
  ${({ fluid }) =>
    fluid
      ? ` padding-top: 5rem;
    padding-bottom: 5rem;`
      : `max-width: 1320px; margin-right: auto;
    margin-left: auto;  
    padding-right: 15px;
    padding-left: 15px;`};

  position: relative;
`;
