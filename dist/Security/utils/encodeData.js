/**
 * Encodes a given string using the TextEncoder API, converting it into a Uint8Array.
 * This function is useful for preparing textual data for cryptographic operations,
 * as many Web Crypto API methods require data to be in the form of an ArrayBuffer or TypedArray.
 *
 * @param data - The string data to encode.
 * @returns A Uint8Array representing the encoded text.
 */
export const encodeData = (data) => {
    const encoder = new TextEncoder();
    return encoder.encode(data);
};
