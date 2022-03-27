# 二叉树的最大深度
![leetcode](https://img.shields.io/badge/leetcode-102-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：深度遍历，记录每个层级的深度。
## Code Part
```js
// 递归
var maxDepth = function (root) {
    let res = 0
    const dfs = (root, level) => {
        if (!root) return
        res = Math.max(res, level)
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
    dfs(root,1)
    return res
};
// 时间复杂度On,
```