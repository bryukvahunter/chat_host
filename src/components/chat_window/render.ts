import { chatWindowUi } from "./ui";
import { createFragmentForAllMessages } from "./create_elements";
import type { messageObject } from "../../shared/interfaces/responses";
import { createMessageElement } from "./create_elements";
import { TIME_FORMAT, SMOOTH } from "../../shared/constants";
import { format } from "date-fns";
import { socket } from "../../app_control/web_socket_infra";
import { updateObserverElem } from "./observers";
import { emailState } from "../../app_control/states";

function renderChatWindow(array: Array<messageObject>) {
  chatWindowUi.messagesWrapper.prepend(createFragmentForAllMessages(array));
}

function renderLastMessageInChat(messageObject: messageObject) {
  const isScrollDown =
    chatWindowUi.messagesWrapper.scrollHeight -
      chatWindowUi.messagesWrapper.scrollTop -
      chatWindowUi.messagesWrapper.clientHeight <=
    10;
  const isMyMessage = messageObject.user.email === emailState.currentEmail;

  chatWindowUi.messagesWrapper.append(
    createMessageElement(
      format(messageObject.createdAt, TIME_FORMAT.HOURS_MINUTES),
      messageObject.text,
      messageObject.user.email,
      messageObject.user.name
    )
  );

  if (isMyMessage || isScrollDown) {
    requestAnimationFrame(() => {
      chatWindowUi.messagesWrapper.scrollTo({
        top: chatWindowUi.messagesWrapper.scrollHeight,
        behavior: SMOOTH,
      });
    });
  }
}

async function setHandlerForRealTimeRendering() {
  if (!socket.instance) return;

  socket.instance.onmessage = (event) => {
    try {
      renderLastMessageInChat(JSON.parse(event.data));
      updateObserverElem();
    } catch (error) {
      alert(error);
    }
  };
}

export { renderChatWindow, renderLastMessageInChat, setHandlerForRealTimeRendering };
