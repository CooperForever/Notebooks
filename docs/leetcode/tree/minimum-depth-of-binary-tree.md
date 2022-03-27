# 二叉树的最小深度
![leetcode](https://img.shields.io/badge/leetcode-112-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：求最小深度，使用广度优先遍历
## Code Part
```js
var minDepth = function(root) {
    if(!root)return 0
    const q = [[root,1]]
    while(q.length) {
        const [n,l] = q.shift()
        if(!n.left && !n.right) return l
        if(n.left) q.push([n.left,l+1])
        if(n.right) q.push([n.right,l+1])
    }
};
```