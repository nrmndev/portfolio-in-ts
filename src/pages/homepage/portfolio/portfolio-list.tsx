import { Col, Row } from "react-bootstrap";

import { BsArrowRight } from "react-icons/bs";
import SkillListItem from "./portfolio-list-item";
import Container from "../../../components/containers/container.component";
import SectionTitle, {
  TITLE_VARIANTS,
} from "../../../components/section-titles/section-titles.components";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import NotFound from "../../../components/error/notfound.component";
import { PortfolioType } from "../../../store/data/data-types";
import PortfolioListItem from "./portfolio-list-item";

type SkillsListProps = {
  data: PortfolioType[];
};

const PortfolioList = ({ data }: SkillsListProps) => {
  //const isSkillHeadingInView = useCheckInViewById("skill_heading");
  //const isReactInView = useCheckInViewById("skill_react");
  let PortfolioListItemJSX: JSX.Element[] | JSX.Element = (
    <NotFound text="No Skills List Found" />
  );
  if (data.length > 1) {
    PortfolioListItemJSX = data.map((portfolio: PortfolioType) => {
      // console.log(skill.id);
      return <PortfolioListItem data={portfolio} key={portfolio.id} />;
    });
  }

  return (
    <Container id="PortfolioSection" as="section" fluid>
      <Container>
        <SectionTitle
          title="My Portfolio"
          subTitle="Visit my portfolio and keep your feedback"
          subTitleVariant={TITLE_VARIANTS.BACKGROUNDCLIP}
          textAlign="left"
        />

        <Container flex childFlexBasis="31.33%" gap="3%">
          {PortfolioListItemJSX}
        </Container>
        <Row className="pt-5 text-center">
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

export default PortfolioList;
