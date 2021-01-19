import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: resolve => require(['@/components/signIn'],resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home'],resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/components/search'],resolve)
    },
    {
      path: '/categories',
      name: 'categories',
      component: resolve => require(['@/components/categories'],resolve)
    },
    {
      path: '/chats',
      name: 'chats',
      component: resolve => require(['@/components/chats'],resolve)
    },
    {
      path: '/settings',
      name: 'settings',
      component: resolve => require(['@/components/settings'],resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/components/detail'],resolve)
    },
    {
      path: '/payment',
      name: 'payment',
      component: resolve => require(['@/components/payment'],resolve)
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
  ]
})
