// core.js
import { SessionStorageHandler } from "./handlers/SessionStorageHandler"
import { LocalStorageHandler } from "./handlers/LocalStorageHandler"
import { IStorageHandler } from "./interfaces/IStorageHandler"

// Strategy object mapping storage types to their handlers
const storageStrategy: { [key: string]: IStorageHandler } = {
  localStorage: new LocalStorageHandler(),
  sessionStorage: new SessionStorageHandler(),
}

export class StorageManager {
  private handler: IStorageHandler

  constructor(handlerType: string = "localStorage") {
    if (
      storageStrategy[handlerType] &&
      storageStrategy[handlerType].isAvailable()
    ) {
      this.handler = storageStrategy[handlerType]
    } else {
      console.warn(`${handlerType} is not available. Falling back to default.`)
      this.handler = storageStrategy["localStorage"] // Default
    }
  }

  setItem(key: string, value: string): void {
    this.handler.setItem(key, value)
  }

  getItem(key: string): string | null {
    return this.handler.getItem(key)
  }

  removeItem(key: string): void {
    this.handler.removeItem(key)
  }
}
