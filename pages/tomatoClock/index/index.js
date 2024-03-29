const util = require('../../../utils/util.js')
const defaultLogName = {
    work: '工作',
    rest: '休息'
}
const actionName = {
    stop: '停止',
    start: '开始'
}

const initDeg = {
    left: 45,
    right: -45,
}

Page({

    data: {
        remainTimeText: '',
        timerType: 'work',
        log: {},
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
        ],
        completed: false,
        isRuning: false,
        leftDeg: initDeg.left,
        rightDeg: initDeg.right
    },

    onShow: function() {
        if (this.data.isRuning) return
        let workTime = util.formatTime(wx.getStorageSync('workTime'), 'HH')
        let restTime = util.formatTime(wx.getStorageSync('restTime'), 'HH')
        this.setData({
            workTime: workTime,
            restTime: restTime,
            remainTimeText: workTime + ':00'
        })
    },

    startTimer: function(e) {
        let startTime = Date.now()
        let isRuning = this.data.isRuning
        let timerType = e.target.dataset.type
        let showTime = this.data[timerType + 'Time']
        let keepTime = showTime * 60 * 1000
        let logName = this.logName || defaultLogName[timerType]

        if (!isRuning) {
            this.timer = setInterval((function() {
                this.updateTimer()
                this.startNameAnimation()
            }).bind(this), 1000)
        } else {
            this.stopTimer()
        }

        this.setData({
            isRuning: !isRuning,
            completed: false,
            timerType: timerType,
            remainTimeText: showTime + ':00',
            taskName: logName
        })
        this.data.log = {
            name: logName,
            startTime: startTime,
            startTimeDesc: util.formatDate(startTime),
            endTime: keepTime + startTime,
            endTimeDesc: util.formatDate(keepTime + startTime),
            keepTime: keepTime,
            action: actionName[isRuning ? 'stop' : 'start'],
            type: timerType
        }
    },

    startNameAnimation: function() {
        let animation = wx.createAnimation({
            duration: 450
        })
        animation.opacity(0.2).step()
        animation.opacity(1).step()
        this.setData({
            nameAnimation: animation.export()
        })
    },

    stopTimer: function() {
        // reset circle progress
        this.setData({
            leftDeg: initDeg.left,
            rightDeg: initDeg.right
        })

        // clear timer
        this.timer && clearInterval(this.timer)

        this.saveLog()
    },

    updateTimer: function() {
        let log = this.data.log
        let now = Date.now()
        let remainingTime = Math.round((log.endTime - now) / 1000)
        let H = util.formatTime(Math.floor(remainingTime / (60 * 60)) % 24, 'HH')
        let M = util.formatTime(Math.floor(remainingTime / (60)) % 60, 'MM')
        let S = util.formatTime(Math.floor(remainingTime) % 60, 'SS')
        let halfTime

        // update text
        if (remainingTime > 0) {
            let remainTimeText = (H === "00" ? "" : (H + ":")) + M + ":" + S
            this.setData({
                remainTimeText: remainTimeText
            })
        } else if (remainingTime == 0) {
            this.setData({
                completed: true
            })
            this.stopTimer()
            return
        }

        // update circle progress
        halfTime = log.keepTime / 2
        if ((remainingTime * 1000) > halfTime) {
            this.setData({
                leftDeg: initDeg.left - (180 * (now - log.startTime) / halfTime)
            })
        } else {
            this.setData({
                leftDeg: -135
            })
            this.setData({
                rightDeg: initDeg.right - (180 * (now - (log.startTime + halfTime)) / halfTime)
            })
        }
    },

    changeLogName: function(e) {
        this.logName = e.detail.value
    },

    saveLog: function() {
        var logs = wx.getStorageSync('logs') || []
        var log = this.data.log,
            end = Date.now()
            // 考虑未完成的情况
        if (end - log.startTime < log.keepTime) {
            log.endTime = end
            log.endTimeDesc = util.formatDate(end)
        }
        logs.unshift(log)
        wx.setStorageSync('logs', logs)
    }
})