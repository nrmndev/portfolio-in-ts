import React from "react";
import { useState } from "react";
import WithLineNumbers from "../../utils/code-highlighter";

const exampleCode = `
const Sample = () => {
  const [validationText, setValidationText] = useState<string>("");
  const [fullname, setFullName] = useState<{
    firstname: string;
    lastname: string;
  }>({ firstname: "", lastname: "" });
  
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length <= 5) {
    }
    const currInput = { [e.currentTarget.name]: e.currentTarget.value };
    console.log(currInput);
    setFullName((prev) => {
      return {
        ...prev,
        ...currInput,
      };
    });
  };

  const onFocusHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.currentTarget.classList.remove("danger");
  };

  const onBlurHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length <= 5) {
      e.currentTarget.classList.add("danger");
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { firstname, lastname } = fullname;
    if (firstname.trim().length <= 5 && lastname.trim().length <= 5) {
      setValidationText("Please input 6 characters or more ");
    } else {
      setValidationText('Input Validated! Welcome \${firstname} \${lastname}');
      const currInput = { firstname: "", lastname: "" };
      setFullName((prev) => (prev = { firstname: "", lastname: "" }));
    }
  };
  return (
    <>
      <p>
        This is an example of action creator for async fetching. You perform
        some side-effects before tapping in to your dispatch action. Because
        store actions must be PURE function so therefore performing sideeffects
      </p>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="lastname" className="control-label">
            First Name:
          </label>{" "}
          <input
            type="text"
            value={fullname.firstname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            name="firstname"
            id="firstname"
          />
        </div>
        <div className="form-group pt-3">
          <label htmlFor="lastname" className="control-label">
            Last Name:
          </label>{" "}
          <input
            type="text"
            value={fullname.lastname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            name="lastname"
            id="lastname"
          />
        </div>
        <div className="form-group pt-3">
          <p>{validationText && validationText}</p>
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </>
  );
};
`.trim();

const UseEffectSample = () => {
  const [validationText, setValidationText] = useState<string>("");
  const [fullname, setFullName] = useState<{
    firstname: string;
    lastname: string;
  }>({ firstname: "", lastname: "" });

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    // if (e.currentTarget.value.trim().length <= 5) {
    // }
    const currInput = { [e.currentTarget.name]: e.currentTarget.value };

    setFullName((prev) => {
      return {
        ...prev,
        ...currInput,
      };
    });
  };

  const onFocusHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.currentTarget.classList.remove("danger");
  };

  const onBlurHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length <= 5) {
      e.currentTarget.classList.add("danger");
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { firstname, lastname } = fullname;
    if (firstname.trim().length <= 5 && lastname.trim().length <= 5) {
      setValidationText("Please input 6 characters or more ");
    } else {
      setValidationText(`Input Validated! Welcome ${firstname} ${lastname}`);
      // const currInput = { firstname: "", lastname: "" };
      setFullName({ firstname: "", lastname: "" });
    }
  };
  return (
    <>
      <p>Most widely used Form Events - onChange, onBlur, onSubmit, onFocus</p>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="lastname" className="control-label">
            First Name:
          </label>{" "}
          <input
            type="text"
            value={fullname.firstname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            name="firstname"
            id="firstname"
          />
        </div>
        <div className="form-group pt-3">
          <label htmlFor="lastname" className="control-label">
            Last Name:
          </label>{" "}
          <input
            type="text"
            value={fullname.lastname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            name="lastname"
            id="lastname"
          />
        </div>
        <div className="form-group pt-3">
          <p>{validationText && validationText}</p>
          <button type="submit">Submit Application</button>
        </div>
      </form>

      <WithLineNumbers code={exampleCode} language="jsx" />
    </>
  );
};

export default UseEffectSample;
