import styled from "styled-components";

interface StyledButtonProps {
  readonly size: string;
  readonly block: boolean | undefined;
  readonly color: string;
}
const handleButtonSize = (size: string) => {
  switch (size) {
    case "sm":
      return ".4rem .8rem";
    case "md":
    default:
      return ".7rem 1.4rem";
    case "lg":
      return "1.2rem 2.4rem";
  }
};

export const StyledBaseButton = styled.button<StyledButtonProps>(
  ({ theme, block, color, size }) => `
  width: ${block ? `100%` : `inherit`};
  ${color && `background-color:${color};`}
  padding: ${size && handleButtonSize(size)};
  letter-spacing: 0.5px;
  font-size: 1rem;
  color: ${theme.colorPrimary};
  text-transform: uppercase;
  font-weight: bolder;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  text-decoration: none;
  display: ${block ? `block` : `inline-block`};
  span {
    margin-right: 5px;
  }
  &:hover {
    background-color: #fff;
    ${color && `color:${color};`}
    border-color: black;
  }

  &:disabled,
  &[disabled] {
    background: rgb(239 239 239 / 30%);
    box-shadow: none;
    border-width: 1px;
    border-style: solid;
    border-color: #dedede;    cursor: not-allowed;
  }
`
);

export const StyledGoogleSignInButton = styled(StyledBaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
  }
`;

export const StyledInvertedButton = styled(StyledBaseButton)(
  ({ theme, color }) => `
  background-color: white;
  color: ${theme.colorPrimary};
   ${color && `border-color:${color};`}
  &:hover {
     ${color && `background-color:${color};`}
    color: white;
    border: 1px solid transparent;
  }
`
);

export const StyledButtonWithIcon = styled(StyledBaseButton)`
  background-color: transparent;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  color: #fff;
  small {
    text-transform: capitalize;
    font-weight: normal;
  }
  svg {
    text-align: center;
    display: inline-flex;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    font-size: 2em;
    margin-right: 0.8rem;
  }
  &:hover {
    color: #43cea2;
    background-color: transparent;
    border-color: transparent;
    svg {
      animation-duration: 0.75s;
      animation-duration: calc(var(--animate-duration) * 0.75);
      animation-name: bounceIn;
    }
  }
`;

export const StyledGradientButton = styled.button<StyledButtonProps>(
  ({ theme, size, block }) => `
  background: ${theme.backgroundColorGradient};
  box-shadow: ${theme.boxShadow};
  padding: ${size && handleButtonSize(size)};
  border: none;
  width: ${block ? `100%` : `inherit`};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  border-radius: 20px;
  line-height: normal;
  display: inline-block;
  margin: 5px;
  text-align: center;
  color: ${theme.colorPrimary};
  transition: transform 0.4s ease-in-out;
  &:hover {
    background: ${theme.backgroundColorGradient};
    color: ${theme.colorPrimary};
    transform: translateY(-3px);
  }
  &:disabled,
  &[disabled] {
    background: rgb(239 239 239 / 30%);
    box-shadow: none;
    border-width: 1px;
    border-style: solid;
    border-color: #dedede;    cursor: not-allowed;
  }
`
);

export const StyledRawButton = styled.button<StyledButtonProps>`
  border: none;
  background: none;
  cursor: pointer;
  background: none !important;
`;
