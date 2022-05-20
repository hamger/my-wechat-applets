Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabBar: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        index: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        navigateDetail: function(e) {
            this.setData({
                index: e.currentTarget.dataset.idx
            })
            wx.redirectTo({
                url: this.data.tabBar[e.currentTarget.dataset.idx].pagePath,
            })
        }
    }
})