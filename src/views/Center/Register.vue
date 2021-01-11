<template>
    <div>
        <van-form @submit="onSubmit">
          <div class="logo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2805201756,4208148266&fm=26&gp=0.jpg" alt="">
          </div>
          <h1>欢迎注册QQ</h1>
          <h3>每一天，乐在沟通。</h3>
  <van-field
    v-model="username"
    name="手机号"
    label="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
    <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">注册</van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import Vue from 'vue'
import { Form, Field, Toast, Button } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Button)
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    onsubmit(){
      console.log(我要注册);
    }
  },
}
</script>
<style lang="scss" scope>
  .logo{
    width: 200px;
    margin: 120px auto 30px;
    img{
      width: 100%;
    }
  }
  h1,h3{
    font-weight: 500;
    text-align: center;
  }
</style>