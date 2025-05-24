import { ERRORS } from "../../shared/constants";

function checkNameLength(name: string): string {
  const nickName = String(name);
  const minLength = 2;
  const maxLength = 25;

  if (nickName.length <= minLength || nickName.length > maxLength) {
    throw new Error(ERRORS.INCORRECT_LENGTH);
  }
  return nickName;
}

export { checkNameLength };
