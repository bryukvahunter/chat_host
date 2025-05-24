import type { booleanValues, stringValues } from "../shared/types/for_constants";
import { SINGLE_NAMES } from "../shared/constants";

const uiState: booleanValues = {
  canSend: false,
  isAuthorized: false,
  isLoading: false,
};

const emailState: stringValues = {
  currentEmail: SINGLE_NAMES.EMPTY_STRING,
};

const messageHistory: Array<{}> = [];

export { uiState, emailState, messageHistory };
