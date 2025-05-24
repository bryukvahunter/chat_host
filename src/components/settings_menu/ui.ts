import { getElement } from "../../shared/ui_tools";

const settingsUi = {
  changeNameInput: getElement<HTMLInputElement>(".popup-name-input"),
  changeNameForm: getElement<HTMLFormElement>(".popup-input-name-form"),
};

export { settingsUi };
