
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

// pages/user/user.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    sr: [],
    ss:[],
    sa:[],
    userInfo: {},
    logged: false,
    takeSession:true,
    requestResult: '',
    w11:false,
    w22:false,
    w33:false,
    aa:true,
    bb:false,
    cc:true,
    dd:false,
    ee:true,
    ff:false,
    b:'',
    srv: [],
  },
  aa:function(){
    this.setData({
      w22: false,
      w33: false,
      w11:true,
      bb:true,
      aa:false,
      dd: false,
      cc: true,
      ff: false,
      ee: true,
    })

    var that = this
  
  },
  bb: function () {
    this.setData({
      w22: false,
      w33: false,
      w11: false,
      aa: true,
      bb:false,
      dd: false,
      cc: true,
    })
  },
  gz: function () {
    this.setData({
      w33: false,
      w11: false,
      w22: true,
      aa: true,
      bb: false,
      cc: false,
      dd: true,
      ff: false,
      ee: true,
    })
    var that = this
   
  },
  dd:function(){
    this.setData({
      w33: false,
      w11: false,
      w22: false,
      dd:false,
      cc: true,
    })
  },
  w33: function () {
    this.setData({
      w11: false,
      w22: false,
      w33: true,
      aa: true,
      bb: false,
      dd: false,
      cc: true,
      ee:false,
      ff:true,
    })
 
  },
  ff: function () {
    this.setData({
      w11: false,
      w22: false,
      w33: false,
      aa: true,
      bb: false,
      dd: false,
      cc: true,
      ff: false,
      ee: true,
    })
  },
  // 用户登录示例
  login: function () {
   
    if (this.data.logged) return

    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          util.showSuccess('登录成功')
          that.setData({
            userInfo: result,
            logged: true
          })
          console.log(result.data)
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true
              })
              console.log(result.data)
            },

            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },

  // 切换是否带有登录态
  switchRequestMode: function (e) {
    this.setData({
      takeSession: e.detail.value
    })
    this.doRequest()
  },

  doRequest: function () {
    util.showBusy('请求中...')
    var that = this
    var options = {
      url: config.service.requestUrl,
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)
        that.setData({
          requestResult: JSON.stringify(result.data)
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }
    if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
      qcloud.request(options)
    } else {    // 使用 wx.request 则不带登录态
      wx.request(options)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

      var that = this
      wx.request({
        url: 'http://127.0.0.1:8000/index/view/me',
        data: {
          text: 'fbv'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {

          that.setData({
            srv: [] = res.data,

          })

          console.log(res.data)
        },
      })
      wx.request({
        url: 'http://127.0.0.1:8000/index/view/me',
        data: {
          text: 'fb'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {

          that.setData({
            sr: [] = res.data,
            b: res.data.length
          })

          console.log(res.data)
        },
        fail: function (res) { },
        complete: function () {

        },
      })
    
        wx.request({
          url: 'http://127.0.0.1:8000/index/view/fs',
          data: {
            text: 'fs'
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          success: function (res) {

            that.setData({
              sa: [] = res.data,
              a3: res.data.length,
            })

            console.log(res.data)
          },
        })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/gz',
      data: {
        text: 'gz'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {

        that.setData({
          ss: [] = res.data,
          a2: res.data.length,
        })

        console.log(res.data)
      },
    })
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