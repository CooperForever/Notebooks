# 最近的请求次数
![leetcode](https://img.shields.io/badge/leetcode-933-blue "leetcode") ![leetcode](https://img.shields.io/badge/-easy-green "leetcode")    
解题思路：队列模拟所有请求数，有新请求入队，3000ms前发出的请求出队，队列长为最近请求次数
```js
var RecentCounter = function() {
    this.q = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while(this.q[0] < t - 3000){
       this.q.shift()
    }
    return this.q.length
};
// 时间复杂度On
```