<template>
    <div>
        <CourseHeader/>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import CourseHeader from "../../views/Course/components/CourseHeader";
    import Footer from "../components/Footer";

    export default {
        name: "OtherLayout",
        components:{
            CourseHeader,
            Footer
        },
    }
</script>

<style scoped lang="less">

</style>