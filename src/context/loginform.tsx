import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

type LoginFormProps = {
  onSubmit: () => void;
};
const LoginForm = (props: LoginFormProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };
  return (
    <Container>
      <Row className="pt-5 pb-5">
        <Col md={{ span: 6, offset: 3 }} className="pt-5 pb-5 card-m0">
          <h3 className="color_2 text-center">Login</h3>
          <p className="color_1 text-center">
            This is just a dummy, use random username / password
          </p>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="text"
                id="text"
                type="text"
                onChange={onUserNameChangeHandler}
                value={userName}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChangeHandler}
                value={password}
              />
            </Form.Group>
            <button className="button button__bordered button__shadowed-light">
              Login
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
