import { HTMLAttributes } from "react";
import {
  FONT_SIZE_AS,
  TEXT_ALIGN,
  TEXT_AS,
  TEXT_COLOR,
  TEXT_TRANSFORM,
} from "../theme-provider/utilities";
import { StyledText } from "./text.styles";

type LabeledTypoProps = {
  label?: string;
  as: TEXT_AS;
  textColor?: TEXT_COLOR;
  textAlign?: TEXT_ALIGN;
  fontSizeAs?: FONT_SIZE_AS;
  textTransform?: TEXT_TRANSFORM;
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

const Text = (props: LabeledTypoProps) => {
  const {
    label,
    textColor = TEXT_COLOR.BASE,
    fontSizeAs = FONT_SIZE_AS.P,
    as = TEXT_AS.H3,
    textAlign = TEXT_ALIGN.LEFT,
    textTransform = TEXT_TRANSFORM.NONE,
    children,
    ...rest
  } = props;

  return (
    <StyledText
      textColor={textColor}
      as={as}
      textAlign={textAlign}
      fontSizeAs={fontSizeAs}
      textTransform={textTransform}
      {...rest}
    >
      {label && <span className="text-label">{label}</span>}
      {children}
    </StyledText>
  );
};

export default Text;
