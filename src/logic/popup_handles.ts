import { UI_ELEMENTS } from "../shared/ui_elements";
import { addToPopupManager, closeSettingsMenu } from "../popups/popup_utilities";

function openSettingsMenuHandle() {
  UI_ELEMENTS.POPUP_DIALOG_SETTINGS ? addToPopupManager(UI_ELEMENTS.POPUP_DIALOG_SETTINGS) : null;
}

function closeOnBackDropClickHandle({ currentTarget, target }: Event) {
  const dialog = currentTarget;
  const isClickOnBackDrop = target === dialog;

  if (isClickOnBackDrop) {
    closeSettingsMenu();
  }
}

function openConfirmationWindowHandle() {
  UI_ELEMENTS.POPUP_CONFIRM_AUTHORIZE_WINDOW
    ? addToPopupManager(UI_ELEMENTS.POPUP_CONFIRM_AUTHORIZE_WINDOW)
    : null;
}

export { openSettingsMenuHandle, closeOnBackDropClickHandle, openConfirmationWindowHandle };
