import {
  StyledCardBase,
  StyledCardWithShadow,
  StyledCardContent,
} from "./card.styles";

export enum CARD_VARIANTS {
  BASE = "base",
  WITHSHADOW = "withShadow",
}

export enum CARD_PADDING {
  SM = "1.5rem",
  MD = "2rem",
  LG = "2.5rem",
  XL = "3rem",
}
const getCard = (variant = CARD_VARIANTS.BASE) =>
  ({
    [CARD_VARIANTS.BASE]: StyledCardBase,
    [CARD_VARIANTS.WITHSHADOW]: StyledCardWithShadow,
  }[variant]);

type CardProps = {
  variant?: CARD_VARIANTS;
  children: React.ReactNode;
  bgGradientOnHover?: boolean;
  padding?: CARD_PADDING;
  animateOnHover?: boolean;
  raw?: boolean;
};

const Card = ({
  variant = CARD_VARIANTS.BASE,
  children,
  bgGradientOnHover = false,
  padding = CARD_PADDING.MD,
  animateOnHover = true,
  raw = false,
}: CardProps) => {
  const CustomCard = getCard(variant);
  return (
    <CustomCard
      bgGradientOnHover={bgGradientOnHover}
      padding={padding}
      animateOnHover={animateOnHover}
      raw={raw}
    >
      <StyledCardContent>{children}</StyledCardContent>
    </CustomCard>
  );
};

export default Card;
