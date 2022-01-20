import { isString }  from "../src/basic";

describe('javascript basic type validation', ()=> {
    test('basic string', () => {
        let str = 'this is a basic string test'
        expect(isString(str)).toBeTruthy()
        str = 'asd@dd'
        expect(isString(str)).toBeTruthy()
        str = 'ww/23@\b'
        expect(isString(str)).toBeTruthy()
        expect(str.indexOf('\b')).toBe(6)
        str = 1
        expect(isString(str)).toBeFalsy()
    });
})

