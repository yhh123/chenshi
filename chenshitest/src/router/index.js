import Vue from 'vue'
import Router from 'vue-router'

// 登陆
import landing from './landing'

Vue.use(Router)

// export default new Router({
//   routes: [
//     ...landing,
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
const router = new Router({
  mode: 'history',
  routes: [
    ...landing
    // 404、401、500 错误页面
  ]
})

export default router
