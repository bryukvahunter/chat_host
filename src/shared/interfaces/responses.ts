interface valueOfUserKeyInMessageObject {
  email: string;
  name: string;
}

interface messageObject {
  createdAt: string;
  text: string;
  updatedAt: string;
  user: valueOfUserKeyInMessageObject;
  __v: number;
  _id: string;
}

interface messages<T> {
  messages: [T];
}

export type { messageObject, messages };
