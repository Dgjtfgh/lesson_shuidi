const db = wx.cloud.database();
const goodsCollection = db.collection('goods'); 
const app=getApp();
Page({
  data: {
    currentTab: 0,
    navScrollLeft: 0,
    navData: [
      {
        id: 0,
        name: '推荐'
      },{
        id: 1,
        name: '新品'
      },{
        id: 2,
        name: '人气'
      },{
        id: 3,
        name: '球鞋'
      },{
        id: 4,
        name: '冬装'
      },{
        id: 5,
        name: '冬靴'
      },{
        id: 6,
        name: '卫衣'
      }
    ],
    productData: [],
    goods: []
  },
  // showUser(){
  //   wx.navigateTo({
  //     url:"pages/login/login"
  //   })
  // },
  onLoad() {
    wx.request({
      url:'http://localhost:1314/indexPage',
      success:(res)=>{
        // console.log(res);
       const navData = res.data.navData;
       const productData = res.data.productData;
      //  console.log(navData);
       this.setData({
         productData,
         navData
       })
      }
    }),
    goodsCollection
      .where({
        label: db.RegExp({
          regexp: '推荐',
          option: 's'
        })
      })
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    // console.log('onLoad');
  },
  switchNav(e){
    var cur = e.currentTarget.dataset.current;
    var name = this.data.navData[cur].name;
    // console.log(name);
    var singleNavWidth = wx.getSystemInfoSync().windowWidth / 6;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 3.5) * singleNavWidth
    });
    // console.log(this.data.navScrollLeft);
    goodsCollection
      .where({
        label: db.RegExp({
          regexp: name,
          option: 's'
        })
      })
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
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
  }
})