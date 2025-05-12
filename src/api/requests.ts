import Cookies from "js-cookie";
import { COOKIE_KEY } from "../shared/constants";
import { API_URL, HEADERS_KEYS_VALUE, HTTP_METHODS } from "./api_constants";
import type { fetchParams } from "../shared/ts_interfaces/for_requests";
import { emailState } from "../shared/states";

async function getFetch(url: string, params: fetchParams) {
  const response = await fetch(url, params);
  if (!response.ok) throw new Error(`ошибка - ${response.status}`);
  return response.json();
}

async function receiveTokenByEmail(email: string) {
  try {
    const codeRequest = await getFetch(API_URL.CHAT_REG, {
      method: HTTP_METHODS.POST,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
      },
      body: JSON.stringify({ email: email }),
    });
    console.log(codeRequest);
  } catch (error) {
    console.error(error);
  }
}

async function getMessageHistory() {
  try {
    const messageHistory = await getFetch(API_URL.CHAT_MESSAGE_HISTORY, {
      method: HTTP_METHODS.GET,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${Cookies.get(COOKIE_KEY.CHAT_TOKEN)}`,
      },
    });
    console.log(messageHistory);
    return messageHistory;
  } catch (error) {
    console.error(error);
  }
}

async function checkIsValidToken(token: string) {
  try {
    const regInfoResponse = await getFetch(API_URL.CHAT_USER_INFO, {
      method: HTTP_METHODS.GET,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${token}`,
      },
    });
    return regInfoResponse;
  } catch (error) {
    console.error(error);
  }
}

async function changeNameRequest(name: string) {
  try {
    await getFetch(API_URL.CHAT_REG, {
      method: HTTP_METHODS.PATCH,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${Cookies.get(COOKIE_KEY.CHAT_TOKEN)}`,
      },
      body: JSON.stringify({ name: name }),
    });
  } catch (error) {
    console.error(error);
  }
}

async function requestMyDetails() {
  try {
    const myDetails = await getFetch(API_URL.CHAT_USER_INFO, {
      method: HTTP_METHODS.GET,
      headers: {
        "Content-Type": HEADERS_KEYS_VALUE.JSON_AND_CHARSET,
        Authorization: `Bearer ${Cookies.get(COOKIE_KEY.CHAT_TOKEN)}`,
      },
    });
    return myDetails;
  } catch (error) {
    console.error(error);
  }
}

async function setActualEmail() {
  try {
    const myData = await requestMyDetails();
    if (!myData?.email) throw new Error("email not found");

    emailState.currentEmail = myData.email;
  } catch (error) {
    console.error(error);
  }
}

export {
  getFetch,
  getMessageHistory,
  receiveTokenByEmail,
  changeNameRequest,
  requestMyDetails,
  setActualEmail,
  checkIsValidToken,
};
