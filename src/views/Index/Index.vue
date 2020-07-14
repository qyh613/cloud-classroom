<template>
    <div class="mainBody">
        <TopNav/>
        <Swiper/>
        <Live/>
        <Course type="free" :pageNum="1" :pageSize="10" title="免费课程"/>
        <Course type="boutique" :pageNum="1" :pageSize="5" title="精品课程"/>
        <Course type="discount" :pageNum="1" :pageSize="5" title="限时折扣课程"/>
        <Headlines :pageNum="1" :pageSize="5" title="头条精选"/>
        <div class="qq text-center">
            <ul>
                <li><a href="#" class="a1">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-QQ"></use>
                    </svg>
                    <p>客服1</p>
                </a></li>
                <li><a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-QQ"></use>
                    </svg>
                    <p>客服2</p>
                </a></li>
                <li><a href="#" class="a3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-QQ"></use>
                    </svg>
                    <p>技术支持</p>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Swiper from "./components/Swiper";
    import Live from "./components/Live";
    import Course from "./components/Course";
    import Headlines from "./components/Headlines";
    import TopNav from "./components/TopNav";

    export default {
        name: "Index",
        components: {
            Swiper,
            TopNav,
            Live,
            Course,
            Headlines,

        }
    }
</script>

<style scoped lang="less">
    .qq {
        position: fixed;
        right: 10px;
        bottom: 200px;
        z-index: 200;
        text-align: center;
        .a1 {
            border-radius: 5px 5px 0 0;
        }
        .a3 {
            border-radius: 0px 0px 5px 5px;

        }
        a {
            font-size: 40px;
            display: block;
            width: 70px;
            color: #009688;
            background-color: #e6f7ff;
            border-top: 1px solid #e8e8e8;
            &:hover {
                color: #fff;
                background-color: #009688;
            }
        }
        p {
            margin-bottom: 0;
            font-size: 14px;
        }
    }


</style>