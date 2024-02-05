// index.js
import { StorageManager } from "./modules/Core/core"

// Usage
const storage = new StorageManager("localStorage") // User-specified or default to 'localStorage'
storage.setItem("key", "value")
