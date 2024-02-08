// core.js
import { SessionStorageHandler } from './handlers/SessionStorageHandler.js'
import { LocalStorageHandler } from './handlers/LocalStorageHandler.js'
import { IStorageHandler } from './interfaces/IStorageHandler.js'

// Strategy object mapping storage types to their handlers
const storageStrategy: { [key: string]: IStorageHandler } = {
  localStorage: new LocalStorageHandler(),
  sessionStorage: new SessionStorageHandler(),
}

export class StorageManager {
  private handler: IStorageHandler

  constructor(handlerType: string = 'localStorage') {
    if (
      storageStrategy[handlerType] &&
      storageStrategy[handlerType].isAvailable()
    ) {
      this.handler = storageStrategy[handlerType]
    } else {
      console.warn(`${handlerType} is not available. Falling back to default.`)
      this.handler = storageStrategy['localStorage'] // Default
    }
  }

  setItem(key: string, value: any): string {
    return this.handler.setItem(key, value)
  }

  getItem(key: string): string | null {
    return this.handler.getItem(key)
  }

  removeItem(key: string): string {
    return this.handler.removeItem(key)
  }
}
