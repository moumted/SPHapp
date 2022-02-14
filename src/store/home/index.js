import {reqCategoryList} from '@/api';

const state = {
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList = data
    }
};
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result)
        if(result.code == 200){
            commit("CATEGORYLIST",result.data.slice(0,16))
        }
    }
};
const getters = {};

export default {
    namespace:true,
    state,
    mutations,
    actions,
    getters
}