<template>
    <div :class="{ header: isSticky }">
        <van-tabs  line-width="55px" color="rgba(34,213,156,1)" title-active-color="rgba(34,213,156,1)" v-model="active" @click="onClick">
            <van-tab title="推荐"></van-tab>
            <van-tab title="排行"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
// 导入vant需要的tab组件
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            active: 0,
            urls: [ "/index/recommend", "/index/rank"],
            // 用于控制是否显示头部信息
            isSticky: false,
        };
    },
    created() {
        // 纠正因为刷新而导致的选项卡选中错误的情况
        this.active = this.urls.indexOf(this.$route.path);
    },
    // 页面加载完成之后获取滚动条的高度
        // 页面加载完成之后获取滚动条的高度
    mounted() {
        window.addEventListener("scroll", () => {
            // 获取高度
            let scrollTop = document.documentElement.scrollTop;
            // console.log(scrollTop);
            if (scrollTop >= 150) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        });
    },
    methods: {
        // 点击切换顶部导航选项卡的事件处理程序
        onClick(index) {
            this.$router.push(this.urls[index]);
        },
    },
};
</script>

<style lang="scss" scoped>
// 之前用过class样式绑定，是否显示头取决于是否有class样式
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
}

</style>
