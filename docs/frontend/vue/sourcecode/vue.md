# new Vue发生了什么
## 首先 Vue 是一个构造函数
通过 `new Vue` 实例化了一个`Vue`对象，传递定义了`options`进行了`init`操作
```js
function Vue (options) {
  //...
  this._init(options)
}
```
## 初始化
```js
Vue.prototype._init = function (options?: Object) {
  const vm: Component = this
  // a uid
  vm._uid = uid++
  // ...

  // expose real self
  vm._self = vm
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')


  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
```
省略一些平台配置代码，`init` 函数依次做的就是初始化生命周期、初始化事件、初始化渲染、初始化`inject`、初始化`state`、初始化`Provider`，此时`created`完成,最后把当前实例挂载在选项的`element`上