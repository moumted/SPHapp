import {reqGetSearchInfo} from '@/api'
const state = {
    searchList : {}
};
const mutations = {
    GETSERCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    //reqGetSearchInfo在获取服务器数据的时候，至少需要传递一个参数
    //params形参，当用户派发actions的时候，第二个参数传过来的，至少是一个空数组
    async getSearchList ({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit("GETSERCHLIST",result.data)
        }
    }
};
//计算属性，简化数据
//此时形参state是指的当前仓库中的state
const getters = {
    goodsList(state){
        // console.log(123123,state);
        return state.searchList.goodsList || []
    },
    attrsList(state){
        // console.log(123123,state);
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        // console.log(123123,state);
        return state.searchList.trademarkList || []
    }
};

export default {
    namespace:true,
    state,
    mutations,
    actions,
    getters
}