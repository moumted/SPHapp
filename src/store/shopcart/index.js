import {reqCartList , reqDeleteCartById,reqUpdateCheckedById} from '@/api/index'

const state = {
    cartList : []
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList ({commit}){
        let result = await reqCartList()
        // console.log(22,result)
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('false'))
        }
    },
    async updateCheckById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked);
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    // 删除所有的勾选产品
    deteleAllCheckedCart({dispatch,getters}){
        // console.log(context);
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item=>{
            let result = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';
            PromiseAll.push(result)
        })
        console.log(PromiseAll);
        return Promise.all(PromiseAll)
    },
    // 修改所有产品的状态
    upDateCartChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item=>{
            let result = dispatch('updateCheckById',{
                skuId : item.skuId,
                isChecked
            })
            PromiseAll.push(result)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}