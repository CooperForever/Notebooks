const testCase = [5, 2, 1, 3, 4, 1, 3]

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
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight) {
                res.push(orderRight.shift())
            }
        }
        return res
    }
    return rec(arr)
}

function quickSort(arr1) {
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
        const temp =[...rec(left), mid, ...rec(right)]
        return temp
    }

    return rec(arr1)
}

const res = quickSort([5, 2, 1, 3, 4, 1, 3])
console.log(res);