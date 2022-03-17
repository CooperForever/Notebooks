# 两数之和
![leetcode](https://img.shields.io/badge/leetcode-1-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")  
解题思路：使用数组创建map,遍历数组，求与目标数差值，在Map中查找是否有符合的值，有值返回下标数组，没有将值塞入Map继续循环

## Code Part
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        const n = nums[i]
        const n2 = target - n
        if(map.has(n2)){
            return [map.get(n2),i]
        }else{
            map.set(n,i)
        }
    }
};
```
