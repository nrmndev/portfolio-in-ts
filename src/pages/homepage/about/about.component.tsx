import { useEffect, useRef } from "react";
import Button, {
  BUTTON_VARIANTS,
} from "../../../components/button/button.component";
import Container from "../../../components/containers/container.component";
import FlexChildContainer from "../../../components/containers/flex-child-container.component";
import ThumbnailWrapper from "../../../components/containers/thumbnail-wrapper.component";
import Image from "../../../components/image/image.component";
import Text, {
  TEXT_SIZE,
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../../../components/typography/text.component";
import TopBannerForm from "./typewriter";
import { FiFacebook } from "react-icons/fi";
import GapSeparator from "../../../components/gap/gap.components";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { BsFilePdf } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import useCheckInViewById from "../../../components/hooks/useCheckInViewById";
import { useAppDispatch } from "../../../store/hooks/typedhooks";
import { uiSetModalActive } from "../../../store/ui/ui-actions";
import SocialIconsList from "../../../social-icons/social-icons.component";

const AboutSection = () => {
  const isSkillInView = useCheckInViewById("SkillsSection");
  // const overlayRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (isSkillInView) {
  //     overlayRef.current?.classList.add();
  //   }
  // }, [isSkillInView]);
  const dispatch = useAppDispatch();
  const onClickShowEmailModal = () => {
    dispatch(uiSetModalActive(true));
  };
  return (
    <>
      <Container id="AboutMeSection" as="section" fluid>
        <Container flex className="pt-5 pb-5">
          <FlexChildContainer flexBasis="59%">
            <Text as={TEXT_VARIANTS.P} textTransform={TEXT_TRANSFORM.UPPERCASE}>
              Welcome to my world
            </Text>
            <Text as={TEXT_VARIANTS.H1}>Hi, I&apos;m Norman</Text>
            <TopBannerForm />
            <hr />
            <Text as={TEXT_VARIANTS.P} sizeAs={TEXT_SIZE.H5}>
              I work well as both part of team and independently, and I am
              seeking for a position as a Frontend Developer with ReactJS where
              I can impart my skills and deliver effective solutions across
              software development life cycles.
            </Text>
            <SocialIconsList />
          </FlexChildContainer>
          <FlexChildContainer flexBasis="38%">
            <ThumbnailWrapper>
              <Image
                src={`${process.env.REACT_APP_ASSET_URL}/images/banner-01.png`}
                width={700}
                height={960}
                objectFit
                style={{ background: "none" }}
              />
            </ThumbnailWrapper>
          </FlexChildContainer>
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
