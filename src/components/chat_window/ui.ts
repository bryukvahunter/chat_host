import { getElement } from "../../shared/ui_tools";

const chatWindowUi = {
  messageWindow: getElement<HTMLElement>(".chat-window"),
  messageTemplate: getElement<HTMLTemplateElement>("#template"),
  messagesWrapper: getElement<HTMLElement>(".messages-wrapper"),
  scrollDownButton: getElement<HTMLButtonElement>(".scroll-down-button"),
};

export { chatWindowUi };
