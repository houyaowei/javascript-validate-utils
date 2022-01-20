import types from '../types/types'

const _toString = Object.prototype.toString;

const getTag =(value)=> {
    if (value == null) {
        return value === undefined ? types.UNDEFINED : types.NULL
    }
    return _toString.call(value)
}
export {
    getTag
}


