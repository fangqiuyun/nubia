<template>
    <div>
        
        <!-- 头 -->
        <div class="head">
            <img src="./img/header.png" alt="">
        </div>

        <!-- 标题 -->
        <div class="title">
            <p>
                四级予你
                <span class="iconfont" id="icon"
                @click="list"
                >
                    &#xe62e;
                </span>
            </p>
            <span class="name">范彬彬</span>
            <div class="image">
                <img src="./img/img.jpg" alt="">
            </div>
        </div>

        <!-- <div class="play">
            <audio src="" controls="controls">
                Your browser does not support the audio element.
            </audio>
        </div> -->

        <!-- 下载 -->
        <div class="download">
            <p>下载歌曲</p>
        </div>

        <!-- 猜你喜欢 -->
        <div>

            <div>
                <p class="sub">猜你喜欢</p>
                <div class="like">
                    <div class="pic">
                        <img src="" alt="">
                    </div>
                    <div class="singer">
                        <h4>执迷不悟</h4>
                        <p>黄四海</p>
                    </div>
                    <div class="gt">
                        ＞
                    </div>
                </div>
            </div>

        </div>

        <!-- 大家在听 -->
        <div>
            <p class="sub">大家都在听</p>
            <div class="everyone">
                <div>
                    <div class="kind_img">
                        <img src="" alt="">
                    </div>
                    <p class="kind_title">热门流行 | 今天</p>
                    <p class="kind">快手听风影</p>
                </div>

                <div>
                    <div class="kind_img">
                        <img src="" alt="">
                    </div>
                    <p class="kind_title">热门流行 | 今天</p>
                    <p class="kind">快手听风影</p>
                </div>

                <div>
                    <div class="kind_img">
                        <img src="" alt="">
                    </div>
                    <p class="kind_title">热门流行 | 今天</p>
                    <p class="kind">快手听风影</p>
                </div>
            </div>
        </div>


        <!-- 歌手与专辑 -->
        <div>

            <div>
                <p class="sub">歌手与专辑</p>
                <div class="like">
                    <div class="pic">
                        <img src="" alt="">
                    </div>
                    <div class="singer">
                        <h4>执迷不悟</h4>
                        <p>黄四海</p>
                    </div>
                    <div class="gt">
                        ＞
                    </div>
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
            show: false,
            actions: [
                { name: '无人知鸟' },
                { name: '踏山河' },
                { name: '会不会' },
            ],
            
        };
    },
    methods: {
        // 点击菜单弹出列表
        list() {
            this.show = true
        },
    },
    created: {
        // this.$http.get(uri.)
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
        top: -1.5px;
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
        justify-content: space-between;
        width: 100%;
        padding: 0 20px;
    }
    .pic {
        width: 65px;
        height: 65px;
        background-color: rebeccapurple;
        border-radius: 5%;
    }
    .singer {
        margin-right: 35%;
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
        margin-top: 20px;
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
</style>