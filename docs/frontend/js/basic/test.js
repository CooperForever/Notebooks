let a = [1, 2, 3, 4, 5, 6, 7]
let obj = { name: "cooper", age: '18' }

function test() {
    // for (let i = 0; i < a.length; i++) {
    //     console.log(i)
    //     break
    // }
    // a.forEach((cur) => {
    //     console.log(cur)
    //     return
    // })
    // a.map((cur) => {
    //     console.log(cur)
    //     return
    // })

    for (let item in obj) {
        console.log(item)
    }
}


let b = test()
console.log("b-", b)