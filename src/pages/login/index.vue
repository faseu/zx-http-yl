<route lang="json5">
{
  style: {
    navigationBarTitleText: '工单',
  },
}
</route>
<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view style="padding: 20px">
      <view></view>
      <view class="u-demo-block__content" style="margin-top: 15px">
        <u-input placeholder="手机号" shape="circle"></u-input>
        <br />
        <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
        <u-input placeholder="验证码" shape="circle">
          <template v-slot:suffix>
            <u-code
              ref="uCode"
              @change="codeChange"
              seconds="20"
              changeText="X秒重新获取哈哈哈"
            ></u-code>
            <u-button @tap="getCode" :text="tips" type="success" size="mini"></u-button>
          </template>
        </u-input>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Hello',
      tips: '获取验证码',
      value: '',
    }
  },
  watch: {
    value(newValue, oldValue) {
      // console.log('v-model', newValue);
    },
  },
  onLoad() {},
  methods: {},
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
