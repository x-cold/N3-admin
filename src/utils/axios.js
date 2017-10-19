import axios from 'axios'
import Vue from 'vue'
import NProgress from 'nprogress'
import store from '../store'
import API from '../api'
import {
  MSG
} from './const'
import {
  IS_DEV
} from '../config'
// if (IS_DEV) {
  require('./mock')
// }
let http = axios.create({
  baseURL: API.ROOT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  withCredentials: false
})

http.interceptors.request.use((config) => {
  if (config.appendToken === false) { // 无需 TOKEN 注入
    NProgress.start()
    return config
  }
  const token = store.state.user.token
  /**
   * TOKEN 注入
   *
   * 此处直接在 query (GET方法) 或者 form-data (POST PUT DELETE 等方法) 注入session 参数
   * ！实际情况请根据前后端的API规范进行定义
   */
  if (config.method === 'get') {
    config.params ? (config.params.session = token) : (config.params = {
      session: token
    })
  } else {
    if (config.data) {
      config.data = config.data + `&session=${token}`
    } else {
      config.data = `session=${token}`
    }
  }
  NProgress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  NProgress.done()
  /**
   * 响应状态判断
   *
   * 通过 state 进行服务状态的判断
   * 通过 error_message 提取后端提供的错误信息
   * ！实际情况请根据前后端的API规范进行定义
   */
  let data = res.data
  if (!data || data.state !== 'success') {
    return Promise.reject(data.error_message || MSG.SERVICE_FAIL)
  }
  return data
}, error => {
  NProgress.done()
  if (error.response) {
    console.error('Response: ', error.response.data)
    console.error('Status: ', error.response.status)
    console.error('Headers: ', error.response.headers)
  } else {
    console.error('Error: ', error.message)
  }
  console.error('Config:', error.config)
  return Promise.reject(error)
})

export default {
  install () {
    Vue.prototype.$http = http
    Vue.http = http
  }
}
