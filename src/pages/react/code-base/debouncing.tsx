import { useCallback, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
const CodebaseDebouncing = () => {
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const onChangePasswordHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredPassword(e.currentTarget.value);
      setIsTouched(true);
    },
    []
  );
  const onFocusHandler = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setEnteredPassword(e.currentTarget.value);
    },
    []
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      //console.log("Checking form validity");
      setPasswordIsValid(enteredPassword.trim().length > 5);
    }, 500);

    return () => {
      clearTimeout(timeout);
      //console.log("Clean up");
    };
  }, [enteredPassword]);
  return (
    <>
      <h3>Debouncing</h3>
      <hr />
      <p>
        In a typical input validation scenario, validation is fired every
        keystroke and it means that it will send a lot of request.
      </p>
      <p>
        But with a technique called &apos;Debouncing&apos;, we want to make sure
        that were not doing something on every keystroke but once the user made
        a pause during or after typing. Here, the validation string fires after
        .5seconds pause.
      </p>
      <p>
        The timeout will continue to reset as long as the user is not done
        typing. So if a user is constantly typing within .5s frame for example
        50characters, you&apos;re not checking the validity 50times but 1time
        only after the user pause typing or done typing
      </p>

      <Container>
        <Row>
          <Col>
            <p className="color_1">
              Try three scenarios: <br />
              - Input password length less than 5<br />
              - Input password length greater than 5<br />- Input password as
              many as you can within .5 seconds interval
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="email"
                id="email"
                onChange={onChangePasswordHandler}
                value={enteredPassword}
                onFocus={onFocusHandler}
                autoComplete="off"
              />
              {!isTouched && "Please input password"}
              {isTouched && passwordIsValid && "Length > 6, password is valid"}
              {isTouched &&
                !passwordIsValid &&
                "Length < 6, password is invalid"}
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default CodebaseDebouncing;
