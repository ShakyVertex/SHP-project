## 1:  vue-cli脚手架初始化项目

node + webpack + 淘宝镜像

node_modules文件夹：项目依赖文件夹

public文件夹：一般放置一些静态资源（图片），需要注意，放在public里的静态文件，webpack进行打包时，
会原封不动的打包到dist文件夹中

src文件夹：程序员源代码文件夹

assets：一般也是放置静态资源（一般放置多个组件共用的静态资源）需要注意，放置在assets里的静态资源，在webpack打包的时候，会把静态资源当作一个模块打包到JS文件里

components：一般放置的是非路由组件（全局组件）

App.vue：唯一的根组件，Vue当中的组件（.vue）

main.js：程序的入口文件

babel.config.js：配置文件，与babel相关，可以把ES6语法翻译为ES5的语法

package.json：项目的身份证，记录项目叫做什么，项目中有哪些依赖

package-lock.json：缓存性文件

README.md：说明性文件



## 2：项目的其他配置

**2.1 项目运行起来的时候，让浏览器自动打开**

在package.json中配置，之后在命令行输入`npm run serve --open`

```json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

**2.2 eslint校验工具功能关闭**

eslint会对代码进行自动语法检查，防止误判

在根目录的vue.config.js文件

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
```

**2.3 src文件夹的简写方法，配置别名**

开发项目中，src里的文件很多，总是../就很烦，配置src的别名为@

以后使用直接@开始，在jsconfig.json中

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

此后@符就会代表src文件夹，将来文件过多，找的时候也会方便很多



## 3：项目路由的分析

前端的所谓路由：KV键值对

Key：URL（地址栏中的路径）

Value：相应的路由组件

vue-router

注意：项目有上中下结构

路由组件：

home 首页路由组件、search路由组件、login登录路由、register注册组件

非路由组件：

header、footer



## 4：完成非路由组件

在项目当中，不再以HTML+CSS为主，主要以业务和逻辑为主

1. 在开发项目时，需要先书写静态页面（HTML+CSS）

2. 拆分组件
3. 获取服务器的数据动态展示
4. 完成相应的动态业务逻辑

注意，创建组件的时候，组件结构 + 组件样式 + 图片资源

咱们的项目采用less样式，浏览器不识别less样式的，需要通过less、less-loader处理less样式

把less样式变为css样式，浏览器才可以识别

`npm install --save less less-loader@5`

如果想让组件识别less样式，需要在style标签身上加上lang=less

**4.1 使用组件的步骤（非路由组件）**

1. 创建或者定义
2. 引入
3. 注册
4. 使用



## 5：路由组件的搭建

在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register

`npm install --save vue-router`

components文件夹：经常放置非路由组件

pages|views文件夹：经常放置路由组件



**5.1配置路由**

1. 项目当中配置的路由一般放置在router文件夹当中的index.js
2. 在main.js中引入路由
3. 在App.vue中写入路由出口

**5.2总结：**

1. 路由组件一般放置在pages/views文件夹中，非路由组件一般放置在components文件夹中
2. 路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字）
3. 非路由组件在使用的时候，一般都是以标签的形式使用
4. 注册完路由，不管是路由组件还是非路由组件，身上都有$route和$router属性

$route：一般用于获取路由信息【路径、query、params等等】

$router：一般进行编程行导航进行路由跳转【push/replace】

**5.3 跳转**

路由的跳转有两种形式

声明式导航router-link，可以进行路由跳转

编程式导航push|replace，可以进行路由跳转

编程式导航：声明式导航能做的，编程式导航都能做

但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑