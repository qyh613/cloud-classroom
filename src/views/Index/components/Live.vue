<template>

    <div>
        <h3>直播课程</h3>
        <el-tabs :tab-position="tabPosition" style="height: 350px;">
            <el-tab-pane label="研究生复试之高效准备简历的方法">
                <img src="../../../assets/images/直播1.png">
                <div class="shade">
                    <div class="bt">研究生复试之高效准备简历的方法</div>
                    <div class="state">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-duigou1"></use>
                            </svg>&nbsp;&nbsp;直播结束</span>
                    </div>
                    <button>直播结束</button>
                </div>
            </el-tab-pane>

            <el-tab-pane label="十大经典排序之Part-6-完结篇">

                <img src="../../../assets/images/直播2.jpg">
                <div class="shade">
                    <div class="bt">十大经典排序之Part-6-完结篇</div>
                    <div class="state">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-duigou1"></use>
                            </svg>&nbsp;&nbsp;直播结束</span>
                    </div>
                    <button>直播结束</button>
                </div>

            </el-tab-pane>

            <el-tab-pane label="jdk1.8-新特性之函数式接口与方法引用">
                <img src="../../../assets/images/直播3.png">
                <div class="shade">
                    <div class="bt">jdk1.8-新特性之函数式接口与方法引用</div>
                    <div class="state">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-duigou1"></use>
                            </svg>&nbsp;&nbsp;直播结束</span>
                    </div>
                    <button>直播结束</button>
                </div>
            </el-tab-pane>

            <el-tab-pane label="高考之殇与痛则思变">
                <img src="../../../assets/images/直播4.png">
                <div class="shade">
                    <div class="bt">高考之殇与痛则思变</div>
                    <div class="state">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-duigou1"></use>
                            </svg>&nbsp;&nbsp;尚未开播</span>
                    </div>
                    <button>尚未开播</button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
    export default {
        name: "Live",
        data() {
            return {
                tabPosition: 'right',
                qyh:'ceshi '
            }
        },
    }
</script>

<style scoped lang="less">
    h3 {
        margin: 50px 0 30px 0;
        text-align: center;
        font-size: 24px;
        color: #333;
    }

    .el-tabs {
        width: 1200px;
        height: 350px;
        margin: auto;

        /deep/ .el-tabs__content {
            box-sizing: border-box;
            height: 350px;
            width: 50%;

            .el-tab-pane {
                width: 100%;
                height: 100%;
            }

            img {
                width: 100%;
                height: 100%;
            }

            .shade {
                width: 100%;
                height: 100%;
                color: #fff;
                padding: 80px 50px;
                background-color: rgba(0, 0, 0, .6);
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;

                .bt {
                    font-size: 24px;
                }

                .state {
                    margin: 35px 0;
                }

                button {
                    width: 180px;
                    height: 50px;
                    font-size: 18px;
                    background-color: #00cf8c;
                    border: 0;
                    outline: none;

                    &:hover {
                        background-color: #23db9b;
                    }
                }
            }
        }

        /deep/ .el-tabs__header {
            box-sizing: border-box;
            height: 350px;
            width: 50%;
            margin-left: 0 !important;
            background-color: #f4f4f4;

            .el-tabs__item {
                background-color: #f4f4f4;
                height: 50px;
                line-height: 50px;
                padding-left: 30px;
                border-left: 5px solid transparent;

                &:hover {
                    background-color: #fff;
                    border-left: 5px solid #00cf8c;
                    color: #00cf8c;
                }

                /deep/ .is-active {
                    color: #00cf8c !important;
                }
            }
        }
    }


    /deep/ .el-tabs__active-bar {
        height: 0;
        background-color: #f4f4f4;
        z-index: 0;
    }

    /deep/ .el-tabs__item.is-active {
        background-color: #fff !important;
        border-left: 5px solid #00cf8c !important;
        color: #00cf8c;
    }
</style>