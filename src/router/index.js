import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/pages/index')
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: () => import('@/pages/changeCity')
        },
        {
          path: 'goods/:name',
          name: 'goods',
          component: () => import('@/pages/goodsList')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
