/**
 * Using null to represent undefined in the reviver function allows for the serialized data to maintain a placeholder for values that were originally undefined,
 * ensuring they're accounted for in the deserialized object.
 */
export function reviver(key, value) {
    if (value && value._type === 'undefined') {
        return null;
    }
    if (value && value._type === 'date') {
        return new Date(value.value); // Convert back to Date
    }
    // if (value && value.type === 'function') {
    //   TODO: Using `new Function` can execute code and may pose security risks
    //   return new Function(`return ${value.value}`)();
    // }
    return value;
}
export function replacer(key, value) {
    if (typeof value === 'undefined') {
        return { _type: 'undefined' }; // Use a special marker for undefined values
    }
    if (value instanceof Date) {
        return { _type: 'date', value: value.toISOString() };
    }
    // TODO: Using `toString` can expose sensitive data
    // if (typeof value === 'function') {
    //   return value.toString()
    // }
    return value;
}
