import { useRef, useState, useEffect } from "react";

//import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import useInput from "../../components/form/useInputReducer";

import Button, {
  BUTTON_VARIANTS,
} from "../../components/button/button.component";
import { INPUT_TYPE } from "../../components/form/input.components";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../components/form/validators";
import GapSeparator from "../../components/gap/gap.components";
import Card from "../../components/card/card.component";
import Text, {
  TEXT_COLOR,
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../../components/typography/text.component";
import Preloader from "../../components/preloader/loading";
import {
  FONT_SIZE,
  HORIZONTAL_PADDING,
} from "../../components/theme-provider/theme-utilities";
import Container from "../../components/containers/container.component";

const FormPlayGround = () => {
  const [isLoading] = useState<boolean>(false);
  const [emailResponse] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {
    isValid: isEmailValid,
    Component: userNameInput,
    onReset: emailReset,
  } = useInput({
    type: "email",
    label: "Email*",
    name: "user_email",
    errorLabel: "Please enter valid email",
    id: "formInputEmail",
    validators: [VALIDATOR_EMAIL()],
  });

  const {
    isValid: isNameValid,
    Component: passwordInput,
    onReset: nameReset,
  } = useInput({
    type: "text",
    label: "Name*",
    name: "user_name",
    errorLabel: "Name cannot be empty",
    id: "formInputName",
    validators: [VALIDATOR_MINLENGTH(1)],
  });

  const {
    isValid: isMessageValid,
    Component: messageInput,
    onReset: messageReset,
  } = useInput({
    label: "Message*",
    errorLabel: "Message cannot be empty",
    id: "formInputMessage",
    name: "message",
    as: INPUT_TYPE.TEXTAREA,
    validators: [VALIDATOR_MINLENGTH(1)],
  });

  //const ButtonRef = useRef<HTMLButtonElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //setIsLoading(true);

    if (isNameValid && isEmailValid && isMessageValid) {
      nameReset();
      emailReset();
      messageReset();
    }

    // emailjs
    //   .sendForm(
    //     "service_00n4mma",
    //     "template_um8bcq9",
    //     e.currentTarget,
    //     "y-A5oTBqJYSORbCyA"
    //   )
    //   .then(
    //     (result: EmailJSResponseStatus) => {
    //       setEmailResponse("Success");
    //     },
    //     (error: EmailJSResponseStatus) => {
    //       setEmailResponse("Error");
    //     }
    //   )
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (buttonRef.current) {
        if (isNameValid && isEmailValid && isMessageValid) {
          buttonRef.current.disabled = false;
        } else {
          buttonRef.current.disabled = true;
        }
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isNameValid, isEmailValid, isMessageValid]);
  return (
    <Container horizontalPadding={HORIZONTAL_PADDING.NONE}>
      <Container horizontalPadding={HORIZONTAL_PADDING.NONE}>
        <Text
          as={TEXT_VARIANTS.H4}
          fontSizeAs={FONT_SIZE.P}
          textAlign="center"
          textTransform={TEXT_TRANSFORM.UPPERCASE}
          textColor={TEXT_COLOR.BACKGROUNDCLIP}
        >
          Ask Me Anything
        </Text>
        <Text
          as={TEXT_VARIANTS.H2}
          fontSizeAs={FONT_SIZE.H1}
          textAlign="center"
        >
          Contact
        </Text>
      </Container>
      <Card animateOnHover={false} raw>
        <form onSubmit={onSubmitHandler}>
          {userNameInput}
          {passwordInput}
          {messageInput}
          <GapSeparator size="md" />
          {isLoading && <Preloader />}
          {emailResponse === "Success" && (
            <Text as={TEXT_VARIANTS.P}>
              Thanks for contacting me, I&apos;ll get back to you the soonest!
            </Text>
          )}
          {emailResponse === "Error" && (
            <Text as={TEXT_VARIANTS.P}>
              Something went wrong, please try again later
            </Text>
          )}
          <Button
            as="button"
            type="submit"
            block
            variant={BUTTON_VARIANTS.gradient}
            size="lg"
            ref={buttonRef}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default FormPlayGround;
