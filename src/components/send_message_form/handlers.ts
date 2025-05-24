import { sendFormUi } from "./ui";
import { uiState } from "../../app_control/states";
import { SELECTOR, SINGLE_NAMES } from "../../shared/constants";
import { socket } from "../../app_control/web_socket_infra";

function handleSendMessage(event: Event) {
  event.preventDefault();
  if (!uiState.canSend || !socket.instance) return;

  socket.instance.send(JSON.stringify({ text: sendFormUi.messageTextInput.value }));
  const form = event.currentTarget as HTMLFormElement;
  form.reset();
  handleSendButtonState();
}

function handleSendButtonState() {
  uiState.canSend = sendFormUi.messageTextInput.value.trim() !== SINGLE_NAMES.EMPTY_STRING;

  uiState.canSend
    ? sendFormUi.sendMessageButton.classList.remove(SELECTOR.HIDE_SEND_BUTTON)
    : sendFormUi.sendMessageButton.classList.add(SELECTOR.HIDE_SEND_BUTTON);
}

export { handleSendMessage, handleSendButtonState };
