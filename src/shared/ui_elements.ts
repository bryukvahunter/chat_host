export const UI_ELEMENTS = {
  CHAT_WINDOW: document.querySelector(".chat-window") as HTMLElement | null,
  MESSAGE_TEMPLATE: document.querySelector("#template") as HTMLTemplateElement | null,

  POPUP_DIALOG_SETTINGS: document.querySelector(
    "#popup-dialog-settings"
  ) as HTMLDialogElement | null,
  POPUP_AUTHORIZATION_WINDOW: document.querySelector(
    "#popup-authorization-window"
  ) as HTMLDialogElement | null,
  POPUP_CONFIRM_AUTHORIZE_WINDOW: document.querySelector(
    "#popup-confirm-authorization-window"
  ) as HTMLDialogElement | null,

  EXIT_CHAT_BUTTON: document.querySelector("#exit-btn") as HTMLButtonElement | null,
  SEND_MESSAGE_BUTTON: document.querySelector(".send-message-button") as HTMLButtonElement | null,
  SETTINGS_CHAT_BUTTON: document.querySelector("#settings-btn") as HTMLButtonElement | null,
  POPUP_EXIT_SETTINGS_BTN: document.querySelector(
    "#close-settings-button"
  ) as HTMLButtonElement | null,
  POPUP_LOGIN_CODE_BTN: document.querySelector(".enter-code-button") as HTMLButtonElement | null,

  INPUT_MESSAGE_TEXT: document.querySelector(".input-message-text") as HTMLInputElement | null,
  POPUP_CONFIRM_CODE_INPUT: document.querySelector(".popup-code-input") as HTMLInputElement | null,
  POPUP_SETTINGS_INPUT_NAME: document.querySelector(".popup-name-input") as HTMLInputElement | null,
  POPUP_EMAIL_INPUT: document.querySelector(".popup-email-input") as HTMLInputElement | null,

  POPUP_CHANGE_NAME_FORM: document.querySelector(
    ".popup-input-name-form"
  ) as HTMLFormElement | null,
  POPUP_EMAIL_SUBMISSION_FORM: document.querySelector(
    ".popup-input-email-form"
  ) as HTMLFormElement | null,
  SEND_INTERFACE_FORM: document.querySelector(
    ".chat-message-sending-interface"
  ) as HTMLFormElement | null,
  POPUP_CONFIRM_FORM: document.querySelector(".popup-input-code-form") as HTMLFormElement | null,
};
