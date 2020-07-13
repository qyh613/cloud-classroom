import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入首页显示 ************************888
import Index from "../layout/Index";
import Course from "../layout/Course";


let routes;
routes = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/course/:courseId',
        component: Course
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
