import requests from './require.js'

//商品分类
export const reqCategoryList = () =>
       requests({
           url : '/product/getBaseCategoryList',
           method : 'get'
       })

//搜索选项 此接口请求数据的时候，至少要向服务器传递一个空对象
export const reqGetSearchInfo = (params) =>
    requests({
        url : "/list",
        method : 'post',
        data : params
    })

//获取商品详情
export const reqGoodsInfo = (skuId) => 
    requests({
        url : `/item/${skuId}`,
        method : 'get'
    })

// 商品添加到购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum) => 
    requests ({
        url : `/cart/addToCart/${skuId}/${skuNum}`,
        method : 'post'
    })

// 获取购物车列表数据接口
export const reqCartList = () => 
    requests({
        url : '/cart/cartList',
        method : 'get'
    })


export const reqDeleteCartById = (skuId) =>
    requests({
        url : `/cart/deleteCart/${skuId}`,
        method : 'delete'
    })


// 修改选中状态
export const reqUpdateCheckedById = (skuId,isChecked)=>
    requests({
        url : `/cart/checkCart/${skuId}/${isChecked}`,
        method : 'get'
    })

// 获取验证码
export const reqGetCode = (phone) =>
    requests({
        url : `/user/passport/sendCode/${phone}`,
        method : 'get'
    })

export const reqUserRegister = (data) =>
    requests({
        url : '/user/passport/register',
        data,
        method : 'post'
    })

export const reqUserLogin = (data) =>
    requests({
        url : '/user/passport/login',
        data,
        method : 'post'
    })

// 获取用户信息
export const reqUserInfo = () =>
    requests({
        url : '/user/passport/auth/getUserInfo',
        method : 'get'
    })

// 退出登录
export const reqLoginout = () =>
    requests({
        url : '/user/passport/logout',
        method : 'get'
    })

// 用户地址信息
export const reqAddressInfo = () =>
    requests({
        url : '/user/userAddress/auth/findUserAddressList',
        method : 'get'
    })


// 获取商品清单
export const reqOrderInfo = () =>
    requests({
        url : '/order/auth/trade',
        method : 'get'
    })


// 提交订单接口
export const reqSubmitOrder = (tradeNo,data) =>
    requests({
        url : `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data,
        method : 'post'
    })


// 获取支付信息
export const reqPayInfo = (orderId) =>
    requests ({
        url : `/payment/weixin/createNative/${orderId}`,
        method : 'get'
    })

// 获取支付订单状态
export const reqPayState = (orderId) =>
    requests ({
        url : `/payment/weixin/queryPayStatus/${orderId}`,
        method : 'get'
    })

// 获取个人中心的数据
export const reqMyOrderList =(page,limit) =>
    requests({
        url : `/order/auth/${page}/${limit}`,
        method : 'get'
    })