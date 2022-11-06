import React, { HTMLAttributes } from "react";
import {
  PaddingTypes,
  PADDING,
  JUSTIFY_CONTENT,
  ALIGN_ITEMS,
} from "../theme-provider/utilities";
import { ColumnSizes } from "../theme-provider/utilities/column";
import { StyledFixedContainerOverlay, StyledSection } from "./container.styles";

type ContainerProps = {
  children: React.ReactNode;
  bg?: string | undefined;
  img?: string | undefined;
  as?: "div" | "section" | "article" | "aside";
  fluid?: boolean;
  flex?: boolean;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  gap?: string;
  childFlexBasis?: string;
  fixed?: boolean;
} & PaddingTypes &
  ColumnSizes &
  HTMLAttributes<HTMLElement>;

const Container = (props: ContainerProps) => {
  const {
    bg,
    img,
    as = "div",
    children,
    fluid = false,
    flex = false,
    gap = "2%",
    childFlexBasis = "25%",
    fixed = false,
    justifyContent = JUSTIFY_CONTENT.SPACEBETWEEN,
    alignItems = ALIGN_ITEMS.FLEXSTART,
    hPadding = PADDING.NONE,
    vPadding = PADDING.NONE,
    padding = PADDING.NONE,
    xs = 12,
    sm = 12,
    lg = 12,
    md = 12,
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
        alignItems={alignItems}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        {...rest}
      >
        {children}
      </StyledSection>
      {fixed && <StyledFixedContainerOverlay />}
    </>
  );
};

export default Container;
