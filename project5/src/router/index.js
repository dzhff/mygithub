// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入插件
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'



// 使用
// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象

const routes = [
    {
        path:'',
        // redirect重定向:
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
    // {
    //     path:'/user/:Username',
    //     component:User
    // }
]
const router = new VueRouter({
// 配置路由和组件之间的应用关系
routes,
})

// 3.将router对象传入到Vue实例中
export default router