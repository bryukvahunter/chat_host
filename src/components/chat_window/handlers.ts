import { chatWindowUi } from "./ui";
import { SMOOTH } from "../../shared/constants";
import { renderChatWindow } from "./render";
import { loadMessages } from "./virtualiz_tools";

function handleScrollDownButton() {
  chatWindowUi.messagesWrapper.scrollTo({
    top: chatWindowUi.messagesWrapper.scrollHeight,
    behavior: SMOOTH,
  });
}

function handleScrollUpRenderMessage(event: Event) {
  if (!(event.target instanceof HTMLElement) || !!chatWindowUi.messagesWrapper.scrollTop) return;

  const before = event.target.scrollHeight;
  renderChatWindow(loadMessages().reverse());
  const after = event.target.scrollHeight;

  chatWindowUi.messagesWrapper.scrollTop = after - before;
}

export { handleScrollDownButton, handleScrollUpRenderMessage };
