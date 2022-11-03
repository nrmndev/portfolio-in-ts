import { useAppDispatch } from "../../store/hooks/typedhooks";
import { uiSetModalActive } from "../../store/ui/ui-actions";

import { BsFilePdf } from "react-icons/bs";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import Button from "../button/button.component";
import Container from "../containers/container.component";
import Text from "../typography/text.component";
import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  TEXT_AS,
  TEXT_TRANSFORM,
} from "../theme-provider/utilities";

const SocialIconsList = () => {
  const dispatch = useAppDispatch();
  const onClickShowEmailModal = () => {
    dispatch(uiSetModalActive(true));
  };
  return (
    <Container className="ph-0" bg="none">
      <Text as={TEXT_AS.H4} textTransform={TEXT_TRANSFORM.UPPERCASE}>
        Connect With Me
      </Text>

      <Button
        variant={BUTTON_VARIANT.gradient}
        href="fb.com/norman.silvestre"
        size={BUTTON_SIZE.MD}
      >
        <FiFacebook size={32} />
      </Button>
      <Button
        variant={BUTTON_VARIANT.gradient}
        href="https://www.linkedin.com/in/ngsilvestre/"
        size={BUTTON_SIZE.MD}
      >
        <FaLinkedin size={32} />
      </Button>
      <Button
        href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
        variant={BUTTON_VARIANT.gradient}
        size={BUTTON_SIZE.MD}
      >
        <BsFilePdf size={32} />
      </Button>
      <Button
        variant={BUTTON_VARIANT.gradient}
        onClick={onClickShowEmailModal}
        size={BUTTON_SIZE.MD}
      >
        <FaRegEnvelope size={32} />
      </Button>
      <Button
        href={`${process.env.REACT_APP_ASSET_URL}/NormanSilvestre_Resume.pdf`}
        variant={BUTTON_VARIANT.gradient}
        size={BUTTON_SIZE.MD}
      >
        <GoDeviceMobile size={32} />
      </Button>
    </Container>
  );
};

export default SocialIconsList;
