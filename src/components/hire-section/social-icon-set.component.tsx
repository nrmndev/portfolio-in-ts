import { useAppDispatch } from "../../store/hooks/typedhooks";

import {
  BsFillEnvelopeOpenFill,
  BsFillFileEarmarkArrowDownFill,
  BsLinkedin,
  BsTelephoneInboundFill,
} from "react-icons/bs";
import Button from "../button/button.component";
import { MouseEventType } from "../../interface";

import { StaticMessages } from "../../utils/interfaces/interfaces";
import {
  uiClearMessage,
  uiSetModalActive,
  uiUpdateMessage,
} from "../../store/ui/ui-actions";
import { BUTTON_VARIANT } from "../theme-provider/utilities";

const SocialIconSet = () => {
  const dispatch = useAppDispatch();
  /****** EVENT HANDLING ******/
  /* PASS ON TO PARENT HOC FOR LOGIC */
  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    switch (e.type) {
      case MouseEventType.MOUSE_ENTER:
        dispatch(uiUpdateMessage(item));
        //dispatch(uiActions.setCardBackdrop(true));
        break;
      case MouseEventType.MOUSE_LEAVE:
        //dispatch(uiActions.setCardBackdrop(false));
        //dispatch(uiClearMessage());
        break;
      default:
        break;
    }
  };
  const onClickShowEmailModal = () => {
    dispatch(uiSetModalActive(true));
  };

  return (
    <>
      <Button
        href="./assets/NormanSilvestre_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        variant={BUTTON_VARIANT.icon}
        //onMouseLeave={onMouseEventHandler.bind(null, "")}
        onMouseEnter={onMouseEventHandler.bind(null, StaticMessages.RESUME)}
      >
        <BsFillFileEarmarkArrowDownFill title="Resume download link" />
        <span>
          <small>Download my</small>
          <br /> Resume
        </span>
      </Button>

      <Button
        href="https://www.linkedin.com/in/ngsilvestre"
        target="_blank"
        rel="noreferrer"
        variant={BUTTON_VARIANT.icon}
        //onMouseLeave={onMouseEventHandler.bind(null, "")}
        onMouseEnter={onMouseEventHandler.bind(null, StaticMessages.LINKEDIN)}
      >
        <BsLinkedin />
        <span>
          <small>Check me on</small>
          <br />
          LinkedIn
        </span>
      </Button>

      <Button
        variant={BUTTON_VARIANT.icon}
        onMouseLeave={onMouseEventHandler.bind(null, "")}
        onMouseEnter={onMouseEventHandler.bind(null, StaticMessages.EMAIL)}
        onClick={onClickShowEmailModal}
      >
        <BsFillEnvelopeOpenFill title="Email Link" />
        <span>
          <small>Send me an</small> <br />
          Email
        </span>
      </Button>

      <Button
        className="mr-3 color_white"
        href="tel:0420871015"
        target="_blank"
        rel="noreferrer"
        variant={BUTTON_VARIANT.icon}
        onMouseLeave={onMouseEventHandler.bind(null, "")}
        onMouseEnter={onMouseEventHandler.bind(null, StaticMessages.CALL)}
      >
        <BsTelephoneInboundFill title="Contact Information" />
        <span>
          <small>0420871015</small>
          <br />
          Call Me
        </span>
      </Button>
    </>
  );
};

export default SocialIconSet;
