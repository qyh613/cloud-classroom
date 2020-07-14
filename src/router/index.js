import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入首页显示 ************************888
import Course from "../views/Course/Course";
import IndexLayout from "../layout/Index/IndexLayout";
import Index from "../views/Index/Index";
import OtherLayout from "../layout/Other/OtherLayout";
import Play from "../views/Course/Play";
import ShoppingCart from "../views/Course/ShoppingCart";


let routes;
routes = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        component: IndexLayout,
        children: [{
            path: '',
            component: Index,
        },

        ]
    },
    {
        path: '/course/:courseId',
        component: OtherLayout,
        children: [{
            path: '',
            component: Course,
        }, {
            path: '/course1/play/:courseId',
            component: Play,
        }, {
            path: '/other/shopping-cart',
            component: ShoppingCart,
        },

        ]
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
