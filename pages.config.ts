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
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        pagePath: 'pages/ticket/index',
        iconPath: 'static/tabBar/ticket.png',
        selectedIconPath: 'static/tabBar/ticketH.png',
        text: '工单',
      },
      {
        pagePath: 'pages/robot/index',
        iconPath: 'static/tabBar/robot.png',
        selectedIconPath: 'static/tabBar/robotH.png',
        text: '设备',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'static/tabBar/mine.png',
        selectedIconPath: 'static/tabBar/mineH.png',
        text: '我的',
      },
    ],
  },
})
