import { IStorageHandler } from '../interfaces/IStorageHandler.js'
import { replacer, reviver } from '../utils/serialization.js'

export class LocalStorageHandler implements IStorageHandler {
  isAvailable(): boolean {
    try {
      const test = '__storage_test__'
      window.localStorage.setItem(test, test)
      window.localStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  setItem(key: string, value: any): string {
    try {
      const valueToStore =
        typeof value === 'object' ? JSON.stringify(value, replacer) : value
      localStorage.setItem(key, valueToStore)
      return 'Value stored successfully'
    } catch (e) {
      return (e as Error).name
    }
  }

  getItem(key: string): string | null {
    const value = localStorage.getItem(key)
    console.log(value)
    if (value === null || value === undefined) {
      return 'No value found for the given key'
    }
    try {
      // Attempt to parse JSON
      return JSON.parse(value, reviver)
    } catch (e) {
      // Return as is if not JSON
      return value
    }
  }

  removeItem(key: string): string {
    try {
      window.localStorage.removeItem(key)
      return 'Value removed successfully'
    } catch (e) {
      return (e as Error).name
    }
  }
}
