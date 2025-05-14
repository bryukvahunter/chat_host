import { uiState, emailState } from "../shared/states";
import { getMessageHistory, requestMyDetails } from "../api/requests";
import { renderChatWindow } from "../shared/render_tools";
import { openAuthorizationWindow } from "../popups/popup_utilities";
import { UI_ELEMENTS } from "../shared/ui_elements";
import { EVENTS, COOKIE_KEY } from "../shared/constants";
import { openWebSocketConnection } from "../websocket/session_utilities";
import { sendMessageTextToServer, setRealTimeRenderHandle } from "./websocket_handles";
import Cookies from "js-cookie";
import {
  closeOnBackDropClickHandle,
  openSettingsMenuHandle,
  openConfirmationWindowHandle,
} from "./popup_handles";
import {
  sendButtonStateHandle,
  sendEmailToRegHandle,
  confirmCodeHandle,
  changeNameInChatHandle,
  authorizationWindowClosingHandler,
  scrollDownButtonHandle,
  exitChatHandle,
} from "./user_action_handles";
import { API_URL } from "../api/api_constants";

let currentSocket: WebSocket | null = null;

async function logInToChat() {
  uiState.isAuthorized = true;
  const [myDetails, { messages }] = await Promise.all([requestMyDetails(), getMessageHistory()]);

  emailState.currentEmail = myDetails.email;
  renderChatWindow(messages);

  const token = Cookies.get(COOKIE_KEY.CHAT_TOKEN);
  if (!token) return;
  currentSocket = openWebSocketConnection(API_URL.CHAT_WEBSOCKET_CONNECT, token);
  setRealTimeRenderHandle();
}

function startAuthorization() {
  uiState.isAuthorized = false;
  openAuthorizationWindow();
}

function setListeners() {
  document.addEventListener(EVENTS.KEYDOWN, authorizationWindowClosingHandler);
  UI_ELEMENTS.INPUT_MESSAGE_TEXT?.addEventListener(EVENTS.INPUT, sendButtonStateHandle);
  UI_ELEMENTS.SEND_INTERFACE_FORM?.addEventListener(EVENTS.SUBMIT, sendMessageTextToServer);
  UI_ELEMENTS.POPUP_EMAIL_SUBMISSION_FORM?.addEventListener(EVENTS.SUBMIT, sendEmailToRegHandle);
  UI_ELEMENTS.POPUP_CONFIRM_AUTHORIZE_WINDOW?.addEventListener(EVENTS.SUBMIT, confirmCodeHandle);
  UI_ELEMENTS.POPUP_CHANGE_NAME_FORM?.addEventListener(EVENTS.SUBMIT, changeNameInChatHandle);
  UI_ELEMENTS.POPUP_DIALOG_SETTINGS?.addEventListener(EVENTS.CLICK, closeOnBackDropClickHandle);
  UI_ELEMENTS.SETTINGS_CHAT_BUTTON?.addEventListener(EVENTS.CLICK, openSettingsMenuHandle);
  UI_ELEMENTS.POPUP_EXIT_SETTINGS_BTN?.addEventListener(EVENTS.CLICK, closeOnBackDropClickHandle);
  UI_ELEMENTS.POPUP_LOGIN_CODE_BTN?.addEventListener(EVENTS.CLICK, openConfirmationWindowHandle);
  UI_ELEMENTS.SCROLL_DOWN_BTN?.addEventListener(EVENTS.CLICK, scrollDownButtonHandle);
  UI_ELEMENTS.EXIT_CHAT_BUTTON?.addEventListener(EVENTS.CLICK, exitChatHandle);
}

export { logInToChat, startAuthorization, setListeners, currentSocket };
