import { uiState } from "./states";
import { setHandlerForRealTimeRendering } from "../components/chat_window/render";
import { popupUi } from "../components/popup_windows/ui";
import { openPopup, removeFromPopupManager } from "../components/popup_windows/tools";
import { API_URL } from "../api/api_constants";
import { checkIsToken } from "../shared/helpers";
import { COOKIE_KEY } from "../shared/constants";
import Cookies from "js-cookie";
import { loadMessages } from "../components/chat_window/virtualiz_tools";
import { renderChat } from "../components/chat_window";
import { setActualData, setWebSocket } from "./services";

async function logInToChat() {
  try {
    openPopup(popupUi.loadWindow);

    await setActualData();
    renderChat(loadMessages().reverse());
    setWebSocket(API_URL.CHAT_WEBSOCKET_CONNECT, checkIsToken(Cookies.get(COOKIE_KEY.CHAT_TOKEN)));
    setHandlerForRealTimeRendering();

    removeFromPopupManager(popupUi.loadWindow);
    uiState.isAuthorized = true;
  } catch (error) {
    console.error(error);
  }
}

function startRegistration() {
  uiState.isAuthorized = false;
  openPopup(popupUi.registration);
}

export { logInToChat, startRegistration };
