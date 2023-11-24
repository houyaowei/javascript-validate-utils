import { TYPES }  from '../types/types'
import {_toString} from "../setup";

const getTag =( value: undefined| object )=> {
    if (value == null) {
        return value === undefined ? TYPES.UNDEFINED : TYPES.NULL
    }
    return _toString.call(value)
}
export {
    getTag
}


