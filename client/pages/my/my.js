var config = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
    gridList: [
      { enName: 'favorite', zhName: '收藏' },
      { enName: 'history', zhName: '浏览记录' },
      { enName: 'shake', zhName: '视频'},
      { enName: 'gallery', zhName: '相册' },
      { enName: 'setting', zhName: '设置' }
    ],
    skin: ''
  },
  onLoad: function (cb) {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    wx.login({
      withCredentials: true,
      success: function (res) {

        console.log(res)
        wx.getUserInfo({
          success: function (res) {
            console.log(res.userInfo)
            that.setData({
              userInfo: res.userInfo
            })

          }
        })
      }
    })
    typeof cb == 'function' && cb()
  },
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: "../" + data.url + '/' + data.url
    })
  },
  viewSkin: function () {
    wx.navigateTo({
      url: "../skin/skin"
    })
  }
})