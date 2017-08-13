import Login from '../views/login'
import CommonLayout from '../layout'

import NormalForm from '../views/form'
import NormalTable from '../views/table'

const routes = [
  // Login View
  {
    path: '/login',
    component: Login,
    name: 'login',
    menu: false
  },
  // Normal View
  {
    path: '/test',
    // 异步载入组件
    component: function (resolve, reject) {
      require.ensure([], function (require) {
          let comm = require('../views/test/query')
          resolve(comm)
      })
    },
    name: 'testQuery',
    menu: false,  // 禁止在导航(navbar / levelbar)中显示
    meta: {
      auth: false // 无需登录校验
    }
  },
  // Form View
  {
    path: '/form',
    name: 'form',
    icon: 'bars',
    component: CommonLayout,
    redirect: '/user/',
    meta: {
      label: '表单组件'
    },
    children: [
      {
        path: '/user/',
        component: NormalForm,
        name: 'normalForm',
        meta: {
          label: '普通表单'
        }
      }
    ]
  },
  // Table View
  {
    path: '/table',
    icon: 'table',
    name: 'table',
    component: CommonLayout,
    redirect: '/table/',
    meta: {
      label: '表格组件'
    },
    children: [
      {
        path: '/table/',
        component: NormalTable,
        name: 'normalTable',
        meta: {
          label: '普通表格'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/table/'
  }
]

export default routes
