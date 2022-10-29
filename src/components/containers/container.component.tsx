import React, { HTMLAttributes } from "react";
import { StyledSection } from "./container.styles";

type ContainerProps = {
  children: React.ReactNode;
  bg?: string | undefined;
  img?: string;
  as?: "div" | "section" | "article" | "aside";
  fluid?: boolean;
  flex?: boolean;
  gap?: string;
  childFlexBasis?: string;
} & HTMLAttributes<HTMLElement>;

const Container = (props: ContainerProps) => {
  const {
    bg,
    img = "",
    as = "div",
    children,
    fluid = false,
    flex = false,
    gap = "1rem",
    childFlexBasis = "25%",
    ...rest
  } = props;
  return (
    <StyledSection
      bg={bg}
      img={img}
      fluid={fluid}
      {...rest}
      as={as}
      flex={flex}
      childFlexBasis={childFlexBasis}
      gap={gap}
    >
      {children}
    </StyledSection>
  );
};

export default Container;
