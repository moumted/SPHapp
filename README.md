# sphapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

知识点:
1.路由跳转：
    声明式导航：route-link ，使用to来跳转
               使用route-link时，当服务器返回数据的时候，会循环出很多的route-link组件，创建组件实例的时候，会创建上千个，比较耗内存，会出现卡顿的现象
    编程时导航：$router.push或者$router.replace(不会再history中记录历史，不会回退到上一个URL)来实现
  路由传参：
  params：属于路由中的一部分，在配置的时候需要占位
  query：不属于路径中的一部分
    1）字符串形式：
        this.$route.push("/search" + this.id + "?k=" +this.id.toUpperCase())
    2）模板字符串：
        this.$router.push("/seaarch/${this.id}?k=${this.id.toUpperCase()}")  
    3）对象形式（!常用!）
        this.$router.push({
            name : "search",
            params : {id : this.id},
            query : {
                k : this.id.toUpperCase()
            }
        })
    注意：
        ·路由对象传参path不可以与params参数一起使用
        ·若指定params参数可传或不传，配置路由的时候，在占位符的后面加上一个问号("?")
        ·若params传递的为空字符串，使用undefined
    路由给组件传递props写法：
        ·布尔值写法，只能传递params参数 
            props : true
        ·对象写法，格外的给路由组件传递一些props 
            props : {a:1,b:2} 
        ·函数写法，可以将params、query参数传递给路由组件
            props : ($route)=>{
                return {keyword : $route.params.keyword,k:$route.query.k}
            }
2.axios的二次封装
    请求拦截器：可以在发请求之前处理一些业务
    响应拦截器：当服务器数据返回时，处理一些业务
3.跨域问题
    协议、域名、端口号不同
    解决方法 ：JSONP 、 CROS 、代理
4.节流，防抖（闭包、延迟器）
    <!-- 事件触发非常频繁，每一次触发回调函数都要去执行，而且回调函数内部有计算，可能会出现浏览器卡顿的现象 -->
    节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁出发变为少量触发
    防抖：前面所有的触发都被取消，最后一次执行在规定时间之后才会触发，也就是说连续快速触发，只会执行一次
    <!-- lodash插件 封装函数的防抖与节流 -->
    lodash对外暴露的是'_' 节流为_.throttle  防抖为_.debounce
    此处throttle，debounce回调函数不要使用箭头函数，防止上下文this的问题
5.过渡动画
    前提是有v-if和v-show才能有过渡动画
    xxx-enter：动画进入时的开始状态 
    xxx-enter-to：动画进入的结束状态
    xxx-enter-active：定义动画的效果
6.nextTick
    在下次DOM更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，获取更新之后的DOM
7.组件通信方式：
    props：用于父子组建通信
    自定义事件：@on @emit可以实现子给父通信
    全局事件总线：$bus 全能
    插槽
    pubsub-js：vue中几乎不用 全能


补充：
1.配置路由routes时可以添加元信息
    routes : [
        path : '/home',
        name : ''
        meta : {show:false}
    ]

