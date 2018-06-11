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
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
    pp:[
      {
        id:1,
        image:'../../images/b3.jpg',
        name:'11:',
        message:'aqqqqqqqqqqqqq'
      },
      {
        id: 2,
        image: '../../images/b4.jpg',
        name: '22:',
        message: 'bwwwwwwwwww'
      },
      {
        id: 3,
        image: '../../images/b5.jpg',
        name: '33:',
        message: 'cqqqqqqqqqqq'
      },
      {
        id: 4,
        image: '../../images/b6.jpg',
        name: '44:',
        message: 'ddddddddddddd'
      },
      {
        id: 5,
        image: '../../images/b7.jpg',
        name: '55:',
        message: 'eeeeeeeeeeeee'
      },
    ],
    tt:[
     
    ],
    rr:[],
  },
  zan:function(){

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