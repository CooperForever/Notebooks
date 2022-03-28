const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

const visited = new Set()
// const dfs = (n) => {
//     console.log(n);
//     visited.add(n)
//     graph[n].forEach(c => {
//         if (!visited.has(c)) {
//             dfs(c)
//         }
//     })
// }
// dfs(2)

const bfs = (n) => {
    const queue = [n]
    visited.add(n)
    while (queue.length) {
        const c = queue.shift()
        console.log(c)
        graph[c].forEach(child => {
            if (!visited.has(child)) {
                queue.push(child)
                visited.add(child)
            }
        }) 
    }
}
bfs(2)