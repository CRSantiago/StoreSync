import { IStorageHandler } from '../interfaces/IStorageHandler.js'

export class SessionStorageHandler implements IStorageHandler {
  isAvailable(): boolean {
    try {
      const test = '__storage_test__'
      window.sessionStorage.setItem(test, test)
      window.sessionStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  async setItem(key: string, value: string): Promise<string> {
    const valueToStore =
      typeof value === 'object' ? JSON.stringify(value) : value
    try {
      sessionStorage.setItem(key, valueToStore)
      return 'Value stored successfully'
    } catch (e) {
      return (e as Error).name
    }
  }

  getItem(key: string): string | null {
    const value = sessionStorage.getItem(key)
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
      window.sessionStorage.removeItem(key)
      return 'Value removed successfully'
    } catch (e) {
      return (e as Error).name
    }
  }
}
