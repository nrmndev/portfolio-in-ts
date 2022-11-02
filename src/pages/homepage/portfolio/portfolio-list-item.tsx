import Card, { CARD_VARIANTS } from "../../../components/card/card.component";
//import { SkillDataType } from "./skills-list";
import { PortfolioType } from "../../../store/data/data-types";
import Container from "../../../components/containers/container.component";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
import Image, {
  IMAGE_BORDER_SIZE,
} from "../../../components/image/image.component";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import Badge, {
  BADGE_VARIANT,
} from "../../../components/badge/badge.component";
import {
  FONT_SIZE,
  HORIZONTAL_PADDING,
} from "../../../components/theme-provider/theme-utilities";

type PortfoliolistItemType = {
  data: PortfolioType;
};
const PortfolioListItem = (props: PortfoliolistItemType) => {
  const { title, portfolioURL, tags, portfolioImage } = props.data;
  return (
    <Button
      href={portfolioURL}
      variant={BUTTON_VARIANTS.raw}
      className="img--animate"
      target="_blank"
      rel="no-referrer"
    >
      <Card variant={CARD_VARIANTS.WITHSHADOW} animateOnHover={false}>
        <Image
          src={`${process.env.REACT_APP_ASSET_URL}/images/${portfolioImage}`}
          height={400}
          width={400}
          objectFit
          borderSize={IMAGE_BORDER_SIZE.SM}
          withWrapper
        />

        <Text
          as={TEXT_VARIANTS.H3}
          fontSizeAs={FONT_SIZE.H5}
          className="mt-3 mb-3"
        >
          {title}
        </Text>
        <Container
          flex
          gap="1%"
          className="ph-0"
          bg="none"
          horizontalPadding={HORIZONTAL_PADDING.NONE}
        >
          {tags.map((tag, index) => (
            <Badge key={index} variant={BADGE_VARIANT.GRADIENT}>
              {tag}
            </Badge>
          ))}
        </Container>
      </Card>
    </Button>
  );
};

export default PortfolioListItem;
