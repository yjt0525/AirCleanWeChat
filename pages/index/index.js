//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../libs/bmap-wx.js'); 

Page({

  data: {
    ShowContact:false
  },

  ShowContactModal:function(){
    this.setData({
      ShowContact:true
    });
  },

  HideContactModal: function () {
    this.setData({
      ShowContact: false
    });
  },

  ShowDetail:function(e){
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../detail/detail?productid=' + e.currentTarget.dataset.index,
    })
  },

  MakeCall:function(){
    wx.makePhoneCall({
      phoneNumber: '029-89353430',
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  ShowMore:function(){
    wx.navigateTo({
      url: '../list/list',
    })
  },

  onLoad: function () {
    var me = this;
    var BMap = new bmap.BMapWX({
      ak: 'BUF6MOAF6CQYWBV3MdK7g5vs'
    }); 
    wx.showLoading({
      mask:true,
      title:"定位中..."
    });
    BMap.weather({
      success: function (res) {
        console.log(res);
        console.log(res.currentWeather[0].currentCity);
        me.setData({
          MyCity: res.currentWeather[0].currentCity,
          MyPM: res.currentWeather[0].pm25
        });
        wx.hideLoading();
      }
    }); 
    this.setData({
      IndexList: app.globalData.IndexList
    });
  }

})