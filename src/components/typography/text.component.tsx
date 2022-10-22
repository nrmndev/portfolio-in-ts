import { HTMLAttributes } from "react";
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

type LabeledTypoProps = {
  value: string;
  label?: string;
  as: TEXT_VARIANTS;
  color?: string;
  textAlign?: "center" | "left" | "right";
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
    value,
    label,
    color = "#777",
    as = TEXT_VARIANTS.H3,
    textAlign = "center",
    ...rest
  } = props;
  const CustomText = getTextAs(as);
  return (
    <CustomText color={color} as={as} textAlign={textAlign} {...rest}>
      {value}
      {label && <span>{label}</span>}
    </CustomText>
  );
};

export default Text;
