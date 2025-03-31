<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '生產頁面',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    left-text="返回"
    title="生產頁面"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content p-3 box-border">
    <view
      class="flex flex-wrap w-full h-20 bg-[#292D34] rounded-1.25 text-[#B6B6B6] p-x-3 p-y-4.8 box-border"
    >
      <view class="w-[50%] flex">
        <view class="m-r-3">工單狀態</view>
        <view class="text-[#00FD77]">{{ config.gongdanStatus === '1' ? '正常運行' : '異常' }}</view>
      </view>
      <view class="w-[50%] flex">
        <view class="m-r-3">機台狀態</view>
        <view class="text-[#FFA800]">{{ config.jitaiStatus === '1' ? '待單停機' : '異常' }}</view>
      </view>
      <view class="w-[50%] flex">
        <view class="whitespace-nowrap m-r-3">IP地址</view>
        <view class="text-[#fff]">{{ config.ip }}</view>
      </view>
      <view class="w-[50%] flex">
        <view class="m-r-3">處理速度</view>
        <view class="text-[#fff]">
          <text>{{ config.handSpeed }}</text>
          <text>Pcs/Min</text>
        </view>
      </view>
    </view>
    <view class="mt-3">
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[30%] bg-[#292D34] h-full p-3 box-border">工令單號</view>
        <view class="flex-1 bg-[#007135] h-full p-3 box-border">{{ config.gonglingDanhao }}</view>
        <view class="w-17.75 bg-[#9FB7E1] h-full pl-1.25">
          <view
            class="w-full h-full bg-[#A0B0C0] border-solid border-[#292D34] border-2 box-border flex items-center justify-center rounded-1.25 text-[#292D34]"
          >
            換單
          </view>
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[30%] bg-[#292D34] p-3 h-full box-border">產品規格</view>
        <view class="w-[70%] bg-[#007135] p-3 h-full box-border">{{ config.chanpingGuige }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[30%] bg-[#292D34] p-3 h-full box-border">產品編號</view>
        <view class="w-[70%] bg-[#007135] p-3 h-full box-border">{{ config.chanpingBianhao }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[30%] bg-[#292D34] p-3 h-full box-border">線徑</view>
        <view class="w-[70%] bg-[#007135] p-3 h-full box-border">{{ config.lujing }}</view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[30%] bg-[#292D34] p-3 h-full box-border">人員編號</view>
        <view class="w-[70%] bg-[#007135] p-3 h-full box-border">{{ config.renyuanBianhao }}</view>
      </view>
    </view>
    <view class="w-full flex flex-wrap justify-between">
      <view class="w-42.5 h-66.25 bg-[#BACAE5] rounded-1.25 p-3 mt-3 box-border flex flex-col">
        <view class="w-full h-8.25 flex items-center justify-between">
          <view>計數1</view>
          <view
            class="w-15.75 h-full bg-[#97A7C0] border-solid border-[#292D34] border-2 box-border flex items-center justify-center text-[#030303] font-600"
          >
            RS1
          </view>
        </view>
        <view class="w-full h-8.25 flex items-center justify-between">
          <view></view>
          <view class="w-15.75 h-full flex items-center justify-center">72</view>
        </view>
        <view class="w-full h-9.5 flex items-center justify-center bg-[#007135] text-white">
          {{ config.firstNumber }}
        </view>
        <view
          class="w-full h-9.5 mt-1.25 flex items-center justify-center bg-[#A0B0C0] text-[#292D34]"
        >
          {{ config.firstPercent }}%
        </view>
        <view
          class="w-full h-21.24 mt-1.25 flex flex-col items-center justify-between bg-[#292D34] text-[#B6B6B6] p-y-3 box-border font-size-3.75"
        >
          <view class="line-height-3.75">預計完成時間</view>
          <view class="font-size-6 line-height-6 text-[#00EF70]">{{ config.fourthTime }}</view>
          <view class="w-29.75 line-height-3.75 flex justify-end">小時後</view>
        </view>
      </view>
      <view class="w-42.5 h-66.25 bg-[#BACAE5] rounded-1.25 p-3 mt-3 box-border flex flex-col">
        <view class="w-full h-8.25 flex items-center justify-between">
          <view>計數2</view>
          <view
            class="w-15.75 h-full bg-[#97A7C0] border-solid border-[#292D34] border-2 box-border flex items-center justify-center text-[#030303] font-600"
          >
            RS2
          </view>
        </view>
        <view class="w-full h-8.25 flex items-center justify-between">
          <view></view>
          <view class="w-15.75 h-full flex items-center justify-center">72</view>
        </view>
        <view class="w-full h-9.5 flex items-center justify-center bg-[#007135] text-white">
          {{ config.secondNumber }}
        </view>
        <view
          class="w-full h-9.5 mt-1.25 flex items-center justify-center bg-[#A0B0C0] text-[#292D34]"
        >
          {{ config.secondPercent }}%
        </view>
        <view
          class="w-full h-21.24 mt-1.25 flex flex-col items-center justify-between bg-[#292D34] text-[#B6B6B6] p-y-3 box-border font-size-3.75"
        >
          <view class="line-height-3.75">預計完成時間</view>
          <view class="font-size-6 line-height-6 text-[#00EF70]">
            {{ config.secondTime }}
          </view>
          <view class="w-29.75 line-height-3.75 flex justify-end">小時後</view>
        </view>
      </view>
      <view class="w-42.5 h-66.25 bg-[#BACAE5] rounded-1.25 p-3 mt-3 box-border flex flex-col">
        <view class="w-full h-8.25 flex items-center justify-between">
          <view>計數3</view>
          <view
            class="w-15.75 h-full bg-[#97A7C0] border-solid border-[#292D34] border-2 box-border flex items-center justify-center text-[#030303] font-600"
          >
            RS3
          </view>
        </view>
        <view class="w-full h-8.25 flex items-center justify-between">
          <view></view>
          <view class="w-15.75 h-full flex items-center justify-center">72</view>
        </view>
        <view class="w-full h-9.5 flex items-center justify-center bg-[#007135] text-white">
          {{ config.thirdNumber }}
        </view>
        <view
          class="w-full h-9.5 mt-1.25 flex items-center justify-center bg-[#A0B0C0] text-[#292D34]"
        >
          {{ config.thirdPercent }}%
        </view>
        <view
          class="w-full h-21.24 mt-1.25 flex flex-col items-center justify-between bg-[#292D34] text-[#B6B6B6] p-y-3 box-border font-size-3.75"
        >
          <view class="line-height-3.75">預計完成時間</view>
          <view class="font-size-6 line-height-6 text-[#00EF70]">
            {{ config.thirdTime }}
          </view>
          <view class="w-29.75 line-height-3.75 flex justify-end">小時後</view>
        </view>
      </view>
      <view class="w-42.5 h-66.25 bg-[#BACAE5] rounded-1.25 p-3 mt-3 box-border flex flex-col">
        <view class="w-full h-8.25 flex items-center justify-between">
          <view>計數4</view>
          <view
            class="w-15.75 h-full bg-[#97A7C0] border-solid border-[#292D34] border-2 box-border flex items-center justify-center text-[#030303] font-600"
          >
            RS4
          </view>
        </view>
        <view class="w-full h-8.25 flex items-center justify-between">
          <view></view>
          <view class="w-15.75 h-full flex items-center justify-center">72</view>
        </view>
        <view class="w-full h-9.5 flex items-center justify-center bg-[#007135] text-white">
          {{ config.fourthNumber }}
        </view>
        <view
          class="w-full h-9.5 mt-1.25 flex items-center justify-center bg-[#A0B0C0] text-[#292D34]"
        >
          {{ config.fourthPercent }}%
        </view>
        <view
          class="w-full h-21.24 mt-1.25 flex flex-col items-center justify-between bg-[#292D34] text-[#B6B6B6] p-y-3 box-border font-size-3.75"
        >
          <view class="line-height-3.75">預計完成時間</view>
          <view class="font-size-6 line-height-6 text-[#00EF70]">
            {{ config.fourthTime }}
          </view>
          <view class="w-29.75 line-height-3.75 flex justify-end">小時後</view>
        </view>
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
  httpGet(`/prod-api/plcterminal/produce/api-query/${terminalId.value}`),
)

const config = reactive({
  gongdanStatus: '1',
  jitaiStatus: '1',
  ip: '1',
  handSpeed: '0',
  gonglingDanhao: '',
  chanpingGuige: '',
  chanpingBianhao: '',
  lujing: '1',
  renyuanBianhao: '1',
  firstNumber: 1,
  firstPercent: 1,
  firstTime: 1,
  secondNumber: 1,
  secondPercent: 1,
  secondTime: 1,
  thirdNumber: 1,
  thirdPercent: 1,
  thirdTime: 1,
  fourthNumber: 1,
  fourthPercent: 1,
  fourthTime: 1,
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
