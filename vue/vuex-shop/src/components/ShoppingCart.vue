<template>
    <div class="cart">
        <!-- <hr /> -->
       <!-- <div>{{this.$store.state.cart.items}}</div>  -->
       <h2>Your Cart</h2>
       <p v-show="!products.length"><i>Please add some products to cart</i></p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total}}</p>
        <p>
            <button :disabled="!products.length" @click="checkout(products)">checkout</button>
        </p>
        <p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>
    </div>
    
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
    // 更详细的购物车商品数据
    created() {
        console.log(this.$store.state.cart, this.$store.state.products);
    },
    computed: {
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotalprice'
        })
    },
    methods: {
        checkout(products) {
            // console.log(products)
            this.$store.dispatch('cart/checkout', products);
        }
    }
}
</script>