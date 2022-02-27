import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store'

Vue.use(VueRouter)


let originPush = VueRouter.prototype.push

Vue.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

// Vue.prototype.push = function push (location){
//     return originPush.call(this, location).caatch(error=>error)
// }


let router =  new VueRouter({
    routes,
    //
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y : 0 }
    },
})

router.beforeEach(async (to,from,next) =>{
    next();

    let token = store.state.user.token
    let name = store.state.user.userInfo.name
     if(token){
        if(to.path == '/login' || to.path=="/register"){
            next()
        }else{
           // 登陆且拥有用户信息 
            if(!name){
                try {
                    await store.dispatch('getUserInfo')
                } catch (error) {
                    // token失效，退出登录
                    await store.dispatch('userLoginout')
                    next('/login')
                }                
            }else{
                next()               
            }
        }
    }else{
        if(to.path.indexOf('/trade')!= -1 || to.path.indexOf('/center')!= -1 || to.path.indexOf('/pay')!= -1){
            next('/login?redirect=' + to.path)
        }else{
            next()
        }
    }
})

export default router