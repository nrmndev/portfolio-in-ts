import React, { HTMLAttributes } from "react";
import { HORIZONTAL_PADDING } from "../theme-provider/theme-utilities";
import { StyledFixedContainerOverlay, StyledSection } from "./container.styles";

export enum CONTAINER_JUSTIFY {
  CENTER = "center",
  FLEXSTART = "flex-start",
  FLEXEND = "flex-end",
}

type ContainerProps = {
  children: React.ReactNode;
  bg?: string | undefined;
  img?: string;
  as?: "div" | "section" | "article" | "aside";
  fluid?: boolean;
  flex?: boolean;
  justifyContent?: CONTAINER_JUSTIFY;
  gap?: string;
  childFlexBasis?: string;
  fixed?: boolean;
  horizontalPadding?: HORIZONTAL_PADDING;
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
    fixed = false,
    justifyContent = CONTAINER_JUSTIFY.FLEXSTART,
    horizontalPadding = HORIZONTAL_PADDING.NONE,
    ...rest
  } = props;
  return (
    <>
      <StyledSection
        bg={bg}
        img={img}
        fluid={fluid}
        fixed={fixed}
        {...rest}
        as={as}
        flex={flex}
        childFlexBasis={childFlexBasis}
        justifyContent={justifyContent}
        gap={gap}
        horizontalPadding={horizontalPadding}
      >
        {children}
      </StyledSection>
      {fixed && <StyledFixedContainerOverlay />}
    </>
  );
};

export default Container;
