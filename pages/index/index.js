//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  toToday: function () {
    wx.navigateTo({
      url: '../today/today',
    });
  },
  toIdentify: function () {
    wx.navigateTo({
      url: '../identify/identify',
    });
  },
  toHistory: function () {
    wx.navigateTo({
      url: '../history/history',
    });
  },
  onLoad: function() {
    var self = this
    wx.request({
      url: 'http://localhost:8082/random',
      method: 'GET',
      success(res) {
        wx.setStorage({
          key: 'today',
          data: res.data,
        })
        self.setData({
          back_groud_image: "data:image/jpeg;base64," + res.data.image_in_base64
        })
      }
    })
  }
})