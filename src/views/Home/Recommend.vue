<template>
  <div>
    <form action="/">
      <van-search v-model="value" shape="round" placeholder="搜索" @search="onSearch" @focus="onfocus" />
    </form>
    <router-view></router-view>

    <div>
       <div class="a">
        <h2>官方歌单</h2>
        <span>更多</span>
      </div>
      <div>
        <Works :key="list.length">
          <div class="swiper-slide" v-for="(item, index) in list" :key="index" @click="getInfo(item.tid)">
            <div>
              <img v-lazy="item.cover_url_medium" width="100" style="border-radius:15px" >
              <p>{{item.title}}</p>
            </div>
          </div>
        </Works>
      </div>
    </div>

    <div>
      <div class="a">
        <h2>网络歌曲</h2>
        <span>更多</span>
      </div>
      <div>
        <Works :key="list1.length" >
          <div class="swiper-slide" v-for="(item, index) in list1" :key="index" @click="getInfo(item.tid)">
            <div>
              <img v-lazy="item.cover_url_medium" width="100" style="border-radius:15px" >
              <p>{{item.title}}</p>
            </div>
          </div>
        </Works>
      </div>
    </div>


  </div>

</template>

<script>
  import Vue from 'vue';
  import { Search } from 'vant';

  //导入uri 
  import uri from "@/config/uri";
  //推荐歌单组件
  import Works from "@/views/Home/Works";
  //图片懒加载
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload, {
      loading: "https://pics7.baidu.com/feed/a71ea8d3fd1f4134be4d8c39307a2fccd0c85eee.jpeg?token=81c0d087b71268fbd50e655b11870131",
  });

  Vue.use(Search);


  export default {
    data() {
      return {
        value: '',
        list:[],
        list1:[]

      };
    },
    // 注册组件
    components: {
        Works,
    },
    methods: {
      onSearch(val) {

      },
      getInfo(id){
        this.$router.push("/list/" + id);
        // console.log(id)

      },

      onfocus() {
        this.$router.push({
          path: '/index/search'
        });
      },
    },
    created() {
      this.$http.get(uri.getRecommend + '?pageSize=7').then((ret => {
        this.list = ret.data.list
        // console.log(this.list)
      })),
      this.$http.get(uri.getRecommend + '?pageSize=7&id=3056').then((ret => {
        this.list1 = ret.data.list
      }))
    },
  };
</script>

<style lang="scss" scoped>
  p{
    font-size: 13px;
  }
  .a{
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>