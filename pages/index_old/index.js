Page({
    onShow: function() {
        wx.setNavigationBarTitle({
            title: '应用中心'
        })
    },
    gotoApp: function(e) {
        const appName = e.target.dataset.app
        wx.navigateTo({
            url: `/pages/${appName}/index/index`,
        })
    },
})