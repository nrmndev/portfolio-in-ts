import { Row, Col } from "react-bootstrap";
import SectionTitle, {
  TITLE_VARIANTS,
} from "../section-titles/section-titles.components";
import Container, {
  CONTAINER_JUSTIFY,
} from "../containers/container.component";
import SocialIconSet from "./social-icon-set.component";
import ContainerBoxed from "../containers/container-boxed.component";
import FormPlayGround from "../../pages/component-playground-page/form-playground";
import GapSeparator, { SEPARATOR_VARIANTS } from "../gap/gap.components";
import Card, { CARD_VARIANTS } from "../card/card.component";
import Image, { IMAGE_BORDER_SIZE } from "../image/image.component";
import SocialIconsList from "../../social-icons/social-icons.component";
import FlexChildContainer from "../containers/flex-child-container.component";
import Text, {
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../typography/text.component";

const HireSection = () => {
  return (
    <Container id="HireMeSection" fluid>
      <Container>
        <SectionTitle
          title="I'm looking for a job"
          subTitle="Get in Touch"
          titleVariant={TITLE_VARIANTS.PRIMARY}
          subTitleVariant={TITLE_VARIANTS.BACKGROUNDCLIP}
        />
        <GapSeparator size="sm" variant={SEPARATOR_VARIANTS.LINE} />
        <Container flex childFlexBasis="49%" bg="none">
          <FlexChildContainer flexBasis="40%">
            <Card variant={CARD_VARIANTS.WITHSHADOW} animateOnHover={false}>
              <Image
                width={500}
                height={300}
                src={`${process.env.REACT_APP_ASSET_URL}/images/portfolio_colfax360.png`}
                objectFit
                borderSize={IMAGE_BORDER_SIZE.SM}
                withWrapper
              />
              <GapSeparator size="sm" />
              <Text as={TEXT_VARIANTS.H3}>Norman Silvestre</Text>
              <Text
                as={TEXT_VARIANTS.P}
                textTransform={TEXT_TRANSFORM.UPPERCASE}
              >
                Front End Developer
              </Text>
              <Text as={TEXT_VARIANTS.P}>
                I am available for freelance, causal, or full time work. You can
                reach me at the links provided below, or you can leave me a
                message via email.
              </Text>
              <SocialIconsList />
            </Card>
          </FlexChildContainer>
          <FlexChildContainer flexBasis="58%">
            <FormPlayGround />
          </FlexChildContainer>
        </Container>
      </Container>
    </Container>
  );
};

export default HireSection;
