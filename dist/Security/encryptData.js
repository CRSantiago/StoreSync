import { encodeData, generateIv } from './utils';
/**
 * Asynchronously encrypts data using the AES-GCM algorithm.
 * The data is first encoded (e.g., to an ArrayBuffer) before encryption.
 * An initialization vector (IV) is generated for each encryption operation to ensure security.
 *
 * @param data - The data to encrypt. This data will be encoded inside the function.
 * @param key - The cryptographic key used for encryption, obtained from generateKey().
 * @returns A Promise resolving to an object containing the encrypted data (cipher) and the IV used for encryption.
 */
export const encrypt = async (data, key) => {
    const encoded = encodeData(data);
    const iv = generateIv();
    const cipher = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: iv,
    }, key, encoded);
    return {
        cipher,
        iv,
    };
};
