// pages/teacher/index.js
var a=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tt: [],
    rr:[],
   
    dgz:true,
   
  },
  dgz: function (){
    this.setData({
      dgz:false,
      ygz:true,
    })
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/gz',
      data: {
        id:a,
        data:1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {

      },
      fail: function (res) { },
      complete: function () {
      },
    })
  
  },
  ygz: function (options) {
    this.setData({
      dgz: true,
      ygz: false,
    })
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/gz',
      data: {
        id: a,
        data: 0
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',


      success: function (res) {
       
      },
      fail: function (res) { },
      complete: function () {

      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      a:options.id
    })
    console.log(a);
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/store',
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',


      success: function (res) {

        that.setData({
          tt: [] = res.data,

        })

      },
      fail: function (res) { },
      complete: function () {

      },
    })
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/ss',
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',


      success: function (res) {

        that.setData({
          rr: [] = res.data,
        })

        console.log(res.data)
      },
      fail: function (res) { },
      complete: function () {

      },
    })
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/ll',
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',


      success: function (res) {
        if(res.data==1){
          that.setData({
            dgz: false,
            ygz: true,
          })
        }
       
      },
      fail: function (res) { },
      complete: function () {

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