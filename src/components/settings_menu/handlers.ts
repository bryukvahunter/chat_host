import { settingsUi } from "./ui";
import { removeFromPopupManager } from "../popup_windows/tools";
import { popupUi } from "../popup_windows/ui";
import { socket } from "../../app_control/web_socket_infra";
import { API_URL } from "../../api/api_constants";
import { COOKIE_KEY } from "../../shared/constants";
import Cookies from "js-cookie";
import { checkIsToken } from "../../shared/helpers";
import { patch } from "../../api/requests";
import type { changeName } from "../../shared/interfaces/requests";
import { checkNameLength } from "./checks";
import { openPopup } from "../popup_windows/tools";

async function handleChangeNameInChat(event: Event) {
  event.preventDefault();
  try {
    await patch<changeName>(API_URL.CHAT_REG, {
      name: checkNameLength(settingsUi.changeNameInput.value),
    });
    socket.reconnect(
      API_URL.CHAT_WEBSOCKET_CONNECT,
      checkIsToken(Cookies.get(COOKIE_KEY.CHAT_TOKEN))
    );
    removeFromPopupManager(popupUi.settings);
  } catch (error) {
    alert(error);
  }

  const form = event.target as HTMLFormElement;
  form.reset();
}

function handleOpenSettingsMenu() {
  openPopup(popupUi.settings);
}

function handleCloseSettingsMenu() {
  removeFromPopupManager(popupUi.settings);
}

export { handleChangeNameInChat, handleOpenSettingsMenu, handleCloseSettingsMenu };
