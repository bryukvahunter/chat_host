import Cookies from "js-cookie";
import { COOKIE_KEY } from "../shared/constants";
import { HEADERS_KEYS_VALUE, HTTP_METHODS } from "./api_constants";
import { checkIsToken } from "../shared/helpers";

async function get(url: string, token: string) {
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => {});
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function post<T>(url: string, body: T) {
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.POST,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => {});
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function patch<T>(url: string, body: T) {
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PATCH,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${checkIsToken(Cookies.get(COOKIE_KEY.CHAT_TOKEN))}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => {});
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { get, post, patch };
