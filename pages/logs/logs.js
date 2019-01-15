Page({
  data: {
    logs: [],
    modalHidden: true,
    toastHidden: true
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '任务记录'
    })
    this.getLogs()
  },
  set: function() {

  },
  getLogs: function() {
    // wx.removeStorageSync('logs')
    let logs = wx.getStorageSync('logs')
    console.log(logs)
    logs.forEach(function(item) {
      item.startTime = new Date(item.startTime).toLocaleString()
    })
    this.setData({
      logs: logs
    })
  },
  onLoad: function() {},
  switchModal: function() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  hideToast: function() {
    this.setData({
      toastHidden: true
    })
  },
  clearLog: function(e) {
    wx.setStorageSync('logs', [])
    this.switchModal()
    this.setData({
      toastHidden: false
    })
    this.getLogs()
  }
})
