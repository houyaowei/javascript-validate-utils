const objectProto = Object.prototype

function isPrototype(value) {
  const _constructor = value && value.constructor
  const proto = (typeof _constructor === 'function' && _constructor.prototype) || objectProto

  return value === proto
}

export default isPrototype
