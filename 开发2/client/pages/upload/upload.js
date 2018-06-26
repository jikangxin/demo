// pages/upload/upload.js
var util = require('../../utils/util.js')
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mmm:[],
   left:true,
   right:false,
   kec: [
    
   ],
  },
  aa: function (e) {

    wx.navigateTo({
      url: "../player/index?kid=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
  },
  bindButtonTap:function(){
    wx.navigateTo({ url: '../upvideo/index' })
  },
  doUpload:function(){
    wx.navigateTo({ url: '../upimage/index' })
  },
  leftt: function(){   
      this.setData({     
        left:true,
        right:false
      })
  },
  rightt: function () {
    this.setData({      
      left: false,
      right:true
    })
  },
 



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/dy',
      data: {
        id: 1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
        kec: [] = res.data,
        })

        console.log(res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
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