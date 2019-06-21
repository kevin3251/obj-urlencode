export function encode(obj) {
    if (typeof obj !== 'object') return encodeURIComponent(obj)

    if (Array.isArray(obj)) {
        return obj.map(item => encode(item))
    }

    let result = {}
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = encode(value)
    })
    return result 
}

export function decode(obj) {
    if (typeof obj !== 'object') return decodeURIComponent(obj)

    if (Array.isArray(obj)) {
        return obj.map(item => decode(item))
    }
    
    let result = {}
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = decode(value)
    })
    return result
}

export default { encode, decode }