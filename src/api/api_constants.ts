import type { stringValues } from "../shared/types/for_constants";

const API_URL: stringValues = {
  CHAT_REG: "https://edu.strada.one/api/user",
  CHAT_MESSAGE_HISTORY: "https://edu.strada.one/api/messages/",
  CHAT_USER_INFO: "https://edu.strada.one/api/user/me",
  CHAT_WEBSOCKET_CONNECT: "wss://edu.strada.one/websockets?",
};

const HEADERS_KEYS_VALUE: stringValues = {
  JSON_AND_CHARSET: "application/json;charset=utf-8",
};

const HTTP_METHODS: stringValues = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
};
export { API_URL, HEADERS_KEYS_VALUE, HTTP_METHODS };
