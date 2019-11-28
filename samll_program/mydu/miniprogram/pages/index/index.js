const db = wx.cloud.database();
const goodsCollection = db.collection('goods'); 
Page({
  data: {
    goods: []
  },
  onLoad() {
    goodsCollection
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    console.log('onLoad');
  },
  onPullDownRefresh() {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();
    console.log('刷新');
  },
  onReachBottom() {
    console.log('触底了');
    // const data = [...this.data.goods, ...this.data.goods];
    // this.setData({
    //   goods:data
    // })
  }
})