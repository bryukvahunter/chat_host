import { setHandlerForRealTimeRendering } from "../components/chat_window/render";
import type { SetSocket } from "../shared/interfaces/web_socket";
import { CLOSE_CODE } from "../shared/constants";

const socket: SetSocket = {
  instance: null,
  connect(serverUrl: string, token: string) {
    if (!this.instance || this.instance.readyState === WebSocket.CLOSED) {
      this.instance = new WebSocket(`${serverUrl}${token}`);
    }
  },
  reconnect(serverUrl: string, token: string) {
    if (!this.instance) return;
    this.instance.close(CLOSE_CODE);
    this.instance.onclose = function () {
      socket.connect(serverUrl, token);
      setHandlerForRealTimeRendering();
    };
  },
};

export { socket };
