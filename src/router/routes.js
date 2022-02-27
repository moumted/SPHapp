
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path : '/center',
        name : 'center',
        component : Center,
        meta : {show : true},
        children : [
            {
                path : '/center/myOrder',
                component : myOrder,
            },
            {
                path : '/center/groupOrder',
                component :groupOrder
            },
            {
                path : '/center',
                redirect : 'myOrder'
            }
        ]
    },
    {
        path : '/paysuccess',
        name : 'paysuccess',
        component : PaySuccess,
        meta : {show : true}
    },
    {
        path : '/pay',
        name : 'pay',
        component : Pay,
        meta : {show : true},
        beforeEnter : (to, from ,next) =>{
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path : '/shopcart',
        name : 'shopcart',
        component : ShopCart,
        meta : {show : true}
    },
    {
        path : '/home',
        name : 'home',
        component : () =>import('@/pages/Home'),
        meta : {show : true}             
    },
    {
        path : '/search/:keyword?',
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
    {
        path :'/detail/:skuid',
        name : 'detail',
        component : Detail,
        meta : {show : true} 
    },
    {
        path : '/addcartsuccess',
        name : 'addcartsuccess',
        component : AddCartSuccess,
        meta : { isShow : true}
    },
    {
        path : '/trade',
        name : 'Trade',
        component : Trade,
        meta : { isShow : true },
        beforeEnter : (to , from ,next ) =>{
            if(from.path == '/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path : '/',
        redirect : '/home'
    },
]