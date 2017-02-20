import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'

axios.interceptors.response.use(res => {
  // Do something with response data
  console.log(res)
  return res
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

export default {
  install() {
    Vue.prototype.$http = axios
  }
}
