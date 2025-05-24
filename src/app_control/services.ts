import { sendFormUi } from "../components/send_message_form/ui";
import { popupUi } from "../components/popup_windows/ui";
import { registrationUi } from "../components/registration/ui";
import { confirmRegUi } from "../components/confirm_reg/ui";
import { chatWindowUi } from "../components/chat_window/ui";
import { exitAppUi } from "../components/exit_app/ui";
import { EVENTS } from "../shared/constants";
import { handleRegWindowClosing, handleSendEmailToReg } from "../components/registration/handlers";
import { handleSendMessage, handleSendButtonState } from "../components/send_message_form/handlers";
import { handleCloseOnBackDropClick } from "../components/popup_windows/handlers";
import { handleScrollUpRenderMessage } from "../components/chat_window/handlers";
import { get } from "../api/requests";
import { API_URL } from "../api/api_constants";
import { checkIsToken } from "../shared/helpers";
import { COOKIE_KEY } from "../shared/constants";
import Cookies from "js-cookie";
import { addMessageFromServer } from "../components/chat_window/virtualiz_tools";
import { emailState } from "./states";
import { socket } from "./web_socket_infra";
import {
  handleConfirmCode,
  handleCloseConfirmWindow,
  handleOpenConfirmWindow,
} from "../components/confirm_reg/handlers";
import { handleScrollDownButton } from "../components/chat_window/handlers";
import { handleExitChat } from "../components/exit_app/handlers";
import { settingsUi } from "../components/settings_menu/ui";
import {
  handleChangeNameInChat,
  handleOpenSettingsMenu,
  handleCloseSettingsMenu,
} from "../components/settings_menu/handlers";
import { removeFromPopupManager } from "../components/popup_windows/tools";

function setListeners() {
  document.addEventListener(EVENTS.KEYDOWN, handleRegWindowClosing);
  sendFormUi.messageTextInput.addEventListener(EVENTS.INPUT, handleSendButtonState);
  registrationUi.emailSubmissionForm.addEventListener(EVENTS.SUBMIT, handleSendEmailToReg);
  sendFormUi.sendInterfaceForm.addEventListener(EVENTS.SUBMIT, handleSendMessage);
  confirmRegUi.confirmForm.addEventListener(EVENTS.SUBMIT, handleConfirmCode);
  settingsUi.changeNameForm.addEventListener(EVENTS.SUBMIT, handleChangeNameInChat);
  popupUi.enterCodeButton.addEventListener(EVENTS.CLICK, handleOpenConfirmWindow);
  popupUi.settings.addEventListener(EVENTS.CLICK, handleCloseOnBackDropClick);
  popupUi.settingsButton.addEventListener(EVENTS.CLICK, handleOpenSettingsMenu);
  popupUi.exitSettingsButton.addEventListener(EVENTS.CLICK, handleCloseSettingsMenu);
  popupUi.confirmBackButton.addEventListener(EVENTS.CLICK, handleCloseConfirmWindow);
  chatWindowUi.scrollDownButton.addEventListener(EVENTS.CLICK, handleScrollDownButton);
  exitAppUi.exitChatButton.addEventListener(EVENTS.CLICK, handleExitChat);
  chatWindowUi.messagesWrapper.addEventListener(EVENTS.SCROLL, handleScrollUpRenderMessage);
}

async function setActualData() {
  const [myDetails, { messages }] = await Promise.all([
    get(API_URL.CHAT_USER_INFO, checkIsToken(Cookies.get(COOKIE_KEY.CHAT_TOKEN))),
    get(API_URL.CHAT_MESSAGE_HISTORY, checkIsToken(Cookies.get(COOKIE_KEY.CHAT_TOKEN))),
  ]);
  addMessageFromServer(messages);
  emailState.currentEmail = myDetails.email;
}

function setWebSocket(url: string, token: string) {
  socket.connect(url, token);
  if (socket.instance?.OPEN) {
    removeFromPopupManager(popupUi.loadWindow);
  }
}

export { setListeners, setActualData, setWebSocket };
