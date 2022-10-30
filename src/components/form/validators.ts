// const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
// const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
// const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
// const VALIDATOR_TYPE_MIN = "MIN";
// const VALIDATOR_TYPE_MAX = "MAX";
// const VALIDATOR_TYPE_EMAIL = "EMAIL";
// const VALIDATOR_TYPE_FILE = "FILE";

export enum VALIDATOR_TYPE {
  REQUIRE = "REQUIRE",
  MINLENGTH = "MINLENGTH",
  MAXLENGTH = "MAXLENGTH",
  MIN = "MIN",
  MAX = "MAX",
  EMAIL = "EMAIL",
  FILE = "FILE",
}

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE.REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE.FILE });
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE.MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE.MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val: number) => ({
  type: VALIDATOR_TYPE.MIN,
  val: val,
});
export const VALIDATOR_MAX = (val: number) => ({
  type: VALIDATOR_TYPE.MAX,
  val: val,
});
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE.EMAIL });

type ValidatorsType = {
  type: VALIDATOR_TYPE;
  val: string | number;
};

export const validate = (value: string, validators: ValidatorsType[]) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE.REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE.MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE.MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE.MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE.MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE.EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
