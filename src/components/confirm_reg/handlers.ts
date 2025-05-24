import { confirmRegUi } from "./ui";
import { closeAllPopups } from "../popup_windows/tools";
import { logInToChat } from "../../app_control/controllers";
import Cookies from "js-cookie";
import { COOKIE_KEY } from "../../shared/constants";
import { get } from "../../api/requests";
import { API_URL } from "../../api/api_constants";
import { openPopup, removeFromPopupManager } from "../popup_windows/tools";
import { popupUi } from "../popup_windows/ui";

async function handleConfirmCode(event: Event) {
  event.preventDefault();
  try {
    await get(API_URL.CHAT_USER_INFO, confirmRegUi.confirmCodeInput.value);
    Cookies.set(COOKIE_KEY.CHAT_TOKEN, confirmRegUi.confirmCodeInput.value);
    closeAllPopups();
    logInToChat();
  } catch (error) {
    alert(error);
  }
  const form = event.target as HTMLFormElement;
  form.reset();
}

function handleOpenConfirmWindow() {
  openPopup(popupUi.confirmation);
  removeFromPopupManager(popupUi.registration);
}

function handleCloseConfirmWindow() {
  removeFromPopupManager(popupUi.confirmation);
  openPopup(popupUi.registration);
}

export { handleConfirmCode, handleCloseConfirmWindow, handleOpenConfirmWindow };
