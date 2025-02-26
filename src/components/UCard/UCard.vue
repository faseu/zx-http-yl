<template>
  <view
    :class="['my-card', type == 'rectangle' ? 'is-rectangle' : '', customClass]"
    :style="customStyle"
  >
    <view :class="['my-card__title-content', customTitleClass]">
      <view class="my-card__title">
        <text v-if="title">{{ title }}</text>
        <slot v-else name="title"></slot>
      </view>
    </view>
    <view :class="`my-card__content ${customContentClass}`">
      <slot></slot>
    </view>
    <view :class="`my-card__footer ${customFooterClass}`">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  type: String,
  title: String,
  customClass: String,
  customStyle: Object,
  customTitleClass: String,
  customContentClass: String,
  customFooterClass: String,
})
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  padding: 24px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
