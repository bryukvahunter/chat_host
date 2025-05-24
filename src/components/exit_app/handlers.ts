import { COOKIE_KEY } from "../../shared/constants";
import Cookies from "js-cookie";

function handleExitChat() {
  Cookies.remove(COOKIE_KEY.CHAT_TOKEN);
  location.reload();
}

export { handleExitChat };
