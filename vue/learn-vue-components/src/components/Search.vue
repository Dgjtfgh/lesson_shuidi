<template>
    <div>
        <div class="container">
            <i-input v-model="searchData" placeholder="输入你想查找的商品" class="search" size="large">
                <Button slot="append" icon="ios-search" @click="search"></Button>
            </i-input>
            <Tag v-for="(item, index) in promotionTags" :key="index" 
            closable 
            @on-close="closeTags(index)">
                <span @click="selectTag(index)">{{item}}</span>
            </Tag>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            promotionTags: ['买6免3', '领200神券', '满199减100', '充100送50'],
            searchData: ''
        }
    },
    methods: {
        search() {
            // console.log(this.searchData);
            // 跳转链接
            this.$router.push({
                path: '/search',
                query: {
                    searchData: this.searchData
                }
            })
        },
        selectTag(index) {
            this.searchData = this.promotionTags[index];
        },
        closeTags(index) {
            // 把这个tag 从 tags 中移除
            this.promotionTags.splice(index, 1);
        }
    }
    
}
</script>

<style scoped>
.container {
    padding-top: 15px;
    margin: 0 auto;
    margin-bottom: 1px;
    width: 460px;
}
.search {
    margin: 5px 0;
}
</style>