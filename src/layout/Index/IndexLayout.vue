<template>
    <div>
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import Header from "../../views/Index/components/Header";

    import Footer from "../components/Footer";

    export default {
        name: "IndexLayout",
        components:{
            Header,
            Footer
        }
    }
</script>

<style scoped lang="less">

</style>