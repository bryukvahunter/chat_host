import { chatWindowUi } from "./ui";
import { SELECTOR, ERRORS, TIME_FORMAT } from "../../shared/constants";
import { emailState } from "../../app_control/states";
import { format } from "date-fns";
import type { messageObject } from "../../shared/interfaces/responses";

function createMessageElement(createdAt: string, text: string, email: string, userName: string) {
  const templateElement = chatWindowUi.messageTemplate;
  if (!templateElement) throw new Error(ERRORS.ELEMENT_NOT_FOUND);

  const copyOfMessageTemplateFragment = templateElement.content.cloneNode(true) as DocumentFragment;

  const userNameElement = copyOfMessageTemplateFragment.querySelector(SELECTOR.TEMPLATE_USER_NAME);
  const textElement = copyOfMessageTemplateFragment.querySelector(SELECTOR.TEMPLATE_MESSAGE_TEXT);
  const timeElement = copyOfMessageTemplateFragment.querySelector(SELECTOR.TEMPLATE_MESSAGE_TIME);
  const messageElementWrapper = copyOfMessageTemplateFragment.querySelector(
    SELECTOR.TEMPLATE_MESSAGE_BOX
  );
  if (!textElement || !timeElement || !messageElementWrapper || !userNameElement) {
    throw new Error(ERRORS.INVALID_STRUCTURE);
  }
  userNameElement.textContent = userName;
  textElement.textContent = text;
  timeElement.textContent = createdAt;

  email !== emailState.currentEmail
    ? messageElementWrapper.classList.add(SELECTOR.OTHERS_MESSAGE)
    : messageElementWrapper.classList.add(SELECTOR.MY_MESSAGE);
  return messageElementWrapper;
}

function createFragmentForAllMessages(array: Array<messageObject>) {
  const newMessageTemplate = document.createDocumentFragment();

  array.forEach((element) => {
    newMessageTemplate.appendChild(
      createMessageElement(
        format(element.createdAt, TIME_FORMAT.HOURS_MINUTES),
        element.text,
        element.user.email,
        element.user.name
      )
    );
  });
  return newMessageTemplate;
}

export { createMessageElement, createFragmentForAllMessages };
