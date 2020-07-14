import Vue from 'vue'
import Vuex from 'vuex'
import {userInformation} from "../api/user-api";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        userInfo: {},
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
    },
    modules: {}
})
