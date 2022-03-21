# React 考点笔记
## React事件
- Class 组件中定义事件需要绑定this，或者使用具名箭头函数定义（传参情况下只能用bind)
- React组件的event是自己定义的对象，模拟了DOM事件的所有能力。
- React事件绑定到root组件，利于多个React版本并存。
## 父子组件通讯
- props传递数据
- props传递函数
- props类型检查
## setState
- 不可变值
- 可能是异步更新： setState直接使用是异步的，在setTimeout与自定义事件中是同步的。
- 可能会被合并：传入参数是对象时会合并，函数不会合并
## 组件生命周期
 - 挂载时- constructor-render-componentDidMount
 - 更新时- componentDidUpdate
 - 卸载时- componentWillUnMount

## 函数组件
- 纯函数，输入props，输出JSX
- 没有实例，没有生命周期，没有state
- 不能扩展其他方法
## 非受控组件
使用场景：操作dom ，如文件上传
- ref： 通过`React.creatRef()`创建，在render中通过ref属性绑定，最后在method中获取dom
- defaultValute defaultChecked： state只用于设置初始化
- 手动操作DOM元素
## Portals
将组件渲染到制定DOM节点 
## context
```js
const context = React.createContext()

<context.Provider></context.Provider>
component.contextType = context
<context.consumer></context.Provider >
```
## 异步组件
- import()
- React.lazy
- React.Suspense
## 性能优化
- SCU
```js
shouldComponentUpate(nextProps,nextState){
    if(nextState.count !== this.state.count) {
    return true //默认值返回true
}
    return false // 不重复渲染
}
```
:::tip
SCU默认返回true，父组件有更新，子组件无条件更新 
:::
- PureComponent(Class)和React.Memo(function)          
  PureComponet在SCU中实现了浅比较
  
- Immutable.js
## 高阶组件 HOC
 ```js
 const HOC= (Component)=>{
     class HOC extends React.Component {
         // 公共逻辑
         render(){
             return <Component {...this.props}></Component>
         }
     }
      return HOC
 }
 ```
## Render Props
## Redux  
- 基本概念 ： 
  - **Store** :
    - 维持应用的state
    - 提供getState()方法偶去state
    - 提供dispatch(action)方法更新state
  - **Action** :
  - **Reducer**: reducers 指定了应用状态的变化如何响应`actions`并发送到store,reducer是一个纯函数，接收旧的state和action，返回新的state
   ```js
   (previousState, action) => newState
   ```
- 单项数据流：
  - dispatch(action)
  - reducer -> newState
  - subscribe触发通知
- react-redux
  - react-redux将组件区分为容器组件和UI组件
  - Provier 顶级组件让所有组件都能够访问到Redux中的数据
  ```jsx
    <Provider store = {store}>
        <App />
    </Provider>
  ``` 
  - connect
  - mapStatetoProps
  - mapDispatchtoProps
- 异步action：
  - redux-sage
  - redux-thunk
## react-router
