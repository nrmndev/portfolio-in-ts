//import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
import NotFound from "../../../components/error/notfound.component";
import { BsArrowRight } from "react-icons/bs";
import List, { ListItem } from "../../../components/list/list.component";
import Container from "../../../components/containers/container.component";
import CompanyContainer from "./list-item-company.component";
import {
  TimelineContainer,
  TimelineItem,
} from "../../../components/timeline/timeline.component";
import Button from "../../../components/button/button.component";
import Card from "../../../components/card/card.component";
import { ExperienceType } from "../../../store/data/data-types";
import Text from "../../../components/typography/text.component";
import FlexChildContainer from "../../../components/containers/flex-child-container.component";
import GapSeparator from "../../../components/gap/gap.components";
import {
  TEXT_COLOR,
  FONT_SIZE_AS,
  BUTTON_VARIANT,
  TEXT_AS,
  CARD_VARIANT,
  TEXT_TRANSFORM,
  BUTTON_SIZE,
  GAP_SEPARATOR_VARIANT,
  TEXT_ALIGN,
  PADDING,
} from "../../../components/theme-provider/utilities";

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
          <Card variant={CARD_VARIANT.WITHSHADOW} bgGradientOnHover>
            <CompanyContainer data={experience} />

            <hr />
            <Container bg="none">
              {description && (
                <Text as={TEXT_AS.P} label={`About ${company}`}>
                  {description}
                </Text>
              )}
            </Container>
            <Container flex bg="none" gap="1%">
              <FlexChildContainer flexBasis="28%">
                <List>
                  {achievements.map((achievement) => (
                    <ListItem key={achievement}>{achievement}</ListItem>
                  ))}
                </List>
              </FlexChildContainer>
              <FlexChildContainer flexBasis="68%">
                {tasks && (
                  <List>
                    {tasks.map((task) => (
                      <ListItem key={task}>{task}</ListItem>
                    ))}
                  </List>
                )}
              </FlexChildContainer>
            </Container>
            <GapSeparator />
            <Button
              href={workURL}
              size={BUTTON_SIZE.LG}
              className="mt-2"
              variant={BUTTON_VARIANT.gradient}
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
      <Container vPadding={PADDING.MD}>
        <GapSeparator size="sm" variant={GAP_SEPARATOR_VARIANT.LINE} />

        <Text
          as={TEXT_AS.H3}
          textColor={TEXT_COLOR.BACKGROUNDCLIP}
          textAlign={TEXT_ALIGN.CENTER}
          textTransform={TEXT_TRANSFORM.UPPERCASE}
          fontSizeAs={FONT_SIZE_AS.H5}
        >
          Experiences that made who I am today
        </Text>
        <Text
          as={TEXT_AS.H2}
          textAlign={TEXT_ALIGN.CENTER}
          fontSizeAs={FONT_SIZE_AS.H1}
        >
          Work Experience
        </Text>
        <TimelineContainer>{ExperienceJSX}</TimelineContainer>
      </Container>
    </Container>
  );
};
export default ExperienceList;
