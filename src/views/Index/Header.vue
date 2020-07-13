<template>
    <header>
        <div class="header-top">
            <img src="../../assets/images/tl-logo.png" alt="">
            <div class="search">
                <input type="text" placeholder="请输入内容" v-model="input">
                <button icon="el-icon-search"><i class="el-icon-search"></i>搜索</button>
            </div>
            <div class="logIn">
                <span class="shopping">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gouwuche"></use>
                    </svg>
                </span>
                <span class="loginbtn">登录/注册</span>
                <span class="user">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yonghufangkeshu-copy"></use>
                    </svg>
                </span>
            </div>
        </div>
    </header>
</template>

<script>
    // 头部
    export default {
        name: "Header",
        data() {
            return {
                input: ''
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

            img {
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
                margin-top: 26px;
                text-align: center;

                &:hover {
                    cursor: pointer;
                }

                .shopping {
                    font-size: 16px;
                    vertical-align: middle;

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
                    font-size: 30px;
                    vertical-align: middle;
                    margin-left: 5px;
                }
            }
        }
    }
</style>