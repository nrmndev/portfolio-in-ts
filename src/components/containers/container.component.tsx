import React, { HTMLAttributes } from "react";
import {
  PaddingTypes,
  V_PADDING,
  H_PADDING,
  PADDING,
} from "../theme-provider/utilities";
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
} & PaddingTypes &
  HTMLAttributes<HTMLElement>;

const Container = (props: ContainerProps) => {
  const {
    bg,
    img = "",
    as = "div",
    children,
    fluid = false,
    flex = false,
    gap = "0",
    childFlexBasis = "25%",
    fixed = false,
    justifyContent = CONTAINER_JUSTIFY.FLEXSTART,
    hPadding = H_PADDING.NONE,
    vPadding = V_PADDING.NONE,
    padding = PADDING.NONE,
    ...rest
  } = props;
  return (
    <>
      <StyledSection
        bg={bg}
        img={img}
        fluid={fluid}
        fixed={fixed}
        as={as}
        flex={flex}
        childFlexBasis={childFlexBasis}
        justifyContent={justifyContent}
        gap={gap}
        hPadding={hPadding}
        vPadding={vPadding}
        padding={padding}
        {...rest}
      >
        {children}
      </StyledSection>
      {fixed && <StyledFixedContainerOverlay />}
    </>
  );
};

export default Container;
