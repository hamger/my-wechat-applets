Page({
  data: {
    tabBar: ['首页', '营养报告', '我的管家', '掌上服务', '个人中心'],
    page0List: [{
        name: "早餐记录",
      },
      {
        name: "午餐记录",
      },
      {
        name: "晚餐记录",
      },
      {
        name: "零食记录",
      }
    ],
    page02List: ['主食', '蔬菜', '水果', '肉类', '蛋类', '豆/奶类', '饮料', '坚果', '零食'],
    page2List: [{
        name: '我的经验性膳食炎症',
        color: 'rgb(254, 204, 240)'
      },
      {
        name: '常见的抗炎和促炎食物',
        color: 'rgb(77, 124, 12)'
      },
      {
        name: '我的食谱',
        color: 'rgb(254, 255, 2)'
      },
      {
        name: '个性化精准营养指导与饮食定制',
        color: 'rgb(4, 176, 240)'
      }
    ],
    page3List: ['预约挂号', '在线咨询', '我的论坛', '营养知识', '厨艺大比拼'],
    idx: 0,
    page0Idx: 0,
    page2Idx: -1,
    page3Idx: -1,
  },
  estimate() {
    this.setData({
      page0Idx: 2
    });
  },
  page00tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page0Idx: idx
    });
  },
  page2tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page2Idx: idx
    });
  },
  page24tap(e) {
    // const idx = e.currentTarget.dataset['idx']
    this.setData({
      page2Idx: 4
    });
  },
  page3tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page3Idx: idx
    });
  },
  changePage(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      idx
    })
    if (idx === 0) {
      this.setData({
        page0Idx: 0
      })
    } else if (idx === 2) {
      this.setData({
        page2Idx: -1
      })
    } else if (idx === 3) {
      this.setData({
        page3Idx: -1
      })
    }
  },
});