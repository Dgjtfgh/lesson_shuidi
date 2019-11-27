// const db = wx.cloud.database();
// const productsCollection = db.collection(''); 
Page({
  data: {
    products: [
      {
        imageUrl: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/xowpa3kkdfun2nd7pp6w/zoom-freak-1-ep-%E7%94%B7%E5%AD%90%E7%AF%AE%E7%90%83%E9%9E%8B-k838FB.jpg',
        title: '男鞋',
        price: '￥234',
        sale_number:'2347人付款'
      },
      {
        imageUrl: 'https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gdwq1fhohud6exffj3al/air-zoom-pegasus-36-shield-%E5%A5%B3%E5%AD%90%E8%B7%91%E6%AD%A5%E9%9E%8B-GffPv0.jpg',
        title: '女鞋',
        price: '￥756',
        sale_number:'1346人付款'
      }
    ]
  },
  onLoad() {
    productsCollection
    .get()
    .then(res => {
      this.setData({

      })
    })
    // console.log('onLoad');
  },
  onReachBottom() {
    // console.log('触底了');
    const data = [...this.data.products, ...this.data.products];
    this.setData({
      products:data
    })
  }
})