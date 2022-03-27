# 二叉树 
## 二叉树遍历
### 先序遍历
遍历顺序: 根节点-左子树-右子树
```js
// 递归版
const preorder = root => {
    if (!root) return
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
// 非递归
const preorder = root => {
    if (!root) return
    const stack = [root]
    while (stack.length > 0) {
        const n = stack.pop()
        console.log(n.val)
        if (n.right) stack.push(n.right)
        if (n.left) stack.push(n.left)
    }
}

```
### 中序遍历
遍历顺序: 左子树-根节点-右子树
```js
// 递归版
const inorder = root => {
    if (!root) return
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}
// 非递归
const inorder = root => {
    if (!root) return
    const stack = []
    let p = root
    while (stack.length > 0 || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val);
        p = n.right
    }
}
```

### 后序遍历
遍历顺序: 左子树-右子树-根节点
```js
// 递归版
const postorder = root => {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}

//非递归
const postorder = root => {
    if (!root) return
    const stack = [root]
    const outputStack = []
    while (stack.length > 0) {
        const n = stack.pop()
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
        outputStack.push(n)
    }
    outputStack.reverse().forEach(child => {
        console.log(child.val)
    })
}
```