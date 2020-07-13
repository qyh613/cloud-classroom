<template>
    <div class="Course">
        <h3>{{title}}
            <span>更多
                <i class="el-icon-right"></i>
            </span>
        </h3>
        <ul>
            <li v-for="item in list" :key="item.courseId">
                <div class="ImgBox">
                    <img :src="item.bannerImgUrl" alt="">
                </div>
                <p class="title">{{item.title}}</p>
                
            </li>
        </ul>
    </div>
</template>

<script>
    // 头条精选

    import {getHeadlines} from "../../api/classroom-api";

    export default {
        name: "Course",
        props: {
            pageNum: [Number],
            pageSize: [Number],
            title: [String]
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            // 头条
            getHeadlines(this.pageNum, this.pageSize).then(res=>{
                this.list=res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    .Course {
        width: 1200px;
        margin: 40px auto 0;

        h3 {
            font-size: 24px;
            padding: 0 12px 10px 62px;
            border-bottom: 2px solid #e8e8e8;
            text-align: center;

            span {
                color: #999;
                font-size: 14px;
                float: right;
                margin-top: 10px;
            }
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            li {
                width: 20%;
                margin-top: 14px;
                padding: 0 8px;
                margin-bottom: 10px;
                .ImgBox {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                .title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .course {
                    color: #888;
                }
                .type {
                    color: #00cf8c;
                    font-size: 16px;
                }

            }
        }
    }
</style>