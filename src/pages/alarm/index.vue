<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '报警',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    title="添加"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    @click-right="handleClickRight"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content">
    <wd-table :data="dataList" :stripe="false">
      <wd-table-col prop="major1" width="12.65%" label="模數"></wd-table-col>
      <wd-table-col prop="major2" width="16.40%" label="異常碼"></wd-table-col>
      <wd-table-col prop="major3" width="25.31%" label="異常內容"></wd-table-col>
      <wd-table-col prop="major4" width="16.40%" label="異常值"></wd-table-col>
      <wd-table-col prop="major5" width="29.24%" label="異常時間"></wd-table-col>
    </wd-table>
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
const dataList = reactive([
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
  {
    major1: '00',
    major2: '67',
    major3: '循環水異常',
    major4: '0',
    major5: '1/9 16:23:45',
  },
])

const handleClickLeft = () => {
  uni.navigateBack({ delta: 1 })
}
const handleClickRight = () => {
  uni.navigateTo({ url: '' })
}

const closeDrawer = () => {
  // showRight.value.close();Strength
}
</script>

<style lang="scss">
.page-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #9fb7e1;
  padding: 12px;
  box-sizing: border-box;
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

  .wd-table {
    background: #292d34 !important;
  }
  .wd-table__body {
    height: auto !important;
  }
  .wd-table__header {
    height: 32px !important;
    background: #007135 !important;
  }
  .wd-table__body {
    background: #fff !important;
  }
  .wd-table__body .wd-table__cell {
    background: #fff !important;
    color: #920909 !important;
  }
  .wd-table__cell {
    padding: 0 !important;
    min-height: 32px !important;
    height: 32px !important;
    display: flex;
    justify-content: center !important;
    background: none !important;
    color: #fff !important;
  }
}
</style>
