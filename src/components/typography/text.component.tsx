import { HTMLAttributes } from "react";
import {
  FONT_SIZE_AS,
  TEXT_ALIGN,
  TEXT_AS,
  TEXT_COLOR,
  TEXT_TRANSFORM,
} from "../theme-provider/utilities";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledP,
  StyledText,
} from "./text.styles";

type LabeledTypoProps = {
  label?: string;
  as?: TEXT_AS;
  textColor?: TEXT_COLOR;
  textAlign?: TEXT_ALIGN;
  fontSizeAs?: FONT_SIZE_AS;
  textTransform?: TEXT_TRANSFORM;
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

const getStyledText = (variant = TEXT_AS.H3) =>
  ({
    [TEXT_AS.H1]: StyledH1,
    [TEXT_AS.H2]: StyledH2,
    [TEXT_AS.H3]: StyledH3,
    [TEXT_AS.H4]: StyledH4,
    [TEXT_AS.H5]: StyledH5,
    [TEXT_AS.H6]: StyledH6,
    [TEXT_AS.P]: StyledP,
  }[variant]);

const Text = (props: LabeledTypoProps) => {
  const {
    label,
    textColor = TEXT_COLOR.BASE,
    fontSizeAs,
    as = TEXT_AS.P,
    textAlign = TEXT_ALIGN.LEFT,
    textTransform = TEXT_TRANSFORM.NONE,
    children,
    ...rest
  } = props;

  const StyledTextVariant = getStyledText(as);
  return (
    <StyledTextVariant
      textColor={textColor}
      as={as}
      textAlign={textAlign}
      fontSizeAs={fontSizeAs}
      textTransform={textTransform}
      {...rest}
    >
      {label && <span className="text-label">{label}</span>}
      {children}
    </StyledTextVariant>
  );
};

export default Text;
