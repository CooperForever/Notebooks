# JS中所有循环问题
##  所有循环方法
| 方法名                                           | 适用场景   | 返回值    | 外链                                                                                                                |
| ------------------------------------------------ | ---------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `Array.prototype.forEach()`                      | 数组循环   | undefined | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)              |
| `Array.prototype.map()`                          | 数组循环   | new Array | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)              |
| `Array.prototype.reduce()`                       | 数组循环   | new Array | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)               |
| `Object.keys()` / `Object.getOwnPropertyNames()` | 对象循环   | Array     | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) |
| `for...in`                                       | 可迭代对象 | never     | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)               |
| `for...of`                                       | 可迭代对象 | never     | [Link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)               |


## `for...in` 与 `for...of` 区别
`for...in` 以任意顺序遍历一个对象的除Symbol以外的可枚举属性 

`for...of` 遍历可迭代对象定义要迭代的数据(可迭代数据类型包括 Array，Map，Set，String，TypedArray，arguments 对象等等)

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```
<strong>总结：</strong>    
 `for...in`会把原型上的自定义属性（可枚举属性）也遍历出来，不适合用来遍历数组,可以用来遍历对象
 `for...of`不能直接遍历普通对象

## `break/return` 能否终止循环
- 基本for循环 :white_check_mark: break/return 均能终止循环
- `forEach` :x: return不能终止循环
- `map` :x: return不能终止循环
- `reduce` :x: return不能终止循环
- `for...in` :white_check_mark: break/return 均能终止循环
- `for...of` :white_check_mark: break/return 均能终止循环

<strong>参考：</strong>
  - [MDN > Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)