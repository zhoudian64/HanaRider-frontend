// pages/history/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var ans = wx.getStorage({
      key: 'ans',
      success: function (res) {
        self.setData({
          image: "data:image/jpeg;base64," + res.data.image_in_base64,
          name: res.data.name,
          baike_info: res.data.baike_info
        });
        wx.removeStorage({
          key: 'ans',
          success: function (res) { },
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