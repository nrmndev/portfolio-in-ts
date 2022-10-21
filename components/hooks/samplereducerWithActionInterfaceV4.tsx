import React, { useEffect, useReducer } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import usePasswordHelperHTML, {
  checkPasswordStrength,
} from "./usePasswordHelper";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";

type Action = EmailAction | PasswordAction;
enum ActionType {
  USER_INPUT_EMAIL = "USER_INPUT_EMAIL",
  USER_INPUT_PASSWORD = "USER_INPUT_PASSWORD",
}

interface EmailAction {
  type: "USER_INPUT_EMAIL";
  email: {
    value: string;
    valid?: boolean;
  };
}
interface PasswordAction {
  type: "USER_INPUT_PASSWORD";
  password: {
    value: string;
    valid?: boolean;
    validCriteria?: {
      hasLowercase: boolean;
      hasUppercase: boolean;
      hasNonAlphaNumeric: boolean;
      hasLengthValid: boolean;
      hasNumbers: boolean;
    };
  };
}

type State = {
  email: {
    value: string;
    valid: boolean;
  };
  password: {
    value: string;
    valid: boolean;
    validCriteria: {
      hasLowerCase: boolean;
      hasUpperCase: boolean;
      hasNonAlphaNumeric: boolean;
      hasLengthValid: boolean;
      hasNumbers: boolean;
    };
  };
};

const InitialValue = {
  valid: false,
  email: {
    value: "",
    valid: false,
  },
  password: {
    value: "",
    valid: false,
    validCriteria: {
      hasLowerCase: false,
      hasUpperCase: false,
      hasNonAlphaNumeric: false,
      hasLengthValid: false,
      hasNumbers: false,
    },
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.USER_INPUT_EMAIL:
      return {
        ...state,
        email: {
          value: action.email.value,
          valid:
            action.email.value.match(
              /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            ) != null
              ? true
              : false,
        },
      };

    case ActionType.USER_INPUT_PASSWORD:
      const { validCriteria, valid } = checkPasswordStrength(
        action.password.value
      );
      return {
        ...state,
        password: {
          value: action.password.value,
          validCriteria,
          valid,
        },
      };
    default:
      return InitialValue;
  }
};
const InputValidateWithInterfaceV4 = () => {
  const [state, dispatch] = useReducer(reducer, InitialValue);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_EMAIL,
      email: { value: e.target.value },
    });
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_PASSWORD,
      password: { value: e.currentTarget.value },
    });
  };

  const { valid: isEmailValid } = state.email;
  const { valid: isPasswordValid } = state.password;
  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  let passwordHelperHTML = usePasswordHelperHTML({
    ...state.password.validCriteria,
    valid: state.password.valid,
  });

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Password Strength Meter</Popover.Header>
      <Popover.Body>{passwordHelperHTML}</Popover.Body>
    </Popover>
  );
  return (
    <Container>
      <Row className="pt-5 pb-5">
        <Col md={{ span: 6, offset: 3 }} className="pt-5 pb-5 card-m0">
          <h3 className="color_2 text-center">Create an account</h3>
          <p className="color_1 text-center">
            This is just a dummy, no account will be created
          </p>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              id="email"
              onChange={onChangeHandler}
              value={state.email.value}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
              <Form.Control
                type="password"
                name="password"
                id="password"
                onChange={onInputChangeHandler}
                value={state.password.value}
              />
            </OverlayTrigger>
          </Form.Group>
          <button
            disabled={!isFormValid}
            className="button button__bordered button__shadowed-light"
          >
            Register
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default InputValidateWithInterfaceV4;

// const passwordHelperHTML = useCallback(() => {
//   return (
//     <ul>
//       <li>
//         <span
//           className={
//             !state.password.validCritera.hasLowerCase
//               ? "text-danger"
//               : "text-success"
//           }
//         >
//           atleast 1 lowercase{" "}
//         </span>
//       </li>
//       <li>
//         <span
//           className={
//             !state.password.validCritera.hasUpperCase
//               ? "text-danger"
//               : "text-success"
//           }
//         >
//           atleast 1 uppercase{" "}
//         </span>
//       </li>
//       <li>
//         <span
//           className={
//             !state.password.validCritera.hasNumbers
//               ? "text-danger"
//               : "text-success"
//           }
//         >
//           atleast 1 numeric
//         </span>
//       </li>
//       <li>
//         <span
//           className={
//             !state.password.validCritera.hasNonAlphaNumeric
//               ? "text-danger"
//               : "text-success"
//           }
//         >
//           atleast 1 non-alpha numeric
//         </span>
//       </li>
//       <li>
//         <span
//           className={
//             !state.password.validCritera.hasLengthValid
//               ? "text-danger"
//               : "text-success"
//           }
//         >
//           atleast 8 character length
//         </span>
//       </li>
//     </ul>
//   );
// }, [state]);
