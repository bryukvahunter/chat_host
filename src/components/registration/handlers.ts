import { registrationUi } from "./ui";
import { SINGLE_NAMES } from "../../shared/constants";
import { uiState } from "../../app_control/states";
import { post } from "../../api/requests";
import { popupUi } from "../popup_windows/ui";
import { openPopup, removeFromPopupManager } from "../popup_windows/tools";
import { API_URL } from "../../api/api_constants";
import type { email } from "../../shared/interfaces/requests";

function handleSendEmailToReg(event: Event) {
  event.preventDefault();
  post<email>(API_URL.CHAT_REG, { email: registrationUi.emailInput.value });

  removeFromPopupManager(popupUi.registration);
  openPopup(popupUi.confirmation);
  const form = event.target as HTMLFormElement;
  form.reset();
}

function handleRegWindowClosing(event: Event) {
  const correctEventType = event as KeyboardEvent;
  if (correctEventType.key === SINGLE_NAMES.ESCAPE && !uiState.isAuthorized) {
    event.preventDefault();
    location.reload();
  }
}

export { handleSendEmailToReg, handleRegWindowClosing };
