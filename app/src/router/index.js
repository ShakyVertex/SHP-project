// 导入依赖
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 先保存一份VueRouter原型的push\replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

// 重写replace
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {show:true}
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: {show:true},
            name: 'search'
        },
        {
            path: '/login',
            component: Login,
            meta: {show:false}
        },
        {
            path: '/register',
            component: Register,
            meta: {show:false}
        },
        {
            // 重定向默认路径到首页
            path: '*',
            redirect: '/home'
        }
    ]
})