const getOrDefaultKey = (obj, key, defaultKey) => key in obj ? obj[key] : obj[defaultKey || 'default'];

export {
    getOrDefaultKey
}