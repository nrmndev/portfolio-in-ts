import StyledSectionTitle from "./section-titles.styles";
import { HTMLAttributes } from "react";

export enum TITLE_VARIANTS {
  PRIMARY = "primary",
  BACKGROUNDCLIP = "background-clip",
  WHITE = "WHITE",
}

type SectionTitleProps = {
  title: string;
  titleVariant?: TITLE_VARIANTS;
  subTitle?: string;
  subTitleVariant?: TITLE_VARIANTS;
  content?: string;
  textAlign?: "left" | "center" | "right";
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

const SectionTitle = ({
  title,
  subTitle,
  textAlign = "center",
  titleVariant = TITLE_VARIANTS.PRIMARY,
  subTitleVariant = TITLE_VARIANTS.PRIMARY,
  ...rest
}: SectionTitleProps) => {
  return (
    <StyledSectionTitle
      textAlign={textAlign}
      titleVariant={titleVariant}
      subTitleVariant={subTitleVariant}
      {...rest}
    >
      {subTitle && <h4>{subTitle}</h4>}
      <h3>{title}</h3>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
