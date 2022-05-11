const loadsh = require("lodash")

let newMap = new Map()
newMap.set("1", { l: 1 })
newMap.set("2", 2)


const testCase = {
  a: newMap,
  b: {
    c: "123"
  },
  d: new Date(),
  e: new RegExp(),
  f: () => {
    console.log('123');
  },
  h: null,
  i: undefined,
  j: new Error(),
  k: [1, 2, 3],
}
testCase.testCase = testCase

const types = ["Date", "RegExp", "Error","Number"]

const deepClone = (obj, hash = new WeakMap()) => {
  if (hash.has(obj)) return obj
  let target
  if (types.includes(getType(obj))) {
    target = new obj.constructor(obj)
  } else if (isObject(obj)) {
    hash.set(obj)
    target = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = deepClone(obj[key], hash)
      }
    }
  } else if (isSymbol(obj)) {
    target = Object(Symbol.prototype.valueOf.call(obj))
  }
  else {
    target = obj
  }
  return target
}


const getType = (attr) => {
  return Object.prototype.toString.call(attr).replaceAll(/[\[\]]|object /g, "")
}
const isObject = (attr) => {
  return getType(attr) === "Object" || getType(attr) === "Array"
}
const isSymbol = (attr) => {
  return getType(attr) === "Symbol"
}

const res = loadsh.cloneDeep(testCase)

