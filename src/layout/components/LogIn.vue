<template>
    <div>

        <el-dialog title="提示" :visible.sync="loginModelVisible" width="30%" @close="cancel">
            <div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="用户名" prop="userName">
                        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>


                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    import {logIn} from "../../api/user-api";

    export default {
        name: "LogIn",

        data() {
            var userName = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('用户名不能为空'));
                } else {
                    callback();
                }
            };
            var pass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();

                }
            };

            return {
                ruleForm: {
                    pass: '',
                    userName: '',
                },
                rules: {
                    pass: [{
                        validator: pass,
                        trigger: 'blur'
                    }],
                    userName: [{
                        validator: userName,
                        trigger: 'blur'
                    }],

                }
            }
        },

        computed: {
            ...mapState(["loginModelVisible","isLogin"])
        },

        methods: {
            cancel() {
                this.$store.commit("changLoginModelVisible", {
                    isShow: false
                })
            },
            submit() {
                this.$refs["ruleForm"].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm)
                        logIn(this.ruleForm.userName, this.ruleForm.pass).then(res => {
                            if(res.code==0){
                                // // eslint-disable-next-line
                                // debugger
                                this.$store.commit("changLoginModelVisible", {isShow: false})
                                this.$store.commit("IsLogIn", {isLogin: true})
                                this.$store.commit("userInfo", {userInfo: res.userInfo})
                                alert('登录成功!');
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            }
        }
    }

</script>

<style scoped lang="less">

</style>