import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import regist from '@/components/regist'
import login from '@/components/login'
import zhineng from '@/components/zhineng'
import department from '@/components/department'
import departmentInfo from '@/components/departmentInfo'
import userContainer from '@/components/userContainer'
import userMsg from '@/components/userMsg'
import userMedicalhistory from '@/components/userMedicalhistory'
import guahao from '@/components/guahao'
import yanke from '@/components/yanke'
import docter from '@/components/docter'
import docterinfo from '@/components/docterinfo'
import docterback from '@/components/docterback'
import zuozhen from '@/components/zuozhen'
import docwelcome from '@/components/docwelcome'
import pic from '@/components/pic'
import userOrder from '@/components/userOrder'
import ApplyMark from '@/components/ApplyMark'

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
      component: zhineng
    },
    {
      path: '/department',
      name: 'department',
      component: department
    },
    {
      path: '/departmentInfo',
      name: 'departmentInfo',
      component: departmentInfo
    },
    {
      path: '/zhineng',
      name: 'zhineng',
      component:zhineng,
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
      path:'/userContainer',
      name:'userContainer',
      component:userContainer
    },
    {
      path:'/userMsg',
      name:'userMsg',
      component:userMsg
    },
    {
      path:'/userMedicalhistory',
      name:'userMedicalhistory',
      component:userMedicalhistory
    },
    {
      path:'/guahao',
      name:'guahao',
      component:guahao
    },
    {
      path: '/docterback',
      name: 'docterback',
      component: docterback,
    },
    {
      path: '/docwelcome',
      name: 'docwelcome',
      component: docwelcome,
    },
    {
      path: '/zuozhen',
      name: 'zuozhen',
      component: zuozhen,
    },
    {
      path:'/pic',
      name:'pic',
      component:pic
    },
    {
      path:'/userOrder',
      name:'userOrder',
      component:userOrder
    },
    {
      path:'/ApplyMark',
      name:'ApplyMark',
      component:ApplyMark
    },



  ]
})
