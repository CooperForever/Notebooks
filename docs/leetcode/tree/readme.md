# 树的遍历
## 深度优先遍历
```js
const tree = {
    val: 'a',
    children: [{
        val: 'b',
        children: [{
            val: 'd',
            children: []
        }, {
            val: 'e',
            children: []
        }]
    }, {
        val: 'c',
        children: [
            {
                val: 'g',
                children: []
            }
        ]
    }],
}

const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
}


```
## 广度优先遍历
```js
const bfs = (root) => {
    let queue = [root]

    while (queue.length > 0) {
        const n = queue.shift()
        console.log(n.val)
        n.children.forEach(child => {
            queue.push(child)
        });
    }
}
// 时间复杂度On
```