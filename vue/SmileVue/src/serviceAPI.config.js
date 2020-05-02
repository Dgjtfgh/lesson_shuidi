const BASEURL = "https://www.easy-mock.com/mock/5eabfa430a92d726eae93c81/shopping";
const LOCALURL = "http://localhost:3000/";
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',
    login:LOCALURL+'user/login',
}

export default URL