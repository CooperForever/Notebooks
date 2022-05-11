// 防抖
function debounce(fn, delay) {
  let timeout
  return function () {
    var args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(this, args)
    }, delay)
  }
}
