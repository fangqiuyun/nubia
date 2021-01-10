<template>
    <div>
        <form action="/">
        <van-search
            v-model="value"
            shape="round"
            placeholder="搜索"
            @search="onSearch"
            @focus="onfocus"
        />
        </form>


        <router-view></router-view>
    </div>

</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
import { Toast } from 'vant';
Vue.use(Search);


export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
        
    },

    onfocus(){
        this.$router.push({ path:'/index/search' });
    },

  },
};
</script>