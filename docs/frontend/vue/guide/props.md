# Vue 组件间通讯
## 1. `props/$emit` 
父子组件间直接通过props与自定义事件通讯
```vue
<!-- 父组件 -->
<template>
    <div class="test">
        {{ num }}
        <Child :name="myname" @add="add"></Child>
    </div>
</template>
<script>
import Child from './components/Child.vue'
export default {
    data() {
        return {
            num: 123,
            myname: "cooper"
        }
    },
    components: {
        Child
    },
    methods: {
        add(e) {
            console.log(e);
            this.num += 1
        }
    }
}
</script>
<!-- 子组件 -->
<template>
    <div>
        <div>{{ name }}</div>
        <button @click="triggerAdd">触发事件</button>
    </div>
</template>
<script>
export default {
    // props:['name']
    props: {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        triggerAdd() {
            this.$emit("add", {data:123})
        }
    }
}
</script>
```

## 2.$emit/$on
借助新的Vue实例作为中央事件总线，出来处理任何级别组件间通讯。
- Event
```js
import Vue from 'vue'

const Event = new Vue()

export default Event
```
- ComponentA
```vue
<template>
    <div>
        <div>组件1</div>
        <input type="text" v-model="message" />
        <button @click="trigger">发送事件消息</button>
    </div>
</template>
<script>
import Event from '../event/event'
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        trigger() {
            Event.$emit("sendMessage", this.message)
        }
    }
}
</script>
```
- ComponentB
```vue
<template>
    <div>
        <div>接收消息：{{ message }}</div>
    </div>
</template>
<script>
import Event from '../event/event'

export default {
    data() {
        return {
            message: ""
        }
    },
    mounted() {
        Event.$on("sendMessage", this.listener)
    },
    methods: {
        listener(message) {
            console.log(123);
            this.message = message
        }
    }
}
</script>
```
## 3. Vuex 
Vuex实现了一个单向数据流，全局拥有一个state存放数据， 当组件主要更改state中的数据时，必须通过提交Mutation。
Vuex核心API:
- `state`     唯一数据源，不可变数据
- `getter`    类似computed可以给state加一些逻辑
- `mutations` state唯一改变源
- `actions`  异步提交mutation
- `modules`  vuex模块
## 4. $attrs/$listeners
- `vm.$attrs` :包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
- `vm.$listeners` :包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
**总结**： $attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners里存放的是父组件中绑定的非原生事件。
## 5. provide/inject
允许一个祖先组件向所有子孙注入依赖，不论嵌套多深。
```js
// A.vue
export default {
  provide: {
    name: '浪里行舟'
  }
}
// B.vue
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name);  // 浪里行舟
  }
}
```
:::tip
此方式注入的数据为非响应式，实现响应式有两种方式：
- provide祖先实例
- 使用Vue.obervable优化响应式   
:::
## 6. $parent / $children 与ref
- ref 直接获取组件实例
- $praent/$children 也是获取父子组件实例