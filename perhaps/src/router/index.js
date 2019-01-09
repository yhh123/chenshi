import Vue from 'vue'
import Router from 'vue-router'

// 登陆
// import perhapsIndax from './perhapsIndax'
import perhaps from './perhaps'

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
    ...perhaps
    // 404、401、500 错误页面
  ]
})

export default router
