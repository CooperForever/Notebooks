# 数组求交集
![leetcode](https://img.shields.io/badge/leetcode-349-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：去重Array1，再遍历Arr1选出Arr2中也包含的元素
## Code Part
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Set解法
var intersection = function (nums1, nums2) {
    return [...new Set(nums1)].filter((cur) => nums2.includes(cur))
};
// 时间复杂度On*m

//Map解法
var intersection = function (nums1, nums2) {
    const dict = new Map()

    nums1.forEach(cur=>{
        dict.set(cur,true)
    })
    return nums2.reduce((pre,cur)=>{
        if(dict.get(cur)){
            pre.push(cur)
            dict.delete(cur)
        }
        return pre
    },[])
};
//时间复杂度On

```