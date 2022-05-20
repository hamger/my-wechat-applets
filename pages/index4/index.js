Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
  },
  handleListChange({
    detail = {}
  }) {
    this.setData({
      value1: detail.value
    });
  },
  handleClick() {
    console.log(this.data.value1)
    wx.redirectTo({
      url: `/pages/index5/index`
    })
  },
});