import { IStorageHandler } from '../interfaces/IStorageHandler'

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

  setItem(key: string, value: string): string {
    const valueToStore =
      typeof value === 'object' ? JSON.stringify(value) : value
    try {
      localStorage.setItem(key, valueToStore)
      return 'Value stored successfully'
    } catch (e) {
        return (e as Error).name
    }
  }

  getItem(key: string): string | null {
    const value = localStorage.getItem(key)
    if (value === null || value === undefined) {
      return 'No value found for the given key'
    }
    try {
      // Attempt to parse JSON
      return JSON.parse(value)
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
