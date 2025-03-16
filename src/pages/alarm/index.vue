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
    left-text="返回"
    title="添加"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content">
    <wd-table :data="dataList" :stripe="false">
      <wd-table-col prop="moshu" width="12.65%" label="模數"></wd-table-col>
      <wd-table-col prop="yichangma" width="16.40%" label="異常碼"></wd-table-col>
      <wd-table-col prop="yichangNeirong" width="25.31%" label="異常內容"></wd-table-col>
      <wd-table-col prop="yichangZhi" width="16.40%" label="異常值"></wd-table-col>
      <wd-table-col prop="createTime" width="29.24%" label="異常時間"></wd-table-col>
    </wd-table>
  </view>
</template>

<script setup lang="js">
import { useToast } from 'wot-design-uni'
import { onLoad } from '@dcloudio/uni-app'
import { httpGet } from '@/utils/http'
const toast = useToast()
const dataList = reactive([])

const terminalId = ref(0)
const { loading, run: runGetData } = useRequest(() =>
  httpGet(`/prod-api/plcterminal/alarm/api-query/${terminalId.value}`),
)

onLoad((option) => {
  terminalId.value = option.id
  runGetData().then((res) => {
    Object.assign(
      dataList,
      res.map((item) => {
        return {
          ...item,
          createTime: convertTimeFormat(item.createTime),
        }
      }),
    )
  })
})

function convertTimeFormat(timestamp) {
  const date = new Date(timestamp)
  const month = date.getMonth() + 1 // getMonth() 返回 0-11，需要 +1
  const day = date.getDate()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${month}/${day} ${hours}:${minutes}:${seconds}`
}

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
  padding: 12px;
  box-sizing: border-box;
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
