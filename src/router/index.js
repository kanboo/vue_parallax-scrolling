import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/page/Index')
    },
    {
      path: '/question',
      name: 'Question',
      component: () => import('@/page/Question')
    },
    {
      path: '/caculating',
      name: 'Caculating',
      component: () => import('@/page/Caculating')
    },
    {
      path: '*',
      name: 'Index',
      component: () => import('@/page/Index')
    }
  ]
})
