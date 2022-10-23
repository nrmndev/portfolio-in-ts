import { Col } from "react-bootstrap";
import SVGIcon from "../../../components/svg-icons/svg-icons";

import Card, { CARD_VARIANTS } from "../../../components/card/card.component";
//import { SkillDataType } from "./skills-list";
import { SkillsType } from "../../../store/data/data-types";
type SkillListItem = {
  data: SkillsType;
};
const SkillListItem = (props: SkillListItem) => {
  //const propsPassedID = useCheckInViewById(props.id);
  const { title, description, svgIcon, id } = props.data;
  return (
    <Col xs={12} sm={6} md={4} className="pv__gutter" key={id}>
      <Card variant={CARD_VARIANTS.WITHSHADOW}>
        <SVGIcon icon={svgIcon} />
        <h3 className="mt-3 color_2">{title}</h3>
        <p className="color_1">{description}</p>
      </Card>
    </Col>
  );
};

export default SkillListItem;
