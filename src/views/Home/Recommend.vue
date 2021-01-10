<template>
    <div>
        <form action="/">
        <van-search
            v-model="value"
            shape="round"
            :show-action="isShow"
            placeholder="搜索"
            @search="onSearch"
            @cancel="onCancel"
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
      isShow: false
    };
  },
  methods: {
    onSearch(val) {

    },
    onCancel() {
        Toast('取消');
        this.isShow = false
    },
    onfocus(){
        this.isShow = true
    },

  },
};
</script>