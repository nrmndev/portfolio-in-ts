import styled from "styled-components";

interface StyledSectionTitleProps {
  readonly textAlign: string;
  readonly variant: string;
}

const handleVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return `color: #023047;
      background: linear-gradient(30deg, rgb(67, 206, 162) 0%, rgb(24, 90, 157));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`;
    case "secondary":
      return `color: #023047;`;
    case "white":
      return `color: #FFFFFF;`;
  }
};
const StyledSectionTitle = styled.div<StyledSectionTitleProps>`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: ${({ textAlign }) => textAlign};
  ${({ variant }) => handleVariant(variant)};
  h3 {
    font-size: 4rem;
    font-family: "MontserratBold", sans-serif;
  }
  h3,
  h4 {
    text-transform: uppercase;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
export default StyledSectionTitle;
