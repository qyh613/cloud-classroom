<template>
    <div class="play">
        <div class="mainBody">
            <div class="IndexLink">
                <router-link to="/index" tag="a">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    首页</router-link>
                <span class="string"> / </span>
                <a href="#">视频详情</a>
            </div>
            <div class="view-play-video-container">
                <!--播放-->
                <div class="playview">
                    <div class="view-play">
                        <video :src="file.fileUrl"
                               controls></video>
                    </div>
                    <div class="view-directory">
                        <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                            <h3>{{item.sectionName}}</h3>
                            <dt>
                                <dl class="dlBox" v-for="(item,index) in item.subSections" :key="index">
                                    <div class="pull-left leftBox">
                                        <div class="recorded clearfix">录播</div>
                                        <div class="pageword" @click="playView(item.sectionId)">{{i+1}}-{{index+1}}
                                            {{item.sectionName}}
                                        </div>
                                        <!--<div>32分钟</div>-->
                                    </div>
                                </dl>
                            </dt>
                        </div>
                    </div>
                </div>

            </div>
            <!--目录、课程描述、评论-->
            <CourseIntroduce/>
        </div>
    </div>
</template>

<script>


    import {getCourseDetails, switchChapters} from "../../api/classroom-api";
    import CourseIntroduce from "./components/CourseIntroduce";

    export default {
        name: "Play",
        data() {
            return {
                obj: {},
                sections: [],
                file: {},
            }
        },
        components: {

            CourseIntroduce
        },
        methods: {
            playView(sectionId) {
                switchChapters(sectionId).then(res => {
                    console.log(res);
                    this.file = res.section.file
                })
            }
        },
        created() {
            //缓冲页目录
            console.log(this.$route.params.courseId)
            getCourseDetails(this.$route.params.courseId).then(res => {
                // console.log(res.data)
                this.obj = res.data
                this.sections = res.data.sections
            })
        }
    }
</script>

<style scoped lang="less">

    .play {
        background-color: #f4f4f4;
        padding-bottom: 40px;
        .mainBody {
            width: 1200px;
            margin: 0 auto;
            .IndexLink {
                font-size: 16px;
                padding: 10px 0 15px 0;
                span{
                    font-size: 14px;

                    color: rgba(0,0,0,.45);
                }
                a {
                    font-size: 14px;
                    color: rgba(0,0,0,.45);
                }
            }
            .playview {
                overflow: hidden;

                .view-play {
                    float: left;

                    video {
                        width: 900px;
                        height: 450px;
                    }
                }
                .view-directory {
                    float: left;
                    width: 300px;
                    height: 450px;
                    overflow: scroll;
                    padding: 20px;
                    background-color: #131313;
                    color: #999;
                    .dlBox {
                        margin: 10px 0;
                        &:hover{
                            color: #00cf8c;
                        }
                        &:hover .recorded{
                            background-color: #00cf8c;
                        }
                    }

                    .recorded {
                        float: left;
                        display: inline-block;
                        font-size: 12px;
                        line-height: 16px;
                        padding: 1px 8px 2px 8px;
                        color: #fff;
                        background-color: #999;
                        border-radius: 2px;
                        margin-right: 5px;
                    }
                }
            }

        }
    }


</style>