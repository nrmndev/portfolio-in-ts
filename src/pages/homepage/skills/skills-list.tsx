import { Col, Row } from "react-bootstrap";

import { BsArrowRight } from "react-icons/bs";
import SkillListItem from "./skills-list-item";
import Container from "../../../components/containers/container.component";
import SectionTitle from "../../../components/section-titles/section-titles.components";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import NotFound from "../../../components/error/notfound.component";
import { SkillsType } from "../../../store/data/data-types";

type SkillsListProps = {
  data: SkillsType[];
};

const SkillsList = ({ data }: SkillsListProps) => {
  //const isSkillHeadingInView = useCheckInViewById("skill_heading");
  //const isReactInView = useCheckInViewById("skill_react");
  let SkillListItemJSX: JSX.Element[] | JSX.Element = (
    <NotFound text="No Skills List Found" />
  );
  if (data.length > 1) {
    SkillListItemJSX = data.map((skill: SkillsType) => {
      // console.log(skill.id);
      return <SkillListItem data={skill} key={skill.id} />;
    });
  }

  return (
    <Container id="SkillsSection" as="section" fluid>
      <Container>
        <Row className="mb-5 z-2">
          <Col>
            <SectionTitle
              title="Front End Development"
              subTitle="My real world experiences below"
              content="You might find something useful here, best practices and some
                use case approaches."
            />
          </Col>
        </Row>

        <Container flex childFlexBasis="31.33%" gap="3%">
          {SkillListItemJSX}
        </Container>
        <Row className="pt-5 pb-5 text-center">
          <Col md={6} className="mt-3 mb-3">
            <Button
              href="http://store.ngsilvestre.com"
              target="_blank"
              rel="noreferrer"
              variant={BUTTON_VARIANTS.inverted}
            >
              <span>
                <BsArrowRight size={"2em"} />
                See sample online store
              </span>
            </Button>
          </Col>
          <Col md={6} className="mt-3 mb-3">
            <Button to="/reactjs" variant={BUTTON_VARIANTS.inverted}>
              <span>
                <BsArrowRight size={"2em"} /> View ReactJS Skills Processes
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SkillsList;