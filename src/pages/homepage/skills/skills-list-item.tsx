import SVGIcon from "../../../components/svg-icons/svg-icons";
import Card, { CARD_VARIANTS } from "../../../components/card/card.component";
import { SkillsType } from "../../../store/data/data-types";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";

type SkillListItem = {
  data: SkillsType;
};
const SkillListItem = (props: SkillListItem) => {
  const { title, description, svgIcon } = props.data;
  return (
    <Card variant={CARD_VARIANTS.WITHSHADOW} bgGradientOnHover>
      <SVGIcon icon={svgIcon} />
      <Text as={TEXT_VARIANTS.H3} className="mt-3 mb-3">
        {title}
      </Text>
      <Text as={TEXT_VARIANTS.P}>{description}</Text>
    </Card>
  );
};

export default SkillListItem;
