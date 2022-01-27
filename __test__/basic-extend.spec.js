import isArrayLike from "../src/utils/isArrayLike";
import {isTypedArray} from "../src/isTypeArray";
import {isEmpty} from "../src/refers";
import isMap from "../src/isMap";
import isSet from "../src/isSet";

describe('javascript basic extend type validation', ()=> {
  test('isArrayLike test cases', ()=> {
    expect(isArrayLike([1,2,3])).toBeTruthy()
    expect(isArrayLike('ass')).toBeTruthy()
    expect(isArrayLike(Function)).toBeFalsy()
  })
  test('isTypedArray test cases', ()=> {
    expect(isTypedArray(new Int8Array(1))).toBeTruthy()
    expect(isTypedArray(new Uint8ClampedArray(1))).toBeTruthy()
    expect(isTypedArray([])).toBeFalsy()
  })

  test('isEmpty test cases', ()=> {
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty(true)).toBeTruthy()
    expect(isEmpty(11)).toBeTruthy()
    expect(isEmpty([1,2,2])).toBeFalsy()
    expect(isEmpty('abc')).toBeFalsy()
    expect(isEmpty({name: 'hyw'})).toBeFalsy()
  })
  test('isMap test cases',()=> {
    expect(isMap(new Map)).toBeTruthy()
    expect(isMap(new WeakMap)).toBeFalsy()
  })
  test('isSet test cases',()=> {
    expect(isSet(new Set)).toBeTruthy()
    expect(isSet(new WeakSet)).toBeFalsy()
  })
})
