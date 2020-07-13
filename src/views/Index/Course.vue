<template>
    <div class="Course">
        <h3>{{title}}
            <span>更多
                <i class="el-icon-right"></i>
            </span>
        </h3>
        <ul>
            <router-link :to="'/course/'+item.courseId" tag="li" v-for="item in list" :key="item.courseId">
                <div class="ImgBox">
                    <img :src="item.coverFileUrl" alt="">
                </div>
                <p class="title">{{item.courseTitle}}</p>
                <p class="course">共{{item.subSectionNum}}节课 | {{item.participationsCount}}人报名</p>
                <p class="type" v-if="item.isFree == 1">免费</p>
                <p class="type" v-if="item.isFree == 0">收费</p>

            </router-link>
        </ul>
    </div>
</template>

<script>

// 课程分类
    import {
        getCourse
    } from "../../api/classroom-api";

    export default {
        name: "Course",
        props: {
            type: [String],
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
            // 课程分类
            getCourse(this.type, this.pageNum, this.pageSize).then(res => {
                this.list = res.rows
            });

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
                &:hover{
                    cursor: pointer;
                }
                .ImgBox {
                    width: 100%;
                    overflow: hidden;

                    img {
                        height: 135.75px;
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