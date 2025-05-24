import { logInToChat, startRegistration } from "./controllers";
import { setListeners } from "./services";
import { COOKIE_KEY } from "../shared/constants";
import Cookies from "js-cookie";

function initApp() {
  setListeners();
  Cookies.get(COOKIE_KEY.CHAT_TOKEN) ? logInToChat() : startRegistration();
}

export { initApp };
