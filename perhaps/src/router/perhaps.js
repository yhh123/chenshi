export default [
  {
    path: '',
    name: 'perhapsIndax',
    component: resolve => require(['@/views/perhaps/PerhapsIndax'], resolve),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/perhapsTeam',
    name: 'perhapsTeam',
    component: resolve => require(['@/views/perhaps/perhapsTeam'], resolve),
    meta: {
      title: '或许Team'
    }
  },
  {
    path: '/business_cooperation',
    name: 'businessCooperation',
    component: resolve => require(['@/views/perhaps/businessCooperation'], resolve),
    meta: {
      title: '商务合作'
    }
  },
  {
    path: '/link_shelf',
    name: 'linkShelf',
    component: resolve => require(['@/views/perhaps/LinkShelf'], resolve),
    meta: {
      title: 'Link墙面曲木置物架'
    }
  },
  {
    path: '/rocking_chair',
    name: 'rockingChair',
    component: resolve => require(['@/views/perhaps/RockingChair'], resolve),
    meta: {
      title: 'Hygge曲木摇椅'
    }
  },
  {
    path: '/stool',
    name: 'stool',
    component: resolve => require(['@/views/perhaps/stool'], resolve),
    meta: {
      title: 'Hygge曲木凳'
    }
  }
]
