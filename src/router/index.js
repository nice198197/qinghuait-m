import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import shopCart from '@/components/shopCart/shopCart'
import mine from '@/components/mine/mine'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/classify',
        component: classify
    },
    {
        path: '/shopCart',
        component: shopCart
    },
    {
        path: '/mine',
        component: mine
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes
})
