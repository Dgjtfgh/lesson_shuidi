// 小程序很简单 都是由Page构成
// wxml wxss js json
const app = getApp()

Page({
  // data: {
  //   avatarUrl: './user-unlogin.png',
  //   userInfo: {},
  //   logged: false,
  //   takeSession: false,
  //   requestResult: ''
  // },
  navigateToAdd: function() {
    // console.log('去add页面');
    wx.navigateTo({
      url: '../add/add'
    })
  },
  navigateToList: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  }
 
})
