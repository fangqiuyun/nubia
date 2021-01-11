<template>
    <div>
        
        <!-- 头 -->
        <div class="head">
            <img src="./img/header.png" alt="">
        </div>

        <!-- 标题 -->
        <div class="title">
            <p>
                {{info.name}}
                <span class="iconfont" id="icon"
                @click="list"
                >
                    &#xe62e;
                </span>
            </p>
            <span class="name">{{info.singer[0].name}}</span>
            <div class="image">
                <img :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${info.album.mid}.jpg`" alt="">
            </div>
        </div>

        <div class="play">
            <div>
                <span 
                class="iconfont" 
                id="zanting"
                @click="zanting"
                v-show = "flag == false"
                >&#xe604;</span>

                <span 
                class="iconfont" 
                id="zanting"
                @click="zanting"
                v-show = "flag == true"
                >&#xe68c;</span>
            </div>
            <div>
                <span 
                class="iconfont" 
                id="shoucang"
                @click="shoucang"
                v-show = "flag1 == false"
                >&#xe51a;</span>

                <span 
                style="color: red"
                class="iconfont" 
                id="shoucang"
                @click="shoucang"
                v-show = "flag1 == true"
                >&#xe502;</span>
            </div>
        </div>

        <!-- 下载 -->
        <div class="download">
            <p>下载歌曲</p>
        </div>

        <!-- 猜你喜欢 -->
        <div>

                <p class="sub">猜你喜欢</p>

                <div  v-for="(item, index) in list3" :key="index" class="list3">
                    <div class="like">
                        <div class="pic">
                            <img :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg`" alt="">
                        </div>
                        
                        <div class="sing">
                            <div class="singer">
                            <h4>{{item.name}}</h4>
                            <p>{{item.singer[0].name}}</p>
                            </div>

                            <div class="gt">
                                ＞
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <!-- 大家在听 -->
        <div>
            <p class="sub">大家都在听</p>
            <div class="everyone" >
                <div v-for="(item, index) in list1" :key="index" > 
                    <div class="kind_img">
                        <img :src="item.imgurl" alt="" >
                    </div>
                    <p class="kind_title">{{item.dissname | parsePlay}}</p>
                    <p class="kind">{{item.creator}}</p>
                </div>

            </div>
        </div>


        <!-- list动态面板 -->
        <van-action-sheet
            class="list"
            v-model="show"
            :actions="actions"
            cancel-text="关闭"
            description="播放队列(10首)"
            close-on-click-action
        />

        <!-- 播放 -->
        <div style="display:none">
            <audio 
            class="audio"
            controls 
            autoplay 
            :src="playUrl">
            </audio>
        </div>
    </div>
</template>

<script>

    // 导入字体图标
    import '@/assets/font/iconfont.css'
    // 导入vant组件
    import Vue from "vue";
    // 导入动作面板组件
    import { ActionSheet } from 'vant';
    //导入uri
    import uri from '@/config/uri'

    Vue.use(ActionSheet);

export default {
    data() {
        return {
            flag: true,
            flag1: false,
            show: false,
            actions: [
                { name: '无人知鸟' },
                { name: '踏山河' },
                { name: '会不会' },
            ],
            playUrl: '',
            info: {name: '',singer: [{name:''}],album:{mid: ''}},
            list1:[ ],
            list3: [ ],
            
        };
    },
    methods: {
        // 点击菜单弹出列表
        list() {
            this.show = true
        },
        // 播放收藏
        zanting() {
            this.flag = !this.flag
            var audioPlayer = document.querySelector('.audio');  
            
            if (this.flag == true) {
                audioPlayer.play()
            } else {
                audioPlayer.pause()
                
            }
        },
        shoucang() {
            this.flag1 = !this.flag1
            
        },
        getAllLike(){
            this.$http.get(uri.getAll + '?id=' + this.info.id).then((ret) => {
            // console.log(ret)
            this.list1 = ret.data
            
        })
        },
        getLike(){
            this.$http.get(uri.getLike + '?id=' + this.info.id).then((ret) => {
                this.list3 = ret.data
        })
        },
        
        
    },
    created() {
        this.$http.get(uri.getPlaySong + '?id=' + this.$route.params.id).then((ret) => {
            
            // console.log(ret)
            this.playUrl =  ret.data[this.$route.params.id]
        })
        this.$http.get(uri.getSong + '?songmid=' + this.$route.params.id).then((ret) => {
            this.info = ret.data.track_info
            this.getAllLike()
            this.getLike()
            // console.log(this.info)
            // console.log(ret)
        })
    },
    filters: {
        parsePlay (name) {
            let str = ""
            if (name.length > 8) {
                str = name
                return str.substr(0,7) + '...'
            }else {
                str = name
                return str
            }
        }
    }
        
}
</script>

<style lang="scss" scoped>

    // 头部
    .head {
        width: 100%;
    }
    .head > img {
        width: 100%;
        display: block;
        box-shadow: 0px 1px 4px  rgba(0,0,0,0.2);
    }
    // 图标
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 12px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 600;
    }
    // 标题
    .title {
        width: 100%;
        text-align: center;
        padding-top: 15px;
    }
    .title > p {
        font-size: 25px;
        line-height: 0px;
        height: 100%;
    }
    #icon {
        width: 25px;
        height: 25px;
        border: 2px solid #000000;
        border-radius: 50%;
        position: relative;
        padding: 4px;
        top: -4px;
        margin-left: 2px;
    }
    .name {
        font-size: 16px;
        line-height: 0;
        color: grey;
    }
    .image {
        width: 100%;
        height: 100%;
        text-align: center;
        margin-top: 25px;
    }
    .image > img {
        width: 175px;
        height: 175px;
        vertical-align:top;
        border-radius: 6%;
    }
    .play {
        width: 100%;
        height: 90px;
    }
    .van-action-sheet__description {
        position: relative;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        padding: 20px 16px;
        color: #000000;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
    }
    .like {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        width: 100%;
        padding: 0 20px;
    }
    .pic {
        width: 65px;
        height: 65px;
        background-color: rebeccapurple;
        border-radius: 7px;
        margin-right: 10px;
        overflow: hidden;
    }
    .pic > img {
        width: 100%;
        height: 100%;
    }

    .singer h4 {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        margin: 0;
        padding: 0;
    }
    .singer p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #666666;
    }
    .gt {
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #888888;
        float: right;
        text-align: center;
        line-height: 30px;
        margin-right: 25px;
    }
    .sub {
        margin: 0;
        height: 0;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        height: 55px;
        font-size: 18px;
        font-weight: 400;
        color: #000;
    }
    // 大家都在听
    .everyone {
        display: flex;
        padding: 0 10px;
        justify-content: space-evenly;
        margin-bottom: 5px;
    }
    .kind_img {
        width: 107px;
        height: 107px;
        background-color: rebeccapurple;
        border-radius: 6%;
        overflow: hidden;
    }
    .kind_img > img {
        width: 100%;
        height: 100%;
    } 
    .kind_title {
        margin: 0;
        padding: 0;
        margin-top: 5px;
        font-size: 13px;
    }
    .kind {
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #888888;
    }
    // 下载
    .download {
        display: flex;
        justify-content: center;
    }
    .download > p {
        width: 230px;
        height: 39px;
        font-size: 18px;
        color: #fff;
        border-radius: 50px;
        line-height: 39px;
        text-align: center;
        background-color: #22D59C;
    }
    // 播放 收藏
    .play {
        width: 100%;
        height: 80px;
        // padding: 0 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .play > div {
        width: 40px;
        height: 40px;
        border: 1px solid #888888;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        margin-right: 5%;
    }
    .play > div + div {
        margin-left: 5%;
    }
    #zanting {
        font-size: 20px;
        font-weight: 400;
        color: #000000;
    }
    #shoucang {
        font-size: 20px;
        font-weight: 400;
        color: #000000;
    }
    .list3 {
        margin-bottom: 10px;
    }
    .sing {
        display: flex;
        justify-content: space-between;
        width: 75%;
    }
</style>