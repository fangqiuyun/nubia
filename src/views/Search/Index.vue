<template>
    <div class="beijing">
      <div class="search">
        <form action="/">
            <van-search
                v-model="value"
                shape="round"
                show-action
                placeholder="搜索"
                autofocus="true"
                @search="onSearch"
                @cancel="onCancel"
               
                
               
            />
        </form>
      </div>
        <div class="remen" v-show="!this.value">
          <b>热门搜索</b>
          <ul >
          <li 
          v-for='(k,index) in list' :key="index"
          @click="remen(list[index].k)">
          {{list[index].k}}
          </li>
           
        </ul>
        </div>
      
         <van-list
           v-model="loading"
           :finished="finished"
            finished-text="没有更多了"
             @load="onLoad"
             v-show="this.value"
            >

           <div v-for='(songname,index) in end' :key="index" @click="xiangqing(end[index].songmid)" class="jieguo">
             <h3>{{end[index].songname}}</h3>
              <p>{{end[index].singer[0].name}}</p>
          
         </div>
          </van-list>

      
       
    </div>
    
</template>

<script>
import Vue from 'vue';
import uri from '@/config/uri'
import { Search } from 'vant';
import { List } from 'vant';
Vue.use(Search);
Vue.use(List);

export default {
  data() {
    return {
      value: '',
      list:[],
      end:[],
      page:1,
      loading: false,
      finished: false,
    };
  },
  created() {
      
    this.$http.get(uri.getHot).then((ret)=>{

this.list=ret.data

    })
  },
  methods: {
    onSearch(val) {
   
      this.$http.get(uri.getSearch+`?key=${val}&pageSize=30&pageNo=${this.page}`).then((ret)=>{
        console.log(ret);
        this.end=ret.data.list
        
       
      })
     
    },
    onCancel() {
        this.$router.push({ path:'/' });
    },
    remen(value){
      this.value=value
      this.onSearch(value)
    }, 
    xiangqing(mid){
      console.log(mid);
      this.$router.push("/playsong/" + mid)
    },
    onLoad() {
      this.getData();
    },
    getData(){
       
      this.$http
                .get(uri.getSearch+`?key=${this.value}&pageSize=30&pageNo=${this.page}`)
                .then((ret) => {
                    if (ret.result == 100) {
                        if (this.page < 3) {
                            // 请求成功（注意新旧数据的整合）
                            this.end = [...this.end,...ret.data.list];
                            // 让页码加1
                            this.page++;
                            this.getData();
                          
                        
                        } else {
                            // 没有数据（显示加载完成）
                           
                            this.finished = true;
                        }
                       
                    } else {
                        // 请求失败
                        Toast.fail("网络繁忙");
                    }
                    // 数据加载完成，去除加载组件的显示
                    this.isLoading = false;

                });
                                    if(!this.value){
                              this.page=1
                            }
    }
    

  },
};
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.beijing{
  height: 768px;
  box-sizing: border-box;
  background-color:white ;
 
  padding: 16px 16px 0 16px;
 
}
.search {
background-color:white ;
margin-top:16px ;
}
input{
  background:gray;
}
.remen b{
  margin: 16px 0 12px 0;
  display: block;
}
.remen ul{
  display: flex;
  flex-wrap: wrap;
}
.remen ul li{
  background-color:#fcf8f8bd;
  border-radius: 25px;
  height: 25px;
  line-height: 25px;
  padding: 2px 10px;
  font-size: 12px;
  margin: 0 13px 13px 0;
}
.jieguo{
  margin-top: 16px;
}
.jieguo h3{
  font-weight: 800;
  text-align: left;
  font-size: 16px;
  overflow: hidden;
  width: 100%;
 

}
.jieguo p{
  font-size: 14px;
}
</style>