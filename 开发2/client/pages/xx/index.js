// pages/xx/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i1:"../../images/1.jpeg",
    logged:false,
    code:{},
  },

  login:function(){
    wx.login({
      success:function(res){
        if(res.code){
          wx.request({
            url: 'https://sjyh29bk.qcloud.la/application/controllers/Login.php',
            data:{
              code: res.code
            }
          })
        }
       that.setData({
         logged:true
       })
      },

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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