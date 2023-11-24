import isLength from '../isLength'

/**
 * typeof 为object的，但是不包含null
 * @param value
 * @returns {boolean}
 */

function isArrayLike(arr: any[]) {
  return arr != null && typeof arr !== 'function' && isLength(arr.length)
}

export default isArrayLike
