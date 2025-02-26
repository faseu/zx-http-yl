<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '添加',
  },
}
</route>
<template>
  <view class="page-content">
    <view class="p-3">
      <wd-cell size="large" value="内容">
        <template #title>
          <view>
            <view class="text-amber">标题文字</view>
          </view>
        </template>
        <template>
          <view>
            <view class="bg-amber">标题文字</view>
          </view>
        </template>
      </wd-cell>
      <wd-gap height="10"></wd-gap>
    </view>
    <view class="bg-[#fff] w-[100%] h-[60px] p-x-[15px] p-y-[12px] box-border pos-fixed bottom-[0]">
      <wd-button block>按钮</wd-button>
      <wd-gap safe-area-bottom height="0"></wd-gap>
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
  background: #f2f2f2;
}
:deep() {
  .wd-cell {
    background: #000 !important;
    height: 50px;
  }
  .wd-cell__wrapper {
    padding: 0 !important;
  }
}
</style>
