<template>
    <footer>
        <div class="content">
            <h3>友情链接：</h3>
            <div class="link">
                <a :href="item.dictValue" v-for="item in list" :key="item.dictCode">{{item.dictLabel}}</a>
            </div>
            <hr>
            <div class="copyright">Copyright © 2017-2025 石家庄天亮教育科技有限公司 备案号:冀ICP备17020003号</div>
        </div>
    </footer>
</template>

<script>
    import {
        getFooter
    } from "../../api/classroom-api";

    export default {
        name: "Footer",
        data() {
            return {
                list: []
            }
        },
        created() {
            getFooter('blogroll', 1, 10, 'dictSort', 'asc').then(res => {
                this.list = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    footer {
        width: 100%;
        height: 197px;
        background-color: #444546;
        color: #999;

        .content {
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            padding: 20px 0;
            h3 {
                font-size: 22px;
                margin: 16px 0;
            }
            .link {
                min-height: 40px;
                a {
                    margin-right: 30px;
                    color: #999;
                }
            }
            hr{
                width: 1000px;
                border: 1px solid rgb(84, 84, 84);
                margin: 24px auto 0;
            }
            .copyright{
                line-height: 30px;
                text-align: center
            }
        }
    }
</style>