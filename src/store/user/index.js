import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLoginout} from '@/api'
import {setToken} from '@/utils/token'
const state = {
    code : '',
    token : localStorage.getItem('TOKEN'),
    userInfo : {}
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    UERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEARINFO(state){
        state.token = '',
        state.userInfo = {},
        localStorage.removeItem('TOKEN')
    }
}
const actions = {
    async getCode({commit},phone){
        let result = await reqGetCode(phone)
        // console.log(result);
        if(result.code == 200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        // console.log(result)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        // console.log(result)
        if(result.code == 200){
            commit('UERLOGIN',result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    //  获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        // console.log(result)
        if(result.code == 200){
            commit('GETUSERINFO',result.data)
            return 'ok'
        }
    },
    // 退出登录
    async userLoginout({commit}){
        let result = await reqLoginout()
        // console.log(result)
        if(result.code == 200){
            commit('CLEARINFO')
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