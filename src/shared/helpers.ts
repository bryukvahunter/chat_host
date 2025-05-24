import { ERRORS, SELECTOR } from "./constants";

function checkIsToken(token: string | undefined): string {
  if (!token) {
    throw new Error(ERRORS.TOKEN_NOT_FOUND);
  }
  return token;
}

function scrollDown() {
  const chatWindow = document.querySelector(SELECTOR.MESSAGE_WRAPPER);
  if (!chatWindow) return;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

export { checkIsToken, scrollDown };
