# 反转链表
![leetcode](https://img.shields.io/badge/leetcode-206-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：双指针一前一后遍历链表，反转双指针
## Code Part
```js
var reverseList = function(head) {
    let p1 = head;
    let p2 = null;

    while(p1){
        const tmp = p1.next
        p1.next = p2
        p2 = p1
        p1 = tmp
    }
    return p2
};
// 时间复杂度 On
```