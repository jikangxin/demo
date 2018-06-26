function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',


  data: {
    src: '',
    danmuList:
    [{
      text: '',
      color: '#ff0000',
      time: 1
    },
    {
      text: '',
      color: '#ff00ff',
      time: 3
    }],
 
    tt:[
     
    ],
    rr:[],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },

  aa: function (e) {

    wx.navigateTo({
      url: "../player/index?kid=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  onLoad: function (options){
    console.log(options)
     var that=this 
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/zy',
       data: {
         id: 15,
         data: 18,
       },
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: 'POST',
       dataType: 'json',
       responseType: 'text',
       success: function (res) {
         that.setData({
           xs: [] = res.data,
         })

         console.log(res.data)
       },
       fail: function (res) { },
       complete: function (res) { },
     })
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/kc',
       data: {
         id:0
       },
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: 'POST',
       dataType: 'json',
       responseType: 'text',
       success: function (res) {
         that.setData({
           tt: [] = res.data,
         })

         console.log(res.data)
       },
       fail: function (res) { },
       complete: function (res) { },
     })
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/player',
       data: {
         id: options.kid
       },
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: 'POST',
       dataType: 'json',
       responseType: 'text',
       success: function (res) {
         that.setData({
          rr: [] = res.data,
         })

         console.log(res.data)
       },
       fail: function (res) { },
       complete: function (res) { },
     })
  }
})