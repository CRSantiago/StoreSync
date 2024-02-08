// index.js
import { StorageManager } from './dist/core.js'

// Usage
const storage = new StorageManager('localStorage') // User-specified or default to 'localStorage'
const testObject = {
  name: 'Test Object',
  createdAt: new Date(), // Current date and time
  optionalField: undefined, // An undefined field to test serialization
  nested: {
    startDate: new Date(2020, 0, 1), // Specific date for nested object
    description: 'Nested object with a date',
  },
}
console.log(testObject.createdAt)
console.log(storage.setItem('test', testObject))
const returnedObj = storage.getItem('test')
console.log(returnedObj.createdAt)
