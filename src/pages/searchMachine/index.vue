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
  <view class="page-content">
    <wd-navbar
      fixed
      left-arrow
      placeholder
      title="搜索"
      left-text="返回"
      safeAreaInsetTop
      @click-left="handleClickLeft"
      custom-style="background-color: #007135 !important;"
    />
    <wd-search
      mt-0.25
      hide-cancel
      placeholder-left
      focus
      v-model="keyword"
      @change="handleSearchChange"
    />
    <view class="">
      <wd-cell-group border>
        <wd-cell
          v-for="item in data"
          :key="item"
          is-link
          :to="`/pages/detailMachine/index?id=${item.id}`"
        >
          <template #title>
            <view class="flex align-center">
              <view class="mr-3 w-15">{{ item.terminalName }}</view>
              <view class="text-[#686868]">設備編號：{{ item.terminalNo }}</view>
            </view>
          </template>
        </wd-cell>
      </wd-cell-group>
    </view>
  </view>
</template>

<script setup lang="js">
import { useUserStore } from '@/store'
import { httpGet } from '@/utils/http'
import { onShow } from '@dcloudio/uni-app'
const userStore = useUserStore()
const userId = userStore.userInfo.id
const keyword = ref('')
const { data, run } = useRequest(() =>
  httpGet(`/prod-api/plcterminal/terminal/api-search/${userId}/${keyword.value}`),
)

const handleSearchChange = () => {
  console.log(keyword.value)
  if (keyword.value) {
    run()
  }
}

const handleClickLeft = () => {
  uni.navigateBack({ delta: 1 })
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
  .wd-navbar__title {
    color: #fff !important;
  }
  .wd-icon-arrow-left {
    &::before {
      color: #fff;
    }
  }
  .wd-cell__left {
    flex: 1 !important;
  }
  .wd-cell__right {
    flex: 0 !important;
  }
  .wd-card__footer {
    //&::after {
    //  content: none !important;
    //}
  }
}
</style>
