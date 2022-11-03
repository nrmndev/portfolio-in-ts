import SkillListItem from "./skills-list-item";
import Container from "../../../components/containers/container.component";
import NotFound from "../../../components/error/notfound.component";
import { SkillsType } from "../../../store/data/data-types";
import Text from "../../../components/typography/text.component";
import {
  FONT_SIZE_AS,
  TEXT_COLOR,
  H_PADDING,
  TEXT_AS,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
} from "../../../components/theme-provider/utilities";

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
      <Container hPadding={H_PADDING.LG}>
        <Text
          as={TEXT_AS.H4}
          textColor={TEXT_COLOR.BACKGROUNDCLIP}
          textAlign={TEXT_ALIGN.CENTER}
          textTransform={TEXT_TRANSFORM.UPPERCASE}
          fontSizeAs={FONT_SIZE_AS.H5}
        >
          My experiences as a
        </Text>
        <Text
          as={TEXT_AS.H2}
          textAlign={TEXT_ALIGN.CENTER}
          fontSizeAs={FONT_SIZE_AS.H1}
        >
          Front End Developer
        </Text>
        <Container flex childFlexBasis="31.33%" gap="3%">
          {SkillListItemJSX}
        </Container>
      </Container>
    </Container>
  );
};

export default SkillsList;
{
  /* <Row className="pt-5 text-center">
<Col md={6} className="mt-3 mb-3">
  <Button
    href="http://store.ngsilvestre.com"
    target="_blank"
    rel="noreferrer"
    variant={BUTTON_VARIANT.inverted}
  >
    <span>
      <BsArrowRight size={"2em"} />
      See sample online store
    </span>
  </Button>
</Col>
<Col md={6} className="mt-3 mb-3">
  <Button to="/reactjs" variant={BUTTON_VARIANT.inverted}>
    <span>
      <BsArrowRight size={"2em"} /> View ReactJS Skills Processes
    </span>
  </Button>
</Col>
</Row> */
}
