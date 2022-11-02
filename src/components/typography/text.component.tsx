import { HTMLAttributes } from "react";
import { FONT_SIZE } from "../theme-provider/theme-utilities";
import {
  StyledTextAsH1,
  StyledTextAsH2,
  StyledTextAsH3,
  StyledTextAsH4,
  StyledTextAsH5,
  StyledTextAsH6,
  StyledTextAsP,
} from "./text.styles";

export enum TEXT_VARIANTS {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum TEXT_TRANSFORM {
  UPPERCASE = "uppercase",
  LOWERCASE = "lowercase",
  CAPITALIZE = "capitalize",
  NONE = "none",
}

export enum TEXT_COLOR {
  PRIMARY = "primary",
  BACKGROUNDCLIP = "background-clip",
  WHITE = "WHITE",
}

type LabeledTypoProps = {
  label?: string;
  as: TEXT_VARIANTS;
  textColor?: TEXT_COLOR;
  textAlign?: "center" | "left" | "right";
  fontSizeAs?: FONT_SIZE;
  textTransform?: TEXT_TRANSFORM;
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

const getTextAs = (as = TEXT_VARIANTS.H3) =>
  ({
    [TEXT_VARIANTS.H1]: StyledTextAsH1,
    [TEXT_VARIANTS.H2]: StyledTextAsH2,
    [TEXT_VARIANTS.H3]: StyledTextAsH3,
    [TEXT_VARIANTS.H4]: StyledTextAsH4,
    [TEXT_VARIANTS.H5]: StyledTextAsH5,
    [TEXT_VARIANTS.H6]: StyledTextAsH6,
    [TEXT_VARIANTS.P]: StyledTextAsP,
  }[as]);

const Text = (props: LabeledTypoProps) => {
  const {
    label,
    textColor = TEXT_COLOR.PRIMARY,
    fontSizeAs,
    as = TEXT_VARIANTS.H3,
    textAlign = "left",
    textTransform = TEXT_TRANSFORM.NONE,
    children,
    ...rest
  } = props;
  const CustomText = getTextAs(as);
  return (
    <CustomText
      textColor={textColor}
      as={as}
      textAlign={textAlign}
      fontSizeAs={fontSizeAs}
      textTransform={textTransform}
      {...rest}
    >
      {label && <span className="text-label">{label}</span>}
      {children}
    </CustomText>
  );
};

export default Text;
