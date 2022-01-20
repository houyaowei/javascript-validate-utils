/**
 * 验证基本类型
 */
/**
 * 判断是字符串
 * 需要注意的是，如果含有反义字符"\"并且是非末尾的时候，indexof的时候服务索引该字符
 * @param str
 * @returns {boolean}
 */
import types from './types/types'
import { getTag } from "./utils/getTag";

const isString = (str) => {
  if (!str) {
    return false
  }
  const type = typeof str
  return type == 'string' ||  getTag(str) == types.STRING
}
const isNumber = (value) => {
  if (!value) {
    return false
  }
  return getTag(value) == types.NUMBER
}

export {
  isString,
  isNumber
}
