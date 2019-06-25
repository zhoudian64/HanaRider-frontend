// pages/identify/identify.js
const IDENTIFY_API_URL = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?access_token=24.5427f2e6bed64be02148c7bb935a5912.2592000.1563865758.282335-16609954';
function identify(image_in_base64){
  wx.request({
    url: IDENTIFY_API_URL,
    method: "POST",
    data: {
      "baike_num": 1,
      "image": image_in_base64
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (result) {
      var flower = result.data.result[0]
      wx.setStorage({
        key: 'ans',
        data: {
          name: flower.name,
          baike_info: flower.baike_info.description != null ? flower.baike_info.description: "暂无词条",
          image_in_base64: image_in_base64
        },
        success: function(){
          wx.navigateTo({
            url: './result/result',
          })
        }
      })
      addToServer(flower.name, flower.baike_info.description, image_in_base64)
    }
  })
};
function addToServer(name, baike_info, image_in_base64){
  wx.request({
    url: 'http://localhost:8082/add',
    method: "POST",
    data: {
      "name": name,
      "baike_info": baike_info,
      "image_in_base64": image_in_base64
    }
  })
}
Page({
  data: {
  },
  upload() {
    let self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['camera'],
      success: function (result) {
        wx.getFileSystemManager().readFile({
          filePath: result.tempFilePaths[0],
          encoding: 'base64',
          success: function (file_readed) {
            identify(file_readed.data);
            wx.setStorageSync('image', file_readed)
            
          }
        });
      }
    });
  },
})