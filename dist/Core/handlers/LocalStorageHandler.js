import { replacer, reviver } from '../utils/serialization.js';
import { generateKey, encrypt } from '../../Security';
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
    async prepareAndStore(key, value, options = {}) {
        // Generate encryption key
        const encryptionKey = await generateKey();
        let valueToStore = { ...value }; // Shallow copy
        if (options.encryptFields) {
            console.log('encryption fields:', options.encryptFields);
            for (const field of options.encryptFields) {
                if (valueToStore.hasOwnProperty(field)) {
                    // Correctly await the encryption result
                    valueToStore[field] = await encrypt(valueToStore[field], encryptionKey);
                }
            }
        }
        // Serialize the entire object after encryption
        const serializedData = JSON.stringify(valueToStore);
        localStorage.setItem(key, serializedData); // Consider moving this to `setItem`
        return 'Value stored successfully';
    }
    async setItem(key, value, options = {}) {
        try {
            if (options.encrypt) {
                console.log('encryption enabled');
                // Await the preparation and storage process
                return await this.prepareAndStore(key, value, options);
            }
            else {
                const valueToStore = typeof value === 'object' ? JSON.stringify(value, replacer) : value;
                localStorage.setItem(key, valueToStore);
                return 'Value stored successfully';
            }
        }
        catch (e) {
            return e.name;
        }
    }
    getItem(key, options = {}) {
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
