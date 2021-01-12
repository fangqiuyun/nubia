<template>
    <div>
        <div class="logo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2805201756,4208148266&fm=26&gp=0.jpg" />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button square block type="info" native-type="submit"
                        >登录</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data() {
        return {
            mobile: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
    methods: {
        onSubmit(values) {
            // console.log("submit", values);
            // 发送请求
            this.$http
                .post("http://127.0.0.1:2004/backend/login", values)
                .then((ret) => {
                    if (ret.error_code == 0) {
                        Toast.success("登录成功！");
                        // 跳转
                        // 判断是否有回调地址
                        if (this.$route.query.callback) {
                            this.$router.push(this.$route.query.callback);
                        } else {
                            this.$router.push("/center");
                        }
                    } else {
                        Toast.fail("登录失败！");
                    }
                });
        },
    },
    created() {
        // 进入时，隐藏底部导航
        this.$store.commit("global/setFooter", false);
    },

    beforeDestroy() {
        // 离开时，显示底部导航
        this.$store.commit("global/setFooter", true);
    },
};
</script>

<style lang="scss" scoped>
.logo {
    margin-top: 150px;
    margin-bottom: 100px;
    text-align: center;
    width: 300px;
    margin: 100px auto;
    img{
      width: 100%;
    }
}
</style>
