<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多歌曲"
            @load="onLoad"
        >
            <div class="imgs">
                <img :src="data.logo" alt="" width="100%">
            </div>
            <div v-for="(item,index) in list" :key="index" class="abc">
                <div>
                    <p style="font-size:16px;margin:0;padding:0" >{{item.songname}}</p>
                    <p style="font-size:12px;margin:0;padding:0;color: #777;" >{{item.singer[0].name}}</p>
                </div>
                <!-- <p></p> -->
            </div>
            <!-- <van-cell  :title="item.songname" /> -->
        </van-list>
    </div>
</template>

<script>
import uri from "@/config/uri";
import Vue from 'vue';
import { List,Cell,Toast } from 'vant';

Vue.use(List);
Vue.use(Cell);
Vue.use(Toast);

export default {
  data() {
    return {
        data:{},
        list: [],
        singer: [],
        loading: false,
        finished: false,
    };
  },
  
  methods: {
    getInfo(){
        this.$http.get(uri.getSongListInfo + '?id=' + this.$route.params.id)
        .then((ret) =>{
            console.log(ret)
            if(ret.result== 100){
                this.data = ret.data
                this.list = ret.data.songlist

                this.singer = ret.data.songlist.singer
                this.finished = true;
            }else{
                Toast.fail("网络繁忙");
            }
            this.loading = false;
        })
    },
    onLoad() {
      // 异步更新数据
        this.getInfo()
    },
  },
};
</script>


<style lang="scss" scoped>
    .abc{
        padding: 10px 16px;
    }
    .imgs{
        width: 375px;
        height: 237px;
        overflow: hidden;
        img{
            transform: translateY(0%);
        }
    }
</style>