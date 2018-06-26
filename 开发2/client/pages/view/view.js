
Page({
 data: {
  kecc: [
     {
       id: 1,
       image: "../../images/qa1.jpg",
       t2: "用GO语言构建自己的区块链",
       r:"免费 &nbsp; 初级 &nbsp; 180人在学"
     },
     {
       id: 2,
       image: "../../images/qa2.jpg",
       t2: "Crontab不知疲倦的时间表",
       r:"免费 &nbsp; 初级 &nbsp; 1030人在学"
     },
     {
       id: 3,
       image: "../../images/qa3.jpg",
       t2: "用Jenkins自动化搭建测试环境",
       r: "免费 &nbsp; 入门 &nbsp; 2876人在学"
     },
     {
       id: 4,
       image: "../../images/qa4.jpg",
       t2: "C4D基础入门案例",
       r: "免费 &nbsp; 中级 &nbsp; 135人在学"
     },
     {
       id: 5,
       image: "../../images/qa5.jpg",
       t2: "PullToRefresh",
       r: "免费 &nbsp; 中级 &nbsp; 86人在学"
     },
   ],
   sr: [
     {
       id: 1,
       image: "../../images/a1.jpg",
       t2: "么么"
     },
     {
       id: 2,
       image: "../../images/a2.jpg",
       t2: "依依"
     },
     {
       id: 3,
       image: "../../images/a3.jpg",
       t2: "沐沐"
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
   kkcc:[
     {
       id:1,
       t:'全部'
     },
     {
       id:2,
       t:"前端开发"
     },
     {
       id: 3,
       t: "后端开发"
     },
     {
       id: 4,
       t: "数据库"
     },
     {
       id:5,
       t: "移动开发"
     },
     {
       id:6,
       t:"人工智能"
     },
     {
       id:7,
       t:'云计算&大数据'
     }

   ],
  fol1:[],
  kkk:[
  ],
 
   kkcc1:1,
  tt:[],
  indicatorDots: false,
  autoplay: true,
  interval: 5000,
  duration: 1000,

      min11:true,
      min22:false,
      min33:false,
      k222:false,
     fff:false,
     ss:true,
     ss2:false,
     ssz:[],
     m1:true,
     m2:false,
     m3: true,
     m4: false,
     m5: true,
     m6: false,
     curNav: 1,
},
swichkkcc:function(e){
  var that = this
  that.setData({
   kkcc1: e.currentTarget.id
  })
  
  wx.request({
    url: 'http://127.0.0.1:8000/index/view/kc',
    data: {
      id: e.currentTarget.id
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: 'POST',
    success: function (res) {
      that.setData({
        kec: [] = res.data,
      })
      console.log(res.data)
    },
    fail: function (res) { },
    complete: function () {
    },
  })
  console.log(e.currentTarget.id)
},
aa: function (e) {

  wx.navigateTo({
    url: "../player/index?kid=" + e.currentTarget.id,
  })
  console.log(e.currentTarget.id)
},
  min1:function(){
      this.setData({
        min22: false,
        min33: false,
        min11:true,
        fff:false,
        k222: false,
        m1:false,
        m2:true,
        m3: true,
        m4: false,
        m5: true,
        m6: false,
      })
  },
  min111: function () {
    this.setData({
      m1: true,
      m2: false,
     
    })
  },
  
  min2: function () {
    this.setData({
      min11: false,
      min33: false,
      min22: true,
      fff: false,
      k222: false,
      m1: true,
      m2: false,
      m4: true,
      m3: false,
      m5: true,
      m6: false,
    })
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/aas',
      data: {
        
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',


      success: function (res) {

        that.setData({
         qwer: [] = res.data,
        })

        console.log(res.data)
      },
      fail: function (res) { },
      complete: function () {

      },
    })
  },
  min21: function () {
    this.setData({
      min11: false,
      min33: false,
      min22: true,
      fff: false,
      k222: false,
      m1: true,
      m2: false,
      m3: true,
      m4: false,
      m5: true,
      m6: false,
    })
   
  },
  min3: function () {
    this.setData({
      min11: false,
      min22: false,
      min33: true,
      fff: false,
      k222:false,
      m1: true,
      m2: false,
      m3: true,
      m4: false,
      m6: true,
      m5: false,
    })
  },
  min31: function () {
    this.setData({
      min11: false,
      min22: false,
      min33: true,
      fff: false,
      k222: false,
      m1: true,
      m2: false,
      m3: true,
      m4: false,
      m5: true,
      m6: false,
    })
  },
  kq1: function (event){
    this.setData({
      min22:false,
      k222:true,

      kooo:[]=[
        {
          kid: event.currentTarget.dataset.kid,
          id:1,
          name: event.currentTarget.dataset.hi
        },
        {
          id: 2,
          kid: event.currentTarget.dataset.kid,
          name: event.currentTarget.dataset.hi
        },
        {
          id: 3,
          kid: event.currentTarget.dataset.kid,
          name: event.currentTarget.dataset.hi
        },
        {
          id: 4,
          kid: event.currentTarget.dataset.kid,
          name: event.currentTarget.dataset.hi
        },
        {
          id: 5,
          kid: event.currentTarget.dataset.kid,
          name: event.currentTarget.dataset.hi
        },
        {
          id: 6,
          kid: event.currentTarget.dataset.kid,
          name: event.currentTarget.dataset.hi
        },
      ]
    })

  },
  fols:function(event){
  
  
   var that=this
    wx.request({
      url: 'http://127.0.0.1:8000/index/view',
      data: {
        id: event.currentTarget.dataset.hi
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
     
    
      success: function(res) {
     
        that.setData({
         tt:[]=res.data,
        })
      
        console.log(res.data)
      },
      fail: function(res) {},
      complete: function() {
       
      },
    })
    this.setData({
      fff:true,
      
    })
    
  },
  onLoad: function (options) {
     var that = this
     wx.request({
       url: 'http://127.0.0.1:8000/index/view/kcc',
       data: {
        
       },
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: 'POST',
       success: function (res) {
         that.setData({
           kec: [] = res.data,
         })
         console.log(res.data)
       },
       fail: function (res) { },
       complete: function () {
       },
     })
   },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    this.setData({
      ss: true,
      ss2: false,
    })
  },

})