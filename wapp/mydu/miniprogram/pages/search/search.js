const db = wx.cloud.database();
const goodsCollection = db.collection('goods');
Page ({
    data: {
        currentTab: 1,
        input_value: '',
        input_state: false,
        hotwordsData: [
            {hotword: '丝绸'},
            {hotword: '红外线'},
            {hotword: '权志龙'}, 
            {hotword: '黑天使'}
        ],
        historysearchData: [],
        products: []
    } ,
    onLoad() {
        wx.setNavigationBarTitle({
            title: '搜索'  //修改title
          })
        wx.request({
          url:'http://localhost:1314/searchPage',
          success:(res)=>{
            console.log(res);
            const hotwordsData = res.data.hotwordsData;
            console.log(hotwordsData);
            this.setData({
                hotwordsData
           })
          }
        }),
        this.setData({
            historysearchData: wx.getStorageSync('historysearch')
        })
    },
    searchKey(e) {
        let value = e.currentTarget.dataset.text || e.detail.value;
        var historysearch = this.data.historysearchData || [];
        console.log(value);
        for (let i = 0; i < historysearch.length; i++) {
            if (value == historysearch[i]) {
                historysearch.splice(i, 1);
            }
        }
        historysearch.unshift(value);
        // var historywords = historysearch.map(it => ({historyword: it}));
        console.log(this.data.historysearchData);
        this.setData({
            input_value: value,
            input_state: true,
            historysearchData: historysearch
        })
        wx.setStorageSync('historysearch', historysearch);

        goodsCollection
            .where({
                label: db.RegExp({
                regexp: value,
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
    cancel() {
        this.setData({
            input_value: '',
            input_state: false,
            currentTab: 1
        })
    },
    selectNav(e) {
        var cur = e.currentTarget.dataset.current;
        console.log(cur);
        this.setData({
            currentTab: cur
    });
    }
    
})
