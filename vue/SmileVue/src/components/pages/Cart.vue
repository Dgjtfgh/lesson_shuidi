<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="购物车" />
    </div>
    <div class="cart-title">
        <div @click="management">管理</div> 
      <!-- <van-button size="small"  plain></van-button> -->
    </div>
    <!--显示购物车中的商品-->
    <van-checkbox-group v-model="result" ref="checkboxGroup" class="cart-list">
      <div class="pang-row" v-for="(item,index) in cartInfo" :key="index">
        <van-checkbox :name="item" ref="checkboxes" />
        <div class="pang-img">
          <img :src="item.image" width="100%" />
        </div>
        <div class="pang-text">
          <div class="pang-goods-name">{{item.name}}</div>
          <div class="pang-control">
            <van-stepper v-model="item.count" />
          </div>
        </div>
        <div class="pang-goods-price">
          <div>¥{{item.price | moneyFilter}}</div>
          <div>x{{item.count}}</div>
          <div class="allPrice">¥{{item.price*item.count | moneyFilter}}</div>
        </div>
      </div>
    </van-checkbox-group>
    <!--显示总金额-->
    <div class="settlement-operation" v-if="managementState">
      <van-checkbox v-model="checked" @click="changed">全选</van-checkbox>
      <div class="totalMoeny">商品总价:¥{{totalMoney | moneyFilter}}</div>
      <div class="settlement">
        <van-button round type="primary" size="small" color="#1989fa" @click="settlement">结算<span v-if="settlementCount !== 0">({{settlementCount}})</span></van-button>
      </div>
    </div>
    <div class="settlement-operation" v-else>
        <van-checkbox v-model="checked" @click="changed">全选</van-checkbox>
        <div class="settlement">
        <van-button round type="danger" plain size="small" @click="clean">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      managementState: true,
      cartInfo: [],
      isEmpty: false,
      result: [],
      checked: false,
      settlementCount: 0
    };
  },
  created() {
    this.getCartInfo();
  },
  computed: {
    totalMoney() {
    //   console.log(this.result);
      let res = this.result;
      let allMoney = 0;
      if (res.length > 0) {
        this.checked = true;
        this.settlementCount = res.length;
        res.forEach((item, index) => {
          allMoney += item.price * item.count;
        });
      } else {
          this.checked = false;
          this.settlementCount = 0;
      }
      return allMoney;
    }
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    //得到购物车数据的方法
    getCartInfo() {
      if (localStorage.cartInfo) {
        this.cartInfo = JSON.parse(localStorage.cartInfo);
      }
    //   console.log(" this.cartInfo:" + JSON.stringify(this.cartInfo));
      this.isEmpty = this.cartInfo.length > 0 ? true : false;
    },
    management() {
        this.managementState = !this.managementState;
    },
    clean() {
        let cartInfo = JSON.parse(localStorage.getItem("cartInfo"))
        for (let i = 0; i < this.result.length; i++) {
            cartInfo.splice(i, 1);
        }
        localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
        console.log(localStorage.getItem("cartInfo"));
        this.getCartInfo();
    },
    settlement() {},
    changed() {
        if (this.checked) this.$refs.checkboxGroup.toggleAll(true);
        else this.$refs.checkboxGroup.toggleAll(false);
    }
  }
};
</script>

<style scoped>
.cart-title {
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 5px;
}
.cart-title div {
    width: 2rem;
    height: 2rem;
    float: right;
}
.cart-list {
  background-color: #fff;
}
.pang-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #e4e7ed;
}
.pang-img {
  flex: 6;
}
.pang-text {
  flex: 14;
  padding-left: 10px;
}
.pang-control {
  padding-top: 10px;
}
.pang-goods-price {
  flex: 4;
  text-align: right;
}
.allPrice {
  color: red;
}
.settlement-operation {
  width: 100%;
  position: fixed;
  bottom: 51px;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5rem;
  border-top: 0.25px solid rgb(184, 183, 183);
  border-bottom: 0.25px solid rgb(184, 183, 183);
}
.totalMoeny {
  flex: 18;
  text-align: right;
  background-color: #fff;
  /* border-bottom: 1px solid #e4e7ed; */
  /* padding: 5px; */
  display: inline-block;
}
.settlement {
  flex: 6;
  padding-right: 1rem;
  /* display: block; */
  text-align: right;
  /* background-color: #1989fa; */
}
</style>