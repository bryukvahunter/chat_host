import { UI_ELEMENTS } from "./ui_elements";
import { createFragmentForAllMessages } from "../view/create_ui_elem";
import type { messageObject } from "./ts_interfaces/for_backend_response";

function renderChatWindow(array: Array<messageObject>) {
  UI_ELEMENTS.CHAT_WINDOW?.append(createFragmentForAllMessages(array));
}

export { renderChatWindow };
