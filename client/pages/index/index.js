var order = ['demo1', 'demo2', 'demo3']

Page({
  data: {
    a:[
      {
        id:1,
         image:"../../images/aa1.jpg",
         text:'全网最热Python3入门+进阶 更快上手实际开发',
         t1:'初级·2237人在学'
      },
      {
        id: 2,
        image: "../../images/aa2.jpg",
        text: '全网首发mpvue课程小程序全栈开发',
        t1: '中级·892人在学'
      },
      {
        id: 3,
        image: "../../images/aa3.jpg",
        text: 'Spring Cloud微服务实战',
        t1: '高级·451人在学'
      },
    ],
    sr:[
      {
        id:1,
        image:"../../images/a1.jpg",
        t2:"么么"
      },
      {
        id: 2,
        image: "../../images/a2.jpg",
        t2:"依依"
      },
      {
        id: 3,
        image: "../../images/a3.jpg",
        t2:"沐沐"
      },
      {
        id: 4,
        image: "../../images/a4.jpg",
        t2:"沫沫"
      },
      {
        id: 5,
        image: "../../images/a5.jpg",
        t2:"卡卡"
      },
      {
        id: 4,
        image: "../../images/a4.jpg",
        t2: "沫沫"
      },
      {
        id: 5,
        image: "../../images/a5.jpg",
        t2: "卡卡"
      },
    ],

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
       url: 'http://127.0.0.1:8000/index/view/kc',
        data: {
          id:1
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          that.setData({
           lx: [] = res.data,
          })

          console.log(res.data)
        },
        fail: function(res) {},
        complete: function(res) {},
      }),
       wx.request({
         url: 'http://127.0.0.1:8000/index/view/kc',
         data: {
           id: 2
         },
         header: {
           "Content-Type": "application/x-www-form-urlencoded"
         },
         method: 'POST',
         dataType: 'json',
         responseType: 'text',
         success: function (res) {
           that.setData({
             wx: [] = res.data,
           })

           console.log(res.data)
         },
         fail: function (res) { },
         complete: function (res) { },
       })
      
}
})