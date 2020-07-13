<template>
        <div class="midBox1">
            <div class="midimg">
                 <img :src="CourseData.coverFileUrl" alt="">
            </div>
            <div class="midText">
                <h3>{{CourseData.courseTitle}}</h3>
                <h3></h3>
                <ul class="grade">
                    <li>累计{{CourseData.participationsCount}}人学习</li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                </ul>
                <p v-if="CourseData.isFree==1">免费</p>
                <p v-if="CourseData.isFree==0">收费</p>
                <button>立即观看</button>
            </div>
            <!-- 收藏 -->
            <div class="collect">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                </svg>
                <span class="collectText">收藏</span>
            </div>
        </div>
</template>

<script>
    // 课程标题
    export default {
        name: "CourseTitle",
        props:{
            CourseData:{
                type:Object
            }
        },
        created() {
            // console.log(this.CourseData)
        }
    }
</script>

<style scoped lang="less">
    .midBox1 {
        width: 100%;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        overflow: hidden;
        .midimg {
            padding: 0;
            width: 33.33333333%;
            float: left;

            img {
                width: 330px;
                height: 220px;
            }
        }

        .midText {
            width: 50%;
            float: left;

        }

        h3 {
            font-weight: 400;
        }

        p {
            height: 70px;
            color: rgb(0, 207, 140);
            font-size: 24px;
        }

        button {
            width: 160px;
            height: 45px;
            font-size: 18px;
            color: #fff;
            background-color: #00cf8c;
            border: 0;
            outline: none;
        }

        .grade {
            line-height: 30px;
            margin: 10px 0;
            overflow: hidden;
            li {
                float: left;
                color: #999;
                margin-right: 8px;

            }

            .gradeli {
                font-size: 24px;
                color: gold;
            }
        }

        .collect {
            float: left;
            margin-left: 50px;
            padding: 0px;
            text-align: center;
            color: #999;
            width: 110px;
            height: 30px;
            font-size: 16px;
            border: 1px solid #999;
            line-height: 28px;
            &:hover{
                cursor: pointer;
            }
        }

        .collectColor {
            border-color: #ffb200;
            color: #ffb200;

            &:hover {
                cursor: pointer;
            }
        }
    }






</style>