// pages/classily/classily.js
Page({
  data: {    
    currentTab: 0,
    navData: [
      {
        id: 0,
        name: '品牌'
      },{
        id: 1,
        name: '系列'
      },{
        id: 2,
        name: '球鞋'
      },{
        id: 3,
        name: '潮搭'
      },{
        id: 4,
        name: '手表'
      },{
        id: 5,
        name: '潮玩'
      },{
        id: 6,
        name: '数码'
      },{
        id: 7,
        name: '箱包'
      },{
        id: 8,
        name: '美妆'
      }
    ]
  },

  onLoad: function (options) {

  },
  onLoad() {
    wx.setNavigationBarTitle({
        title: '分类'  //修改title
      })
    wx.request({
      url:'http://localhost:1314/classilyPage',
      success:(res)=>{
        // console.log(res);
       const navData = res.data.navData;
      //  console.log(navData);
       this.setData({
         navData
       })
      }
    })
  },
  switchNav(e) {
    var cur = e.currentTarget.dataset.current;
    this.setData({
      currentTab: cur
    });
  }
})