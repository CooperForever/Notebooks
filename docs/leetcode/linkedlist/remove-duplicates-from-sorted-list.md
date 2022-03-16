# 删除排序链表中的重复元素
![leetcode](https://img.shields.io/badge/leetcode-83-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：排序链表，重复元素一定相邻，遍历链表，如果当前元素和下个元素相邻，删除下个元素

## Code Part
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p1 = head;

    while(p1 && p1.next) {
      if(p1.val == p1.next.val){
        p1.next = p1.next.next
      }else{
          // 注意尾节点也需要参与比较
        p1 = p1.next
      }
    }
    return head
};
// 时间复杂度On
```