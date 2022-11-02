//import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
import NotFound from "../../../components/error/notfound.component";
import { BsArrowRight } from "react-icons/bs";
import List from "../../../components/list/list.component";
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
import { ExperienceType } from "../../../store/data/data-types";
import Text, {
  TEXT_COLOR,
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
import FlexChildContainer from "../../../components/containers/flex-child-container.component";
import GapSeparator, {
  SEPARATOR_VARIANTS,
} from "../../../components/gap/gap.components";
import {
  FONT_SIZE,
  HORIZONTAL_PADDING,
} from "../../../components/theme-provider/theme-utilities";

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
          <Card variant={CARD_VARIANTS.WITHSHADOW} bgGradientOnHover>
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
                <List listItems={achievements} />
              </FlexChildContainer>
              <FlexChildContainer flexBasis="68%">
                {tasks && <List listItems={tasks} />}
              </FlexChildContainer>
            </Container>
            <GapSeparator />
            <Button
              href={workURL}
              size="lg"
              className="mt-2"
              variant={BUTTON_VARIANTS.gradient}
              block
            >
              {workURLText} <BsArrowRight size={"1em"} />
            </Button>
          </Card>
        </TimelineItem>
      );
    });
  }
  //const isExperienceInView = useCheckInViewById("works_heading");

  return (
    <Container id="WorksSection" fluid as="section">
      <Container horizontalPadding={HORIZONTAL_PADDING.NONE}>
        <GapSeparator size="sm" variant={SEPARATOR_VARIANTS.LINE} />

        <Text
          as={TEXT_VARIANTS.H3}
          textColor={TEXT_COLOR.BACKGROUNDCLIP}
          textAlign="center"
          textTransform={TEXT_TRANSFORM.UPPERCASE}
          fontSizeAs={FONT_SIZE.H5}
        >
          Visit my portfolio and keep your feedback
        </Text>
        <Text
          as={TEXT_VARIANTS.H2}
          textColor={TEXT_COLOR.PRIMARY}
          textAlign="center"
          fontSizeAs={FONT_SIZE.H1}
        >
          My Portfolio
        </Text>
        <TimelineContainer>{ExperienceJSX}</TimelineContainer>
      </Container>
    </Container>
  );
};
export default ExperienceList;
