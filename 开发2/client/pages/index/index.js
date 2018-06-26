var order = ['demo1', 'demo2', 'demo3']

Page({
  data: {
    xs:[
    ],
    sz:[],
    a:[],
    toView: 'green',
    i: [
      '../../images/p1.jpg',
      '../../images/p2.jpg',
      '../../images/p3.jpg',
      '../../images/p4.jpg',
      '../../images/p5.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    i1:"../../images/1.jpg",
  
    mode: 'aspectFit',
    i2:"../../images/素材5.png",
    u1:" ",
    i3:"../../images/素材3.png", 
    lx:[
    ],
    wx:[],
  },
  formSubmit: function (e) {
    wx.navigateTo({
      url: "../search/index?t=" + e.detail.value.input,
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value.input)

  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  scrollToTop: function (e) {
    this.setAction({
      scrollTop: 0
    })
  },
  aa:function(e){
   
    wx.navigateTo({
      url: "../player/index?kid=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
 onLoad: function (options) {
   var that = this
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/zy',
        data: {
          id:8,
          data:11,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          that.setData({
           sz: [] = res.data,
          })

          console.log(res.data)
        },
        fail: function(res) {},
        complete: function(res) {},
      }),
       wx.request({
         url: 'http://127.0.0.1:8000/index/view/zy',
         data: {
           id: 12,
           data:14,
         },
         header: {
           "Content-Type": "application/x-www-form-urlencoded"
         },
         method: 'POST',
         dataType: 'json',
         responseType: 'text',
         success: function (res) {
           that.setData({
             a: [] = res.data,
           })

           console.log(res.data)
         },
         fail: function (res) { },
         complete: function (res) { },
       })
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/zy',
       data: {
         id: 15,
         data:18,
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
      
}
})