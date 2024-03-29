import shop from "../../api/shop"

const state = {
    items: [],
    checkoutStatus: null
}

const mutations = {
    pushProductToCart(state, {id}) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },
    setCartItem(state, { items }) {
        state.items = items
    }
}

const actions = {
    addProductToCart({commit}, product) {
        if(product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem) {
                commit('pushProductToCart', {id: product.id});
            } else {
                commit('incrementItemQuantity', cartItem);
            }
            commit('products/decrementProductInentory', {id: product.id}, {root: true});
        }
        // console.log(product)
        // return state.items.map(({id, quantity}) => {
        //     const product = rootState.products.all.find(
        //         product => product.id === id
        //     )
        // })
    },
    checkout({commit}, products) {
        const savedCartItems = [...state.items];
        commit('setCheckoutStatus', null);
        commit('setCartItem', {items: []});
        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed');
                commit('setCartItem', {items: savedCartItems});
            }
        )
    }
}
const getters = {
    cartProducts (state, getters, rootState) {
        // 穿梭到 products state.all
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(
                product => product.id === id
            );
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalprice(state, getters) {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}