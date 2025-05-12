import { UI_ELEMENTS } from "../shared/ui_elements";

const popupManager = new Set<HTMLDialogElement>();

function addToPopupManager(value: HTMLDialogElement) {
  value.showModal();
  popupManager.add(value);
}

function removeFromPopupManager(value: HTMLDialogElement) {
  value.close();
  popupManager.delete(value);
}

function closeAllPopups() {
  popupManager.forEach((element) => element.close());
}

function closeSettingsMenu() {
  UI_ELEMENTS.POPUP_DIALOG_SETTINGS
    ? removeFromPopupManager(UI_ELEMENTS.POPUP_DIALOG_SETTINGS)
    : null;
}

function openAuthorizationWindow() {
  UI_ELEMENTS.POPUP_AUTHORIZATION_WINDOW
    ? addToPopupManager(UI_ELEMENTS.POPUP_AUTHORIZATION_WINDOW)
    : null;
}

export { addToPopupManager, closeAllPopups, closeSettingsMenu, openAuthorizationWindow };
