import { LOAD_MSG_VALUE } from "../../shared/constants";
import { messageHistory } from "../../app_control/states";

const loadMessages = (function load(): Function {
  let currentChunkSize = LOAD_MSG_VALUE.FIRST_STEP;

  return function load() {
    const newArrChunk = messageHistory.slice(
      currentChunkSize,
      (currentChunkSize += LOAD_MSG_VALUE.CHUNK_SIZE)
    );

    return newArrChunk;
  };
})();

function addMessageFromServer(array: Array<{}>) {
  messageHistory.push(...array);
}

export { loadMessages, addMessageFromServer };
