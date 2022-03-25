# webpack基础配置
## entry
用于配置webpack解析入口
```js
//配置单个入口
module.exports = {
  //...
  entry:'index.js'
};
//配置多入口
module.exports = {
  //...
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js',
  },
};
```
## Output
配置打包文件输出
```js
const path = require('path');

module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist/'), //需要绝对路径
    filename: '[name].[contentHash].js', // 文件输出名
    clean: true  // 自动清理上次打包文件
  },
};
```

### 配置loader与plugin
loader用于对模块的源代码进行转换。plugin 目的在于解决 loader 无法实现的其他事，可以贯穿webpack全部生命周期。
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.?vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
      
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html"
        }),
    ]
}
```
## 配置babel
webpack配置babel需要安装一下依赖
- babel-loader 
- @babel/core babel核心包
- @babel/preset-env babel编译的预设
在webpack中配置babel可以通过babel-loader的options，也可以新建.babelrc.js配置文件
```js
module.exports = {
  "presets": [["@babel/preset-env", {
    targets: {
      chrome: "58",
      ie: "8",
    },
  }]],
  plugins: ["@babel/plugin-proposal-class-properties"]
}

```
## SourceMap
SourceMap 是一种映射关系，当项目运行后，如果出现错误，我们可以利用 SourceMap 反向定位到源码位置。
| 关键字 | 描述                               |
| ------ | ---------------------------------- |
| inline | 代码内通过dataUrl形式引入SourceMap |
| hidden | 生成SourceMap文件，但不使用        |
| eval   | eval()形式执行代码                 |
| cheap  | 只需要定位到行，不需要列信息       |
| module | 展示源代码中的错误位置             |

开发环境推荐配置：`eval-cheap-module-source-map`
- 生成代码通过 eval 执行
- 包含 dataUrl 形式的 SourceMap 文件
- 可以在编译后的代码中定位到错误所在行信息
- 不需要定位列信息，打包速度较快
- 在源代码中定位到错误所在行信息    

生产环境推荐配置：`none`

## 构建速度优化
### 构建时间分析
 安装 `speed-measure-webpack-plugin`,在webpack@5中部分loader和plugins需要降级处理。
### 优化resolve配置
1. `alias` 用于创建别名，简化模块引入。
   ```js
   // webpack.config.js
    resolve:{
    // 配置别名
        alias: {
        '~': resolve('src'),
        '@': resolve('src'),
        'components': resolve('src/components'),
        }
    }
    // xxx.js
    import '~/index.js'
    import '@/router.js'
   ```
2. extensions
   模块导入不带扩展名时，webpack按照从左到右的顺序尝试解析模块,自定义会覆盖默认配置，使用`...`保留默认配置
   ```js
    resolve: {
        extensions: ['.ts', '...'], // defalut extensions: ['.js', '.json', '.wasm'],
    },
   ```
3. externals
    `externals`配置选项提供了「从输出的 bundle 中排除依赖」的方法。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
    ```js
    const config = {
        //...
        externals: {
            jquery: 'jQuery',
        },
    };

    import $ from 'jquery';
    $('.my-element').animate(/* ... */);
    ```
4. 缩小范围
   配置loader时使用include与exclude去指定或者排除目录，exlcude优先级更高
5. noParse
   - 不需要解析的第三发库，通过字段配置，提高构建速度
   - 忽略的文件不会解析import 、require语法
  ```js
  const config = {
    //...
    module: { 
        noParse: /jquery|lodash/,
        rules:[...]
    }
  };
  ```
6. IgnorePlugin
   用于忽略某些库中的某些文件
   ```js
    const config = {
        plugins:[ // 配置插件
            ...
            new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
            }),
        ]  
    };
   ```
   **与noParse区别：** noParse不解析，但是引入代码中有; IgnorePlugin直接不引入，代码中没有
7. 多进程配置
   :::tip
   在小型项目中，配置多进程打包反而会增加时间成本，因为进程之间通讯和启动进程都有时间开销。
   :::
   安装`thread-loader`,使用时，需将此 loader 放置在其他 loader 之前。放置在此 loader 之后的 loader 会在一个独立的 worker 池中运行。
   ```js
    rules: [
      {
        test: /\.js$/i,
        include: resolve('src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader', // 开启多进程打包
            options: {
              worker: 3,
            }
          },
          'babel-loader',
        ]
      }
    ]
   ```
8. 开启缓存
- babel-loader开启缓存
  ```js
     use: [
          // ...
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // 启用缓存
            }
          },
        ]
  ```
- cache-loader
  ```js
  rules: [
      {
        test: /\.(s[ac]|c)ss$/i, 
        use: [
          MiniCssExtractPlugin.loader,
          'cache-loader', // 缓存前面 loader 转换的结果
          'css-loader',
          'postcss-loader',
        ]
      }]
  ```
- hard-source-webpack-plugin
  webpack5之前需要使用该插件缓存，减少重复构建。
- cache 持久化缓存
  ```js
  const config = {
    cache: {
        type: 'filesystem', // 开发模式默认为 memory,生成环境禁用
    },
   };
  ```
## 优化构建结果
1. 压缩css、js
  ` css-minizer-webpack-plugin` 需要安装，TerserPlugin webpack内置
  ```js
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
    }
  ```
3. Tree-shaking
   Tree-shaking 作用是剔除没有使用的代码，以降低包的体积。生产环境默认开启。
4. Scope Hoisting
   作用域提升，原理是将多个模块放在同一个作用域下，**以此来减少函数声明和内存开销**，webpack默认开启
## webpack工作原理
![avatar](/images/webpack2.awebp)
webpack首先从配置文件和shell启动语句中读取合并参数，初始化完成后调用Complier的`run`来启动编译构建过程，webpack的构建流程包括：
- compile
- make
  从入口文件触发，调用所有loader对模块翻译，在找出模块的依赖
- build
  生成依赖关系图
- seal
  根据模块之间的依赖关系，组装成包含多个模块的Chunk，在把chunk转换成单独的文件加入输出列表
- emit
  根据确定的输出路径和文件名，把文件内容写入到文件系统