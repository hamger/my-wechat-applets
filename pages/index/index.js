Page({
  data: {
  list: [{
      id: 1,
      name: '妊娠期糖尿病',
      url: '../../image/index-1.png'
    }, {
      id: 2,
      name: '高血压',
      url: '../../image/index-2.png'
    }, {
      id: 3,
      name: '糖尿病',
      url: '../../image/index-3.png'
    }, {
      id: 4,
      name: '肥胖',
      url: '../../image/index-4.png'
    }],
    current: 1,
  },
  handleListChange({
    detail = {}
  }) {
    this.setData({
      current: detail.value
    });
  },
  handleClick() {
    console.log(this.data.current)
    wx.redirectTo({
      url: `/pages/index2/index?type=${this.data.current}`
    })
  },
});