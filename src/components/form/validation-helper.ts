//Check if not empty
//export const isNotEmpty = (value: string) => value.trim() !== "";
export const isNotEmpty = (value: string) => value.trim() !== "";
//Check if is email is valid email
export const isEmail = (value: string) =>
  value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) != null
    ? true
    : false;
//Check if length is greater than @length
export const isLengthGreaterThan = (value: string, length: number) =>
  value.length > length;

/***
 * Password you choose has to meet the following requirements:
 * 1) At least one lowercase alfabetic character.
 * 2) At least one uppercase alfabetic character.
 * 3) At least one numeric character.
 * 4) At least one non alpha-numeric character.
 * 5) It's length has to be greater than 8 characters.
 */

//const paragraph = "the quick brown fox jumps over the lazy dog. it barked.";
type GetConditionsType = {
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumbers: boolean;
  hasNonAlphaNumeric: boolean;
  hasLengthValid: boolean;
};
export const isPasswordStrong = (value: string, getConditions: any) => {
  const reg = {
    lowercase: /[a-z]/g,
    uppercase: /[A-Z]/g,
    numbers: /[0-9]/g,
    nonAlphaNumeric: /[^a-zA-Z\d\s:]/g,
  };
  const hasLowercase = value.match(reg.lowercase) != null ? true : false;
  const hasUppercase = value.match(reg.uppercase) != null ? true : false;
  const hasNumbers = value.match(reg.numbers) != null ? true : false;
  const hasNonAlphaNumeric =
    value.match(reg.nonAlphaNumeric) != null ? true : false;
  const hasLengthValid = value.length > 8 ? true : false;
  getConditions({
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasNonAlphaNumeric,
    hasLengthValid,
  });
  const isPasswordValid =
    hasLowercase &&
    hasUppercase &&
    hasNumbers &&
    hasNonAlphaNumeric &&
    hasLengthValid;
  return isPasswordValid;
};

//console.log(checkInputPassword("123QWEasd!"));
