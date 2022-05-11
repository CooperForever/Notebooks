// 节流
function throttle(fn, delay) {
  var previous = 0
  return function () {
    let now = new Date()
    const args = arguments
    if (now - previous > delay) {
      fn.apply(this, args)
      previous = now
    }
  }
}