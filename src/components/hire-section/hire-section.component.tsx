import SectionTitle, {
  TITLE_VARIANTS,
} from "../section-titles/section-titles.components";
import Container from "../containers/container.component";

import GapSeparator from "../gap/gap.components";
import Card, { CARD_VARIANTS } from "../card/card.component";
import Image, { IMAGE_BORDER_SIZE } from "../image/image.component";
import SocialIconsList from "../../social-icons/social-icons.component";
import FlexChildContainer from "../containers/flex-child-container.component";
import Text, {
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../typography/text.component";
import { HORIZONTAL_PADDING } from "../theme-provider/theme-utilities";
import ContactForm from "../contact-form/form.component";

const HireSection = () => {
  return (
    <Container id="HireMeSection" fluid>
      <Container horizontalPadding={HORIZONTAL_PADDING.NONE}>
        <SectionTitle
          title="I'm looking for a job"
          subTitle="Get in Touch"
          titleVariant={TITLE_VARIANTS.PRIMARY}
          subTitleVariant={TITLE_VARIANTS.BACKGROUNDCLIP}
        />

        <Container
          flex
          childFlexBasis="49%"
          bg="none"
          horizontalPadding={HORIZONTAL_PADDING.NONE}
        >
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
            <ContactForm />
          </FlexChildContainer>
        </Container>
      </Container>
    </Container>
  );
};

export default HireSection;
