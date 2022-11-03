import Card from "../../../components/card/card.component";
//import { SkillDataType } from "./skills-list";
import { PortfolioType } from "../../../store/data/data-types";
import Container from "../../../components/containers/container.component";
import Text from "../../../components/typography/text.component";
import Image from "../../../components/image/image.component";
import Button from "../../../components/button/button.component";
import Badge from "../../../components/badge/badge.component";
import {
  FONT_SIZE_AS,
  BUTTON_VARIANT,
  TEXT_AS,
  CARD_VARIANT,
  BADGE_VARIANT,
  BORDER_WIDTH,
} from "../../../components/theme-provider/utilities";

type PortfoliolistItemType = {
  data: PortfolioType;
};
const PortfolioListItem = (props: PortfoliolistItemType) => {
  const { title, portfolioURL, tags, portfolioImage, target } = props.data;
  let ButtonAs: JSX.Element[] | JSX.Element = <></>;
  const CardJSX = (
    <Card variant={CARD_VARIANT.WITHSHADOW} animateOnHover={false}>
      <Image
        src={`${process.env.REACT_APP_ASSET_URL}/images/${portfolioImage}`}
        height={400}
        width={400}
        objectFit
        borderWidth={BORDER_WIDTH.SM}
        withWrapper
      />

      <Text as={TEXT_AS.H3} fontSizeAs={FONT_SIZE_AS.H5} className="mt-3 mb-3">
        {title}
      </Text>
      <Container flex gap="1%" className="ph-0" bg="none">
        {tags.map((tag, index) => (
          <Badge key={index} variant={BADGE_VARIANT.GRADIENT}>
            {tag}
          </Badge>
        ))}
      </Container>
    </Card>
  );
  switch (target) {
    case "_blank":
      ButtonAs = (
        <Button
          href={portfolioURL}
          variant={BUTTON_VARIANT.raw}
          className="img--animate"
          target={target}
          rel="no-referrer"
        >
          <>{CardJSX}</>
        </Button>
      );
      break;
    case "_self":
    default:
      ButtonAs = (
        <Button
          as="link"
          to={portfolioURL}
          variant={BUTTON_VARIANT.raw}
          className="img--animate"
          rel="no-referrer"
        >
          {CardJSX}
        </Button>
      );
      break;
  }

  return ButtonAs;
};

export default PortfolioListItem;
