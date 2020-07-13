<template>
    <div>
        <CouresHeader/>
        <CourseContent style="border-top: 1px solid #f2f2f2;" v-if="CourseData.coverFileUrl"
                       :CourseData="CourseData" :comments="comments"/>
        <Footer />
    </div>
</template>

<script>
    import CouresHeader from "../views/Course/CouresHeader";
    import CourseContent from "../views/Course/CourseContent";
    import Footer from "./Footer";
    import {getComments, getCourseDetails} from "../api/classroom-api";

    export default {
        name: "Course",
        components:{
            CouresHeader,
            CourseContent,
            Footer
        },

        created() {
            // console.log(this.$route.params.courseId);
            getCourseDetails(this.$route.params.courseId).then(res=>{
                // console.log(res)
                this.CourseData=res.data
            })
            getComments(this.$route.params.courseId).then(res=>{
                this.comments = res.rows
            })
        },
        data(){
            return{
                CourseData:{},
                comments:[]

            }
        },
    }
</script>

<style scoped lang="less">

</style>