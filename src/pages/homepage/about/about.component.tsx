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

const AboutSection = () => {
  const isSkillInView = useCheckInViewById("SkillsSection");
  // const overlayRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (isSkillInView) {
  //     overlayRef.current?.classList.add();
  //   }
  // }, [isSkillInView]);
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
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I&apos;m
              not adding motion just to spruce things up, but doing it in ways
              that.
            </Text>
            <GapSeparator size="lg" />
            <Container>
              <Text
                as={TEXT_VARIANTS.H4}
                textTransform={TEXT_TRANSFORM.UPPERCASE}
              >
                Connect With Me
              </Text>
              <Button
                variant={BUTTON_VARIANTS.gradient}
                href="fb.com/norman.silvestre"
              >
                <FiFacebook size={32} />
              </Button>
              <Button
                variant={BUTTON_VARIANTS.gradient}
                href="https://www.linkedin.com/in/ngsilvestre/"
              >
                <FaLinkedin size={32} />
              </Button>
              <Button
                href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
                variant={BUTTON_VARIANTS.gradient}
              >
                <BsFilePdf size={32} />
              </Button>
              <Button
                href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
                variant={BUTTON_VARIANTS.gradient}
              >
                <FaRegEnvelope size={32} />
              </Button>
              <Button
                href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
                variant={BUTTON_VARIANTS.gradient}
              >
                <GoDeviceMobile size={32} />
              </Button>
            </Container>
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
