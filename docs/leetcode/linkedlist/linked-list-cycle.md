# 环形链表
![leetcode](https://img.shields.io/badge/leetcode-141-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：快慢指针遍历链表，相遇即有环
## Code Part
```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head
    let p2 = head
    while(p1 && p2 && p2.next){
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2) {
            return true
        }
    }
    return false
};
//时间复杂度On
```