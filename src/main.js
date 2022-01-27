/**
 * 入口
 */
import { isString, isNumber, isArray ,isNull, isFunction, isObject, isDate,isBoolean} from './basic'
import isArrayLike from "./utils/isArrayLike";
import {isEmpty} from "./refers";
import isMap from "./isMap";
import isSet from "./isSet";

export {
  isString,
  isNumber,
  isArray,
  isNull,
  isFunction,
  isObject,
  isDate,
  isBoolean,
  isArrayLike,
  isSet,
  isMap,
  isEmpty
}
