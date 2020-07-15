import Vue from 'vue'
import Vuex from 'vuex'
import {userInformation} from "../api/user-api";
// import request from "../utils/http";
import {goodsList} from "../api/shoppingCart-api";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        shoppingCartQuantity: []
    },
    mutations: {
        changLoginModelVisible(state, {isShow}) {
            state.loginModelVisible = isShow
        },
        IsLogIn(state, {isLogin}) {
            state.isLogin = isLogin
        },
        userInfo(state, {userInfo}) {
            state.userInfo = userInfo
        },
        shoppingCartQuantity1(state, payload) {
            state.shoppingCartQuantity = payload.shoppingCartQuantity
        }
    },
    actions: {
        checkLoginStatus(context) {
            return userInformation().then(res => {
                if (res.code === 0) {
                    context.commit("IsLogIn", {isLogin: true});
                    context.commit("userInfo", {userInfo: res.userInfo});
                } else {
                    context.commit("IsLogIn", {isLogin: false});
                    context.commit("userInfo", {userInfo: {}});
                }

            })
        },
        goodsList(context) {
            return goodsList().then(res => {
                context.commit("shoppingCartQuantity1", {shoppingCartQuantity: res.shoppingCartList})
            })
        }
    },
    modules: {},
    getters: {
        shoplength: state => {
            return state.shoppingCartQuantity.length
        }
    }
})
