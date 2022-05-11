const testCase = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8]

const unique = (array) => {
  return Array.from(new Set(array))
}

console.log(unique(testCase))