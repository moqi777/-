import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'home'
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('../components/HelloWorld.vue')
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
        }
    ]
})
export default router;