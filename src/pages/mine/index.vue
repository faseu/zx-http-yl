<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="content">
    <wd-navbar
      fixed
      placeholder
      left-text="个人中心"
      safeAreaInsetTop
      custom-style="background-color: #007135 !important;"
    />
    <view
      class="bg-[#007135] text-[#fff] h-[180px] flex flex-col justify-center items-center pos-relative"
    >
      <wd-img
        class="bg-[#fff]"
        round
        :width="100"
        :height="100"
        src="/static/images/xwz/cleaner.png"
      />
      <view class="mt-[10px]">{{ username }}</view>
      <wd-img
        custom-class="w-[100%] bottom-0 left-0"
        custom-style="position: absolute"
        width="100%"
        height="115px"
        src="/static/images/xwz/bg-wave.png"
      />
    </view>
    <view class="mt-[20px] m-x-[10px] rounded-[5px] overflow-hidden">
      <wd-cell-group border>
        <wd-cell
          class=""
          size="large"
          title="退出登录"
          icon="login"
          is-link
          @click="handleGoToLogin"
        />
      </wd-cell-group>
    </view>
  </view>
</template>

<script setup lang="js">
import { useUserStore } from '@/store'
const userStore = useUserStore()
const username = userStore.userInfo.username

const handleGoToLogin = () => {
  uni.reLaunch({ url: '/pages/login/index' })
  userStore.clearUserInfo()
}
</script>

<style lang="scss">
.content {
  width: 100%;
  //min-height: calc(100vh - 50px);
  min-height: 100vh;
  height: 100%;
  background: #f2f2f2;
}
:deep() {
  .wd-navbar__text {
    color: #fff !important;
  }
}
</style>
