import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: '星物种',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#838281',
    selectedColor: '#4D80F0',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        pagePath: 'pages/ticket/index',
        iconPath: 'static/tabbar/ticket.png',
        selectedIconPath: 'static/tabbar/ticketH.png',
        text: '工单',
      },
      {
        pagePath: 'pages/robot/index',
        iconPath: 'static/tabbar/robot.png',
        selectedIconPath: 'static/tabbar/robotH.png',
        text: '设备',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'static/tabbar/mine.png',
        selectedIconPath: 'static/tabbar/mineH.png',
        text: '我的',
      },
    ],
  },
})
