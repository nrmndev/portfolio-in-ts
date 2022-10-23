import { useEffect, useRef, useReducer, useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

enum ActionType {
  USER_INPUT_EMAIL = "USER_INPUT_EMAIL",
  USER_INPUT_NAME = "USER_INPUT_NAME",
  USER_INPUT_MESSAGE = "USER_INPUT_MESSAGE",
  USER_SUBMIT_SUCCESSFULLY = "USER_SUBMIT_SUCCESSFULLY",
}

interface EmailAction {
  type: ActionType.USER_INPUT_EMAIL;
  email: {
    value: string;
    valid?: boolean;
  };
}
interface NameAction {
  type: ActionType.USER_INPUT_NAME;
  name: {
    value: string;
    valid?: boolean;
  };
}
interface MessageAction {
  type: ActionType.USER_INPUT_MESSAGE;
  message: {
    value: string;
    valid?: boolean;
  };
}
interface SubmitAction {
  type: ActionType.USER_SUBMIT_SUCCESSFULLY;
}

type State = {
  email: {
    value: string;
    valid: boolean;
  };
  name: {
    value: string;
    valid: boolean;
  };
  message: {
    value: string;
    valid: boolean;
  };
};

const InitialValue = {
  valid: false,
  email: {
    value: "",
    valid: false,
  },
  name: {
    value: "",
    valid: false,
  },
  message: {
    value: "",
    valid: false,
  },
};
type Action = EmailAction | NameAction | MessageAction | SubmitAction;

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
    case ActionType.USER_INPUT_NAME:
      return {
        ...state,
        name: {
          value: action.name.value,
          valid: action.name.value.trim().length > 0,
        },
      };
    case ActionType.USER_INPUT_MESSAGE:
      return {
        ...state,
        message: {
          value: action.message.value,
          valid: action.message.value.trim().length > 0,
        },
      };
    case ActionType.USER_SUBMIT_SUCCESSFULLY:
      return InitialValue;
    default:
      return InitialValue;
  }
};

const ContactUs = () => {
  const [state, dispatch] = useReducer(reducer, InitialValue);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_EMAIL,
      email: { value: e.target.value },
    });
  };
  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_NAME,
      name: { value: e.target.value },
    });
  };
  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER_INPUT_MESSAGE,
      message: { value: e.target.value },
    });
  };

  const { valid: isEmailValid } = state.email;
  const { valid: isNameValid } = state.name;
  const { valid: isMessageValid } = state.message;
  useEffect(() => {
    setIsFormValid(isEmailValid && isNameValid && isMessageValid);
  }, [isEmailValid, isNameValid, isMessageValid]);

  const form = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      setShowSuccess(true);
      dispatch({
        type: ActionType.USER_SUBMIT_SUCCESSFULLY,
      });
      emailjs
        .sendForm(
          "service_00n4mma",
          "template_um8bcq9",
          e.currentTarget,
          "y-A5oTBqJYSORbCyA"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <h5 className="text__center">Get in touch, email me your concerns</h5>
      <hr />
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Enter Name"
            value={state.name.value}
            onChange={onChangeNameHandler}
            ref={inputRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Email{" "}
            {!state.email.valid && (
              <i>
                <small>(Please enter a valid email)</small>
              </i>
            )}
          </Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter Email"
            value={state.email.value}
            onChange={onChangeEmailHandler}
          />
          <Form.Text className="text-muted">
            I&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter details"
            value={state.message.value}
            onChange={onChangeMessageHandler}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button as="input" type="submit" value="Send" variant="success" />
        </div>
        {showSuccess && (
          <h3 className="color__primary mb-3 mt-3">
            Thank you, I&apos;ll get back to you the soonest!
          </h3>
        )}
      </Form>
    </>
  );
};

export default ContactUs;
