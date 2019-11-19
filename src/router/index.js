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
import axios from 'axios'
//后台管理
import adddrug from '@/components/houtai/adddrug'
import houtai from '@/components/houtai/index'
import updatedrug from '@/components/houtai/updatedrug'
import selectdrug from '@/components/houtai/selectdrug'
import addpart from '@/components/houtai/addpart'
import selectdepart from '@/components/houtai/selectdepart'
import updatedepart from '@/components/houtai/updatedepart'
import adddocshedule from '@/components/houtai/adddocshedule'
import docshedule from '@/components/houtai/docshedule'
import updatedocshedule from '@/components/houtai/updatedocshedule'
import addocmsg from '@/components/houtai/addocmsg'
import selectdocmsg from '@/components/houtai/selectdocmsg'
import updatedoc from '@/components/houtai/updatedoc'
import test from '@/components/houtai/test'
import selectecharts from '@/components/houtai/selectecharts'
import addlbtmsg from '@/components/houtai/addlbtmsg'
import selectlbtmsg from '@/components/houtai/selectlbtmsg'
import drugdetails from '@/components/houtai/drugdetails'
import mychat from '@/components/houtai/mychat'
import chatlogin from '@/components/houtai/chatlogin'
import cureg from '@/components/houtai/cureg'
import docreg from '@/components/houtai/docreg'
import pinglundainzan from '@/components/houtai/pinglundainzan'
import mq from '@/components/houtai/mq'
import yishengzhuce from '@/components/houtai/yishengzhuce'
import docRegist from '@/components/docRegist'
import shipin from '@/components/houtai/shipin'
import tianjiaguanliyuan from '@/components/houtai/tianjiaguanliyuan'


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
      path:'/docRegist',
      name:'docRegist',
      component:docRegist
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
    {
      path: '/houtai',
      name: 'houtai',
      component: houtai
    },
    {
      path: '/adddrug',
      name: 'adddrug',
      component: adddrug
    },
    {
      path: '/updatedrug',
      name: 'updatedrug',
      component: updatedrug
    },
    {
      path: '/selectdrug',
      name: 'selectdrug',
      component: selectdrug
    },
    {
      path: '/addpart',
      name: 'addpart',
      component: addpart
    },
    {
      path: '/selectdepart',
      name: 'selectdepart',
      component: selectdepart
    },
    {
      path: '/updatedepart',
      name: 'updatedepart',
      component: updatedepart
    },
    {
      path: '/adddocshedule',
      name: 'adddocshedule',
      component: adddocshedule
    },
    {
      path: '/docshedule',
      name: 'docshedule',
      component: docshedule
    },
    {
      path: '/updatedocshedule',
      name: 'updatedocshedule',
      component: updatedocshedule
    },
    {
      path: '/addocmsg',
      name: 'addocmsg',
      component: addocmsg
    },
    {
      path: '/selectdocmsg',
      name: 'selectdocmsg',
      component: selectdocmsg
    },
    {
      path: '/updatedoc',
      name: 'updatedoc',
      component: updatedoc
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/selectecharts',
      name: 'selectecharts',
      component: selectecharts
    },
    {
      path: '/addlbtmsg',
      name: 'addlbtmsg',
      component: addlbtmsg
    },
    {
      path: '/selectlbtmsg',
      name: 'selectlbtmsg',
      component: selectlbtmsg
    },
    {
      path: '/drugdetails',
      name: 'drugdetails',
      component: drugdetails
    },
    {
      path: '/mychat',
      name: 'mychat',
      component: mychat
    },
    {
      path: '/chatlogin',
      name: 'chatlogin',
      component: chatlogin
    },
    {
      path: '/cureg',
      name: 'cureg',
      component: cureg
    },
    {
      path: '/docreg',
      name: 'docreg',
      component: docreg
    },
    {
      path: '/pinglundainzan',
      name: 'pinglundainzan',
      component: pinglundainzan
    },
    {
      path: '/mq',
      name: 'mq',
      component: mq
    },
    {
      path: '/yishengzhuce',
      name: 'yishengzhuce',
      component: yishengzhuce
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    },
    {
      path: '/tianjiaguanliyuan',
      name: 'tianjiaguanliyuan',
      component: tianjiaguanliyuan
    }
  ]
})
