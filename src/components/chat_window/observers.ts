import { chatWindowUi } from "./ui";
import { EVENTS } from "../../shared/constants";

const lastElementVisiblityObserver = new IntersectionObserver(
  (element) => {
    !element[0].isIntersecting
      ? chatWindowUi.scrollDownButton.classList.remove(EVENTS.HIDDEN)
      : chatWindowUi.scrollDownButton.classList.add(EVENTS.HIDDEN);
  },
  { root: chatWindowUi.messagesWrapper }
);

function updateObserverElement(observer: IntersectionObserver, container: HTMLElement) {
  let lastChatWindowElement: HTMLElement | null = null;

  return function update() {
    const latestElement = container.lastElementChild;
    if (!(latestElement instanceof HTMLElement)) return;

    if (lastChatWindowElement) {
      observer.unobserve(lastChatWindowElement);
    }
    observer.observe(latestElement);
    lastChatWindowElement = latestElement;
  };
}

const updateObserverElem = updateObserverElement(
  lastElementVisiblityObserver,
  chatWindowUi.messagesWrapper
);

export { updateObserverElem };
