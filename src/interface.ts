// MOUSE EVENTS
export enum MouseEventType {
  MOUSE_ENTER = "mouseenter",
  MOUSE_OUT = "mouseout",
  MOUSE_OVER = "mouseover",
  MOUSE_LEAVE = "mouseleave",
}
export type MouseEventActions = MouseEventType;

enum HTMLEventType {
  ON_CHANGE = "onChange",
  ON_BLUR = "onBlur",
  ON_FOCUS = "onFocus",
}
export type InputActions = HTMLEventType;

// Enum for Message
export enum StaticMessages {
  RESUME = "Click that button to download Norman's Resume!",
  LINKEDIN = "Check out Norman on LinkedIn!",
  EMAIL = "Click that button to email Norman directly!",
  CALL = "Have a quick call with Norman to discuss things!",
  SKILLS = "Check out Norman's skills! You might find something useful!",
  WORK = "Check out the past companies Norman have worked with!",
  TRAINING = "Here's what Norman is currently taking up to, hot skills indeed!",
  CONTACT = "Contact Norman whether you wanna connect or just say hello!",
  BACK_TO_TOP = "Back to top",
  PORTFOLIO = "Check out the projects that I've done",
}
