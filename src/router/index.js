import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import IviewDemo from '@/components/IviewDemo'

Vue.use(Router)

// export default new Router({
//   routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'IviewDemo',
    //   component: IviewDemo
    // }
//   ]
// })

import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Phone from '../components/Phone.vue'
import Shequ from '../components/Shequ.vue'

// import router from './router'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/news',
      component:News
    },
    {
      path: '/shequ',
      component:Shequ
    },
    {
      path: '/phone',
      component:Phone
    },
  ]
})
