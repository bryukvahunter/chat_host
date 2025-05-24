import { getElement } from "../../shared/ui_tools";

const popupUi = {
  registration: getElement<HTMLDialogElement>("#registration-window"),
  settings: getElement<HTMLDialogElement>("#popup-dialog-settings"),
  confirmation: getElement<HTMLDialogElement>("#popup-confirm-authorization-window"),
  settingsButton: getElement<HTMLButtonElement>("#settings-btn"),
  exitSettingsButton: getElement<HTMLButtonElement>("#close-settings-button"),
  enterCodeButton: getElement<HTMLButtonElement>(".enter-code-button"),
  confirmBackButton: getElement<HTMLButtonElement>(".confirm-back-button"),
  loadWindow: getElement<HTMLDialogElement>(".load-spinner"),
};

export { popupUi };
