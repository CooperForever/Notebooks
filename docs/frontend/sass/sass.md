# Sass基础
## Sass变量
```scss
//变量声明
$highlight-color: #F90;

//引用
.selected {
  border: 1px solid $highlight-color;
}

//嵌套引用
$border: 1px solid  $highlight-color;
.selected {
  border: $border
}

```
<strong>变量名、函数名不区分`_`与`-`</strong>
## 文件导入
 - 使用`@import`导入时，可以省略后缀，并且导入时机是生成css文件前，因此不会增加请求次数。
### 默认导入
一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。

```scss
$fancybox-width: 400px !default;
.fancybox {
    width: $fancybox-width;
}
```
`!default`行为与css中的`!important`类似，可以使局部文件中的重复声明无效。
### 原生导入CSS
以下场景会以原生方式导入css文件，并产生额外的请求：
- 被导入文件的名字以.css结尾；
- 被导入文件的名字是一个URL地址。
- 被导入文件的名字是CSS的url()值。
## 混合器 mixins
 `mixins`用于抽取重复代码以达到复用的目的。
```scss
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
//使用@include插入混入
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```
## mixins传参
`mixins`可以通过传参插入有差异的模板代码
```scss
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

//引入时可用通过 name:value的形式声明参数，可以忽略参数顺序
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```
## 继承
继承也可是实现样式的复用，但是继承是基于类（有时是其他选择器），使用继承时应该基于语义化的关系上。
```scss
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
//.seriousError不仅会继承.error自身的所有样式，任何跟.error有关的组合选择器样式也会被.seriousError以组合选择器的形式继承
//.seriousError从.error继承样式
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}
```
<strong>不要在css规则中使用后代选择器（比如.foo .bar）去继承css规则，如果继承的css规则中也有后代选择器，sass需要枚举可能出现的所有组合。</strong>