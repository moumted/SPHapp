import Vue from 'vue'
import App from './App.vue'

import '@/plugins/validate'

import router from '@/router'

import store from '@/store'

import TypeNav from '@/components/TypeNav'
//全局组件命名 ：组件名称，哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

import { Button,MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import VueLazyload from 'vue-lazyload'
import logo from '@/assets/logo.png'
Vue.use(VueLazyload,{
  loading : logo
})

import {reqGetSearchInfo} from "@/api"
console.log(reqGetSearchInfo({}));

import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import "swiper/css/swiper.css"

import * as API from '@/api'

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
