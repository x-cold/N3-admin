import Login from './views/Login'
import Info from './views/Info'
import Layout from './layout'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/user',
    name: '用户管理',
    label: '用户管理',
    component: Layout,
    menu: true,
    redirect: '/user/list',
    children: [
      {
        path: '/user/list',
        component: Info,
        name: '用户列表',
        label: '用户列表'
      },
      {
        path: '/user/advise',
        component: Info,
        name: '用户意见',
        label: '用户意见'
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
    redirect: '/user/list'
  }
]

export default routes
