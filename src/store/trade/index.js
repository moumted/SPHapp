import {reqAddressInfo,reqOrderInfo} from "@/api"

const state = {
    address : [],
    orderInfo : {}
}
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code == 200){
            // console.log(22,result)
            commit('GETUSERADDRESS',result.data)
        }
    },

    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        // console.log(11,result)
        if(result.code == 200){
            commit('GETORDERINFO',result.data)
        }
    }

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}