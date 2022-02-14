import axios from 'axios'
import nprogress from 'nprogress'
///引入进度条的样式
import 'nprogress/nprogress.css'
//创建axios实例
//1.配置对象:
//    baseURL 基础路径
//    timeout 请求超时的时间
const requests = axios.create({
    baseURL : '/api',
    timeout : 5000
})

//请求拦截器
//config配置对象 包含headers请求头属性
requests.interceptors.request.use((config)=>{
    //触发进度条
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调，服务器数据返回之后，响应拦截器会检测到，并结束进度条
    nprogress.done()
    return res.data
},(error)=>{
    //响应失败的回调函数0
    return Promise.reject(new Error('false'))
})

export default requests