<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '添加',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    left-text="返回"
    title="添加"
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
        <view class="w-[40%] h-full box-border bg-[#292D34] p-3">設備ID</view>
        <view class="w-[60%] h-full box-border bg-[#007135] p-3">
          <wd-input
            no-border
            type="number"
            v-model="addParams.terminalNo"
            size="small"
            placeholder="添加設備ID"
          />
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[40%] h-full box-border bg-[#292D34] p-3">設備名稱</view>
        <view class="w-[60%] h-full box-border bg-[#007135] p-3">
          <wd-input
            no-border
            type="text"
            v-model="addParams.terminalName"
            size="small"
            placeholder="輸入設備名稱"
          />
        </view>
      </view>
      <wd-gap height="10" />
      <view
        class="flex justify-between h-12.5 box-border items-center text-[#fff] rounded-1.25 overflow-hidden"
      >
        <view class="w-[40%] h-full box-border bg-[#292D34] p-3">設備位置</view>
        <view class="w-[60%] h-full box-border bg-[#007135] p-3">
          <wd-input
            no-border
            type="text"
            v-model="addParams.terminalLocation"
            size="small"
            placeholder="輸入設備位置"
          />
        </view>
      </view>
      <wd-gap height="10" />
    </view>
    <view
      class="bg-[#9FB7E1] border-solid border-t-white border-0 border-t-0.5 w-[100%] p-x-4 p-y-3 box-border pos-fixed bottom-0"
    >
      <wd-button size="large" style="background: #007135" block @click="handleSave">
        確認添加
      </wd-button>
      <wd-gap safe-area-bottom height="0" />
    </view>
  </view>
</template>

<script setup lang="js">
import { useUserStore } from '@/store'
import { useToast } from 'wot-design-uni'
import { httpGet } from '@/utils/http'
const toast = useToast()
const userStore = useUserStore()
const userId = userStore.userInfo.id
const addParams = reactive({
  terminalNo: '',
  terminalName: '',
  terminalLocation: '',
})

const { run: runPostData } = useRequest(() =>
  httpGet(
    `/prod-api/plcterminal/terminal/api-add/${userId}/${addParams.terminalNo}/${addParams.terminalName}/${addParams.terminalLocation}`,
  ),
)

const handleSave = () => {
  if (!addParams.terminalNo || !addParams.terminalName || !addParams.terminalLocation) {
    toast.show('請正確填寫！')
    return
  }
  runPostData().then(() => {
    toast.show('保存成功！')
    Object.assign(addParams, {
      terminalNo: '',
      terminalName: '',
      terminalLocation: '',
    })
    setTimeout(() => {
      uni.navigateBack({ delta: 1 })
    }, 500)
  })
}

const handleClickLeft = () => {
  uni.navigateBack({ delta: 1 })
}
const handleClickRight = () => {
  uni.navigateTo({ url: '' })
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
