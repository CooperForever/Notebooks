function curry(fn) {
  let judge = (...args) => {
    console.log('args.length', args.length);
    console.log('fn.length', fn.length);


    if (args.length == fn.length) return fn(...args)
    return (...arg) => judge(...args, ...arg)
  }
  return judge
}

function add(a, b, c) {
  return a + b + c
}

console.log(curry(add)(1)(2)(3))