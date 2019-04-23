//
// import Vue from 'vue'
// import Router from 'vue-router'
// import MainPage from '../components/MainPage'
// import Login from '../components/Login'
//
// Vue.use(Router)
//
// export default new Router({
//     mode:"history",
//     routes: [
//
//         {
//             path:'/',
//             redirect:'Login'
//
//         },
//         {
//             path:'/Login',
//             component: Login
//         },
//         {
//             path: '/MainPage',
//             component: MainPage
//         }
//
//     ]
// })
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import Login from '../views/login/index'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {
        path:'/',
        redirect:'Login',
    },
    {
        path:'/Login',
        component:Login,
    },
    // {path: '', component: () => import('@/views/login/index'), hidden: true,redirect:'/Login'},
    // {path: '/404', component: () => import('@/views/404'), hidden: true},
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index'),
            meta: {title: '首页', icon: 'home'}
        }]
    },

    {
        path: '/pms',
        component: Layout,
        redirect: '/pms/product',
        name: 'pms',
        meta: {title: '商品', icon: 'product'},
        children: [{
            path: 'product',
            name: 'product',
            component: () => import('@/views/pms/product/list'),
            meta: {title: '商品列表', icon: 'product-list'}
        },
            {
                path: 'addProduct',
                name: 'addProduct',
                component: () => import('@/views/pms/product/add'),
                meta: {title: '添加商品', icon: 'product-add'}
            }
        ]
    },
    {
        path: '/oms',
        component: Layout,
        redirect: '/oms/order',
        name: 'oms',
        meta: {title: '订单', icon: 'order'},
        children: [
            {
                path: 'order',
                name: 'order',
                component: () => import('@/views/oms/order/list'),
                meta: {title: '订单列表', icon: 'product-list'}
            },
            {
                path: 'orderSetting',
                name: 'orderSetting',
                component: () => import('@/views/oms/order/setting'),
                meta: {title: '订单设置', icon: 'order-setting'}
            }
        ]
    },
    {
        path: '/sms',
        component: Layout,
        redirect: '/sms/coupon',
        name: 'sms',
        meta: {title: '营销', icon: 'sms'},
        children: [
            {
                path: 'coupon',
                name: 'coupon',
                component: () => import('@/views/sms/coupon/list'),
                meta: {title: '优惠券列表', icon: 'sms-coupon'}
            },
            {
                path: 'addCoupon',
                name: 'addCoupon',
                component: () => import('@/views/sms/coupon/add'),
                meta: {title: '添加优惠券'},
                hidden: true
            }
        ]
    },
    // {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap,

})

