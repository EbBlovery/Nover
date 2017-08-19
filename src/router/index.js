import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [{
         path: 'index',
         component: require('../components/firstPage/index.vue')
      },{
      	 path: 'list',
      	 component: require('../components/listPage/index.vue')
      }]
    }
  ]
})
