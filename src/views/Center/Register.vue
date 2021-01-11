<template>
    <div>
        <div class="logo">
            <img src="https://2url.cc/1OwrB" />
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
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>