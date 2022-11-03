import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { BUTTON_SIZE, BUTTON_VARIANT } from "../theme-provider/utilities";

import {
  StyledBaseButton,
  StyledButtonWithIcon,
  StyledGoogleSignInButton,
  StyledGradientButton,
  StyledInvertedButton,
  StyledRawButton,
} from "./button.styles";

type ButtonPropsBasics = {
  children?: React.ReactNode;
  variant?: BUTTON_VARIANT;
  size?: BUTTON_SIZE;
  block?: boolean;
  color?: string;
};

// type ButtonProps = ButtonPropsBasics &
//   (
//     | (JSX.IntrinsicElements["a"] & { as?: "a" })
//     | (JSX.IntrinsicElements["button"] & { as: "button" })
//     | (Omit<LinkProps, keyof ButtonPropsBasics> & { as: "link" })
//   );
type ButtonProps = ButtonPropsBasics &
  (
    | (Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof ButtonPropsBasics
      > & { as?: "a" })
    | (Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonPropsBasics
      > & { as: "button" })
    | (Omit<LinkProps, keyof ButtonPropsBasics> & { as: "link" })
  );

const getButton = (variant = BUTTON_VARIANT.base) =>
  ({
    [BUTTON_VARIANT.base]: StyledBaseButton,
    [BUTTON_VARIANT.google]: StyledGoogleSignInButton,
    [BUTTON_VARIANT.inverted]: StyledInvertedButton,
    [BUTTON_VARIANT.icon]: StyledButtonWithIcon,
    [BUTTON_VARIANT.gradient]: StyledGradientButton,
    [BUTTON_VARIANT.raw]: StyledRawButton,
  }[variant]);

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(function ForwardedButton(props, ref) {
  const {
    children,
    variant,
    size = BUTTON_SIZE.MD,
    block,
    color = "#43cea2",
    as: Component = "a",
    ...rest
  } = props;
  const CustomButton = getButton(variant);
  //let StyledAs:React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>> ;
  let StyledAs: any;
  switch (Component) {
    case "a":
      StyledAs = "a";
      break;
    case "link":
      StyledAs = Link;
      break;
    case "button":
    default:
      StyledAs = "button";
      break;
  }

  return (
    <CustomButton
      ref={ref as any}
      block={block ? block : undefined}
      color={color}
      size={size}
      {...(rest as any)}
      as={StyledAs}
    >
      {/* some other components here */}
      {children}
    </CustomButton>
  );
});

export default Button;
