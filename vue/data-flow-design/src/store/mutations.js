// 围绕状态， 设计改变
// user   cartList  products
// login  false  true
import {
    RECORD_USERINFO,
    ADD_CART,
    EDIT_CART,
    INCREMENT_QUANTITY,
    CHECKOUT
} from './mutation-types'

export default {
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
    },
    // cartList
    [ADD_CART](state, {productId}) {

    },
    [EDIT_CART](state) {

    },
    [INCREMENT_QUANTITY](state) {

    },
    [CHECKOUT]() {

    }
}