<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>

            <el-submenu index="2">
                <template slot="title" class="k1">课程分类</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>

            </el-submenu>
            <el-menu-item index="3">专属课程</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "topNav",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<style scoped lang="less">
    .nav {
        width: 1200px;
        height: 30px;
        margin: 0 auto;

        .el-menu {
            border-bottom: 0;

            li {
                height: 30px;
                line-height: 30px;

                /deep/ .el-submenu__title {
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }


</style>