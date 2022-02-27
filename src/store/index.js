import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {};
// const mutations = {};
// const actions = {};
// //getters：计算属性，用于简化仓库数据，让组件获取数据更加方便
// const getters = {}

import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
export default new Vuex.Store({
    modules : {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})