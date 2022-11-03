import React, { useEffect, useReducer } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import usePasswordHelperHTML from "../../../components/hooks/usePasswordHelper"; //checkPasswordStrength,
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";

const exampleCode = `
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
              /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/
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

`.trim();

const exampleCode2 = `
import { BsCheck, BsX } from "react-icons/bs";

type Props = {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumbers: boolean;
  hasNonAlphaNumeric: boolean;
  hasLengthValid: boolean;
  valid: boolean;
};

const usePasswordHelperHTML = (props: Props) => {
  return !props.valid ? (
    <>
      <ul className="p-0">
        <li>
          <span className={props.hasLowerCase ? "text-success" : "text-danger"}>
            {props.hasLowerCase ? <BsCheck /> : <BsX />} Atleast 1 lowercase
          </span>
        </li>
        <li>
          <span className={props.hasUpperCase ? "text-success" : "text-danger"}>
            {props.hasUpperCase ? <BsCheck /> : <BsX />} Atleast 1 uppercase
          </span>
        </li>
        <li>
          <span className={props.hasNumbers ? "text-success" : "text-danger"}>
            {props.hasNumbers ? <BsCheck /> : <BsX />} Atleast 1 numeric
          </span>
        </li>
        <li>
          <span
            className={
              props.hasNonAlphaNumeric ? "text-success" : "text-danger"
            }
          >
            {props.hasNonAlphaNumeric ? <BsCheck /> : <BsX />} Atleast 1
            non-alpha numeric
          </span>
        </li>
        <li>
          <span
            className={props.hasLengthValid ? "text-success" : "text-danger"}
          >
            {props.hasLengthValid ? <BsCheck /> : <BsX />} Atleast 8 character
            length
          </span>
        </li>
      </ul>
      <p className="d-block">Please input a strong password</p>
    </>
  ) : (
    <p className="d-block text-success">
      Nice! what a strong password you got there
    </p>
  );
};

export const checkPasswordStrength = (value: string) => {
  const hasLowerCase = value.match(/[a-z]/g) != null ? true : false;
  const hasUpperCase = value.match(/[A-Z]/g) != null ? true : false;
  const hasNonAlphaNumeric =
    value.match(/[^a-zA-Z\\d\\s:]/g) != null ? true : false;
  const hasLengthValid = value.length > 8 ? true : false;
  const hasNumbers = value.match(/[0-9]/g) != null ? true : false;
  const valid =
    hasLowerCase &&
    hasUpperCase &&
    hasNonAlphaNumeric &&
    hasLengthValid &&
    hasNumbers;
  return {
    validCriteria: {
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasNonAlphaNumeric: hasNonAlphaNumeric,
      hasLengthValid: hasLengthValid,
      hasNumbers: hasNumbers,
    },
    valid: valid,
  };
};

export default usePasswordHelperHTML;

`.trim();
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
  valid: boolean;
};

//const InitialValue = {} as State;
const InitialValue = {
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
  valid: false,
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.USER_INPUT_EMAIL:
      return state;
    // return {
    //   ...state,
    //   email: {
    //     value: action.email.value,
    //     valid:
    //       action.email.value.match(
    //         /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    //       ) != null
    //         ? true
    //         : false,
    //   },
    // };

    case ActionType.USER_INPUT_PASSWORD:
      // if (action.password.value) {
      //   const { validCriteria, valid } = checkPasswordStrength(
      //     action.password.value
      //   );
      //   return {
      //     ...state,
      //     password: {
      //       value: action.password.value,
      //       validCriteria,
      //       valid,
      //     },
      //   };
      // }
      // break;
      return state;
    default:
      return state;
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

  const passwordHelperHTML = usePasswordHelperHTML({
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
    <>
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
              <OverlayTrigger
                trigger="focus"
                placement="right"
                overlay={popover}
              >
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
      <Container>
        <h2>Custom Form Validation Hook with Utils</h2>
        <hr />
        <p>
          <i>Detailed explanation to follow</i>
        </p>

        <p>Sample Component</p>
        <RenderCode code={exampleCode} language="jsx" />

        <p>Input Validation Custom Hook</p>
        <RenderCode code={exampleCode2} language="jsx" />
      </Container>
    </>
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
