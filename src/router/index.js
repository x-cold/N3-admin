/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  // mode: 'history',
  // root: 'N3-admin/',
  routes
})

/**
 * 路由拦截
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import storage from '../utils/storage'
import store from '../store'
import { STORAGE_KEY, MAX_LOGIN_AGE } from '../utils/const'

router.beforeEach((to, from, next) => {
  NProgress.start()
  const shouldAuth = to.meta && to.meta.auth
  if (to.name === 'login' || shouldAuth === false) {  // 无需拦截该路由
    return next()
  }
  let lastLoginTime = storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME) || 0
  if (Date.now() - lastLoginTime > MAX_LOGIN_AGE) { // 登录超时
    return next({
      name: 'login',
      query: {
        // 将当前路径传参
        back: to.fullPath
      }
    })
  }
  return next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router