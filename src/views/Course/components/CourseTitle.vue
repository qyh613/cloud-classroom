<template>
        <div class="midBox1">
            <div class="midimg">
                 <img :src="CourseData.coverFileUrl">
            </div>
            <div class="midText">
                <h3>{{CourseData.courseTitle}}</h3>
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
                <div v-if="CourseData.isFree==0">
                    <p class="thePrice">
                        ￥{{CourseData.payPrice}}
                        <del>￥{{CourseData.coursePrice}}</del>
                    </p>
                    <div class="preferential">
                        <el-tag type="warning">{{CourseData.discountDesc}}</el-tag>
                    </div>
                    <button class="buy">立即购买</button>
                    <button class="join" @click="join">加入购物车</button>
                </div>
                <button @click="link" v-if="CourseData.isFree==1">立即观看</button>
            </div>
            <!-- 收藏 -->
            <div class="collect" @click="collection">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                </svg>
                <span class="collectText">收藏</span>
            </div>
            <LogIn></LogIn>
        </div>
</template>

<script>
    // 课程标题
    import {joinGoods} from "../../../api/shoppingCart-api";
    import logIn from "../../../mixin/logIn";
    import LogIn from "../../../layout/components/LogIn";

    export default {
        name: "CourseTitle",
        components:{
            LogIn
        },
        props:{
            CourseData:{
                type:Object
            }
        },
        mixins:[logIn],
        data(){
          return{
              showClose: true,
          }
        },
        created() {
            // console.log(this.CourseData)
        },
        methods:{
            link(){
                console.log(1)
                this.$router.push("/course1/play/"+this.$route.params.courseId)
            },
            join(){
                // console.log(this.$route.params.courseId)
                this.$message({
                    showClose: true,
                    message: '加入购物车成功',
                    type: 'success'
                });
                joinGoods(this.$route.params.courseId).then(res=>{
                    console.log(res)
                    this.$store.dispatch("goodsList")
                })
            },
            collection(){
                if (this.loginClick()){
                    console.log('可以收藏')
                }
            }
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
            margin: 10px 0;
            font-size: 24px;
        }

        p {
            height: 70px;
            color: rgb(0, 207, 140);
            font-size: 24px;
        }
        .thePrice {
            font-size: 24px;
            color: #000;
            height: 50px;
            del{
                font-size: 14px;
                font-size: 14px;
                color: #bd2c00;
            }
        }
        .preferential {
            margin-bottom: 10px;
            .el-tag {
                color: #fa8c16;
                height: 20px;
                line-height: 18px;
                border-color: #ffd591;
                border-radius: 2px;
            }
        }
        .buy {
            background-color: rgb(255, 128, 0);
            margin-right: 10px;
        }
        button {
            width: 160px;
            height: 45px;
            font-size: 18px;
            color: #fff;
            background-color: #00cf8c;
            border: 0;
            outline: none;
            &:hover{
                cursor: pointer;
            }
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