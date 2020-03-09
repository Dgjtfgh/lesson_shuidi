<template>
    <div
        :class="carouselClasses">
        <!-- Carousel -->
        <div
            class="el-carousel-container"
            :style="{height: height}">
            <slot></slot>
        </div>
        <ul
            :class="indicatorsClasses">
            <!-- 有多少个carousel-item 就输出多少个indicatorsClasses -->
            <li
                v-for="(item, index) in items" 
                :key = index
                :class="[
                    'el-carousel__indicator',
                    'el-carousel__indicator--' + direction
                ]"
                >
                <button class="el-carousel__button">
                    
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    // 严格下不可或缺
    name: 'Carousel',
    data() {
        return {
            items: [] // 空
        }
    },
    props: {
        height: String,
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1;
            }
        }
    },
    computed: {
        // 根据方向计算
        carouselClasses() {
            const classes = ['el-carousel', 'el-carousel--' + this.direction];
            // vue :class  支持
            return classes;  
        },
        indicatorsClasses() {
            const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
            return classes;
        }
    },
    methods: {
        updateItems() {
            // console.log(this.$children);
            this.items = this.$children.filter(child => child.$options.name == 'CarouselItem');
        }
    }
}
</script>