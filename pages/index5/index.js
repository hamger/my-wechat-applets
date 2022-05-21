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
    page02List: ['主食', '蔬菜', '水果', '肉类', '蛋类', '豆/奶类', '饮料', '坚果', '零食'],
    page1List: ['热量', '碳水化合物', '蛋白质', '脂肪', '膳食纤维', '维生素A', '维生素B1', '维生素B2', '烟酸', '维生素C', '维生素E', '钠', '钙', '铁', '胆固醇'],
    page21List: [{
      name: "全谷物：",
      content: "全麦、小米、紫米、糙米、黑米、薏米、燕麦、荞麦、玉米",
    },
    {
      name: "豆类：", 
      content: "黄豆、黑豆、绿豆、蚕豆、豌豆、红豆",
    },
    {
      name: "蔬菜类：", 
      content: "菠菜、油菜、空心菜、豌豆苗、苋菜、绿包菜、生菜、油麦菜、茼蒿、小白菜、西洋菜、茄子、韭菜、胡萝卜、红薯、丝瓜、南瓜、韭黄、黄豆芽、黄花菜、苦瓜、春笋、西蓝花、芹菜、花椰菜",
    },
    {
      name: "水果：", 
      content: "橘子、橙子、柚子、芦柑、苹果、香蕉、菠萝、梨",
    },
    {
      name: "乳类：", 
      content: "低脂牛奶、低脂酸奶",
    },
    ],
    page2List: [{
        name: '我的经验性膳食炎症',
        color: 'rgb(254, 204, 240)'
      },
      {
        name: '常见的抗炎和促炎食物',
        color: 'rgb(77, 124, 12)'
      },
      {
        name: '我的食谱',
        color: 'rgb(254, 255, 2)'
      },
      {
        name: '个性化精准营养<br/>指导与饮食定制',
        color: 'rgb(4, 176, 240)'
      }
    ],
    page3List: ['预约挂号', '在线咨询', '我的论坛', '营养知识', '厨艺大比拼'],
    page4List: ['上传个人病例备份', '基本信息', '我的消息', '我的医生与营养师', '我的订单', '我的钱包', '设置'],
    idx: 0,
    page0Idx: 0,
    page2Idx: -1,
    page3Idx: -1,
  },
  page0tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page0Idx: idx
    });
  },
  page2tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page2Idx: idx
    });
    console.log(this.data.page2Idx)
  },
  page3tap(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      page3Idx: idx
    });
  },
  changePage(e) {
    const idx = e.currentTarget.dataset['idx']
    this.setData({
      idx
    })
    if (idx === 0) {
      this.setData({
        page0Idx: 0
      })
    } else if (idx === 2) {
      this.setData({
        page2Idx: -1
      })
    } else if (idx === 3) {
      this.setData({
        page3Idx: -1
      })
    }
  },
});