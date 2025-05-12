function openWebSocketConnection(serverUrl: string, token: string): WebSocket {
  const socket = new WebSocket(`${serverUrl}${token}`);
  return socket;
}

export { openWebSocketConnection };
