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