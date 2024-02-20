# StoreSync

A library that simplifies the interaction with web storage APIs. It will automatically handle serialization and deserialization of complex data types to and from JSON, provide a fallback for cookies if local or session storage isn't available, and offer a simple API for common actions like get, set, and delete.

## How will we get there?

1. User-Friendly API
- Consistency: Similarly to Web Storage API, items are retrieved and stored using getItem and setItem respectively. However, this is irrespective of storage type.    
2. Advance Serialization/Deserialization
- Current Support: Dates, null/undefined, BigInts
- Future Support: Circular Objects, Functions
4. Storage Fallbacks
- logic to switch between storage methods (localStorage, sessionStorage, cookies, IndexedDB) when certain conditions are met.
5. Enhanced Security
- Encryption and decryption functionalities for the data before setting it and after getting it from storage.
- Local, or server-side key management

6. Data Expiry
- Manage data expiry features, including setting up TTL (time to live) for stored items and clearing them when they expire.

7. Quota Management
- Handle quota exceedance by providing strategies for data prioritization and deletion.

### Future Goals:
- State Management
- Hooks and Events
