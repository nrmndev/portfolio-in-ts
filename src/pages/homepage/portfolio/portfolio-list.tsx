import Container from "../../../components/containers/container.component";
import NotFound from "../../../components/error/notfound.component";
import { PortfolioType } from "../../../store/data/data-types";
import PortfolioListItem from "./portfolio-list-item";
import GapSeparator from "../../../components/gap/gap.components";
import {
  TEXT_COLOR,
  FONT_SIZE_AS,
  H_PADDING,
  TEXT_AS,
  TEXT_TRANSFORM,
  GAP_SEPARATOR_VARIANT,
  TEXT_ALIGN,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";

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
    <Container id="PortfolioSection" as="section" fluid hPadding={H_PADDING.LG}>
      <Container hPadding={H_PADDING.LG}>
        <GapSeparator size="lg" variant={GAP_SEPARATOR_VARIANT.LINE} />
        <Text
          as={TEXT_AS.H3}
          textColor={TEXT_COLOR.BACKGROUNDCLIP}
          textAlign={TEXT_ALIGN.CENTER}
          textTransform={TEXT_TRANSFORM.UPPERCASE}
          fontSizeAs={FONT_SIZE_AS.H5}
        >
          Visit my portfolio and keep your feedback
        </Text>
        <Text
          as={TEXT_AS.H2}
          textAlign={TEXT_ALIGN.CENTER}
          fontSizeAs={FONT_SIZE_AS.H1}
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
