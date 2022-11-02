import { useAppDispatch } from "../store/hooks/typedhooks";
import { uiSetModalActive } from "../store/ui/ui-actions";

import { BsFilePdf } from "react-icons/bs";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import Button, { BUTTON_VARIANTS } from "../components/button/button.component";
import Container from "../components/containers/container.component";
import Text, {
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../components/typography/text.component";

const SocialIconsList = () => {
  const dispatch = useAppDispatch();
  const onClickShowEmailModal = () => {
    dispatch(uiSetModalActive(true));
  };
  return (
    <Container className="ph-0" bg="none">
      <Text as={TEXT_VARIANTS.H4} textTransform={TEXT_TRANSFORM.UPPERCASE}>
        Connect With Me
      </Text>

      <Button
        variant={BUTTON_VARIANTS.gradient}
        href="fb.com/norman.silvestre"
        size="md"
      >
        <FiFacebook size={32} />
      </Button>
      <Button
        variant={BUTTON_VARIANTS.gradient}
        href="https://www.linkedin.com/in/ngsilvestre/"
        size="md"
      >
        <FaLinkedin size={32} />
      </Button>
      <Button
        href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
        variant={BUTTON_VARIANTS.gradient}
        size="md"
      >
        <BsFilePdf size={32} />
      </Button>
      <Button
        variant={BUTTON_VARIANTS.gradient}
        onClick={onClickShowEmailModal}
        size="md"
      >
        <FaRegEnvelope size={32} />
      </Button>
      <Button
        href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
        variant={BUTTON_VARIANTS.gradient}
        size="md"
      >
        <GoDeviceMobile size={32} />
      </Button>
    </Container>
  );
};

export default SocialIconsList;
