// pages/identify/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    var ans = wx.getStorage({
      key: 'ans',
      success: function(res) {
        // res.data['image_in_base64']=res.
        wx.getStorage({
          key: 'history',
          success: function(resHis) {
            resHis.data[resHis.data.length] = res.data
            wx.setStorage({
              key: 'history',
              data: resHis.data,
            })
          },
          fail: function () {
            console.log('get history fail')
            wx.setStorage({
              key: 'history',
              data: [res.data],
            });
          }
        });
        self.setData({
          image: "data:image/jpeg;base64," + wx.getStorageSync("image").data,
          name: wx.getStorageSync('ans').name,
          baike_info: wx.getStorageSync('ans').baike_info
          });
        wx.removeStorage({
          key: 'ans',
          success: function(res) {},
        })
      },
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})