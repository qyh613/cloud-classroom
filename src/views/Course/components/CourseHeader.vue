<template>
    <header>
        <div class="header-top">
            <img src="../../../assets/images/tl-logo.png" class="ImgLogo" alt="">
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <router-link tag="li" index="1" class="el-menu-item" to="/index">首页</router-link>
                    <el-submenu index="2">
                        <template slot="title" class="k1">课程分类</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">专属课程</el-menu-item>
                </el-menu>
            </div>
            <div class="search">
                <input type="text" placeholder="请输入内容" v-model="input">
                <button icon="el-icon-search"><i class="el-icon-search"></i>搜索</button>
            </div>
            <div class="logIn">
                <router-link to="/other/shopping-cart" tag="span" class="shopping">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gouwuche"></use>
                    </svg>
                    <span v-if="isLogin" class="number">{{shoplength}}</span>
                </router-link>
                <span class="loginbtn" v-if="!isLogin" @click="showLogInModel">登录/注册</span>
                <span class="loginbtn" v-if="isLogin">{{userInfo.nickname}}</span>
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

    export default {
        name: "Header",
        components: {
            LogIn
        },
        data() {
            return {
                input: '',
                activeIndex: '1',
                activeIndex2: '1',
            }
        },
        computed: {
            ...mapState(["isLogin", "userInfo"]),
            ...mapGetters(["shoplength"])
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            showLogInModel() {
                this.$store.commit("changLoginModelVisible", {isShow: true})
            }
        }

    }
</script>


<style scoped lang="less">
    header {
        border-bottom: 1px solid #f2f2f2;

        .header-top {
            margin: 0 auto;

            min-width: 1200px;
            max-width: 1200px;
            width: 100%;
            height: 80px;
            overflow: hidden;

            .ImgLogo {
                height: 55px;
                margin: 16px 0 0;
                float: left;
            }

            .nav {
                width: 262px;
                height: 30px;
                float: left;
                margin: 30px 30px 0 40px;

                .el-menu--horizontal > .el-menu-item.is-active {
                    border-bottom: 0;
                    color: #000;
                }

                .el-menu-item {
                    padding: 0 10px;
                    font-size: 16px;
                    color: #000;

                }

                /deep/ .el-submenu__title {
                    font-size: 16px;
                    padding: 0 10px;
                    color: #000;

                }

                .el-menu {
                    border-bottom: 0;

                    .el-menu-item {
                        transform: none;
                        border: 0;
                    }

                    li {
                        height: 30px;
                        line-height: 30px;

                        /deep/ .el-submenu__title {
                            height: 30px;
                            line-height: 30px;
                        }

                        /deep/ li:hover {
                            color: #1da57a !important;
                        }
                    }
                }

                /* .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
                    color: #1da57a !important;
                } */
                /* /deep/ .el-submenu:hover{
                    color: #1da57a !important;
                }
                /deep/ .el-menu--horizontal>.el-submenu:focus, .el-menu--horizontal>.el-submenu:hover{
                    color: #1da57a !important;
                } */
            }

            .search {
                height: 38px;
                width: 400px;
                margin-top: 24px;
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