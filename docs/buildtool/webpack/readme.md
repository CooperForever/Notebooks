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