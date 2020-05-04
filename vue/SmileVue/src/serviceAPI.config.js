
const BASEURL = "http://localhost:3000/data/";  // json-server
const LOCALURL = "http://localhost:3300/";      // mongodb数据库
const URL = {
    getShoppingMallInfo:BASEURL,   // 首页
    // getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',  // 注册
    login:LOCALURL+'user/login',   // 登录
    getDetailGoodsInfo : LOCALURL+'goods/getDetailGoodsInfo',  //获取商品详情
    getCategoryList:LOCALURL+'goods/getCategoryList',         //得到大类信息
    getCateGorySubList : LOCALURL+'goods/getCategorySubList',  //得到小类信息
    getGoodsListByCategorySubID : LOCALURL+'goods/getGoodsListByCategorySubID',  //得到小类商品信息
}

export default URL