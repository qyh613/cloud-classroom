




export default {
    computed:{
        isLogin1(){
            return this.$store.state.isLogin
        }
    },
    methods:{
        loginClick(){
            if (this.isLogin1){
                return true
            }else {
                this.$store.commit("changLoginModelVisible",{isShow:true})
                return false
            }
        }
    }
}