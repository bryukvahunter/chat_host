interface email {
  email: string;
}

interface changeName {
  name: string;
}

interface fetchParams {
  method: string;
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
}

export type { fetchParams, email, changeName };
