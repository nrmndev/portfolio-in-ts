import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  BOX_SHADOW,
  BUTTON_SIZE,
  handleBackgroundColor,
  handleBoxShadow,
  handleButtonSize,
  handleTextColor,
  TEXT_COLOR,
} from "../theme-provider/utilities";

interface StyledButtonProps {
  readonly size: BUTTON_SIZE;
  readonly block: boolean | undefined;
  readonly color: string;
}

export const StyledBaseButton = styled.button<StyledButtonProps>(
  ({ block, color, size }) => `
  width: ${block ? `100%` : `inherit`};
  ${color && `background-color:${color};`}
  ${handleButtonSize(size)}
  letter-spacing: 0.5px;
  font-size: 1rem;
  ${handleTextColor(TEXT_COLOR.PRIMARY)};
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
    ${handleTextColor(TEXT_COLOR.PRIMARY)};
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
  ({ color }) => `
  background-color: white;
  ${handleTextColor(TEXT_COLOR.PRIMARY)};
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
  ({ size, block }) => `
  ${handleBackgroundColor(BACKGROUND_COLOR.GRADIENT)}
  ${handleBoxShadow(BOX_SHADOW.PRIMARY)}
  ${handleButtonSize(size)}
  ${handleTextColor(TEXT_COLOR.PRIMARY)}
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
  transition: transform 0.4s ease-in-out;
  &:hover {
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
