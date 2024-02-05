// core.js
import { SessionStorageHandler } from "./handlers/SessionStorageHandler.js";
import { LocalStorageHandler } from "./handlers/LocalStorageHandler.js";
// Strategy object mapping storage types to their handlers
const storageStrategy = {
    localStorage: new LocalStorageHandler(),
    sessionStorage: new SessionStorageHandler(),
};
export class StorageManager {
    constructor(handlerType = "localStorage") {
        if (storageStrategy[handlerType] &&
            storageStrategy[handlerType].isAvailable()) {
            this.handler = storageStrategy[handlerType];
        }
        else {
            console.warn(`${handlerType} is not available. Falling back to default.`);
            this.handler = storageStrategy["localStorage"]; // Default
        }
    }
    setItem(key, value) {
        this.handler.setItem(key, value);
    }
    getItem(key) {
        return this.handler.getItem(key);
    }
    removeItem(key) {
        this.handler.removeItem(key);
    }
}
