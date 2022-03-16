# 删除链表中的节点
![leetcode](https://img.shields.io/badge/leetcode-237-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：单项链表无法获取上个节点，将被删除节点转移到上一个节点。
## Code Part
```js
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
```