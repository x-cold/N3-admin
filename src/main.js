// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import VueRouter from 'vue-router'
import store from './vuex'
import axios from './axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import N3 from 'N3-components'

Vue.use(N3)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

Vue.use(VueRouter)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
