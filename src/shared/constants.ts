import type { stringValues } from "./types/for_constants";

const ERRORS = {
  ELEMENT_NOT_FOUND: "TemplateElement not found",
  INVALID_STRUCTURE: "Invalid template structure",
  INCORRECT_LENGTH: "Incorrect name length",
  TOKEN_NOT_FOUND: "Token not found",
};

const TIME_FORMAT: stringValues = {
  HOURS_MINUTES: "HH:mm",
};

const SELECTOR: stringValues = {
  HIDE_SEND_BUTTON: "hide-send-button",
  MY_MESSAGE: "my-message",
  OTHERS_MESSAGE: "message-from-anybody",
  TEMPLATE_USER_NAME: ".user-name",
  TEMPLATE_MESSAGE_TEXT: ".message-text",
  TEMPLATE_MESSAGE_TIME: ".message-sending-time",
  TEMPLATE_MESSAGE_BOX: ".message",
  MESSAGE_WRAPPER: ".messages-wrapper",
  DIALOG_HIDDEN: "dialog-hidden",
};

const EVENTS: stringValues = {
  KEYDOWN: "keydown",
  INPUT: "input",
  SUBMIT: "submit",
  CLICK: "click",
  CHANGE: "change",
  SCROLL: "scroll",
  HIDDEN: "hidden",
  CANCEL: "cancel",
};

const SINGLE_NAMES: stringValues = {
  ESCAPE: "Escape",
  EMPTY_STRING: "",
  NULL: "null",
  STRING: "string",
  UNDEFINED: "undefined",
};
const SMOOTH: ScrollBehavior = "smooth";
const COOKIE_KEY: stringValues = {
  CHAT_TOKEN: "Strada_chat_token",
};

const LOAD_MSG_VALUE = {
  CHUNK_SIZE: 20,
  FIRST_STEP: 0,
};

const CLOSE_CODE = 1000;

export {
  ERRORS,
  TIME_FORMAT,
  SELECTOR,
  COOKIE_KEY,
  EVENTS,
  LOAD_MSG_VALUE,
  SINGLE_NAMES,
  SMOOTH,
  CLOSE_CODE,
};
