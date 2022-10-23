import { Link } from "react-router-dom";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import {
  StyledBaseButton,
  StyledButtonWithIcon,
  StyledGoogleSignInButton,
  StyledInvertedButton,
} from "./button.styles";

export enum BUTTON_VARIANTS {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  icon = "with-icon",
}
type ButtonBaseProps = {
  children?: React.ReactNode;
  variant?: BUTTON_VARIANTS;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  to?: never;
  href?: never;
};

type LinkProps = {
  to?: string;
  href?: never;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type AnchorProps = {
  href?: string;
  to?: never;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const getButton = (variant = BUTTON_VARIANTS.base) =>
  ({
    [BUTTON_VARIANTS.base]: StyledBaseButton,
    [BUTTON_VARIANTS.google]: StyledGoogleSignInButton,
    [BUTTON_VARIANTS.inverted]: StyledInvertedButton,
    [BUTTON_VARIANTS.icon]: StyledButtonWithIcon,
  }[variant]);

const Button = (
  props: ButtonBaseProps & (ButtonProps | LinkProps | AnchorProps)
) => {
  const CustomButton = getButton(props.variant);
  if (props.to) {
    const {
      to,
      size = "md",
      block = false,
      color = "#43cea2",
      ...rest
    } = props;
    return (
      <CustomButton
        as={Link}
        to={to}
        size={size}
        block={block ? block : undefined}
        color={color}
        {...rest}
      >
        {props.children}
      </CustomButton>
    );
  }
  if (props.href) {
    const {
      href,
      size = "md",
      block = false,
      color = "#43cea2",
      ...rest
    } = props;
    return (
      <CustomButton
        as="a"
        href={href}
        block={block ? block : undefined}
        size={size}
        color={color}
        {...rest}
      >
        {props.children}
      </CustomButton>
    );
  }
  const {
    // href = [],
    // to = [],
    block = false,
    size = "md",
    color = "#43cea2",
    ...rest
  } = props;
  return (
    <CustomButton
      size={size}
      block={block ? block : undefined}
      color={color}
      {...rest}
    >
      {props.children}
    </CustomButton>
  );
};

export default Button;
