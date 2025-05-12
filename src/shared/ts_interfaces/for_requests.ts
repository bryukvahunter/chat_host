interface fetchParams {
  method: string;
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
}

export type { fetchParams };
