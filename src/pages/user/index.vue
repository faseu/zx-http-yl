<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '使用者參數',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    title="使用者參數"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    @click-right="handleClickRight"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content">
    <view class="p-3">
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[68%] h-full box-border bg-[#292D34] p-3">無料警告支數</view>
        <view class="w-[32%] h-full box-border bg-[#007135] p-3">
          <wd-input
            no-border
            type="number"
            v-model="value"
            size="small"
            placeholder="请输入"
            @change="handleChange"
          />
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[68%] h-full box-border bg-[#292D34] p-3">無料停車支數</view>
        <view class="w-[32%] h-full box-border bg-[#007135] p-3">
          <wd-input
            no-border
            type="number"
            v-model="value"
            size="small"
            placeholder="请输入"
            @change="handleChange"
          />
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[68%] h-full box-border bg-[#292D34] p-3">異常停車</view>
        <view class="w-[32%] h-full box-border bg-[#45C75D] p-3 flex items-center justify-center">
          <view>ON</view>
          <view class="w-7.5 h-7.5 bg-white rounded-[50%] ml-2"></view>
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[68%] h-full box-border bg-[#292D34] p-3">壓力倒拉功能</view>
        <view class="w-[32%] h-full box-border bg-[#45C75D] p-3 flex items-center justify-center">
          <view>ON</view>
          <view class="w-7.5 h-7.5 bg-white rounded-[50%] ml-2"></view>
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[68%] h-full box-border bg-[#292D34] p-3">距離倒拉功能</view>
        <view class="w-[32%] h-full box-border bg-[#A4A4A4] p-3 flex items-center justify-center">
          <view class="w-7.5 h-7.5 bg-white rounded-[50%]"></view>
          <view class="ml-2">OFF</view>
        </view>
      </view>
      <wd-gap height="10" />
    </view>
    <view
      class="bg-[#9FB7E1] border-solid border-t-white border-0 border-t-0.5 w-[100%] p-x-4 p-y-3 box-border pos-fixed bottom-0"
    >
      <wd-button size="large" style="background: #007135" block>保存</wd-button>
      <wd-gap safe-area-bottom height="0" />
    </view>
  </view>
</template>

<script setup lang="js">
import UCard from '@/components/UCard/UCard.vue'
import { httpPost, httpGet } from '@/utils/http'
const { loading, error, data, run } = useRequest(() =>
  httpPost('/code/note', { phone: '13258585169' }),
)
const tab = ref(0)
const current = ref(0)
const activeColor = ref('#DE5230')
const styleType = ref('text')
const showLeft = ref(false)

const handleClickLeft = () => {
  uni.navigateBack({ delta: 1 })
}
const handleClickRight = () => {
  uni.navigateTo({ url: '' })
}

const closeDrawer = () => {
  // showRight.value.close();
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
  .wd-input {
    background: #007135 !important;
  }
  .wd-input__inner {
    color: #fff !important;
  }
}
</style>
