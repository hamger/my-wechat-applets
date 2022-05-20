Page({
  data: {
    list:  [{
      id: 1,
      name: '本人',
      url: '../../image/index2-1.png'
    }, {
      id: 2,
      name: '家属',
      url: '../../image/index2-2.png'
    }],
    current: 1,
  },
  onLoad: function (opt) {
    if (opt.type == 1) {}
  },
  handleListChange({
    detail = {}
  }) {
    this.setData({
      current: detail.value
    });
  },
  handleClick() {
    wx.redirectTo({
      url: `/pages/index3/index`
    })
  },
});