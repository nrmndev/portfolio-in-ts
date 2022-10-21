import React, { HTMLAttributes } from "react";
import { StyledSection } from "./container.styles";

type ContainerProps = {
  children: React.ReactNode;
  bg?: string;
  img?: string;
  as?: "div" | "section" | "article" | "aside";
  fluid?: boolean;
} & HTMLAttributes<HTMLElement>;

const Container = (props: ContainerProps) => {
  const {
    bg = "none",
    img = "",
    as = "div",
    children,
    fluid = false,
    ...rest
  } = props;
  return (
    <StyledSection bg={bg} img={img} fluid={fluid} {...rest} as={as}>
      {children}
    </StyledSection>
  );
};

export default Container;
