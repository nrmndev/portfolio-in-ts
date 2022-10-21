import {
  StyledCardBase,
  StyledCardWithShadow,
  StyledCardContent,
} from "./card.styles";

export enum CARD_VARIANTS {
  BASE = "base",
  WITHSHADOW = "withShadow",
}

const getCard = (variant = CARD_VARIANTS.BASE) =>
  ({
    [CARD_VARIANTS.BASE]: StyledCardBase,
    [CARD_VARIANTS.WITHSHADOW]: StyledCardWithShadow,
  }[variant]);

type CardProps = {
  variant?: CARD_VARIANTS;
  children: React.ReactNode;
};

const Card = ({ variant = CARD_VARIANTS.BASE, children }: CardProps) => {
  const CustomCard = getCard(variant);
  return (
    <CustomCard>
      <StyledCardContent>{children}</StyledCardContent>
    </CustomCard>
  );
};

export default Card;
