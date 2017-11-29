// pages/list/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['车载净化器', '防雾霾口罩', '净水器', '空气净化器'],
    index:0
  },

  ChangePicker:function(e){
    this.setData({
      index: e.detail.value,
      ClassifyProduct: app.globalData.ClassifyList[e.detail.value].ProductsList
    })
  },
  
  ShowDetail: function (e) {
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../detail/detail?productid=' + e.currentTarget.dataset.index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.ClassifyList[0].ProductsList);
    this.setData({
      ClassifyProduct: app.globalData.ClassifyList[0].ProductsList
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