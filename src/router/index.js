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
      },{
         path: 'ranklist',
         component: require('../views/rank/index.vue')
      }]
    },{
    	path:'/search',
    	name:'search',
    	component: require('../components/search/search.vue')
    },{
      path:'/noverinfo',
      component: require('../components/noverInfo/index.vue')
    },{
      path:'/noverlist',
      component: require('../components/noverList/index.vue')
    },{
      path: '/content/:id',   //小说内容模块路由，有一点点卫开发完成
      component: require('../views/content.vue')
    },{
      path: '/classify',
      name: 'classify',
      component: require('../views/classify/index.vue')
    },{
       path:'/rankinfo',    //排行榜其他榜跳转路由
       component: require('../views/rankList/index.vue')
    },{
    	path: '*',
    	redirect: '/index'
    },{
       path: '/rankower/',
       component: require('../views/rankOwer/index.vue'),
       children: [{
          path: 'week',
          component: require('../views/rankOwer/rankOwerList/week.vue')
       }]
    }
  ]
})
