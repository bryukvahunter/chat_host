import { logInToChat, startAuthorization, setListeners } from "./data_processing";
import { COOKIE_KEY } from "../shared/constants";
import Cookies from "js-cookie";

function initApp() {
  setListeners();
  Cookies.get(COOKIE_KEY.CHAT_TOKEN) ? logInToChat() : startAuthorization();
}

export { initApp };
