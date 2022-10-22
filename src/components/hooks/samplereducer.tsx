import React, { useEffect, useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCheck, BsX } from "react-icons/bs";

interface Action {
  type: "USER_INPUT_EMAIL" | "USER_INPUT_PASSWORD";
  email: {
    value: string;
    valid?: boolean;
  };
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
  valid?: boolean;
}

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

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "USER_INPUT_EMAIL":
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
    case "USER_INPUT_PASSWORD":
      const hasLowerCase =
        action.password.value.match(/[a-z]/g) != null ? true : false;
      const hasUpperCase =
        action.password.value.match(/[A-Z]/g) != null ? true : false;
      const hasNonAlphaNumeric =
        action.password.value.match(/[^a-zA-Z\d\s:]/g) != null ? true : false;
      const hasLengthValid = action.password.value.length > 8 ? true : false;
      const hasNumbers =
        action.password.value.match(/[0-9]/g) != null ? true : false;
      return {
        ...state,
        password: {
          value: action.password.value,
          validCriteria: {
            hasLowerCase:
              action.password.value.match(/[a-z]/g) != null ? true : false,
            hasUpperCase:
              action.password.value.match(/[A-Z]/g) != null ? true : false,
            hasNonAlphaNumeric:
              action.password.value.match(/[^a-zA-Z\d\s:]/g) != null
                ? true
                : false,
            hasLengthValid: action.password.value.length > 8 ? true : false,
            hasNumbers:
              action.password.value.match(/[0-9]/g) != null ? true : false,
          },
          valid:
            hasLowerCase &&
            hasUpperCase &&
            hasNonAlphaNumeric &&
            hasLengthValid &&
            hasNumbers,
        },
        valid: state.email.valid && state.password.valid,
      };
    default:
      return InitialValue;
  }
};
const InputValidate = () => {
  const [state, dispatch] = useReducer(reducer, InitialValue);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "USER_INPUT_EMAIL",
      email: { value: e.currentTarget.value },
      password: state.password,
    });
    console.log(state);
  };

  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "USER_INPUT_PASSWORD",
      email: state.email,
      password: { value: e.currentTarget.value },
    });
    console.log(state);
  };
  useEffect(() => {
    console.log(state);
  });

  let passwordHelperHTML = <></>;
  if (state.password) {
    passwordHelperHTML = (
      <ul>
        <li>
          <span
            className={
              !state.password.validCriteria.hasLowerCase
                ? "text-danger"
                : "text-success"
            }
          >
            {state.password.validCriteria.hasLowerCase ? <BsCheck /> : <BsX />}
            atleast 1 lowercase{" "}
          </span>
        </li>
        <li>
          <span
            className={
              !state.password.validCriteria.hasUpperCase
                ? "text-danger"
                : "text-success"
            }
          >
            {state.password.validCriteria.hasUpperCase ? <BsCheck /> : <BsX />}
            atleast 1 uppercase{" "}
          </span>
        </li>
        <li>
          <span
            className={
              !state.password.validCriteria.hasNumbers
                ? "text-danger"
                : "text-success"
            }
          >
            {state.password.validCriteria.hasNumbers ? <BsCheck /> : <BsX />}
            atleast 1 numeric
          </span>
        </li>
        <li>
          <span
            className={
              !state.password.validCriteria.hasNonAlphaNumeric
                ? "text-danger"
                : "text-success"
            }
          >
            {" "}
            {state.password.validCriteria.hasNonAlphaNumeric ? (
              <BsCheck />
            ) : (
              <BsX />
            )}
            atleast 1 non-alpha numeric
          </span>
        </li>
        <li>
          <span
            className={
              !state.password.validCriteria.hasLengthValid
                ? "text-danger"
                : "text-success"
            }
          >
            {state.password.validCriteria.hasLengthValid ? (
              <BsCheck />
            ) : (
              <BsX />
            )}
            atleast 8 character length
          </span>
        </li>
      </ul>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="pt-5 pb-5 text-center">
          {state.email.valid && (
            <p>{state.email.value} is valid email address</p>
          )}
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={state.email.value}
          />

          <input
            type="password"
            name="password"
            onChange={onInputChangeHandler}
            value={state.password.value}
          />
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

export default InputValidate;

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
