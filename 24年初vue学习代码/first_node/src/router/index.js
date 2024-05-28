import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),//寻址方式
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
