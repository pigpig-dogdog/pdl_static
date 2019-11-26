# pdl

> Platform of deep learning

## 目录结构
~~~bash
-utils,工具类封装，封装一些常用的方法，按模块划分为几个js文件
  -request.js,封装axios，对向后端发起的请求做统一处理，对response统一拦截
~~~

## 文档命名规则
``` bash
-目录，用横线‘hello-world’
-文件，用横线‘hello-world’
-组件，用大驼峰式‘HelloWorld’
-变量，小驼峰式‘helloWorld’
```
## Eslint设置
``` bash
打开‘.eslintrc.js’ 修改‘rules’下的内容
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
