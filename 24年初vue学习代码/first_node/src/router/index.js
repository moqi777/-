import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";

const router = createRouter({
    //createWebHashHistory：一种URL 寻址方式，中间有了个#(http://localhost:5173/products)
    //createWebHistory：另一种方式，直接地址。不推荐使用，前后端一起使用会报错。(http://localhost:5173/products#/products)
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',//网页地址
            redirect:'/home',//重定向到/heme地址
        },
        {
            path:'/home',//路由地址
            name:'home',
            component:()=>import('../components/HelloWorld.vue')//组件
        },
        {
            path:'/carts',
            name:'carts',
            component:()=>import('../views/carts.vue')
        },
        {
            path:'/products',
            name:'products',
            component:()=>import('../views/products.vue')
        },
    ]
})
export default router;
