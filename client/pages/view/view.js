
Page({
 data: {
  fol1:[],
  kkk:[
  ],
  kawiper:[
    {
      id:1,
      text:"爪子不只能用来挠痒痒哦",
      image:'../../images/b3.jpg'
    },
    {
      id: 1,
      text: "还能抠脚",
      image: '../../images/b4.jpg'
    },
    {
      id: 1,
      text: "推荐内容",
      image: '../../images/b5.jpg'
    },
  ],
  kooo:[
   {
     id:1,
     text:"大学英语",
     image:''
   },
   {
     id: 2,
     text: "初中英语",
     image: ''
   },
   {
     id: 1,
     text: "小学英语",
     image: ''
   },
   {
     id: 2,
     text: "高中英语",
     image: ''
   },
   ],
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
  formSubmit: function (e) {
    var that=this
    wx.request({
      url: 'http://127.0.0.1:8000/index/view/submit',
      data:{
        text: e.detail.value.input
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
            that.setData({
              ss:false,
              ss2:true,
              ssz:[]=res.data,
            })
            console.log(res.data)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value.input)

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
           fol1: [] = res.data,
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