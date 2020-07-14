<template>
    <div>
        <CourseContent style="border-top: 1px solid #f2f2f2;" :CourseData="CourseData"/>
        <LogIn />
    </div>
</template>

<script>
    import CourseContent from "./components/CourseContent";
    import {getCourseDetails} from "../../api/classroom-api";
    import LogIn from "../../layout/components/LogIn";
    // import CourseTitle from "./components/CourseTitle";

    export default {
        name: "Course",
        components:{
            CourseContent,
            LogIn,
            // CourseTitle
        },

        created() {
            getCourseDetails(this.$route.params.courseId).then(res=>{
                this.CourseData=res.data
            })
            // getComments(this.$route.params.courseId).then(res=>{
            //     this.comments = res.rows
            // })
        },
        data(){
            return{
                CourseData:{},
                // comments:[]

            }
        },
    }
</script>

<style scoped lang="less">

</style>