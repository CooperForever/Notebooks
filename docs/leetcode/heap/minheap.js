class MinHeap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    getParentIndex(i) {
        return (i - 1) >> 1 // 除2取商
    }
    getLeftIndex(i) {
        return i * 2 + 1
    }
    getRightIndex(i) {
        return i * 2 + 2
    }
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    pop() {
        this.heap[0] = this.heap.pop(0)
        this.shiftDown(0)
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    peek() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}
const h = new MinHeap()

var findKthLargest = function (nums, k) {
    const h = new MinHeap()
    nums.forEach(n => {
        h.insert(n)
        if (h.size() > k) {
            h.pop()
        }
    })
    console.log(h.heap)
    return h.peek()
};
findKthLargest([3,2,1,5,6,4],2)