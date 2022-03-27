# 层序遍历二叉树
![leetcode](https://img.shields.io/badge/leetcode-102-blue "leetcode") ![leetcode](https://img.shields.io/badge/-meidum-green "leetcode")    
解题思路：广度优先遍历，记录层级
## Code Part
```js
var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const res = []
    while (queue.length) {
        let len = queue.length
        res.push([])
        while (len--) {
            const n = queue.shift()
            res[res.length -1].push(n.val)
            if (n.left) queue.push(n.left)
            if (n.right) queue.push(n.right)
        }
    }
    return res
};
// 时间复杂度On
```