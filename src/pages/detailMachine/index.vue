<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '详情',
  },
}
</route>
<template>
  <wd-navbar
    fixed
    left-arrow
    placeholder
    left-text="返回"
    title="详情"
    safeAreaInsetTop
    @click-left="handleClickLeft"
    custom-style="background-color: #007135 !important;"
  />
  <view class="page-content p-3 box-border">
    <view
      class="w-full h-22.5 box-border bg-[#292D34] text-[#fff] rounded-1.25 overflow-hidden p-x-7 flex items-center justify-between"
    >
      <view class="flex-1 flex flex-col items-center justify-center">
        <view
          v-if="data.terminalConfig.isRs === 'on'"
          class="w-13.75 h-7.5 box-border rounded-1 border-2 border-solid border-[#FFFF00]"
        />
        <view
          v-else
          class="w-13.75 h-7.5 box-border rounded-1 border-2 border-solid border-[#B5B5B5]"
        />
        <view>RS</view>
      </view>
      <view class="flex-1 flex flex-col items-center justify-center">
        <view class="w-13.75 h-7.5 flex items-center justify-center">
          <view
            v-if="data.terminalConfig.isLink === 'on'"
            class="w-4 h-4 bg-[#FFFF00] rounded-full"
          />
          <view v-else class="w-4 h-4 bg-[#fff] rounded-full" />
        </view>
        <view>LINK</view>
      </view>
      <view class="flex-1 flex flex-col items-center justify-center">
        <view class="w-13.75 h-7.5 flex items-center justify-center">
          <view
            v-if="data.terminalConfig.isSensor === 'on'"
            class="w-4 h-4 bg-[#FFFF00] rounded-full"
          />
          <view v-else class="w-4 h-4 bg-[#fff] rounded-full" />
        </view>
        <view>SENSOR</view>
      </view>
      <view class="flex-1 flex flex-col items-center justify-center">
        <view class="w-13.75 h-7.5 flex items-center justify-center">
          <view
            v-if="data.terminalConfig.isCheck === 'on'"
            class="w-4 h-4 bg-[#FFFF00] rounded-full"
          />
          <view v-else class="w-4 h-4 bg-[#fff] rounded-full" />
        </view>
        <view>CHECK</view>
      </view>
    </view>
    <view class="flex flex-wrap justify-between mt-3 box-border text-white font-size-3.25">
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3 mr-10"
        @click="() => handleChange('isJiance', config.isJiance === 'on' ? 'off' : 'on')"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item1.png" />
        <view class="mt-1">
          <text>檢測</text>
          <text>{{ ` ${config.isJiance === 'on' ? 'ON' : 'OFF'}` }}</text>
        </view>
      </view>
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3 mr-10"
        @click="() => handleChange('isJishu', config.isJishu === 'on' ? 'off' : 'on')"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item2.png" />
        <view class="mt-1">
          <text>計數</text>
          <text>{{ ` ${config.isJishu === 'on' ? 'ON' : 'OFF'}` }}</text>
        </view>
      </view>
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3"
        @click="handleGoToUser"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item3.png" />
        <view class="mt-1">使用者參數</view>
      </view>
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3 mr-10"
        @click="handleGoToStrength"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item4.png" />
        <view class="mt-1">力量頁面</view>
      </view>
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3 mr-10"
        @click="handleGoToProduction"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item5.png" />
        <view class="mt-1">生產頁面</view>
      </view>
      <view
        class="flex flex-col items-center justify-center w-22 h-22 mt-3"
        @click="handleGoToAlarm"
      >
        <wd-img class="w-full" mode="widthFix" src="/static/images/xwz/item6.png" />
        <view class="mt-1">報警頁面</view>
      </view>
    </view>
    <view
      class="w-full h-31.25 p-x-5 p-y-5 mt-3 box-border font-size-4.5 bg-[#9FB7E1] text-[#30353D] rounded-1.25 overflow-hidden flex items-center justify-between"
    >
      <view class="h-full flex flex-col justify-between">
        <view class="flex">
          <view class="mr-3.5">上限</view>
          <view>
            <wd-input-number
              min="0"
              v-model="config.upperLimit"
              @change="(e) => handleChange('upperLimit', e.value)"
            />
          </view>
        </view>
        <view class="flex">
          <view class="mr-3.5">下限</view>
          <view>
            <wd-input-number
              min="0"
              v-model="config.lowerLimit"
              @change="(e) => handleChange('lowerLimit', e.value)"
            />
          </view>
        </view>
      </view>
      <view class="h-full flex flex-col items-center justify-center">
        <view>使用</view>
        <view class="w-17.5 mt-3">
          <wd-img
            @click="() => handleChange('isUpLower', 'off')"
            v-if="config.isUpLower === 'on'"
            class="w-full"
            mode="widthFix"
            src="/static/images/xwz/on.png"
          />
          <wd-img
            @click="() => handleChange('isUpLower', 'on')"
            v-else
            class="w-full"
            mode="widthFix"
            src="/static/images/xwz/off.png"
          />
        </view>
      </view>
    </view>
    <view class="p-3 text-white">四路設置</view>
    <view class="flex flex-wrap justify-between">
      <view class="bg-[#9FB7E1] rounded-1.25 w-42 h-50 p-3 box-border text-white">
        <view class="w-full flex items-center justify-between">
          <view
            class="w-7.5 h-7.5 bg-[#2C2C2C] box-border rounded-1.25 border-solid border-3 border-[#BFBFBF] flex items-center justify-center"
          >
            1
          </view>
          <view>使用</view>
          <view class="w-17.5 h-7.25" @click="switch1 = !switch1">
            <wd-img
              v-show="roadConfig.isFirstOn === 'on'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/on.png"
              @click="() => handleChangeRoad('isFirstOn', 'off')"
            />
            <wd-img
              v-show="roadConfig.isFirstOn === 'off'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/off.png"
              @click="() => handleChangeRoad('isFirstOn', 'on')"
            />
          </view>
        </view>
        <view class="bg-[#206B54] w-full h-6.25 mt-5.25 flex items-center justify-center">
          超出界限%
        </view>
        <view class="bg-[#17A35C] w-full h-6.25 flex items-center justify-center">
          <wd-input
            no-border
            type="number"
            v-model="roadConfig.firstOverPercent"
            size="small"
            placeholder="请输入"
            @blur="(e) => handleChangeRoad('firstOverPercent', e.value)"
          />
        </view>
        <view class="bg-[#206B54] w-full h-6.25 flex items-center justify-center mt-1.75">
          等級
        </view>
        <view class="mt-2.75">
          <wd-input-number
            min="0"
            v-model="roadConfig.firstLevel"
            @change="(e) => handleChangeRoad('firstLevel', e.value)"
          />
        </view>
      </view>
      <view class="bg-[#9FB7E1] rounded-1.25 w-42 h-50 p-3 box-border text-white">
        <view class="w-full flex items-center justify-between">
          <view
            class="w-7.5 h-7.5 bg-[#2C2C2C] box-border rounded-1.25 border-solid border-3 border-[#BFBFBF] flex items-center justify-center"
          >
            2
          </view>
          <view>使用</view>
          <view class="w-17.5 h-7.25" @click="switch1 = !switch1">
            <wd-img
              v-show="roadConfig.isSecondOn === 'on'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/on.png"
              @click="() => handleChangeRoad('isSecondOn', 'off')"
            />
            <wd-img
              v-show="roadConfig.isSecondOn === 'off'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/off.png"
              @click="() => handleChangeRoad('isSecondOn', 'on')"
            />
          </view>
        </view>
        <view class="bg-[#206B54] w-full h-6.25 mt-5.25 flex items-center justify-center">
          超出界限%
        </view>
        <view class="bg-[#17A35C] w-full h-6.25 flex items-center justify-center">
          <wd-input
            no-border
            type="number"
            v-model="roadConfig.secondOverPercent"
            size="small"
            placeholder="请输入"
            @blur="(e) => handleChangeRoad('secondOverPercent', e.value)"
          />
        </view>
        <view class="bg-[#206B54] w-full h-6.25 flex items-center justify-center mt-1.75">
          等級
        </view>
        <view class="mt-2.75">
          <wd-input-number
            min="0"
            v-model="roadConfig.secondLevel"
            @change="(e) => handleChangeRoad('secondLevel', e.value)"
          />
        </view>
      </view>
      <view class="bg-[#9FB7E1] rounded-1.25 w-42 h-50 mt-3 p-3 box-border text-white">
        <view class="w-full flex items-center justify-between">
          <view
            class="w-7.5 h-7.5 bg-[#2C2C2C] box-border rounded-1.25 border-solid border-3 border-[#BFBFBF] flex items-center justify-center"
          >
            3
          </view>
          <view>使用</view>
          <view class="w-17.5 h-7.25" @click="switch1 = !switch1">
            <wd-img
              v-show="roadConfig.isThirdOn === 'on'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/on.png"
              @click="() => handleChangeRoad('isThirdOn', 'off')"
            />
            <wd-img
              v-show="roadConfig.isThirdOn === 'off'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/off.png"
              @click="() => handleChangeRoad('isThirdOn', 'on')"
            />
          </view>
        </view>
        <view class="bg-[#206B54] w-full h-6.25 mt-5.25 flex items-center justify-center">
          超出界限%
        </view>
        <view class="bg-[#17A35C] w-full h-6.25 flex items-center justify-center">
          <wd-input
            no-border
            type="number"
            v-model="roadConfig.thirdOverPercent"
            size="small"
            placeholder="请输入"
            @blur="(e) => handleChangeRoad('thirdOverPercent', e.value)"
          />
        </view>
        <view class="bg-[#206B54] w-full h-6.25 flex items-center justify-center mt-1.75">
          等級
        </view>
        <view class="mt-2.75">
          <wd-input-number
            min="0"
            v-model="roadConfig.thirdLevel"
            @change="(e) => handleChangeRoad('thirdLevel', e.value)"
          />
        </view>
      </view>
      <view class="bg-[#9FB7E1] rounded-1.25 w-42 h-50 mt-3 p-3 box-border text-white">
        <view class="w-full flex items-center justify-between">
          <view
            class="w-7.5 h-7.5 bg-[#2C2C2C] box-border rounded-1.25 border-solid border-3 border-[#BFBFBF] flex items-center justify-center"
          >
            4
          </view>
          <view>使用</view>
          <view class="w-17.5 h-7.25" @click="switch1 = !switch1">
            <wd-img
              v-show="roadConfig.isFourthOn === 'on'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/on.png"
              @click="() => handleChangeRoad('isFourthOn', 'off')"
            />
            <wd-img
              v-show="roadConfig.isFourthOn === 'off'"
              class="w-full"
              mode="widthFix"
              src="/static/images/xwz/off.png"
              @click="() => handleChangeRoad('isFourthOn', 'on')"
            />
          </view>
        </view>
        <view class="bg-[#206B54] w-full h-6.25 mt-5.25 flex items-center justify-center">
          超出界限%
        </view>
        <view class="bg-[#17A35C] w-full h-6.25 flex items-center justify-center">
          <wd-input
            no-border
            type="number"
            v-model="roadConfig.fourthOverPercent"
            size="small"
            placeholder="请输入"
            @blur="(e) => handleChangeRoad('fourthOverPercent', e.value)"
          />
        </view>
        <view class="bg-[#206B54] w-full h-6.25 flex items-center justify-center mt-1.75">
          等級
        </view>
        <view class="mt-2.75">
          <wd-input-number
            min="0"
            v-model="roadConfig.fourthLevel"
            @change="(e) => handleChangeRoad('fourthLevel', e.value)"
          />
        </view>
      </view>
    </view>
  </view>
  <wd-overlay type="primary" :show="loading1 || loading2 || loading3">
    <view class="wrapper">
      <wd-loading />
    </view>
  </wd-overlay>
</template>

<script setup lang="js">
import { onLoad } from '@dcloudio/uni-app'
import { httpGet } from '@/utils/http'
import { useToast } from 'wot-design-uni'
const toast = useToast()
const terminalId = ref(0)
const {
  loading: loading1,
  data,
  run,
} = useRequest(() => httpGet(`/prod-api/plcterminal/terminal/api-detail/${terminalId.value}`))
const { loading: loading2, run: runPostConfig } = useRequest(() =>
  httpGet(
    `/prod-api/plcterminal/terminalconfig/api-update/${terminalId.value}/${config.isJiance}/${config.isJishu}/${config.isUpLower}/${config.upperLimit}/${config.lowerLimit}`,
  ),
)
const { loading: loading3, run: run4RoadConfig } = useRequest(() =>
  httpGet(
    `/prod-api/plcterminal/fourway/api-update/${terminalId.value}/${roadConfig.isFirstOn}/${roadConfig.firstOverPercent}/${roadConfig.firstLevel}/${roadConfig.isSecondOn}/${roadConfig.secondOverPercent}/${roadConfig.secondLevel}/${roadConfig.isThirdOn}/${roadConfig.thirdOverPercent}/${roadConfig.thirdLevel}/${roadConfig.isFourthOn}/${roadConfig.fourthOverPercent}/${roadConfig.fourthLevel}`,
  ),
)
onLoad((option) => {
  terminalId.value = option.id
  run().then((res) => {
    Object.assign(config, {
      upperLimit: res.terminalConfig.upperLimit,
      lowerLimit: res.terminalConfig.lowerLimit,
      isUpLower: res.terminalConfig.isUpLower,
      isJiance: res.terminalConfig.isJiance,
      isJishu: res.terminalConfig.isJishu,
    })
    Object.assign(roadConfig, {
      isFirstOn: res.terminalFourWayConfig.isFirstOn,
      firstOverPercent: res.terminalFourWayConfig.firstOverPercent,
      firstLevel: res.terminalFourWayConfig.firstLevel,
      isSecondOn: res.terminalFourWayConfig.isSecondOn,
      secondOverPercent: res.terminalFourWayConfig.secondOverPercent,
      secondLevel: res.terminalFourWayConfig.secondLevel,
      isThirdOn: res.terminalFourWayConfig.isThirdOn,
      thirdOverPercent: res.terminalFourWayConfig.thirdOverPercent,
      thirdLevel: res.terminalFourWayConfig.thirdLevel,
      isFourthOn: res.terminalFourWayConfig.isFourthOn,
      fourthOverPercent: res.terminalFourWayConfig.fourthOverPercent,
      fourthLevel: res.terminalFourWayConfig.fourthLevel,
    })
  })
})
const switch1 = ref(false)
const value1 = ref(0)
const value2 = ref(0)

const config = reactive({
  upperLimit: 0,
  lowerLimit: 0,
  isUpLower: 'off',
  isJiance: 'off',
  isJishu: 'off',
})

const roadConfig = reactive({
  isFirstOn: 'on',
  firstOverPercent: 0,
  firstLevel: 0,
  isSecondOn: 'on',
  secondOverPercent: 0,
  secondLevel: 0,
  isThirdOn: 'on',
  thirdOverPercent: 0,
  thirdLevel: 0,
  isFourthOn: 'on',
  fourthOverPercent: 0,
  fourthLevel: 0,
})

const handleChange = (key, e) => {
  config[key] = e
  runPostConfig().then((res) => toast.show('已更新！'))
}
const handleChangeRoad = (key, e) => {
  roadConfig[key] = e
  run4RoadConfig().then((res) => toast.show('已更新！'))
}
const handleClickLeft = () => {
  uni.switchTab({ url: '/pages/machine/index' })
}
const handleGoToUser = () => {
  uni.navigateTo({ url: `/pages/user/index?id=${terminalId.value}` })
}
const handleGoToAlarm = () => {
  uni.navigateTo({ url: `/pages/alarm/index?id=${terminalId.value}` })
}
const handleGoToStrength = () => {
  uni.navigateTo({ url: `/pages/strength/index?id=${terminalId.value}` })
}
const handleGoToProduction = () => {
  uni.navigateTo({ url: `/pages/production/index?id=${terminalId.value}` })
}
</script>

<style lang="scss">
.page-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #007135;
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
  .wd-cell {
    background: #000 !important;
    height: 50px;
  }
  .wd-cell__wrapper {
    padding: 0 !important;
  }
  .wd-input-number {
    display: flex !important;
    justify-content: space-between !important;
  }

  .wd-input-number__action {
    width: 32px !important;
    height: 32px !important;
    background: #d0dcf1;
    border-radius: 4px;
    border: 1px solid #007135;
  }

  .wd-input-number__inner {
    margin: 0 10px;
    width: 60px;
    height: 32px;
    background: #007135;
    border-radius: 4px;
    color: #fff !important;
  }
  .wd-input-number__input {
    width: 100% !important;
    height: 100% !important;
  }
  .uni-input-input {
    width: 100%;
    height: 100%;
    line-height: 32px;
    font-size: 24px;
    color: #fff !important;
  }
  .wd-input {
    background: #17a35c !important;
  }
  .uni-input-input {
    color: #fff !important;
    font-size: 16px !important;
    text-align: center !important;
  }
}
</style>
