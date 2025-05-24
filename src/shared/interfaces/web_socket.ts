interface SetSocket {
  instance: WebSocket | null;
  connect(serverUrl: string, token: string): void;
  reconnect(serverUrl: string, token: string): void;
}

export type { SetSocket };
