<template>
    <div class="MainBody">
        <div class="content">
            <div class="IndexLink">
                <router-link to="./index" tag="a">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    首页</router-link>
                <span class="string"> / </span>
                <a href="#">视频详情</a>
            </div>
            <CourseTitle :CourseData="CourseData"/>
            <CourseIntroduce :CourseData="CourseData" :comments="comments"/>
        </div>
    </div>
</template>

<script>
    import CourseIntroduce from "./CourseIntroduce";
    import CourseTitle from "./CourseTitle";

    export default {
        name: "CourseContent",
        components:{
            CourseIntroduce,
            CourseTitle
        },
        props:{
            CourseData:[Object],
            comments:[Array]
        },
        created() {
            // console.log(this.CourseData)
        }
    }
</script>

<style scoped lang="less">

    .MainBody {
        width: 100%;
        background-color: #f4f4f4;
        padding-bottom: 40px;
        .content {
            width: 1200px;
            margin: 0 auto;
            .IndexLink {
                font-size: 16px;
                padding: 10px 0 15px 5px;
                span{
                    font-size: 14px;

                    color: rgba(0,0,0,.45);
                }
                a {
                    font-size: 14px;
                    color: rgba(0,0,0,.45);
                }
            }
        }
    }
</style>