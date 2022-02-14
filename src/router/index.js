import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

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


export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/home',
            name : 'home',
            component : Home,
            meta : {show : true}             
        },
        {
            path : '/search/:keywords',
            name : 'search',
            component : Search,
            meta : {show : true} 
        },
        {
            path : '/login',
            component : Login,
            meta : {show : false} 
        },
        {
            path : '/register',
            component : Register,
            meta : {show : false} 
        },
    ]
})