import Container from "../../../components/containers/container.component";
import FlexChildContainer from "../../../components/containers/flex-child-container.component";
import ThumbnailWrapper from "../../../components/containers/thumbnail-wrapper.component";
import Image from "../../../components/image/image.component";
import Text from "../../../components/typography/text.component";
import TopBannerForm from "./typewriter";

import SocialIconsList from "../../../components/social-icons/social-icons.component";
import {
  ALIGN_ITEMS,
  FONT_SIZE_AS,
  PADDING,
  TEXT_AS,
  TEXT_TRANSFORM,
} from "../../../components/theme-provider/utilities";

// import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
// import { useAppDispatch } from "../../../store/hooks/typedhooks";
// import { uiSetModalActive } from "../../../store/ui/ui-actions";

const AboutSection = () => {
  return (
    <>
      <Container
        id="AboutMeSection"
        as="section"
        fluid
        fixed
        padding={PADDING.LG}
      >
        <Container flex lg={6} alignItems={ALIGN_ITEMS.CENTER}>
          <Container>
            <Text as={TEXT_AS.P} textTransform={TEXT_TRANSFORM.UPPERCASE}>
              Welcome to my world
            </Text>
            <Text as={TEXT_AS.H1}>Hi, I&apos;m Norman</Text>
            <TopBannerForm />
            <hr />
            <Text as={TEXT_AS.P} fontSizeAs={FONT_SIZE_AS.H5}>
              I work well as both part of team and independently, and I am
              seeking for a position as a Frontend Developer with ReactJS where
              I can impart my skills and deliver effective solutions across
              software development life cycles.
            </Text>
            <SocialIconsList />
          </Container>
          <Container>
            <ThumbnailWrapper>
              <Image
                src={`${process.env.REACT_APP_ASSET_URL}/images/about_image.png`}
                width={700}
                height={960}
                objectFit
                style={{ background: "none" }}
              />
            </ThumbnailWrapper>
          </Container>
        </Container>
      </Container>
      <div
        className="fixed-overlay"
        style={{
          backdropFilter: `blur(5px)`,
          WebkitBackdropFilter: `blur(5px)`,
        }}
      ></div>
    </>
  );
};

export default AboutSection;
