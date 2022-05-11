// 实现数组拍平
const defaultCase = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]]


function flat(array) {
  let res = []
  let stack = array
  while (stack.length > 0) {
    let tail = stack.pop()
    if (Array.isArray(tail)) { stack.push(...tail) } else {
      res.push(tail)
    }
  }
  return res.reverse()
}

function flat2(array, depth) {

  let res = array.reduce((pre, cur) => {
    if (Array.isArray(cur) && depth > 0) {
      return pre.concat(...flat2(cur, --depth))
    } else {
      return pre.concat(cur)
    }
  }, [])
  return res
}

console.log(flat2(defaultCase, 1))