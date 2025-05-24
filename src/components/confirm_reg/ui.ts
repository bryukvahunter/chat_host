import { getElement } from "../../shared/ui_tools";

const confirmRegUi = {
  confirmCodeInput: getElement<HTMLInputElement>(".popup-code-input"),
  confirmForm: getElement<HTMLFormElement>(".popup-input-code-form"),
};

export { confirmRegUi };
