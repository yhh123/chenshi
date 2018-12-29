export default [
  {
    path: '/landing',
    name: 'landing',
    component: resolve => require(['@/views/landing/landing'], resolve),
    meta: {
      title: '登录'
    }
  }
]
