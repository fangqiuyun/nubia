<template>
    <div>
        <form action="/">
            <van-search
                v-model="value"
                shape="round"
                show-action
                placeholder="搜索"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
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
    onCancel() {
        this.$router.push({ path:'/' });
    },
  },
};
</script>