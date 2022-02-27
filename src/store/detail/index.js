import { reqGoodsInfo ,reqAddOrUpdateShopCart} from '@/api'

//用户临时身份模块
import { getUUID} from '@/utils/uuid_token'

const state = {
    goodInfo : {},
    // 用户登陆的临时身份
    uuid_token : getUUID()
}
const mutations = {
    GETGOODSINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        // console.log(66,result)
        if(result.code == 200){
            commit('GETGOODSINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        // 此处是商品添加到购物车将数据返回后台，得到后台添加成功的指令，并不需要从后台得到数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // console.log(result)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    }
}

//简化数据
const getters = {
    categoryView(state){
        //state.goodsInfo初始状态为空对象，空对象中的categoryView的属性值为undefined
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || {} 
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}