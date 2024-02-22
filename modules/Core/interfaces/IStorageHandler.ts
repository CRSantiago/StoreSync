export interface IStorageHandler {
  isAvailable(): boolean
  setItem(key: string, value: string): Promise<string>
  getItem(key: string): string | null
  removeItem(key: string): string
}
