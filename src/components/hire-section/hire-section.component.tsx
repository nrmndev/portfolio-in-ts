import SectionTitle, {
  TITLE_VARIANT,
} from "../section-titles/section-titles.components";
import Container from "../containers/container.component";

import GapSeparator from "../gap/gap.components";
import Card from "../card/card.component";
import Image from "../image/image.component";
import SocialIconsList from "../social-icons/social-icons.component";
import FlexChildContainer from "../containers/flex-child-container.component";
import Text from "../typography/text.component";
import {
  H_PADDING,
  TEXT_AS,
  CARD_VARIANT,
  TEXT_TRANSFORM,
  BORDER_WIDTH,
} from "../theme-provider/utilities";
import ContactForm from "../contact-form/form.component";

const HireSection = () => {
  return (
    <Container id="HireMeSection" fluid hPadding={H_PADDING.LG}>
      <Container>
        <SectionTitle
          title="I'm looking for a job"
          subTitle="Get in Touch"
          titleVariant={TITLE_VARIANT.PRIMARY}
          subTitleVariant={TITLE_VARIANT.BACKGROUNDCLIP}
        />

        <Container flex childFlexBasis="49%" bg="none">
          <FlexChildContainer flexBasis="40%">
            <Card variant={CARD_VARIANT.WITHSHADOW} animateOnHover={false}>
              <Image
                width={500}
                height={300}
                src={`${process.env.REACT_APP_ASSET_URL}/images/portfolio_colfax360.png`}
                objectFit
                borderWidth={BORDER_WIDTH.SM}
                withWrapper
              />
              <GapSeparator size="sm" />
              <Text as={TEXT_AS.H3}>Norman Silvestre</Text>
              <Text as={TEXT_AS.P} textTransform={TEXT_TRANSFORM.UPPERCASE}>
                Front End Developer
              </Text>
              <Text as={TEXT_AS.P}>
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
