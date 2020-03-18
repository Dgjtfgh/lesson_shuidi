<template>
    <div class="mappage">
        <div class="section">
            <input type="text" placeholder="搜索" focus="true" v-model="keywords" @input="bindInput">
        </div>
        <scroll-view :scroll-y="true" class="addcont" style="height: 500rpx">
            <div class="result" @touchstart="bingSearch(item.name)" v-for="(item, index) in tips" :key="index">
                {{item.name}}
            </div>
        </scroll-view>

        <div class="map_container">
            <div class="title">显示当前位置</div>
             <map id="map" class="map" scale="16" :longitude="longitude" :latitude="latitude" :markers="markers"></map> <!--scale  缩放级别，取值范围为3-20 -->
        </div>
    </div> 
</template>

<script>
import amapFile from '../../utils/amap-wx'
import {mapMutations} from 'vuex'
export default {
    data () {
        return {
            tips: [],
            longitude: 0,  // 中心经度
            latitude: 0,   // 中心纬度
            markers: [],   // 标记点
            keywords: ''
        }
    },
    mounted() {
        this.getMapaddress()
    },
    methods: {
        ...mapMutations(['update']),
        getMapaddress () {
            let _this = this;
            var myAmapFun = new amapFile.AMapWX({key:'0ef60b4b140b9888d547bb6564731179'});
            myAmapFun.getRegeo({
                iconPath: "/static/images/marker.png",
                iconWidth: 22,
                iconHeight: 32,
                success (data) {
                // 成功回调
                    console.log(data);
                    let marker = [
                        {
                            id: data[0].id,
                            latitude: data[0].latitude,
                            longitude: data[0].longitude,
                            width: data[0].width,
                            height: data[0].height
                        }
                    ]
                    _this.markers = marker;
                    _this.longitude = data[0].longitude;
                    _this.latitude = data[0].latitude;
                },
                fail (info) {
                // 失败回调
                console.log(info);
                 }
            })
        },
        bindInput(e) {
            // console.log(e);
            let _this = this;
            let keywords = _this.keywords;
            var myAmapFun = new amapFile.AMapWX({key:'0ef60b4b140b9888d547bb6564731179'});
            myAmapFun.getInputtips({
                keywords: keywords,
                location: '',
                success: function(data){
                    // console.log(data);
                    if(data && data.tips){
                        _this.tips = data.tips
                    }
                }
            })
        },
        bingSearch(cityName) {
            this.update({cityName: cityName})
            wx.navigateBack({
                delta: 1
            });

        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>