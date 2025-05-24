import { getElement } from "../../shared/ui_tools";

const sendFormUi = {
  sendMessageButton: getElement<HTMLButtonElement>(".send-message-button"),
  messageTextInput: getElement<HTMLInputElement>(".input-message-text"),
  sendInterfaceForm: getElement<HTMLFormElement>(".chat-message-sending-interface"),
};

export { sendFormUi };
