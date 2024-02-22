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
  largeInt: BigInt(9007199254740991) + 1n, // A big int
  sensitiveData: "I'm a secret",
}
try {
  const result = await storage.setItem('test', testObject, {
    encrypt: true,
    encryptFields: ['sensitiveData'], // Corrected typo here
  })
  console.log(result)
} catch (e) {
  console.error('Error setting item:', e)
}
console.log(storage.getItem('test'))
