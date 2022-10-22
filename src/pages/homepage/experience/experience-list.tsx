import { Col, Row } from "react-bootstrap";
import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
import NotFound from "../../../components/error/notfound.component";
import { BsArrowRight } from "react-icons/bs";
import List from "../../../components/list/list.component";
import SectionTitle from "../../../components/section-titles/section-titles.components";
import Container from "../../../components/containers/container.component";
import CompanyContainer from "./list-item-company.component";
import {
  TimelineContainer,
  TimelineItem,
} from "../../../components/timeline/timeline.component";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import Card, { CARD_VARIANTS } from "../../../components/card/card.component";

type ExperienceData = {
  id: string;
  company: string;
  jobposition: string;
  tenureship: string;
  description: string;
  image: string;
  message: string;
  workURL: string;
  workURLText: string;
  achievements: string[];
  tasks: string[];
};

type ExperienceProps = {
  data: ExperienceData[];
};
const ExperienceList = ({ data }: ExperienceProps) => {
  let ExperienceJSX: JSX.Element[] | JSX.Element = (
    <NotFound text="No Experiences List Found" />
  );
  if (data.length > 0) {
    ExperienceJSX = data.map((experience: ExperienceData) => {
      const { achievements, description, tasks, workURL, workURLText, id } =
        experience;
      return (
        <TimelineItem key={id}>
          <Card>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <CompanyContainer data={experience} />
                <hr />
                <List
                  listItems={achievements}
                  listTitle="Notable Achievements:"
                />
              </Col>
              <Col xs={12} sm={12} md={6}>
                {description && <p className="font__sm">{description}</p>}
                {tasks && <List listItems={tasks} listTitle="Tasks:" />}
              </Col>
            </Row>

            <Button href={workURL} size="sm" variant={BUTTON_VARIANTS.inverted}>
              <span>
                <BsArrowRight size={"1.5rem"} />
              </span>
              {workURLText}
            </Button>
          </Card>
        </TimelineItem>
      );
    });
  }
  const isExperienceInView = useCheckInViewById("works_heading");

  return (
    <Container id="WorksSection" fluid as="section">
      <Container id="works_heading" style={{ minHeight: "20vh" }}>
        <div className="z-2">
          <SectionTitle
            title="Work Experience"
            subTitle="Experiences That Made Me What I am Today"
          />
          <TimelineContainer>{ExperienceJSX}</TimelineContainer>
        </div>
      </Container>
    </Container>
  );
};
export default ExperienceList;
