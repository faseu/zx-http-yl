<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '力量頁面',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    left-text="返回"
    title="力量頁面"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content p-3 box-border">
    <view>
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[70%] bg-[#292D34] p-3">壓力1空車值</view>
        <view class="w-[30%] bg-[#007135] p-3">{{ config.first }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[70%] bg-[#292D34] p-3">壓力2空車值</view>
        <view class="w-[30%] bg-[#007135] p-3">{{ config.second }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[70%] bg-[#292D34] p-3">壓力3空車值</view>
        <view class="w-[30%] bg-[#007135] p-3">{{ config.third }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[70%] bg-[#292D34] p-3">壓力4空車值</view>
        <view class="w-[30%] bg-[#007135] p-3">{{ config.fourth }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[70%] bg-[#292D34] p-3">距離空車值</view>
        <view class="w-[30%] bg-[#007135] p-3">{{ config.juli }}</view>
      </view>
      <wd-gap height="10" />
    </view>
    <view
      class="bg-[#DBDF92] w-full h-58 rounded-1.25 p-x-6 box-border flex justify-between items-center font-size-4.5"
    >
      <view class="flex flex-col items-center">
        <view class="line-height-4.5">P1</view>
        <view>000</view>
        <view class="w-9.75 h-35 bg-[#809AC6] pos-relative">
          <view class="pos-absolute left-0 bottom-0 w-full h-[40%] bg-[#007135]"></view>
        </view>
        <view>04000</view>
      </view>
      <view class="flex flex-col items-center">
        <view class="line-height-4.5">P2</view>
        <view>000</view>
        <view class="w-9.75 h-35 bg-[#809AC6] pos-relative">
          <view class="pos-absolute left-0 bottom-0 w-full h-[40%] bg-[#007135]"></view>
        </view>
        <view>04000</view>
      </view>
      <view class="flex flex-col items-center">
        <view class="line-height-4.5">P3</view>
        <view>000</view>
        <view class="w-9.75 h-35 bg-[#809AC6] pos-relative">
          <view class="pos-absolute left-0 bottom-0 w-full h-[40%] bg-[#007135]"></view>
        </view>
        <view>04000</view>
      </view>
      <view class="flex flex-col items-center">
        <view class="line-height-4.5">P4</view>
        <view>000</view>
        <view class="w-9.75 h-35 bg-[#809AC6] pos-relative">
          <view class="pos-absolute left-0 bottom-0 w-full h-[40%] bg-[#007135]"></view>
        </view>
        <view>04000</view>
      </view>
    </view>
    <wd-gap height="10" />
    <view class="flex flex-col items-center w-full bg-[#BACAE5] p-x-7 p-y-5 box-border">
      <view class="flex h-9.75 items-center w-full bg-[#809AC6]">
        <view class="h-full w-5 bg-[#F1F789] ml-13.75"></view>
        <view class="h-full w-23 bg-[#CD973C] ml-5"></view>
        <view class="flex-1 flex justify-center items-center">204</view>
      </view>
      <view class="flex items-center justify-between w-full mt-4.75">
        <view>距離</view>
        <view class="flex w-34 items-center justify-between">
          <view class="w-14.75 h-6.25 bg-black text-white flex items-center justify-center">
            000
          </view>
          <view>Max/Pcs</view>
        </view>
      </view>
      <view class="w-full flex items-center justify-between mt-2.75">
        <view>接近信號</view>
        <view class="bg-[#007135] w-6.25 h-6.25 rounded-0.5"></view>
      </view>
    </view>
    <wd-overlay type="primary" :show="loading">
      <view class="wrapper">
        <wd-loading />
      </view>
    </wd-overlay>
  </view>
</template>

<script setup lang="js">
import { useToast } from 'wot-design-uni'
import { onLoad } from '@dcloudio/uni-app'
import { httpGet } from '@/utils/http'
const toast = useToast()
const terminalId = ref(0)
const { loading, run: runGetData } = useRequest(() =>
  httpGet(`/prod-api/plcterminal/power/api-query/${terminalId.value}`),
)

const config = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  juli: 0,
})

onLoad((option) => {
  terminalId.value = option.id
  runGetData().then((res) => {
    Object.assign(config, res)
  })
})

const handleClickLeft = () => {
  uni.navigateBack({ delta: 1 })
}
</script>

<style lang="scss">
.page-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #9fb7e1;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
:deep() {
  .wd-navbar__text {
    color: #fff !important;
  }
  .wd-navbar__title {
    color: #fff !important;
  }
  .wd-icon-arrow-left {
    &::before {
      color: #fff;
    }
  }
  .wd-cell {
    background: #000 !important;
    height: 50px;
  }
  .wd-cell__wrapper {
    padding: 0 !important;
  }
}
</style>
