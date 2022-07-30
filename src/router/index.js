import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        redirect: '/friends'
    },
    {
        path:'/',
        name:'Home',
        component:()=>import('../view/Home'),
        children:[
            {
                path: '/friends',
                name: 'Friends',
                component: () => import('../view/Friends'),
            },
            {
                path: '/message',
                name: 'Message',
                component: () => import('../view/Message'),
            },
            {
                path: '/search',
                name: 'Search',
                component: () => import('../view/Search'),
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () => import('../view/Mine')
            },
            {
                path:'/personal',
                name:'Personal',
                component:()=>import('../view/Personal')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
export default router