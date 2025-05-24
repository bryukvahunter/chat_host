import { getElement } from "../../shared/ui_tools";

const registrationUi = {
  emailInput: getElement<HTMLInputElement>(".popup-email-input"),
  emailSubmissionForm: getElement<HTMLElement>(".popup-input-email-form"),
};

export { registrationUi };
