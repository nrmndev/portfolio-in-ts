import SVGIcon from "../../../components/svg-icons/svg-icons";
import Card from "../../../components/card/card.component";
import { SkillsType } from "../../../store/data/data-types";
import Text from "../../../components/typography/text.component";
import {
  TEXT_AS,
  CARD_VARIANT,
} from "../../../components/theme-provider/utilities";

type SkillListItem = {
  data: SkillsType;
};
const SkillListItem = (props: SkillListItem) => {
  const { title, description, svgIcon } = props.data;
  return (
    <Card variant={CARD_VARIANT.WITHSHADOW} bgGradientOnHover>
      <SVGIcon icon={svgIcon} />
      <Text as={TEXT_AS.H3} className="mt-3 mb-3">
        {title}
      </Text>
      <Text as={TEXT_AS.P}>{description}</Text>
    </Card>
  );
};

export default SkillListItem;
