import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import store from '@/store'

import TypeNav from '@/components/TypeNav'
//全局组件命名 ：组件名称，哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false


import {mapState} from 'vuex'

import {reqGetSearchInfo} from "@/api"
console.log(reqGetSearchInfo({}));

import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
