import Login from './views/login'
import Info from './views/info'
import TableIndex from './views/table'

import Layout from './layout'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/table',
    name: '数据表格',
    label: '数据表格',
    component: Layout,
    menu: true,
    redirect: '/table/list',
    children: [
      {
        path: '/table/list',
        component: TableIndex,
        name: '基本表格',
        label: '基本表格'
      },
      {
        path: '/table/advance',
        component: Info,
        name: '更多案例',
        label: '更多案例'
      }
    ]
  },
  {
    path: '/order',
    name: '订单管理',
    label: '订单管理',
    component: Layout,
    menu: true,
    redirect: '/order/list',
    children: [
      {
        path: '/order/list',
        component: Info,
        name: '订单列表',
        label: '订单列表'
      },
      {
        path: '/order/statistics',
        component: Info,
        name: '订单统计',
        label: '订单统计'
      }
    ]
  },
  {
    path: '/notice',
    name: '公告管理',
    label: '公告管理',
    component: Layout,
    menu: true,
    redirect: '/notice/list',
    children: [
      {
        path: '/notice/list',
        component: Info,
        name: '公告列表',
        label: '公告列表'
      }
    ]
  },
  {
    path: '/goods',
    name: '商品管理',
    label: '订单管理',
    component: Layout,
    menu: true,
    redirect: '/goods/list',
    children: [
      {
        path: '/goods/list',
        component: Info,
        name: '商品列表',
        label: '商品列表'
      },
      {
        path: '/goods/add',
        component: Info,
        name: '商品发布',
        label: '商品发布'
      }
    ]
  },
  {
    path: '*',
    redirect: '/table/list'
  }
]

export default routes
