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

export default usePasswordHelperHTML;
