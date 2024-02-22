/**
 * Converts an ArrayBuffer to a base64-encoded string.
 * Useful for making binary data portable for transmission in JSON or storage in databases where binary data isn't directly supported.
 * Base64 encoding transforms binary data to a string format, enhancing portability across different systems and platforms.
 * @param {ArrayBuffer} buffer - The binary data to be converted.
 * @returns {string} A base64-encoded string representation of the input binary data.
 */

const pack = (buffer: ArrayBuffer): string => {
  return window.btoa(String.fromCharCode(...new Uint8Array(buffer)))
}
