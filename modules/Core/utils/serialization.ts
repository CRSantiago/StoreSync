/**
 * Using null to represent undefined in the reviver function allows for the serialized data to maintain a placeholder for values that were originally undefined,
 * ensuring they're accounted for in the deserialized object.
 */

/**
 * Helper function to check if a string is in ISO 8601 format, which is what JSON.Stringify uses for dates.
 */
function isIso8601Date(str: string): boolean {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str)
}

export function reviver(key: string, value: any): any {
  if (value && value._type === 'undefined') {
    return null
  }

  if (typeof value === 'string' && isIso8601Date(value)) {
    return new Date(value) // Convert back to Date
  }

  // consider alternative approach for older browsers
  if (value && value._type === 'bigint') {
    return BigInt(value.value)
  }
  // if (value && value.type === 'function') {
  //   TODO: Using `new Function` can execute code and may pose security risks
  //   return new Function(`return ${value.value}`)();
  // }
  return value
}

export function replacer(key: string, value: any): any {
  if (typeof value === 'undefined') {
    return { _type: 'undefined' } // Use a special marker for undefined values
  }

  // Handle large numbers
  if (typeof value === 'bigint') {
    return { _type: 'bigint', value: value.toString() }
  }
  // TODO: Using `toString` can expose sensitive data
  // if (typeof value === 'function') {
  //   return value.toString()
  // }
  return value
}
