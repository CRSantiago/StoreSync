export interface IStorageHandler {
  isAvailable(): boolean
  setItem(key: string, value: string): string
  getItem(key: string): string | null
  removeItem(key: string): string
}
