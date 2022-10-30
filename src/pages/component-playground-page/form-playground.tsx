import { useState } from "react";
import Button, {
  BUTTON_VARIANTS,
} from "../../components/button/button.component";
import Container from "../../components/containers/container.component";

import useInput from "../../components/form/useInputReducer";
import { INPUT_TYPE } from "../../components/form/input.components";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../components/form/validators";
import GapSeparator from "../../components/gap/gap.components";
//import { isNotEmpty } from "../../components/form/validation-helper";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Card, { CARD_VARIANTS } from "../../components/card/card.component";
import Text, {
  TEXT_VARIANTS,
} from "../../components/typography/text.component";
import Preloader from "../../components/preloader/loading";
import SectionTitle, {
  TITLE_VARIANTS,
} from "../../components/section-titles/section-titles.components";

const FormPlayGround = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailResponse, setEmailResponse] = useState<string>("");

  const {
    isValid: isEmailValid,
    Component: userNameInput,
    onReset: emailReset,
  } = useInput({
    type: "email",
    label: "Email*",
    name: "user_email",
    errorLabel: "Please enter valid email",
    id: "inputUsername",
    validators: [VALIDATOR_EMAIL],
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
    id: "inputName",
    validators: [VALIDATOR_MINLENGTH(1)],
  });

  const {
    isValid: isMessageValid,
    Component: messageInput,
    onReset: messageReset,
  } = useInput({
    label: "Message*",
    errorLabel: "Message cannot be empty",
    id: "inputMessage",
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

  return (
    <Container>
      <SectionTitle
        title="Contact"
        subTitle="Ask Me Anything"
        textAlign="left"
        subTitleVariant={TITLE_VARIANTS.BACKGROUNDCLIP}
        className="pb-0"
      />
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
            type="submit"
            block
            variant={BUTTON_VARIANTS.gradient}
            size="lg"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default FormPlayGround;
