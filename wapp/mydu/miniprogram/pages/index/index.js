const db = wx.cloud.database();
const goodsCollection = db.collection('goods'); 
const app=getApp();
Page({
  data: {
    currentTab: 0,
    navScrollLeft:0,
    navData: [
      {
        id: 1,
        name: '推荐'
      },{
        id: 2,
        name: '12.12'
      },{
        id: 3,
        name: '新品'
      },{
        id: 4,
        name: '人气'
      },{
        id: 1,
        name: '球鞋'
      },{
        id: 2,
        name: '冬装'
      },{
        id: 3,
        name: '冬靴'
      },{
        id: 4,
        name: '手表'
      },{
        id: 1,
        name: '潮物'
      },{
        id: 2,
        name: '女神'
      },{
        id: 3,
        name: '夹克'
      },{
        id: 4,
        name: '裤装'
      },{
        id: 1,
        name: '秋装'
      }
    ],
    goods: []
  },
  showUser(){
    wx.navigateTo({
      url:"pages/login/login"
    })
  },
  onLoad() {
    wx.request({
      url:'http://localhost:1314/indexPage',
      success:(res)=>{
        console.log(res);
       const navData=res.data.navData;
       this.setData({
         navData
       })
      }
    }),
    goodsCollection
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    console.log('onLoad');
  },
  switchNav(e) {
    const cur =e.currentTarget.dataset.current;
    this.setData({
      currentTab: cur
    })
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