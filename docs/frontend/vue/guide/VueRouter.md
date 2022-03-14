# Vue Router
## Vue Router路由传参
### 1. props传参
```js
const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```
通过props传递进组件内部，使得该组件更容易重用和测试。
### 2.编程式导航
```js
// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

```
:::warning 
如果提供了 path，params 会被忽略，使用params需要使用name，参数都可以从实例的$route对象上获取，query参数会被拼接到fullpath属性上
:::
## This.$router与this.$route区别
`this.$router`是Vue Router实例对象，提供实例方法与属性。    
`this.$route` 当前激活的路由地址，这个属性是只读的，并且它的属性是不可改变的。
