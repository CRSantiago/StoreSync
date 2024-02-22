/**
 * Asynchronously generates a cryptographic key using the AES-GCM algorithm.
 * This key can be used for both encryption and decryption operations.
 *
 * The function configures the key for AES-GCM with a length of 256 bits,
 * and it is marked as extractable, allowing it to be exported if needed.
 * The key usage is specified for both encrypt and decrypt operations.
 *
 * @returns A Promise that resolves to a CryptoKey object configured for AES-GCM encryption and decryption.
 */
export const generateKey = async (): Promise<CryptoKey> => {
  return window.crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  )
}
