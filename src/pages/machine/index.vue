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
      left-text="設備管理"
      right-text="添加設備"
      safeAreaInsetTop
      @click-right="handleClickRight"
      custom-style="background-color: #007135 !important;"
    />
    <wd-search mt-0.25 hide-cancel placeholder-left />
    <view class="">
      <view class="p-[12px] ml-[16px] tag-before">設備列表 (9)</view>
      <wd-card v-for="item in data" :key="item" @click="() => handleGotoDetail(item.id)">
        <template #title>
          <view class="flex-c-b">
            <view class="text-[16px] font-600">{{ item.terminalName }}</view>
            <view class="title-tip">
              <wd-tag
                type="success"
                v-show="item.terminalStatus !== 'online'"
                color="#007135"
                bg-color="#007135"
                plain
              >
                在線
              </wd-tag>
              <wd-tag
                type="success"
                v-show="item.terminalStatus === 'offline'"
                color="#6F6F6F"
                bg-color="#6F6F6F"
                plain
              >
                在線
              </wd-tag>
            </view>
          </view>
        </template>
        <view>
          <view class="flex-c-b">
            <view>設備位置：</view>
            <view>{{ item.terminalLocation }}</view>
          </view>
          <view class="flex-c-b">
            <view>設備編號：</view>
            <view>{{ item.terminalNo }}</view>
          </view>
        </view>
        <template #footer>
          <view class="flex-c-b">
            <view
              class="w-18.75 h-5.75 flex items-center justify-center border-1 box-border text-red border-red border-solid rounded-1.25"
            >
              解除綁定
            </view>

            <view
              class="w-18.75 h-5.75 flex items-center justify-center bg-[#007135] text-white rounded-1.25"
            >
              詳 情
            </view>
          </view>
        </template>
      </wd-card>
    </view>
  </view>
</template>

<script setup lang="js">
import { useUserStore } from '@/store'
import { httpGet } from '@/utils/http'
const userStore = useUserStore()
const userId = userStore.userInfo.id
const { data, run } = useRequest(
  () => httpGet(`/prod-api/plcterminal/terminal/api-list/${userId}`),
  { immediate: true },
)

const handleClickRight = () => {
  uni.navigateTo({ url: '/pages/addMachine/index' })
}
const handleGotoDetail = (id) => {
  uni.navigateTo({ url: `/pages/detailMachine/index?id=${id}` })
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
    background: #007135;
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
