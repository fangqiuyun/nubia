<template>
    <div>
        <div>
       
    </div>
    <!-- v-show控制组件是否显示 -->
    <div class="loading" v-show="isLoading">
        <van-loading size="24px" type="spinner">加载中...</van-loading>
    </div>
    <van-card v-for="item in list" :key="item.topId" @click="goDetail(item.topId)">
        <!-- 榜单名称 -->
        <template #title >
            <div class="title">
                {{ item.label }}
            </div>
        </template>
        <!-- 榜单歌曲 -->
        <template #desc>
            <div v-for="(lis, ind) in item.song" :key="ind" class="desc">
                <strong>{{ ind + 1 }}. </strong> {{ lis.title }}
                 <span>
                     {{ lis.singerName }}
                 </span>
            </div>
        </template>
        <template #thumb>
            <div class="thumb">
                <img :src="item.picUrl" alt="" width="118.13px">
            </div>
        </template>
    </van-card>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
//导入vant组件
import { Card, Loading } from 'vant';
Vue.use(Card);
Vue.use(Loading)

// 导入uri
import uri from "@/config/uri"

export default {
    data() {
        return {
            //排行歌单数据源
            //item.label 榜名, item.picUrl 图片,  item.song 歌曲,   :key="item.topId"
            //item.song    item.title 歌名,  item.singerName 歌手   :key=“item.italbumMid”
            list: [],
            // 控制加载组件是否显示
            isLoading: true,    
        }
    },
    methods: {
        getData() {
            //拿到歌单数据
            this.$http.get(uri.getRank + "?showDetail=1")
            .then(ret => { 
                console.log(ret)
                ret = ret.data
                console.log(ret)
                ret.map(item => {
                    //数据填充到list
                    this.list.push(...item.list)
                    console.log(this.list)
                })
            }).catch(err => console.log(err))
            // 数据加载完成，去除加载组件的显示
            this.isLoading = false;
        },
         // 编程导航，去详情页面
        goDetail(topId) {
            //console.log(topId)
            this.$router.push("/list2/" + topId)
        },
    },
    created() {
        this.getData()
    },
    
}
</script>

<style lang="scss" scoped>
//  scoped表示样式只在当前组件内生效，不影响子组件
//  控制加载组件是否显示
.loading {
    text-align: center;
    padding-top: 5px;
}
// 去图片圆角
img {
    margin-top: -22px;
    border-radius: 0;
    display: block;
    
}
.thumb {
    position: absolute;
    right: 15px;
    overflow: hidden;
}
// 榜名样式设置
.title {
    line-height: 1rem;
    font-size: .86rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: .42rem;
}
.van-card__content {
    position: absolute;
    left: 30px;
    width: 240px;
    padding-top: 10px;
   
}
.van-card__thumb {
    position: static;
}
// 歌曲部分样式
.desc {
    font-size: 13px;
    color: #1a1a1a;
    font-weight: 300;
    font-family: -apple-system, sans-serif;
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出内容*/
    text-overflow:ellipsis;  
}
</style>