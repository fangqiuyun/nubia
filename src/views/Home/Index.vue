<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>

</template>

<script>
// 导入顶部导航
import Header from "@/components/Navigation/Header";
export default {
    // 注册需要使用的组件
    components: {
        Header,
    },
};
</script>