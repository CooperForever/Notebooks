# 组件生命周期
:::tip
此处只讨论vue2生命周期，vue3生命周期有调整，以后在Vue3中整理。
:::
## 单个组件生命周期
借用Vue官网生命周期图示
需要注意的环节：
1. `created`钩子调用后，此时data已经完成响应式处理，后续进行template的编译处理。
2. `mounted`才是挂载完成阶段，Vue官网是这样说的： 父级组件不会保证所有子组件都被挂载完成（mounted），如果希望等到整个视图都渲染完毕，需要在`mounted`内部使用`vm.$nextTick`。
3. watchers、子组件与监听事件在`destoryed`之前被销毁
![avatar](/images/lifecycle.png)

## 父子组件生命周期关系
通过Example具体演示父子组件的生命周期钩子调用顺序，代码与结果如下：
```vue
<template>
    <child-component></child-component>
</template>
```