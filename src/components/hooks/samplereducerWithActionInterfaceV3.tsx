import React, { useEffect, useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import usePasswordHelperHTML from "./usePasswordHelper";

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

const checkPasswordStrength = (value: string) => {
  const hasLowerCase = value.match(/[a-z]/g) != null ? true : false;
  const hasUpperCase = value.match(/[A-Z]/g) != null ? true : false;
  const hasNonAlphaNumeric =
    value.match(/[^a-zA-Z\d\s:]/g) != null ? true : false;
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
        valid: state.email.valid && state.password.valid,
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
        valid: state.email.valid && state.password.valid,
      };
    default:
      return InitialValue;
  }
};
const InputValidateWithInterfaceV3 = () => {
  const [state, dispatch] = useReducer(reducer, InitialValue);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_EMAIL,
      email: { value: e.currentTarget.value },
    });
  };

  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_PASSWORD,
      password: { value: e.currentTarget.value },
    });
  };

  useEffect(() => {
    console.log(state.password.validCriteria);
  });

  let passwordHelperHTML = usePasswordHelperHTML({
    ...state.password.validCriteria,
    valid: state.password.valid,
  });

  return (
    <Container>
      <Row>
        <Col className="pt-5 pb-5 text-center">
          {state.email.valid && (
            <p>{state.email.value} is valid email address</p>
          )}
          <div className="form-control">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChangeHandler}
              value={state.email.value}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onInputChangeHandler}
              value={state.password.value}
            />
          </div>
          {state.password.valid && (
            <p>{state.password.value} is valid password</p>
          )}
          {passwordHelperHTML}
          <button disabled={true}>Submit</button>
        </Col>
      </Row>
    </Container>
  );
};

export default InputValidateWithInterfaceV3;

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
