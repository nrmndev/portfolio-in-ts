import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

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
  variant?: BUTTON_VARIANTS;
  size?: "sm" | "md" | "lg";
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

export enum BUTTON_VARIANTS {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  icon = "with-icon",
  gradient = "gradient",

  raw = "raw",
}

const getButton = (variant = BUTTON_VARIANTS.base) =>
  ({
    [BUTTON_VARIANTS.base]: StyledBaseButton,
    [BUTTON_VARIANTS.google]: StyledGoogleSignInButton,
    [BUTTON_VARIANTS.inverted]: StyledInvertedButton,
    [BUTTON_VARIANTS.icon]: StyledButtonWithIcon,
    [BUTTON_VARIANTS.gradient]: StyledGradientButton,
    [BUTTON_VARIANTS.raw]: StyledRawButton,
  }[variant]);

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(function ForwardedButton(props, ref) {
  const {
    children,
    variant,
    size = "lg",
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
