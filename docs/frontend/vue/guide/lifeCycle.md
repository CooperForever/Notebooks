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
// 父组件
<template>
    <ComponentB></ComponentB>
</template>

// 子组件
<template>
    <ComponentC></ComponentC>
</template>

// 生命周期钩子函数执行结果如下
```
![avatar](/images/init.jpg)
![avatar](/images/unmount.jpg)    
<strong>总结：</strong>
挂载阶段：父组件的`create`钩子先触发完成，在触发完父组件的`beforeMount`后，往下触发子组件的`create`相关钩子，逐层深入。在最深子组件`created`钩子触发完成后，从该组件的`mounted`钩子开始逐层向上触发各级组件的`mounted`钩子。    
卸载阶段：触发当前组件`beforeUpdate`钩子，向下逐层触发`beforeUnmount`钩子，在最深节向上触发`unmounted`钩子，最后触发组件`updated`钩子。

## 组件加载时未绑定的计算属性
会触发计算属性的setter，但是不会触发getter，即computed内部定义的其他函数不会执行。
## 组件刚初始化完成时watch是否执行
首次加载组件，watch不执行, 在created/mounted等钩子函数中修改watch属性会触发watch。