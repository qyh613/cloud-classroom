<template>
    <header>
        <div class="header-top">
            <img src="../../../assets/images/tl-logo.png" class="logoImg" alt="">
            <div class="search">
                <input type="text" placeholder="请输入内容" v-model="input">
                <button icon="el-icon-search"><i class="el-icon-search"></i>搜索</button>
            </div>
            <div class="logIn">
                    <span class="shopping" @click="enterShoppingCart">
                          <svg class="icon shopping1" aria-hidden="true">
                            <use xlink:href="#icon-gouwuche"></use>
                            </svg>
                        <span v-if="isLogin" class="number">{{shoplength}}</span>
                    </span>
                <span class="loginbtn" v-if="!isLogin" @click="showLogInModel">登录/注册</span>
                <span class="loginbtn" v-if="isLogin" @click="exitLogin">{{userInfo.nickname}}</span>
                <span class="user" v-if="!isLogin">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yonghufangkeshu-copy"></use>
                    </svg>
                </span>
                <span class="user" v-if="isLogin">
                    <img :src="userInfo.avatarUrl" alt="">
                </span>
            </div>
        </div>
        <LogIn/>
    </header>
</template>

<script>
    // 头部
    import LogIn from "../../../layout/components/LogIn";
    import {mapGetters, mapState} from "vuex";
    import logIn from "../../../mixin/logIn";
    import {logout} from "../../../api/user-api";

    export default {
        name: "Header",
        components: {
            LogIn
        },
        computed: {
            ...mapState(["isLogin", "userInfo"]),
            ...mapGetters(["shoplength"])
        },
        data() {
            return {
                input: ''
            }
        },
        mixins: [logIn],
        methods: {
            showLogInModel() {
                this.$store.commit("changLoginModelVisible", {isShow: true})

            },
            exitLogin() {
                logout().then(res => {
                    if (res.code === 0) {
                        this.$message({
                            message: '退出登录成功',
                            type: 'success'
                        });
                        this.$store.dispatch("checkLoginStatus")
                    }
                })
            },
            enterShoppingCart() {
                if (this.loginClick()) {
                    this.$router.push("/other/shopping-cart")
                }
            }
        }
    }
</script>

<style scoped lang="less">
    header {
        min-width: 1200px;
        max-width: 1200px;
        height: 106px;
        margin: 0 auto;

        .header-top {
            width: 100%;
            height: 106px;
            overflow: hidden;

            .logoImg {
                height: 55px;
                margin: 22px 200px 0 0;
                float: left;
            }

            .search {
                height: 38px;
                width: 400px;
                margin-top: 30px;
                float: left;

                color: rgba(0, 0, 0, .65);

                input {
                    height: 100%;
                    width: 79%;
                    padding: 6px 11px;
                    border: 1px solid #d9d9d9;
                    outline: none;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;

                    &:hover {
                        border-color: #23db9b;
                        border-right-width: 1px !important;
                    }
                }

                button {
                    height: 100%;
                    background: rgb(0, 207, 140);
                    color: #fff;
                    width: 21%;
                    border: 0;
                    outline: none;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;

                    &:hover {
                        cursor: pointer;
                    }

                    i {
                        padding: 0 5px;
                    }
                }
            }

            .logIn {
                margin-top: 32px;
                text-align: center;
                float: right;
                margin-right: 100px;
                line-height: 32px;
                position: relative;

                &:hover {
                    cursor: pointer;
                }

                .shopping {
                    font-size: 16px;
                    vertical-align: middle;

                }

                .number {
                    font-size: 12px;
                    width: 15px;
                    height: 15px;
                    display: block;
                    position: absolute;
                    top: 0px;
                    left: 10px;
                    color: #fff;
                    background-color: #f00;
                    border-radius: 30px;
                    line-height: 15px;
                }

                .shopping::after {
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 15px;
                    background-color: #ccc;
                    margin: 0 10px -3px;
                }

                .loginbtn {
                    vertical-align: middle;
                    margin-right: 3px;
                }

                .user {
                    width: 32px;
                    height: 32px;
                    font-size: 30px;
                    vertical-align: middle;
                    margin-left: 5px;
                    display: block;
                    float: right;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
</style>