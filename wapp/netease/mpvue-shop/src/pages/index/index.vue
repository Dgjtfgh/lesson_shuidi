<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品"/>
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="channel">
      <div v-for="(item, index) in channel" :key="index" @click="categroyList(item.id)">
        <img :src="item.icon_url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="brand">
      <div class="head" @click="tobrandList">
        品牌制造商直供
      </div>
      <div class="content">
        <div v-for="(item, index) in brandList" :key="index" @click="branddetail(item.id)">
          <div>
            <p>{{item.name}}</p>
            <p class="price">{{item.floor_price}}元起</p>
          </div>
          <img :src="item.new_pic_url" alt="">
        </div>
      </div>
    </div>
    <div class="newgoods">
      <div class="newgoods-top" @click="goodsLists('new')">
        <div class="top">
          <p>新品首发</p>
          <p>查看全部</p> 
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in newGoods" :key="index" @click="goodsDetail(item.id)">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>¥{{item.retail_price}}</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="newgoods hotgoods">
      <div class="newgoods-top" @click="goodsLists('hot')">
        <div class="top">
          <p>
            人气推荐
            <span></span>
            毫无精选
          </p>
          <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in hotGoods" :key="index" @click="goodsDetail(item.id)">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>¥{{item.retail_price}}</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
import { mapState, mapMutations } from 'vuex'
import { get } from '../../utils'
export default {
  data () {
    return {
      banner: [],
      channel: [],
      brandList: [],
      newGoods: [],
      hotGoods: []
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
  mounted() {
    this.getData();
    this.getCityName(); 
  },
  methods: {
    ...mapMutations(['update']),
    toMappage () {
      // 通过 wx.getSetting 先查询一下用户是否授权 "scoped.record"
      let _this = this;
      wx.getSetting({
        success: (res) => {
          // 如果没有同意授权， 打开设置
          console.log(res);
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
                _this.getCityName()
              }
            })
          } else {
            wx.navigateTo({
              url: '/pages/mappage/main',
            })
          }
        },
        fail: (err) => {
          console.log(err);
        },
        complete: () => {}
      })
    },
    getCityName() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({key:'0ef60b4b140b9888d547bb6564731179'});
      myAmapFun.getRegeo({
        success: function (data) {
          // 成功回调
          _this.update(data);
          // console.log(data, 'cs');
        },
        fail: function (info) {
          // 失败回调
          console.log(info);
          _this.update({cityName: '北京'});
        }
      })
    },
    async getData() {
      const data = await get('/index/index');   // http://localhost:1314/xwk/index/index
      // console.log(data);
      this.banner = data.banner;
      this.channel = data.channel;
      this.brandList = data.brandList;
      this.newGoods = data.newGoods;
      this.hotGoods = data.hotGoods;
    },
    toSearch() {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    },
    categroyList(id) {
      wx.navigateTo({
        url: '/pages/categroylist/main?id=' + id
      })
    },
    branddetail(id) {
      wx.navigateTo({
        url: '/pages/branddetail/main?id=' + id
      })
    },
    tobrandList(id) {
      wx.navigateTo({
        url: '/pages/brandlist/main?id=' + id
      })
    },
    goodsLists (info) {
      if (info == 'hot') {
        wx.navigateTo({
          url: '/pages/newgoods/main?isHot=' + 1
        })
      } else {
        wx.navigateTo({
          url: '/pages/newgoods/main?isNew=' + 1
        })
      }
    },
    goodsDetail(id) {
      wx.navigateTo({
        url: '/pages/goods/main?id=' + id
      }) 
    } 
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
