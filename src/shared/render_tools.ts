import { UI_ELEMENTS } from "./ui_elements";
import { createFragmentForAllMessages } from "../view/create_ui_elem";
import type { messageObject } from "./ts_interfaces/for_backend_response";

function renderChatWindow(array: Array<messageObject>) {
  const chatWindow = UI_ELEMENTS.CHAT_WINDOW;
  if (!chatWindow) return;
  chatWindow.append(createFragmentForAllMessages(array));

  const lastMessage = chatWindow.firstElementChild;
  if (!lastMessage) return;

  observer.observe(chatWindow, { childList: true });
  scrollButtonObserver.observe(lastMessage);
}

const observer = new MutationObserver((element) => {
  const chatWindow = UI_ELEMENTS.CHAT_WINDOW;
  if (!chatWindow) return;
  const lastAddedElement = element[0].addedNodes[0] as HTMLElement;
  if (lastAddedElement.classList.contains("my-message")) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  chatWindow.scrollBy;
});

const scrollButtonObserver = new IntersectionObserver(
  (element) => {
    element[0].isIntersecting
      ? UI_ELEMENTS.SCROLL_DOWN_BTN?.classList.add("hidden")
      : UI_ELEMENTS.SCROLL_DOWN_BTN?.classList.remove("hidden");
  },
  { root: UI_ELEMENTS.CHAT_WINDOW }
);

export { renderChatWindow };
