import Cookies from "js-cookie";
import { UI_ELEMENTS } from "../shared/ui_elements";
import { SELECTOR, COOKIE_KEY, EMPTY_STRING, ESCAPE } from "../shared/constants";
import { uiState } from "../shared/states";
import { closeAllPopups } from "../popups/popup_utilities";
import { logInToChat } from "./data_processing";
import {
  receiveTokenByEmail,
  changeNameRequest,
  requestMyDetails,
  checkIsValidToken,
} from "../api/requests";

function sendButtonStateHandle() {
  console.log(uiState.canSend);
  if (UI_ELEMENTS.INPUT_MESSAGE_TEXT?.value.trim() !== EMPTY_STRING) {
    UI_ELEMENTS.SEND_MESSAGE_BUTTON?.classList.remove(SELECTOR.HIDE_SEND_BUTTON);
    uiState.canSend = true;
  }
  if (UI_ELEMENTS.INPUT_MESSAGE_TEXT?.value.trim() === EMPTY_STRING) {
    UI_ELEMENTS.SEND_MESSAGE_BUTTON?.classList.add(SELECTOR.HIDE_SEND_BUTTON);
    uiState.canSend = false;
  }
}

function sendEmailToRegHandle(event: Event) {
  event.preventDefault();
  const input = UI_ELEMENTS.POPUP_EMAIL_INPUT;
  if (!input) return;

  receiveTokenByEmail(input.value);
  const form = event.target as HTMLFormElement;
  form.reset();
}

async function confirmCodeHandle(event: Event) {
  event.preventDefault();
  const input = UI_ELEMENTS.POPUP_CONFIRM_CODE_INPUT;
  if (!input) return;

  if (await checkIsValidToken(input.value)) {
    Cookies.set(COOKIE_KEY.CHAT_TOKEN, input.value);
    closeAllPopups();
    logInToChat();
  }
  const form = event.target as HTMLFormElement;
  form.reset();
}

function changeNameInChatHandle(event: Event) {
  event.preventDefault();
  const input = UI_ELEMENTS.POPUP_SETTINGS_INPUT_NAME;
  if (!input) return;

  changeNameRequest(input.value);
  requestMyDetails();
  const form = event.target as HTMLFormElement;
  form.reset();
}

function authorizationWindowClosingHandler(event: Event) {
  const correctEventType = event as KeyboardEvent;
  if (correctEventType.key === ESCAPE && !uiState.isAuthorized) {
    event.preventDefault();
    location.reload();
  }
}

function scrollDownButtonHandle() {
  const chatWindow = UI_ELEMENTS.CHAT_WINDOW;
  if (!chatWindow) return;

  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function exitChatHandle() {
  Cookies.remove(COOKIE_KEY.CHAT_TOKEN);
  location.reload();
}

export {
  sendButtonStateHandle,
  sendEmailToRegHandle,
  confirmCodeHandle,
  changeNameInChatHandle,
  authorizationWindowClosingHandler,
  scrollDownButtonHandle,
  exitChatHandle,
};
