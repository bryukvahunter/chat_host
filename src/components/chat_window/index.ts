import { renderChatWindow } from "./render";

import { scrollDown } from "../../shared/helpers";
import { updateObserverElem } from "./observers";
import type { messageObject } from "../../shared/interfaces/responses";

function renderChat(array: Array<messageObject>) {
  renderChatWindow(array);
  updateObserverElem();
  scrollDown();
}

export { renderChat };
