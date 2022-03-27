const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
}

// const preorder = root => {
//     if (!root) return
//     console.log(root.val);
//     preorder(root.left)
//     preorder(root.right)
// }

// const preorder = root => {
//     if (!root) return
//     const stack = [root]
//     while (stack.length > 0) {
//         const n = stack.pop()
//         console.log(n.val)
//         if (n.right) stack.push(n.right)
//         if (n.left) stack.push(n.left)
//     }
// }


// preorder(binaryTree)

// const inorder = root => {
//     if (!root) return
//     inorder(root.left)
//     console.log(root.val)
//     inorder(root.right)
// }
// const inorder = root => {
//     if (!root) return
//     const stack = []
//     let p = root
//     while (stack.length > 0 || p) {
//         while (p) {
//             stack.push(p)
//             p = p.left
//         }
//         const n = stack.pop()
//         console.log(n.val);
//         p = n.right
//     }
// }
// inorder(binaryTree)

// const postorder = root => {
//     if (!root) return
//     postorder(root.left)
//     postorder(root.right)
//     console.log(root.val)
// }

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

postorder(binaryTree)