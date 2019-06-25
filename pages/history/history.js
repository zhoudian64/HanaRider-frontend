// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: []
  },

  toData: function (e) {
    let self = this;
    console.log(e.currentTarget.dataset.name)
    wx.getStorage({
      key: 'history',
      success: function(res) {
        for(var item in res.data){
          if (res.data[item].name == e.currentTarget.dataset.name){
            wx.setStorage({
              key: 'ans',
              data: res.data[item],
              success: function(){
                wx.navigateTo({
                  url: './data/data',
                })
              }
            })
          }
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self =this;
    wx.getStorage({
      key: 'history',
      success: function(res) {
        console.log(res)
        self.setData({
          history: res.data.reverse(0)
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})