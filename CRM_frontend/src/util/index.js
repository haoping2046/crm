export const isFalsy = (value) => value === 0 ? false : !value
export const cleanObject = (object) => {
    const result = {...object}
    Object.key(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}