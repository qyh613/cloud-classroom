<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    import {userInformation} from "./api/user-api";

    export default {
        name: 'app',
        created() {
            userInformation().then(res => {
                // console.log(res.userInfo)
                if(res.code==0){
                    this.$store.commit("IsLogIn", {isLogin: true})
                    this.$store.commit("userInfo", {userInfo: res.userInfo})
                }
            })

            this.$store.dispatch("goodsList")
        }
    }
</script>


