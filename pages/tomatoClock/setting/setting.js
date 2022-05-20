Page({
    data: {
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
            title: '设置'
        })
        this.setData({
            workTime: wx.getStorageSync('workTime'),
            restTime: wx.getStorageSync('restTime')
        })
    },
    changeWorkTime: function(e) {
        wx.setStorage({
            key: 'workTime',
            data: e.detail.value
        })
    },
    changeRestTime: function(e) {
        wx.setStorage({
            key: 'restTime',
            data: e.detail.value
        })
    }
})