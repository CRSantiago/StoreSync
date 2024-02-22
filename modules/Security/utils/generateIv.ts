/**
 * Generates an initialization vector (IV) for cryptographic operations.
 * This function uses the Web Crypto API to generate a random IV
 * suitable for use with symmetric encryption algorithms like AES-GCM.
 * The IV length is 12 bytes (96 bits), commonly used with AES-GCM.
 *
 * @returns A Uint8Array containing the random IV.
 */
export const generateIv = (): Uint8Array => {
  return window.crypto.getRandomValues(new Uint8Array(12))
}
