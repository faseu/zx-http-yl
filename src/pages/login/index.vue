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
      <wd-input
        type="text"
        v-model="value"
        size="large"
        placeholder="请输入用户名"
        @change="handleChange"
      />
      <view class="mt-8 mb-3">密碼</view>
      <wd-input v-model="value" size="large" clearable show-password @change="handleChange" />
      <view
        class="w-[100%] h-10 bg-[#007135] text-white text-center line-height-10 rounded-10 mt-13"
        @click="handleLogin"
      >
        登录
      </view>
    </view>
  </view>
</template>

<script setup lang="js">
import { httpPost, httpGet } from '@/utils/http'
const { loading, error, data, run } = useRequest(() =>
  httpPost('/code/note', { phone: '13258585169' }),
)
const tab = ref(0)
const current = ref(0)
const activeColor = ref('#DE5230')
const styleType = ref('text')
const showLeft = ref(false)

const showDrawer = () => {
  // console.log(showRight.value?.open())
  // showRight.value.open(); // Make sure to use a ref here for the drawer component
}

const closeDrawer = () => {
  // showRight.value.close();
}
const handleLogin = () => {
  uni.switchTab({ url: '/pages/machine/index' })
}
</script>

<style lang="scss">
.content {
  border-radius: 36px 36px 0 0;
}
</style>
