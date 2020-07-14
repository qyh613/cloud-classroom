<template>
    <div class="block">
        <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in bgc" :key="item.id" :style='{"background-image":"url("+item.imgUrlPc+")"}'>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {getSwiper} from "../../../api/classroom-api";

    export default {
        name: "Swiper",
        created() {
            getSwiper().then(res=>{
                // console.log(res.data);
                this.bgc = res.data
            })
        },
        data(){
            return{
                bgc:[]
            }
        }
    }
</script>

<style scoped lang="less">
    .el-carousel__item {
        background-repeat: no-repeat;
        background-position: 50%;
        width: 100%;
        height: 400px;
        background-size: cover;
        h3 {
            color: #475669;
            font-size: 14px;
            line-height: 150px;
            margin: 0;
        }

    }
    /*.block {*/
    /*    .el-carousel__button {*/
    /*        height: 30px;*/
    /*        border-radius: 50%;*/
    /*    }*/
    /*}*/



</style>