import Badge from "../../components/badge/badge.component";
import Button from "../../components/button/button.component";
import Container from "../../components/containers/container.component";

import useInput from "../../components/form/useInput";
//import { isNotEmpty } from "../../components/form/validation-helper";

const Revamp = () => {
  const {
    state: username,
    isValid: isUserNameValid,
    Component: userNameInput,
  } = useInput({
    type: "email",
    label: "Email",
    errorLabel: "Please enter valid email",
    id: "inputUsername",
    block: true,
  });

  const {
    state: password,
    isValid: isPasswordValid,
    Component: passwordInput,
  } = useInput({
    type: "password",
    label: "Password",
    errorLabel: "Please enter valid password",
    id: "inputPassword",
    block: true,
  });
  //const ButtonRef = useRef<HTMLButtonElement>(null);
  const onSubmitHandler = () => {
    if (isPasswordValid && isUserNameValid) {
      alert("valid");
      console.log({ username, password });
    }
  };

  return (
    <Container style={{ paddingTop: "8rem" }}>
      <Badge icon={<span>&#129170;</span>} title="some title" color="red" />
      {userNameInput}
      {passwordInput}
      <Button type="button" block onClick={onSubmitHandler}>
        Submit
      </Button>
    </Container>
  );
};

export default Revamp;
