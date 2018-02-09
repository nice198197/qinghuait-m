import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import aboutUs from '@/components/aboutUs/aboutUs'
import news from '@/components/news/news'

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
        path: '/aboutUs',
        component: aboutUs
    },
    {
        path: '/news',
        component: news
    }
];
export default new Router({
    routes
})
