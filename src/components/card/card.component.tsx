import { CARD_PADDING, CARD_VARIANT } from "../theme-provider/utilities";
import {
  StyledCardBase,
  StyledCardWithShadow,
  StyledCardContent,
} from "./card.styles";

const getCard = (variant = CARD_VARIANT.BASE) =>
  ({
    [CARD_VARIANT.BASE]: StyledCardBase,
    [CARD_VARIANT.WITHSHADOW]: StyledCardWithShadow,
  }[variant]);

type CardProps = {
  variant?: CARD_VARIANT;
  children: React.ReactNode;
  bgGradientOnHover?: boolean;
  padding?: CARD_PADDING;
  animateOnHover?: boolean;
  raw?: boolean;
};

const Card = ({
  variant = CARD_VARIANT.BASE,
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
