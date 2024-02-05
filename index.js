// index.js
import { StorageManager } from "./dist/core.js"

// Usage
const storage = new StorageManager("sessionStorage") // User-specified or default to 'localStorage'
storage.setItem("key", "value")
