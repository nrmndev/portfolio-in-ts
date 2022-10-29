import { Col, Row } from "react-bootstrap";
//import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
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
import Card from "../../../components/card/card.component";
import { ExperienceType } from "../../../store/data/data-types";
import Text, {
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
import FlexChildContainer from "../../../components/containers/flex-child-container.component";

type ExperienceProps = {
  data: ExperienceType[];
};

const ExperienceList = ({ data }: ExperienceProps) => {
  let ExperienceJSX: JSX.Element[] | JSX.Element = (
    <NotFound text="No Experiences List Found" />
  );
  if (data.length > 1) {
    ExperienceJSX = data.map((experience: ExperienceType) => {
      const {
        achievements,
        description,
        tasks,
        workURL,
        workURLText,
        id,
        company,
      } = experience;
      return (
        <TimelineItem key={id}>
          <Card>
            <Container
              flex
              bg="none"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <CompanyContainer data={experience} />
            </Container>
            <hr />
            <Container bg="none">
              {description && (
                <Text as={TEXT_VARIANTS.P} label={`About ${company}`}>
                  {description}
                </Text>
              )}
            </Container>
            <Container flex bg="none" gap="1%">
              <FlexChildContainer flexBasis="28%">
                <List
                  listItems={achievements}
                  listTitle="Notable Achievements:"
                />
              </FlexChildContainer>
              <FlexChildContainer flexBasis="68%">
                {tasks && <List listItems={tasks} listTitle="Tasks:" />}
              </FlexChildContainer>
            </Container>

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
  //const isExperienceInView = useCheckInViewById("works_heading");

  return (
    <Container id="WorksSection" fluid as="section">
      <Container id="works_heading" bg="none">
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