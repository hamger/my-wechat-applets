Page({
    data: {
        logs: [],
        modalHidden: true,
        toastHidden: true,
        tabBar: [{
                "pagePath": `/pages/tomatoClock/index/index`,
                "iconPath": "../../image/home.png",
                "selectedIconPath": "../../image/home-a.png",
                "text": "时钟"
            },
            {
                "pagePath": "/pages/tomatoClock/logs/logs",
                "iconPath": "../../image/log.png",
                "selectedIconPath": "../../image/log-a.png",
                "text": "记录"
            },
            {
                "pagePath": "/pages/tomatoClock/setting/setting",
                "iconPath": "../../image/setting.png",
                "selectedIconPath": "../../image/setting-a.png",
                "text": "设置"
            },
        ]
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
        let logs = wx.getStorageSync('logs')
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