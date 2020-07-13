<template>
    <div class="mainBody">
        <Header />
        <topNav />
        <Swiper />
        <Live />
        <Course type="free" :pageNum="1" :pageSize="10" title="免费课程"/>
        <Course type="boutique" :pageNum="1" :pageSize="5" title="精品课程"/>
        <Course type="discount" :pageNum="1" :pageSize="5" title="限时折扣课程"/>
        <Headlines :pageNum="1" :pageSize="5" title="头条精选"/>
        <Footer />
    </div>
</template>

<script>
    import Header from "../views/Index/Header";
    import Swiper from "../views/Index/Swiper";
    import topNav from "../components/topNav";
    import Live from "../views/Index/Live";
    import Course from "../views/Index/Course";
    import Headlines from "../views/Index/Headlines";
    import Footer from "./Footer";

    export default {
        name: "Index",
        components:{
            Header,
            Swiper,
            topNav,
            Live,
            Course,
            Headlines,
            Footer

        }
    }
</script>

<style scoped lang="less">

</style>