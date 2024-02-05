export class SessionStorageHandler {
    isAvailable() {
        try {
            const test = "__storage_test__";
            window.sessionStorage.setItem(test, test);
            window.sessionStorage.removeItem(test);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    setItem(key, value) {
        const valueToStore = typeof value === "object" ? JSON.stringify(value) : value;
        try {
            sessionStorage.setItem(key, valueToStore);
            return "Value stored successfully";
        }
        catch (e) {
            return e.name;
        }
    }
    getItem(key) {
        const value = sessionStorage.getItem(key);
        if (value === null || value === undefined) {
            return "No value found for the given key";
        }
        try {
            // Attempt to parse JSON
            return JSON.parse(value);
        }
        catch (e) {
            // Return as is if not JSON
            return value;
        }
    }
    removeItem(key) {
        try {
            window.sessionStorage.removeItem(key);
            return "Value removed successfully";
        }
        catch (e) {
            return e.name;
        }
    }
}
