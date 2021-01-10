import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/*
QQ音乐API
API :  http://api.qq.jsososo.com

1.歌曲播放接口 
    请求地址: http://api.qq.jsososo.com/song/urls
    请求方式: get
    请求参数: ?id=songmid 
    示例: /song/urls?id= `请求回来的歌曲的 songmid  这个数据 `

    
2.歌曲搜索接口 
    请求地址: http://api.qq.jsososo.com/search
    请求方式: get
    请求参数: ?key= 输入框的数据
    示例: /search?key=周杰伦 `请求回来的歌曲的   这个数据 `

3.请求歌单接口
    请求地址: http://api.qq.jsososo.com/songlist/list
    请求方式: get
    请求参数: 默认值,不用带参数
    
4.获取歌单详情
    请求地址: http://api.qq.jsososo.com/songlist
    请求方式: get
    请求参数: 歌单?id=list.dissid

5.获取歌曲信息
    请求地址: http://api.qq.jsososo.com/songlist
    请求方式: get
    请求参数: ?songmid=****   歌曲的songmid

6.为你推荐歌单
    请求地址: http://api.qq.jsososo.com/recommend/playlist/u
    请求方式: get
    请求参数: 不用参数
7.轮播图
    请求地址: http://api.qq.jsososo.com/recommend/banner
    请求方式: get
    请求参数: 不用参数
  
8.歌手详细信息
    请求地址: http://api.qq.jsososo.com/singer/desc
    请求方式: get
    请求参数: ?singermid= ****

9.获取排行歌单
    请求地址: https://api.qq.jsososo.com/top/category
    请求方式: get
    请求参数: ?showDetail=1

*/ 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
