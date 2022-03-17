# 无重复字符的最长子串
![leetcode](https://img.shields.io/badge/leetcode-3-blue "leetcode") ![leetcode](https://img.shields.io/badge/-medium-yellow "leetcode")  
解题思路：双指针维护滑动窗口剪切子串，不断移动右指针，遇到重复字符，把左指针移动到重复字符下一位
  
## Code Part
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0
    let res = 0
    const map = new Map()
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }
        res = Math.max(res, r - l + 1)
        map.set(s[r], r)
    }
    return res
};
//时间复杂度On
```