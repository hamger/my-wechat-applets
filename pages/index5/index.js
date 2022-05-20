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
    estimateGiude: [
      ['0', '1'],
      ['2', '3'],
      ['4', '5', '6'],
      ['7'],
      ['8'],
      ['9', '10', '11', '12'],
    ],
    idx: 0,
    page0Idx: 0
  },
  estimate() {
    this.setData({
      page0Idx: 2
    });
  },
  page00tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page0Idx: 1
    });
  },
  changePage(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      idx
    })
  },
});