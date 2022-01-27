# javascript-validate-utils
原生javascript实现的校验方法

### 使用方法
```JavaScript
import { isString, isNumber, isArray ,isNull, isFunction, isObject, isDate} from 'javascript-validate-utils'

console.log(isObject({}))
```

#### 2022年1月31日计划实现

已经实现的：

`isString, isNumber, isArray ,isNull, isFunction, isObject, isDate,isBoolean,isArrayLike,isEmpty,isMap,isSet,isSymbol,isError,isRegExp`


未实现的：

`
isExit(对象中的属性) isEqual, isElement(DOM元素)`



### 特别提醒
`isDate` 支持日期实例或者合法的字符，如：`2021-1-21 12:20:21`



### 协议
MIT
