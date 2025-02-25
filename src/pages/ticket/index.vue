<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '工单',
  },
}
</route>

<template>
  <view class="content">
    <wd-tabs v-model="tab">
      <wd-tab title="未处理">
        <view class="content">未处理</view>
      </wd-tab>
      <wd-tab title="审核中">
        <view class="content">审核中</view>
      </wd-tab>
      <wd-tab title="已处理">
        <view class="content">已处理</view>
      </wd-tab>
    </wd-tabs>
    <button @click="run">请求</button>
    <view v-if="loading" class="text-blue h-10">请求中...</view>
    <view v-if="error" class="text-red h-10">请求错误</view>
    <view v-else class="text-green h-10">{{ JSON.stringify(data) }}</view>
    <view class="w-[100%]">
      <wd-card v-for="i in [1, 2, 3]" :key="i">
        <wd-cell title="标题文字" value="内容" icon="setting" />
        <template #footer>
          <wd-button size="small" plain>派单</wd-button>
          <wd-button size="small" plain>认领</wd-button>
        </template>
      </wd-card>
      <wd-loadmore custom-class="loadmore" state="loading" />
    </view>
  </view>
</template>

<script setup lang="js">
import { httpPost, httpGet } from '@/utils/http'
const { loading, error, data, run } = useRequest(() =>
  httpPost('/code/note', { phone: '13258585169' }),
)
const tab = ref(0)
const current = ref(0)
const activeColor = ref('#DE5230')
const styleType = ref('text')
const showLeft = ref(false)

const showDrawer = () => {
  // console.log(showRight.value?.open())
  // showRight.value.open(); // Make sure to use a ref here for the drawer component
}

const closeDrawer = () => {
  // showRight.value.close();
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 120px;
  text-align: center;
}
.tab-item-active {
  color: #de5230;
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    display: block;
    width: calc(100% - 60px);
    height: 2px;
    background-color: #de5230;
  }
}
</style>
