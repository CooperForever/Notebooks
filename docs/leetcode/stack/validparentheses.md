# 有效的括号
![leetcode](https://img.shields.io/badge/leetcode-20-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：遍历字符串，左括号入栈，右括号和栈顶左括号匹配出栈，不匹配判定不合法，最终栈空表示括号有效，栈非空表示括号无效。
## Code Part
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 字符串长度非双数直接返回无效
    if(s.length %2 === 1) return false
    let stack = []
    let parentheses = new Map()
    parentheses.set("{","}")
    parentheses.set("[","]")
    parentheses.set("(",")")
    for (let item of s.split("")) {
        if (parentheses.has(item)) {
            stack.push(item)
        } else if (item == "}" | item == "]" | item == ")") {
            let key = stack.pop()
            if ( item !== parentheses.get(key)) {
                return false
            }
        } else {
            return false
        }
    }
    return stack.length === 0
};
```