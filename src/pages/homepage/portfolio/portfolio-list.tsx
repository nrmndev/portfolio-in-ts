import Container from "../../../components/containers/container.component";
import NotFound from "../../../components/error/notfound.component";
import { PortfolioType } from "../../../store/data/data-types";
import PortfolioListItem from "./portfolio-list-item";
import GapSeparator, {
  SEPARATOR_VARIANTS,
} from "../../../components/gap/gap.components";
import {
  FONT_SIZE,
  HORIZONTAL_PADDING,
} from "../../../components/theme-provider/theme-utilities";
import Text, {
  TEXT_COLOR,
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";

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
      <Container horizontalPadding={HORIZONTAL_PADDING.NONE}>
        <GapSeparator size="lg" variant={SEPARATOR_VARIANTS.LINE} />
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
        <Container flex childFlexBasis="31.33%" gap="3%">
          {PortfolioListItemJSX}
        </Container>
      </Container>
    </Container>
  );
};

export default PortfolioList;
{
  /* <Row className="pt-5 text-center">
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
</Row> */
}
