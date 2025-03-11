<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '登录',
  },
}
</route>
<template>
  <view class="bg-[#007135] w-[100vw] h-[100vh] pos-relative">
    <view class="text-white pt-[89px] ml-[42px] text-[28px] font-bold pos-relative">
      <view>Hello</view>
      <view>欢迎登录</view>
    </view>
    <wd-img
      style="
        position: absolute !important;
        width: 100%;
        top: 15%;
        left: 0;
        transform: translateY(-50%);
      "
      mode="widthFix"
      src="/static/images/xwz/bg-map.png"
    />
    <view
      class="bg-white w-[100vw] h-[70vh] pos-absolute bottom-0 rounded-t-5 pt-7 px-7 box-border text-5 text-[#333333] leading-5"
    >
      <view class="mt-7 mb-3">賬戶</view>
      <wd-input type="text" v-model="account" size="large" placeholder="请输入賬戶" />
      <view class="mt-8 mb-3">密碼</view>
      <wd-input v-model="password" size="large" placeholder="请输入密碼" clearable show-password />
      <view
        class="w-[100%] h-10 bg-[#007135] text-white text-center line-height-10 rounded-10 mt-13"
        @click="onLogin"
      >
        登录
      </view>
    </view>
  </view>
</template>

<script setup lang="js">
import { loginRequest } from '@/service/login'
import { useUserStore } from '@/store'
const account = ref('liumapp')
const password = ref('123456')
const userStore = useUserStore()
const {
  loading,
  error,
  data,
  run: handleLogin,
} = useRequest(() => loginRequest(account.value, password.value))
const onLogin = () => {
  handleLogin()
    .then((res) => {
      console.log('登录成功:', JSON.parse(JSON.stringify(res)))
      userStore.setUserInfo(JSON.parse(JSON.stringify(res)))
      uni.switchTab({ url: '/pages/machine/index' })
    })
    .catch((err) => {
      console.error('登录失败:', err)
      // 这里可以弹出错误提示
      uni.showToast({ title: '登录失败，请检查账号密码', icon: 'none' })
    })
}
</script>

<style lang="scss">
.content {
  border-radius: 36px 36px 0 0;
}
</style>
