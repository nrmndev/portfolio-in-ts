import { useState, useRef, useEffect } from "react";
import Button, { BUTTON_VARIANTS } from "../button/button.component";

import useInput from "../form/useInputReducer";
import { INPUT_TYPE } from "../form/input.components";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  // VALIDATOR_COMPARE,
  // VALIDATOR_STRONGPASSWORD,
} from "../form/validators";
import GapSeparator from "../gap/gap.components";

//import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Card from "../card/card.component";
import Text, {
  TEXT_COLOR,
  TEXT_TRANSFORM,
  TEXT_VARIANTS,
} from "../typography/text.component";
import Preloader from "../preloader/loading";

import {
  FONT_SIZE,
  HORIZONTAL_PADDING,
} from "../theme-provider/theme-utilities";
import Container from "../containers/container.component";

const ContactForm = () => {
  const [isLoading] = useState<boolean>(false);
  const [emailResponse] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    isValid: isEmailValid,
    Component: inputEmail,
    onReset: emailReset,
  } = useInput({
    type: "email",
    label: "Email*",
    name: "user_email",
    errorLabel: "Please enter valid email",
    id: "inputEmail",
    validators: [VALIDATOR_EMAIL()],
  });

  const {
    isValid: isNameValid,
    Component: inputName,
    onReset: nameReset,
  } = useInput({
    type: "text",
    label: "Name*",
    name: "user_name",
    errorLabel: "Name cannot be empty",
    id: "inputName",
    validators: [VALIDATOR_MINLENGTH(5)],
  });

  const {
    isValid: isMessageValid,
    Component: inputMessage,
    onReset: messageReset,
  } = useInput({
    label: "Message*",
    errorLabel: "Message cannot be empty",
    id: "inputMessage",
    name: "message",
    as: INPUT_TYPE.TEXTAREA,
    validators: [VALIDATOR_MINLENGTH(5)],
  });
  // const {
  //   value: inputPasswordValue,
  //   isValid: isPasswordValid,
  //   Component: inputPassword,
  //   onReset: passwordReset,
  // } = useInput({
  //   type: "password",
  //   label: "Password*",
  //   errorLabel: "Please enter a strong password",
  //   id: "inputPassword",
  //   name: "password",
  //   as: INPUT_TYPE.INPUT,
  //   validators: [VALIDATOR_STRONGPASSWORD()],
  // });

  // const {
  //   isValid: isConfirmPasswordValid,
  //   Component: inputConfirmPassword,
  //   onReset: confirmPasswordReset,
  // } = useInput({
  //   type: "password",
  //   label: "Confirm Password*",
  //   errorLabel: "Password does not match",
  //   id: "inputConfirmPassword",
  //   name: "confirmPassword",
  //   as: INPUT_TYPE.INPUT,
  //   validators: [VALIDATOR_COMPARE(inputPasswordValue)],
  // });
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
          {inputName}
          {inputEmail}
          {inputMessage}
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
          {/* <button type="submit" ref={buttonRef}>
            Submit
          </button> */}
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

export default ContactForm;
