import type { booleanValues, stringValues } from "./ts_types/for_constants";
import { EMPTY_STRING } from "./constants";

const uiState: booleanValues = {
  canSend: false,
  isAuthorized: false,
};

const emailState: stringValues = {
  currentEmail: EMPTY_STRING,
};
export { uiState, emailState };
