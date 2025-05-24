import { removeFromPopupManager } from "./tools";

function handleCloseOnBackDropClick({ currentTarget, target }: Event) {
  if (!(currentTarget instanceof HTMLDialogElement)) return;

  const dialog = currentTarget;
  const isClickOnBackDrop = target === dialog;

  if (isClickOnBackDrop) {
    removeFromPopupManager(dialog);
  }
}

export { handleCloseOnBackDropClick };
