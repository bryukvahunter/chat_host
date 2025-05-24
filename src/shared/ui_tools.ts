function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector(selector);
  if (!element) throw Error(` ${selector} not found`);
  return element as T;
}

export { getElement };
