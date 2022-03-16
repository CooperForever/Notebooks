# 两数相加
![leetcode](https://img.shields.io/badge/leetcode-2-blue "leetcode") ![leetcode](https://img.shields.io/badge/-medium-yellow "leetcode")    
解题思路：遍历链表，个位数相加，进位留到下一位
## Code Part
```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        const val = v1 + v2 + carry
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10)
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry) p3.next = new ListNode(carry)
    return l3.next
};
```