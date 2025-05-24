import { SINGLE_NAMES } from "./constants";

type StorageType = typeof localStorage | typeof sessionStorage;

export class Storage {
  name: string = SINGLE_NAMES.EMPTY_STRING;
  type: StorageType = localStorage;
  defaultValue: string | null = null;

  constructor(name: string, type: StorageType, defaultValue: string | null = null) {
    try {
      this.name = this.isValidString(name);
      this.type = this.isValidTypeStorage(type);
      this.defaultValue = defaultValue;
    } catch (error) {
      alert((error as Error).message);
    }
  }

  set(value: any) {
    this.type.setItem(this.name, JSON.stringify(value));
  }

  get() {
    const item = this.type.getItem(this.name);
    if (!item) return;
    return JSON.parse(item);
  }

  clearValue() {
    this.type.setItem(this.name, JSON.stringify(null));
  }

  removeKey() {
    this.type.removeItem(this.name);
  }

  isEmpty() {
    return (
      this.type.getItem(this.name) === SINGLE_NAMES.NULL ||
      this.type.getItem(this.name) === SINGLE_NAMES.UNDEFINED
    );
  }

  isValidString(name: string) {
    if (typeof name !== SINGLE_NAMES.STRING) {
      throw new Error("введите строку");
    }
    return name;
  }

  isValidTypeStorage(type: StorageType) {
    if (type !== localStorage && type !== sessionStorage) {
      throw new Error("Укажите корректный тип хранилища");
    }
    return type;
  }
}
