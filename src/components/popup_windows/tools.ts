import { SELECTOR } from "../../shared/constants";

const popupManager = new Set<HTMLDialogElement>();

function openPopup(value: HTMLDialogElement) {
  value.classList.remove(SELECTOR.DIALOG_HIDDEN);
  value.showModal();
  popupManager.add(value);
}

function removeFromPopupManager(value: HTMLDialogElement) {
  value.close();
  value.classList.add(SELECTOR.DIALOG_HIDDEN);
  popupManager.delete(value);
}

function closeAllPopups() {
  popupManager.forEach((element) => element.close());
}

export { openPopup, removeFromPopupManager, closeAllPopups };
