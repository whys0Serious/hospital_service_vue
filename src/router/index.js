import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import regist from '@/components/regist'
import login from '@/components/login'
import zhineng from '@/components/zhineng'
import yanke from '@/components/yanke'
import docter from '@/components/docter'
import docterinfo from '@/components/docterinfo'
import docterback from '@/components/docterback'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/regist',
      name:'regist',
      component:regist
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/zhineng',
      name: 'zhineng',
      component: zhineng,
      children:[
        {path:'yanke',name:'yanke',component:yanke}
      ]
    },
    {
      path: '/docter',
      name: 'docter',
      component: docter
    },
    {
      path: '/docterinfo',
      name: 'docterinfo',
      component: docterinfo
    },
    {
      path: '/docterback',
      name: 'docterback',
      component: docterback,

    }

  ]
})
