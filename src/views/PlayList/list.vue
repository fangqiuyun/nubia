<template>
    <div>
        <!-- v-show控制组件是否显示 -->
    <div class="loading" v-show="isLoading">
        <van-loading size="24px" type="spinner">加载中...</van-loading>
    </div>
        <header>
            <div class="fangda">
                <img :src="picUrl" alt="" class="pic" width="209"> 
            </div>
            <h3>{{ title }}</h3>
            <h4>{{ titleDetail }}</h4>
            <p>更新时间: {{ update }}</p>
            <a href="javascript:;" class="player_btn" @click="getMid">
                <img src="../../images/bofang.png" alt="" width="22px">
            </a>
        </header>
        <div class="toplist">
            <p>排行榜 共{{ total }}首</p>
            <ul>
                <li v-for="(item, index) in list" :key="item.id" @click="getMid(item.mid)">
                    <p>{{ index + 1 }}</p>
                    <div class="xinxi">
                        <p>{{ item.name }}</p>
                        <span>{{ item.singerName }}</span>
                    </div>
                    <img src="../../images/xiazai.png" alt="" width="17px" height="17px">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import uri from '@/config/uri'
//导入vant组件
import { Loading } from 'vant';
Vue.use(Loading)
export default {
    data() {
        return {
            //
            title: "",
            titleDetail: "",
            picUrl: "",
            update: "",
            total: "",
            list: [],
             // 控制加载组件是否显示
            isLoading: true,   
        }
    },
    methods: {
        getDetail() {
            console.log(this.$route)
            this.$http.get(uri.getRankInfo + "?id="  + this.$route.params.topId)
            .then(ret => {
                console.log(ret)
            this.title = ret.data.info.title
            this.titleDetail = ret.data.info.titleDetail
            this.picUrl = ret.data.info.picUrl
            this.update = ret.data.update
            this.total = ret.data.total
            this.list = ret.data.list
            }).catch(err => console.log(err))
            // 数据加载完成，去除加载组件的显示
            this.isLoading = false;
        },
        //点击歌曲传mid 导航去播放页
        getMid(id) {
            //console.log(id)
            this.$router.push("/playsong/" + id)
        },
    },
    created() {
        this.getDetail()
        
    }
}
</script>

<style lang="scss" scoped>
p{
    margin: 0;
}
//  控制加载组件是否显示
.loading {
    text-align: center;
    padding-top: 5px;
}
.toplist {
    width: 370px;
    padding: 11px 17px;
    font-size: 13px;
    color: #808080;
}
.toplist>ul>li{
    padding: 5px 10px;
    width: 100%;
    display: flex;
    align-items: center;
}
.toplist>ul>li div.xinix {
    display: flex;
    flex-direction: column;
}
.xinxi {
    flex: 1;
    padding-left: 10px;
}
.xinxi p {
    color: #000000;
    font-size: 18px;
}
.toplist>ul>li>img {
    padding: 5px;
    padding-right: 10px;
}
header {
    text-align: center;
    margin: 13px 0;
}
header .fangda {
    display: inline-block;
    width: 209px;
    height: 209px;
    border-radius: 1.3rem;
    overflow: hidden;
}
header .fangda .pic {
    display: block;
    transform:scale(2)
}
header a {
    margin-top: 5px;
    text-decoration: none;
    display: inline-block;
    background-color: blue;
    width: 12.9rem;
    height: 2.9rem;
    border-radius: 1.3rem;
    box-shadow: 0 6px 32px rgba(24,213,156,.5);
    background-color: #22d59c;
}
header a img {
    display: inline-block;
    margin: 0 auto;
    padding-top: .7rem;
}
</style>