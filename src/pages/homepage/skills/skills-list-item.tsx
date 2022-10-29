import { Col } from "react-bootstrap";
import SVGIcon from "../../../components/svg-icons/svg-icons";

import Card, { CARD_VARIANTS } from "../../../components/card/card.component";
//import { SkillDataType } from "./skills-list";
import { SkillsType } from "../../../store/data/data-types";
import Container from "../../../components/containers/container.component";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
type SkillListItem = {
  data: SkillsType;
};
const SkillListItem = (props: SkillListItem) => {
  //const propsPassedID = useCheckInViewById(props.id);
  const { title, description, svgIcon, id } = props.data;
  return (
    <Card variant={CARD_VARIANTS.WITHSHADOW}>
      <SVGIcon icon={svgIcon} />
      <Text as={TEXT_VARIANTS.H3} className="mt-3 mb-3">
        {title}
      </Text>
      <Text as={TEXT_VARIANTS.P}>{description}</Text>
    </Card>
    // <Col xs={12} sm={6} md={4} className="pv__gutter" key={id}>

    // </Col>
  );
};

export default SkillListItem;
