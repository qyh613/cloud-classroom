<template>
    <div class="Introduce">
        <el-tabs v-model="activeName">
            <el-tab-pane label="课程描述" name="first" v-html="CourseData.courseDetail"></el-tab-pane>
            <el-tab-pane label="目录" name="second">
                <div v-for="(item,fatherIndex) in CourseData.sections" :key="fatherIndex">
                    <h3 class="title">{{(fatherIndex+1)+'. &nbsp;'+item.sectionName}}</h3>
                    <ul v-for="(item,index) in item.subSections" :key="index">
                        <li class="chapter" @mouseover="show(index)" @mouseout="blank()">
                            {{fatherIndex+1}}-{{(index+1)+'&nbsp;'+ item.sectionName}}
                            <i class="el-icon-video-play" v-if="reveal != index"></i>
                            <span v-if="reveal == index">观看</span>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="评论" name="third" class="comments">

                <div class="pl">
                    <p>评论</p>
                    <ul class="clearfix">
                        <li><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing2"></use>
                            </svg></li>
                        <li><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing2"></use>
                            </svg></li>
                        <li><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing2"></use>
                            </svg></li>
                        <li><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing2"></use>
                            </svg></li>
                        <li><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing2"></use>
                            </svg></li>
                        <li><span>非常好</span></li>
                    </ul>
                </div>
                <div class="textk clearfix"><textarea placeholder="请发表您对课程的评价"></textarea><button
                        class="btn1">发布评论</button></div>
                <hr>
                <div v-for="(item,index) in comments" :key="index">
                    <div class="name">{{item.user.nickname}}</div>
                    <p class="CommentsContent">{{item.commentContent}}</p>
                    <p class="CommentsTime">{{item.createdTime}}</p>
                    <hr>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    // 课程介绍
    export default {
        name: "CourseIntroduce",
        data() {
            return {
                activeName: 'first',
                reveal: -1
            };
        },
        props: {
            CourseData: [Object],
            comments: [Array]

        },
        methods: {
            show(index) {
                this.reveal = index
            },
            blank() {
                this.reveal = -1
            }
        },
        created() {
            console.log(this.CourseData)
        },
    }
</script>

<style scoped lang="less">
    .Introduce {
        background-color: #fff;
        margin-top: 20px;
        padding: 0 10px;

        .title {
            font-size: 22px;
            font-weight: 400;
            height: 40px;
            line-height: 40px;
        }

        .el-tab-pane {
            color: rgba(0, 0, 0, .65);
        }

        .chapter {
            height: 50px;
            line-height: 30px;
            padding: 10px 20px;
            background: #f2f2f2;
            margin: 10px 0;
            color: rgba(0, 0, 0, .65);
            font-weight: 500;

            i {
                float: right;
                line-height: 30px;
            }

            span {
                float: right;
            }

            &:hover {
                color: #00cf8c;
                cursor: pointer;
            }
        }
    }

    /deep/.el-tabs__content {
        padding: 0 30px 30px;
    }


    /* 评论 */

    .comments {
        .pl {
            ul {
                margin: 20px 0 10px;

                li {
                    float: left;
                    margin-right: 8px;
                    font-size: 22px;
                    color: gold;
                    line-height: 17px;

                    span {
                        margin-left: 10px;
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.65);
                        ;
                    }
                }
            }
        }

        .textk {
            textarea {
                height: 136px;
                width: 100%;
                font-variant: tabular-nums;
                padding: 4px 11px;
                font-size: 14px;
                border: 1px solid #d9d9d9;
                border-radius: 2px;
                resize: none;
            }

            .btn1 {
                width: 88px;
                height: 32px;
                margin: 20px 0px 0px;
                color: #fff;
                background-color: #00cf8c;
                border: 0;
                outline: none;
                padding: 0 15px;
                float: right;
                font-size: 14px;
                border-radius: 2px;
            }
        }

        hr {
            margin: 20px 0px;
            background-color: rgb(232, 232, 232);
            color: rgb(232, 232, 232);
        }

        .name {
            height: 32px;
        }
        .CommentsContent {
            padding: 10px 0px 10px 40px;

        }

        .CommentsTime {
            padding: 0 10px 0 0;
            color: #999;
            text-align: right;
        }
    }
</style>