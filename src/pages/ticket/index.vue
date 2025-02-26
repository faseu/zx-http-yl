<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="page-content">
    <wd-navbar
      fixed
      placeholder
      left-text="工单"
      right-text="添加"
      safeAreaInsetTop
      @click-right="handleClickRight"
      custom-style="background-color: #4d80f0 !important;"
    />
    <wd-search hide-cancel placeholder-left />
    <view class="">
      <view class="p-[12px] ml-[16px] tag-before">标签名称</view>
      <wd-card v-for="item in [1, 2, 3]" :key="item">
        <template #title>
          <view class="flex-c-b">
            <view class="text-[16px]">水箱加水</view>
            <view class="title-tip">
              <wd-tag type="success" plain>已派单</wd-tag>
            </view>
          </view>
        </template>
        <view>
          <view class="flex-c-b">
            <view>设备位置：</view>
            <view>龙湖天街</view>
          </view>
          <view class="flex-c-b">
            <view>创建时间：</view>
            <view>2024.10.08 18:00:00</view>
          </view>
        </view>
        <template #footer>
          <view>
            <wd-button
              custom-style="height: 24px; border-radius: 8px;"
              size="small"
              class="mr-[8px]"
            >
              派单
            </wd-button>
            <wd-button custom-style="height: 24px; border-radius: 8px;" size="small" plain>
              认领
            </wd-button>
          </view>
        </template>
      </wd-card>
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
  uni.navigateTo({ url: '/pages/addMachine/index' })
}

const closeDrawer = () => {
  // showRight.value.close();
}
</script>

<style lang="scss">
.page-content {
  width: 100%;
  //min-height: calc(100vh - 50px);
  min-height: 100vh;
  height: 100%;
  background: #f2f2f2;
  .flex-c-b {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
}

.tag-before {
  position: relative;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 15px;
    width: 4px;
    height: 18px;
    background: #4d80f0;
  }
}
:deep() {
  .wd-navbar__text {
    color: #fff !important;
  }
  .wd-card__content {
    padding: 0 !important;
    //&::after {
    //  content: none !important;
    //}
  }
  .wd-card__footer {
    //&::after {
    //  content: none !important;
    //}
  }
}
</style>
