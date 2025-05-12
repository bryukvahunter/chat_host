import { UI_ELEMENTS } from "../shared/ui_elements";
import { renderLastMessageInChat } from "../view/create_ui_elem";
import { currentSocket } from "./data_processing";
import { uiState } from "../shared/states";

function setRealTimeRenderHandle() {
  if (!currentSocket) return;
  currentSocket.onmessage = (event) => {
    renderLastMessageInChat(JSON.parse(event.data));
  };
}

function sendMessageTextToServer(event: Event) {
  event.preventDefault();
  if (!uiState.canSend) return;

  const text = UI_ELEMENTS.INPUT_MESSAGE_TEXT?.value;
  if (!currentSocket) return;
  currentSocket.send(JSON.stringify({ text: text }));

  const form = event.currentTarget as HTMLFormElement;
  form.reset();
}

export { sendMessageTextToServer, setRealTimeRenderHandle };
