# 排序算法
## 冒泡排序
`时间复杂度O(n^2)`
```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}
```
## 选择排序 
`时间复杂度O(n^2)`
```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = temp
    }

}
```
## 插入排序
`时间复杂度O(n^2)`

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j = i
        while (j > 0) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
            j--
        }
        arr[j] = temp
    }
}
```
## 归并排序
:::tip
 归并排序思路：将需要排序的数组切分成不能再切分的单个未排序数组，分别进行合并排序再重复上述操作
:::
`时间复杂度O(n*logn)`
```js
function mergeSort(arr) {
    const rec = (arr2) => {
        if (arr2.length === 1) return arr2
        const mid = Math.floor(arr2.length / 2)
        const left = arr2.slice(0, mid)
        const right = arr2.slice(mid, arr2.length)

        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []
        while (orderLeft.length || orderRight.length) {
            if (orderRight.length && orderLeft.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }
    return rec(arr)
}
```
## 快速排序
:::tip
 快速排序思路：随机选择一个基准，所有比基准小的元素放在基准前面，比基准大的元素放在后面，递归对前后数组再进行快排
:::
`时间复杂度O(n*logn)`
```js
function quickSort(arr) {
    const rec = (arr) => {
        if (arr.length <= 1) return arr
        const left = []
        const right = []
        const mid = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]
    }
    return rec(arr)
}

```