<template>
    <div>
        <header>
            <img :src="picUrl" alt="" class="pic" width="209"> 
            <h3>{{ title }}</h3>
            <h4>{{ titleDetail }}</h4>
            <p>更新时间: {{ update }}</p>
            <a href="javascript:;" class="player_btn">
                <img src="../../images/bofang.png" alt="" width="22px">
            </a>
        </header>
        <div class="toplist">
            <p>排行榜 共{{ total }}首</p>
            <ul>
                <li v-for="(item, index) in list" :key="item.id">
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
import uri from '@/config/uri'
export default {
    data() {
        return {
            //
            title: "",
            titleDetail: "",
            picUrl: "",
            update: "",
            total: "",
            list: []
        }
    },
    methods: {
        getDetail() {
            //console.log(this.$route)
            this.$http.get(uri.getRankInfo + "?id"  + this.$route.params.topId)
            .then(ret => {
                console.log(ret)
            this.title = ret.data.info.title
            this.titleDetail = ret.data.info.titleDetail
            this.picUrl = ret.data.info.picUrl
            this.update = ret.data.update
            this.total = ret.data.total
            this.list = ret.data.list
            }).catch(err => console.log(err))
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
.toplist {
    width: 400px;
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
    padding-right: 20px;
}
header {
    text-align: center;
    margin: 13px 0;
}
header .pic {
    border-radius: 1.3rem;
}
header a {
    margin-top: 5px;
    text-decoration: none;
    display: inline-block;
    background-color: blue;
    width: 11.9rem;
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