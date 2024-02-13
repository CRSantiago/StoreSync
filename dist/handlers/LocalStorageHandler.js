import { replacer, reviver } from '../utils/serialization.js';
export class LocalStorageHandler {
    isAvailable() {
        try {
            const test = '__storage_test__';
            window.localStorage.setItem(test, test);
            window.localStorage.removeItem(test);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    setItem(key, value) {
        try {
            const valueToStore = typeof value === 'object' ? JSON.stringify(value, replacer) : value;
            localStorage.setItem(key, valueToStore);
            return 'Value stored successfully';
        }
        catch (e) {
            return e.name;
        }
    }
    getItem(key) {
        const value = localStorage.getItem(key);
        if (value === null || value === undefined) {
            return 'No value found for the given key';
        }
        try {
            // Attempt to parse JSON
            return JSON.parse(value, reviver);
        }
        catch (e) {
            // Return as is if not JSON
            return value;
        }
    }
    removeItem(key) {
        try {
            window.localStorage.removeItem(key);
            return 'Value removed successfully';
        }
        catch (e) {
            return e.name;
        }
    }
}
