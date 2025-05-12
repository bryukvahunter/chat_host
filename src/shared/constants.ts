import type { stringValues } from "./ts_types/for_constants";

const ERRORS = {
  ELEMENT_NOT_FOUND: "templateElement not found",
  INVALID_STRUCTURE: "Invalid template structure",
};

const TIME_FORMAT: stringValues = {
  HOURS_MINUTES: "HH:mm",
};

const SELECTOR: stringValues = {
  HIDE_SEND_BUTTON: "hide-send-button",
  MY_MESSAGE: "my-message",
  OTHERS_MESSAGE: "message-from-anybody",
  TEMPLATE_MESSAGE_TEXT: ".message-text",
  TEMPLATE_MESSAGE_TIME: ".message-sending-time",
  TEMPLATE_MESSAGE_BOX: ".message",
};

const EVENTS: stringValues = {
  KEYDOWN: "keydown",
  INPUT: "input",
  SUBMIT: "submit",
  CLICK: "click",
  CHANGE: "change",
};

const ESCAPE = "Escape";

const COOKIE_KEY: stringValues = {
  CHAT_TOKEN: "Strada_chat_token",
};

const EMPTY_STRING = "";

export { ERRORS, TIME_FORMAT, SELECTOR, COOKIE_KEY, EMPTY_STRING, EVENTS, ESCAPE };
